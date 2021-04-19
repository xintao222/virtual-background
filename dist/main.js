// CONCATENATED MODULE: ./src/core/helpers/segmentationHelper.ts
const inputResolutions = {
	'360p': [640, 360],
	'144p': [256, 144],
	'96p': [160, 96]
};

// CONCATENATED MODULE: ./src/pipelines/canvas2d/canvas2dPipeline.ts
function buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvas, bodyPix, tflite, addFrameEvent) {
	const ctx = canvas.getContext('2d');
	const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
	const segmentationPixelCount = segmentationWidth * segmentationHeight;
	const segmentationMask = new ImageData(segmentationWidth, segmentationHeight);
	const segmentationMaskCanvas = document.createElement('canvas');
	segmentationMaskCanvas.width = segmentationWidth;
	segmentationMaskCanvas.height = segmentationHeight;
	const segmentationMaskCtx = segmentationMaskCanvas.getContext('2d');
	const inputMemoryOffset = tflite._getInputMemoryOffset() / 4;
	const outputMemoryOffset = tflite._getOutputMemoryOffset() / 4;
	console.warn("inputMemoryOffset: ", inputMemoryOffset)
	console.warn("outputMemoryOffset: ", outputMemoryOffset)
	let postProcessingConfig;

	async function render() {
		if (backgroundConfig.type !== 'none') {
			resizeSource();
		}

		addFrameEvent();

		if (backgroundConfig.type !== 'none') {
			if (segmentationConfig.model === 'bodyPix') {
				await runBodyPixInference();
			} else {
				runTFLiteInference();
			}
		}

		addFrameEvent();
		runPostProcessing();
	}

	function updatePostProcessingConfig(newPostProcessingConfig) {
		postProcessingConfig = newPostProcessingConfig;
	}

	function cleanUp() {// Nothing to clean up in this rendering pipeline
	}

	function resizeSource() {
		segmentationMaskCtx.drawImage(sourcePlayback.htmlElement, 0, 0, sourcePlayback.width, sourcePlayback.height, 0, 0, segmentationWidth, segmentationHeight);

		if (segmentationConfig.model === 'meet') {
			const imageData = segmentationMaskCtx.getImageData(0, 0, segmentationWidth, segmentationHeight);

			for (let i = 0; i < segmentationPixelCount; i++) {
				tflite.HEAPF32[inputMemoryOffset + i * 3] = imageData.data[i * 4] / 255;
				tflite.HEAPF32[inputMemoryOffset + i * 3 + 1] = imageData.data[i * 4 + 1] / 255;
				tflite.HEAPF32[inputMemoryOffset + i * 3 + 2] = imageData.data[i * 4 + 2] / 255;
			}
		}
	}

	async function runBodyPixInference() {
		const segmentation = await bodyPix.segmentPerson(segmentationMaskCanvas);

		for (let i = 0; i < segmentationPixelCount; i++) {
			// Sets only the alpha component of each pixel
			segmentationMask.data[i * 4 + 3] = segmentation.data[i] ? 255 : 0;
		}

		segmentationMaskCtx.putImageData(segmentationMask, 0, 0);
	}

	function runTFLiteInference() {
		tflite._runInference();

		for (let i = 0; i < segmentationPixelCount; i++) {
			const background = tflite.HEAPF32[outputMemoryOffset + i * 2];
			const person = tflite.HEAPF32[outputMemoryOffset + i * 2 + 1];
			const shift = Math.max(background, person);
			const backgroundExp = Math.exp(background - shift);
			const personExp = Math.exp(person - shift); // Sets only the alpha component of each pixel

			segmentationMask.data[i * 4 + 3] = 255 * personExp / (backgroundExp + personExp); // softmax
		}

		segmentationMaskCtx.putImageData(segmentationMask, 0, 0);
	}

	function runPostProcessing() {
		var _postProcessingConfig;

		ctx.globalCompositeOperation = 'copy';
		ctx.filter = 'none';

		if ((_postProcessingConfig = postProcessingConfig) === null || _postProcessingConfig === void 0 ? void 0 : _postProcessingConfig.smoothSegmentationMask) {
			if (backgroundConfig.type === 'blur') {
				ctx.filter = 'blur(8px)'; // FIXME Does not work on Safari
			} else if (backgroundConfig.type === 'image') {
				ctx.filter = 'blur(4px)'; // FIXME Does not work on Safari
			}
		}

		if (backgroundConfig.type !== 'none') {
			drawSegmentationMask();
			ctx.globalCompositeOperation = 'source-in';
			ctx.filter = 'none';
		}

		ctx.drawImage(sourcePlayback.htmlElement, 0, 0);

		if (backgroundConfig.type === 'blur') {
			blurBackground();
		}
	}

	function drawSegmentationMask() {
		ctx.drawImage(segmentationMaskCanvas, 0, 0, segmentationWidth, segmentationHeight, 0, 0, sourcePlayback.width, sourcePlayback.height);
	}

	function blurBackground() {
		ctx.globalCompositeOperation = 'destination-over';
		ctx.filter = 'blur(8px)'; // FIXME Does not work on Safari

		ctx.drawImage(sourcePlayback.htmlElement, 0, 0);
	}

	return {
		render,
		updatePostProcessingConfig,
		cleanUp
	};
}


// CONCATENATED MODULE: ./src/pipelines/helpers/webglHelper.ts
/**
 * Use it along with boyswan.glsl-literal VSCode extension
 * to get GLSL syntax highlighting.
 * https://marketplace.visualstudio.com/items?itemName=boyswan.glsl-literal
 *
 * On VSCode OSS, boyswan.glsl-literal requires slevesque.shader extension
 * to be installed as well.
 * https://marketplace.visualstudio.com/items?itemName=slevesque.shader
 */
const glsl = String.raw;

function createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer) {
	const program = createProgram(gl, vertexShader, fragmentShader);
	const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
	gl.enableVertexAttribArray(positionAttributeLocation);
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
	const texCoordAttributeLocation = gl.getAttribLocation(program, 'a_texCoord');
	gl.enableVertexAttribArray(texCoordAttributeLocation);
	gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
	gl.vertexAttribPointer(texCoordAttributeLocation, 2, gl.FLOAT, false, 0, 0);
	return program;
}

function createProgram(gl, vertexShader, fragmentShader) {
	const program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error(`Could not link WebGL program: ${gl.getProgramInfoLog(program)}`);
	}

	return program;
}

function compileShader(gl, shaderType, shaderSource) {
	const shader = gl.createShader(shaderType);
	gl.shaderSource(shader, shaderSource);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw new Error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
	}

	return shader;
}

function createTexture(gl, internalformat, width, height, minFilter = gl.NEAREST, magFilter = gl.NEAREST) {
	const texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
	gl.texStorage2D(gl.TEXTURE_2D, 1, internalformat, width, height);
	return texture;
}

async function readPixelsAsync(gl, x, y, width, height, format, type, dest) {
	const buf = gl.createBuffer();
	gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
	gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
	gl.readPixels(x, y, width, height, format, type, 0);
	gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
	await getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);
	gl.deleteBuffer(buf);
	return dest;
}

async function getBufferSubDataAsync(gl, target, buffer, srcByteOffset, dstBuffer, dstOffset, length) {
	const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
	gl.flush();
	const res = await clientWaitAsync(gl, sync);
	gl.deleteSync(sync);

	if (res !== gl.WAIT_FAILED) {
		gl.bindBuffer(target, buffer);
		gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
		gl.bindBuffer(target, null);
	}
}

function clientWaitAsync(gl, sync) {
	return new Promise(resolve => {
		function test() {
			const res = gl.clientWaitSync(sync, 0, 0);

			if (res === gl.WAIT_FAILED) {
				resolve(res);
				return;
			}

			if (res === gl.TIMEOUT_EXPIRED) {
				requestAnimationFrame(test);
				return;
			}

			resolve(res);
		}

		requestAnimationFrame(test);
	});
}


// CONCATENATED MODULE: ./src/pipelines/webgl2/backgroundBlurStage.ts
function buildBackgroundBlurStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) {
	createSignatureFunctionForTransform();

	var _s = createSignatureFunctionForTransform();

	const vertexShaderSource = glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    uniform float u_flipY;

    out vec2 v_texCoord;

    void main() {
      // Flipping Y is required for the last pass when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, u_flipY), 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `;
	const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform vec2 u_texelSize;

    in vec2 v_texCoord;

    out vec4 outColor;

    const float offset[5] = float[](0.0, 1.0, 2.0, 3.0, 4.0);
    const float weight[5] = float[](0.2270270270, 0.1945945946, 0.1216216216,
      0.0540540541, 0.0162162162);

    void main() {
      vec4 centerColor = texture(u_inputFrame, v_texCoord);
      float personMask = texture(u_personMask, v_texCoord).a;

      vec4 frameColor = centerColor * weight[0] * (1.0 - personMask);

      for (int i = 1; i < 5; i++) {
        vec2 offset = vec2(offset[i]) * u_texelSize;

        vec2 texCoord = v_texCoord + offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);

        texCoord = v_texCoord - offset;
        frameColor += texture(u_inputFrame, texCoord) * weight[i] *
          (1.0 - texture(u_personMask, texCoord).a);
      }
      outColor = vec4(frameColor.rgb + (1.0 - frameColor.a) * centerColor.rgb, 1.0);
    }
  `;
	const {
		width: outputWidth,
		height: outputHeight
	} = canvas;
	const texelWidth = 1 / outputWidth;
	const texelHeight = 1 / outputHeight;
	const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
	const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
	const flipYLocation = gl.getUniformLocation(program, 'u_flipY');
	const texture1 = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
	const texture2 = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
	const frameBuffer1 = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture1, 0);
	const frameBuffer2 = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer2);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture2, 0);
	gl.useProgram(program);
	gl.uniform1i(inputFrameLocation, 0);
	gl.uniform1i(personMaskLocation, 1);

	function render() {
		_s();

		gl.useProgram(program);
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, personMaskTexture);
		gl.uniform1f(flipYLocation, 1.0);
		gl.activeTexture(gl.TEXTURE0);
		gl.uniform2f(texelSizeLocation, 0, texelHeight);
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
		gl.viewport(0, 0, outputWidth, outputHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

		for (let i = 0; i < 9; i++) {
			gl.bindTexture(gl.TEXTURE_2D, texture1);
			gl.uniform2f(texelSizeLocation, texelWidth, 0);
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer2);
			gl.viewport(0, 0, outputWidth, outputHeight);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			gl.bindTexture(gl.TEXTURE_2D, texture2);
			gl.uniform2f(texelSizeLocation, 0, texelHeight);
			gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer1);
			gl.viewport(0, 0, outputWidth, outputHeight);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		}

		gl.bindTexture(gl.TEXTURE_2D, texture1);
		gl.uniform2f(texelSizeLocation, texelWidth, 0);
		gl.uniform1f(flipYLocation, -1.0);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.viewport(0, 0, outputWidth, outputHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	_s(render, "ZdQBZ3rq7bWAAMQq6hlVCmYF0jM=", false, function () {
		return [gl.useProgram];
	});

	function cleanUp() {
		gl.deleteFramebuffer(frameBuffer2);
		gl.deleteFramebuffer(frameBuffer1);
		gl.deleteTexture(texture2);
		gl.deleteTexture(texture1);
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
		gl.deleteShader(vertexShader);
	}

	return {
		render,
		cleanUp
	};
}


// CONCATENATED MODULE: ./src/pipelines/webgl2/backgroundImageStage.ts
function buildBackgroundImageStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas) {
	const vertexShaderSource = glsl`#version 300 es

    uniform vec2 u_backgroundScale;
    uniform vec2 u_backgroundOffset;

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;
    out vec2 v_backgroundCoord;

    void main() {
      // Flipping Y is required when rendering to canvas
      gl_Position = vec4(a_position * vec2(1.0, -1.0), 0.0, 1.0);
      v_texCoord = a_texCoord;
      v_backgroundCoord = a_texCoord * u_backgroundScale + u_backgroundOffset;
    }
  `;
	const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_personMask;
    uniform sampler2D u_background;
    uniform vec2 u_coverage;
    uniform float u_lightWrapping;
    uniform float u_blendMode;

    in vec2 v_texCoord;
    in vec2 v_backgroundCoord;

    out vec4 outColor;

    vec3 screen(vec3 a, vec3 b) {
      return 1.0 - (1.0 - a) * (1.0 - b);
    }

    vec3 linearDodge(vec3 a, vec3 b) {
      return a + b;
    }

    void main() {
      vec3 frameColor = texture(u_inputFrame, v_texCoord).rgb;
      vec3 backgroundColor = texture(u_background, v_backgroundCoord).rgb;
      float personMask = texture(u_personMask, v_texCoord).a;
      float lightWrapMask = 1.0 - max(0.0, personMask - u_coverage.y) / (1.0 - u_coverage.y);
      vec3 lightWrap = u_lightWrapping * lightWrapMask * backgroundColor;
      frameColor = u_blendMode * linearDodge(frameColor, lightWrap) +
        (1.0 - u_blendMode) * screen(frameColor, lightWrap);
      personMask = smoothstep(u_coverage.x, u_coverage.y, personMask);
      outColor = vec4(frameColor * personMask + backgroundColor * (1.0 - personMask), 1.0);
    }
  `;
	const {
		width: outputWidth,
		height: outputHeight
	} = canvas;
	const outputRatio = outputWidth / outputHeight;
	const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const backgroundScaleLocation = gl.getUniformLocation(program, 'u_backgroundScale');
	const backgroundOffsetLocation = gl.getUniformLocation(program, 'u_backgroundOffset');
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
	const backgroundLocation = gl.getUniformLocation(program, 'u_background');
	const coverageLocation = gl.getUniformLocation(program, 'u_coverage');
	const lightWrappingLocation = gl.getUniformLocation(program, 'u_lightWrapping');
	const blendModeLocation = gl.getUniformLocation(program, 'u_blendMode');
	gl.useProgram(program);
	gl.uniform2f(backgroundScaleLocation, 1, 1);
	gl.uniform2f(backgroundOffsetLocation, 0, 0);
	gl.uniform1i(inputFrameLocation, 0);
	gl.uniform1i(personMaskLocation, 1);
	gl.uniform2f(coverageLocation, 0, 1);
	gl.uniform1f(lightWrappingLocation, 0);
	gl.uniform1f(blendModeLocation, 0);
	let backgroundTexture = null; // TODO Find a better to handle background being loaded

	if (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.complete) {
		updateBackgroundImage(backgroundImage);
	} else if (backgroundImage) {
		backgroundImage.onload = () => {
			updateBackgroundImage(backgroundImage);
		};
	}

	function render() {
		gl.useProgram(program);
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, personMaskTexture);

		if (backgroundTexture !== null) {
			gl.activeTexture(gl.TEXTURE2);
			gl.bindTexture(gl.TEXTURE_2D, backgroundTexture); // TODO Handle correctly the background not loaded yet

			gl.uniform1i(backgroundLocation, 2);
		}

		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.viewport(0, 0, outputWidth, outputHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	function updateBackgroundImage(backgroundImage) {
		backgroundTexture = createTexture(gl, gl.RGBA8, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.LINEAR, gl.LINEAR);
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.RGBA, gl.UNSIGNED_BYTE, backgroundImage);
		let xOffset = 0;
		let yOffset = 0;
		let backgroundWidth = backgroundImage.naturalWidth;
		let backgroundHeight = backgroundImage.naturalHeight;
		const backgroundRatio = backgroundWidth / backgroundHeight;

		if (backgroundRatio < outputRatio) {
			backgroundHeight = backgroundWidth / outputRatio;
			yOffset = (backgroundImage.naturalHeight - backgroundHeight) / 2;
		} else {
			backgroundWidth = backgroundHeight * outputRatio;
			xOffset = (backgroundImage.naturalWidth - backgroundWidth) / 2;
		}

		const xScale = backgroundWidth / backgroundImage.naturalWidth;
		const yScale = backgroundHeight / backgroundImage.naturalHeight;
		xOffset /= backgroundImage.naturalWidth;
		yOffset /= backgroundImage.naturalHeight;
		gl.uniform2f(backgroundScaleLocation, xScale, yScale);
		gl.uniform2f(backgroundOffsetLocation, xOffset, yOffset);
	}

	function updateCoverage(coverage) {
		gl.useProgram(program);
		gl.uniform2f(coverageLocation, coverage[0], coverage[1]);
	}

	function updateLightWrapping(lightWrapping) {
		gl.useProgram(program);
		gl.uniform1f(lightWrappingLocation, lightWrapping);
	}


	function updateBlendMode(blendMode) {
		gl.useProgram(program);
		gl.uniform1f(blendModeLocation, blendMode === 'screen' ? 0 : 1);
	}

	function cleanUp() {
		gl.deleteTexture(backgroundTexture);
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
		gl.deleteShader(vertexShader);
	}

	return {
		render,
		updateCoverage,
		updateLightWrapping,
		updateBlendMode,
		cleanUp
	};
}

// CONCATENATED MODULE: ./src/pipelines/webgl2/jointBilateralFilterStage.ts
function buildJointBilateralFilterStage(gl, vertexShader, positionBuffer, texCoordBuffer, inputTexture, segmentationConfig, outputTexture, canvas) {
	const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;
    uniform sampler2D u_segmentationMask;
    uniform vec2 u_texelSize;
    uniform float u_step;
    uniform float u_radius;
    uniform float u_offset;
    uniform float u_sigmaTexel;
    uniform float u_sigmaColor;

    in vec2 v_texCoord;

    out vec4 outColor;

    float gaussian(float x, float sigma) {
      float coeff = -0.5 / (sigma * sigma * 4.0 + 1.0e-6);
      return exp((x * x) * coeff);
    }

    void main() {
      vec2 centerCoord = v_texCoord;
      vec3 centerColor = texture(u_inputFrame, centerCoord).rgb;
      float newVal = 0.0;

      float spaceWeight = 0.0;
      float colorWeight = 0.0;
      float totalWeight = 0.0;

      // Subsample kernel space.
      for (float i = -u_radius + u_offset; i <= u_radius; i += u_step) {
        for (float j = -u_radius + u_offset; j <= u_radius; j += u_step) {
          vec2 shift = vec2(j, i) * u_texelSize;
          vec2 coord = vec2(centerCoord + shift);
          vec3 frameColor = texture(u_inputFrame, coord).rgb;
          float outVal = texture(u_segmentationMask, coord).a;

          spaceWeight = gaussian(distance(centerCoord, coord), u_sigmaTexel);
          colorWeight = gaussian(distance(centerColor, frameColor), u_sigmaColor);
          totalWeight += spaceWeight * colorWeight;

          newVal += spaceWeight * colorWeight * outVal;
        }
      }
      newVal /= totalWeight;

      outColor = vec4(vec3(0.0), newVal);
    }
  `;
	const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
	const {
		width: outputWidth,
		height: outputHeight
	} = canvas;
	const texelWidth = 1 / outputWidth;
	const texelHeight = 1 / outputHeight;
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const segmentationMaskLocation = gl.getUniformLocation(program, 'u_segmentationMask');
	const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
	const stepLocation = gl.getUniformLocation(program, 'u_step');
	const radiusLocation = gl.getUniformLocation(program, 'u_radius');
	const offsetLocation = gl.getUniformLocation(program, 'u_offset');
	const sigmaTexelLocation = gl.getUniformLocation(program, 'u_sigmaTexel');
	const sigmaColorLocation = gl.getUniformLocation(program, 'u_sigmaColor');
	const frameBuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
	gl.useProgram(program);
	gl.uniform1i(inputFrameLocation, 0);
	gl.uniform1i(segmentationMaskLocation, 1);
	gl.uniform2f(texelSizeLocation, texelWidth, texelHeight); // Ensures default values are configured to prevent infinite
	// loop in fragment shader

	updateSigmaSpace(0);
	updateSigmaColor(0);

	function render() {
		gl.useProgram(program);
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, inputTexture);
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
		gl.viewport(0, 0, outputWidth, outputHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	function updateSigmaSpace(sigmaSpace) {
		_s2();

		sigmaSpace *= Math.max(outputWidth / segmentationWidth, outputHeight / segmentationHeight);
		const kSparsityFactor = 0.66; // Higher is more sparse.

		const sparsity = Math.max(1, Math.sqrt(sigmaSpace) * kSparsityFactor);
		const step = sparsity;
		const radius = sigmaSpace;
		const offset = step > 1 ? step * 0.5 : 0;
		const sigmaTexel = Math.max(texelWidth, texelHeight) * sigmaSpace;
		gl.useProgram(program);
		gl.uniform1f(stepLocation, step);
		gl.uniform1f(radiusLocation, radius);
		gl.uniform1f(offsetLocation, offset);
		gl.uniform1f(sigmaTexelLocation, sigmaTexel);
	}

	function updateSigmaColor(sigmaColor) {
		gl.useProgram(program);
		gl.uniform1f(sigmaColorLocation, sigmaColor);
	}

	function cleanUp() {
		gl.deleteFramebuffer(frameBuffer);
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
	}

	return {
		render,
		updateSigmaSpace,
		updateSigmaColor,
		cleanUp
	};
}


// CONCATENATED MODULE: ./src/pipelines/webgl2/resizingStage.ts
function buildResizingStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite) {
	const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      outColor = texture(u_inputFrame, v_texCoord);
    }
  `; // TFLite memory will be accessed as float32

	const tfliteInputMemoryOffset = tflite._getInputMemoryOffset() / 4;
	const [outputWidth, outputHeight] = inputResolutions[segmentationConfig.inputResolution];
	const outputPixelCount = outputWidth * outputHeight;
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const outputTexture = createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
	const frameBuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
	const outputPixels = new Uint8Array(outputPixelCount * 4);
	gl.useProgram(program);
	gl.uniform1i(inputFrameLocation, 0);

	function render() {
		gl.useProgram(program);
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
		gl.viewport(0, 0, outputWidth, outputHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Downloads pixels asynchronously from GPU while rendering the current frame

		readPixelsAsync(gl, 0, 0, outputWidth, outputHeight, gl.RGBA, gl.UNSIGNED_BYTE, outputPixels);

		for (let i = 0; i < outputPixelCount; i++) {
			const tfliteIndex = tfliteInputMemoryOffset + i * 3;
			const outputIndex = i * 4;
			tflite.HEAPF32[tfliteIndex] = outputPixels[outputIndex] / 255;
			tflite.HEAPF32[tfliteIndex + 1] = outputPixels[outputIndex + 1] / 255;
			tflite.HEAPF32[tfliteIndex + 2] = outputPixels[outputIndex + 2] / 255;
		}
	}

	function cleanUp() {
		gl.deleteFramebuffer(frameBuffer);
		gl.deleteTexture(outputTexture);
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
	}

	return {
		render,
		cleanUp
	};
}


// CONCATENATED MODULE: ./src/pipelines/webgl2/softmaxStage.ts
function buildSoftmaxStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, outputTexture) {
	const fragmentShaderSource = glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputSegmentation;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      vec2 segmentation = texture(u_inputSegmentation, v_texCoord).rg;
      float shift = max(segmentation.r, segmentation.g);
      float backgroundExp = exp(segmentation.r - shift);
      float personExp = exp(segmentation.g - shift);
      outColor = vec4(vec3(0.0), personExp / (backgroundExp + personExp));
    }
  `; // TFLite memory will be accessed as float32

	const tfliteOutputMemoryOffset = tflite._getOutputMemoryOffset() / 4;
	const [segmentationWidth, segmentationHeight] = inputResolutions[segmentationConfig.inputResolution];
	const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputLocation = gl.getUniformLocation(program, 'u_inputSegmentation');
	const inputTexture = createTexture(gl, gl.RG32F, segmentationWidth, segmentationHeight);
	const frameBuffer = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0);
	gl.useProgram(program);
	gl.uniform1i(inputLocation, 1);

	function render() {
		gl.useProgram(program);
		gl.activeTexture(gl.TEXTURE1);
		gl.bindTexture(gl.TEXTURE_2D, inputTexture);
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, segmentationWidth, segmentationHeight, gl.RG, gl.FLOAT, tflite.HEAPF32, tfliteOutputMemoryOffset);
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
		gl.viewport(0, 0, segmentationWidth, segmentationHeight);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	function cleanUp() {
		gl.deleteFramebuffer(frameBuffer);
		gl.deleteTexture(inputTexture);
		gl.deleteProgram(program);
		gl.deleteShader(fragmentShader);
	}

	return {
		render,
		cleanUp
	};
}
