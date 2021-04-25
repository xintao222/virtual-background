
function RenderingPipeline(){
	this.glsl = String.raw
	this.pipeline = null
	this.tflite = null
	this.canvasRef= null
	this.renderRequestId = null

	this.sourcePlayback = null
	this.backgroundConfig = null
	this.segmentationConfig = null
	this.backgroundImageRef = null

	this.inputResolutions = {
		'1920x1080': [1920, 1080],
		'1280x720': [1280, 720],
		'640x360': [640, 360],
		'256x256': [256, 256],
		'256x144': [256, 144],
		'160x96': [160, 96],
	}
	this.postProcessingConfig = {
		smoothSegmentationMask: true,
		jointBilateralFilter: {
			sigmaSpace: 1,
			sigmaColor: 0.1
		},
		coverage: [0.5, 0.75],
		lightWrapping: 0.3,
		blendMode: 'screen'
	}
}

RenderingPipeline.prototype.setProcessingConfig = function (sourcePlayback, backgroundConfig, segmentationConfig, canvasRef, backgroundImageRef){
	this.sourcePlayback = sourcePlayback
	this.backgroundConfig = backgroundConfig
	this.segmentationConfig = segmentationConfig
	this.canvasRef = canvasRef
	this.backgroundImageRef = backgroundImageRef
}

RenderingPipeline.prototype.getTFLiteModelFileName = function (model, inputResolution){
	let name = ''
	switch (model) {
		case 'meet':
			name = inputResolution === '256x144' ? 'segm_full_v679' : 'segm_lite_v681'
			break
		case 'mlkit':
			name = 'selfiesegmentation_mlkit-256x256-2021_01_19-v1215.f16'
			break
		default:
			throw new Error(`No TFLite file for this segmentation model: ${model}`)
	}
	return name
}

/**
 * useTFLite.ts
 * @param tflite
 * @param segmentationConfig
 * @returns {Promise<void>}
 */
RenderingPipeline.prototype.loadTFLiteModel = async function (tflite, segmentationConfig){
	const newSelectedTFLite = tflite
	if (!newSelectedTFLite) {
		throw new Error(`TFLite backend unavailable: ${segmentationConfig.backend}`);
	}

	let modelFileName = this.getTFLiteModelFileName(segmentationConfig.model, segmentationConfig.inputResolution)
	console.log('Loading tflite model:', modelFileName)
	const modelResponse = await fetch(`${"public"}/models/${modelFileName}.tflite`);
	console.warn("modelResponse: ", modelResponse)
	const model = await modelResponse.arrayBuffer();
	console.log('Model buffer size:', model.byteLength);

	const modelBufferOffset = newSelectedTFLite._getModelBufferMemoryOffset();
	console.log('Model buffer memory offset:', modelBufferOffset);
	console.log('Loading model buffer...');
	newSelectedTFLite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);

	console.log('_loadModel result:', newSelectedTFLite._loadModel(model.byteLength));
	console.log('Input memory offset:', newSelectedTFLite._getInputMemoryOffset());
	console.log('Input height:', newSelectedTFLite._getInputHeight());
	console.log('Input width:', newSelectedTFLite._getInputWidth());
	console.log('Input channels:', newSelectedTFLite._getInputChannelCount());
	console.log('Output memory offset:', newSelectedTFLite._getOutputMemoryOffset());
	console.log('Output height:', newSelectedTFLite._getOutputHeight());
	console.log('Output width:', newSelectedTFLite._getOutputWidth());
	console.log('Output channels:', newSelectedTFLite._getOutputChannelCount());
	this.tflite = newSelectedTFLite
}

RenderingPipeline.prototype.useRenderingPipeline = async function (sourcePlayback, backgroundConfig, segmentationConfig, canvasRef, backgroundImageRef){
	if(!this.tflite){
		console.log('load tflite module..')
		this.tflite = await createTFLiteModule()
		await usePipeline.loadTFLiteModel(this.tflite, segmentationConfig)
	}
	// if(this.renderRequestId){
	// 	await cancelAnimationFrame(this.renderRequestId);
	// 	await this.pipeline.cleanUp();
	// 	console.warn('Animation stopped:', sourcePlayback, backgroundConfig, segmentationConfig);
	// 	this.pipeline = null;
	// 	this.renderRequestId = null
	// }

	let newPipeline = segmentationConfig.pipeline === 'webgl2' ? this.buildWebGL2Pipeline(
		sourcePlayback,
		backgroundImageRef,
		backgroundConfig,
		segmentationConfig,
		canvasRef.current,
		this.tflite
	) : this.buildCanvas2dPipeline(
		sourcePlayback,
		backgroundConfig,
		segmentationConfig,
		canvasRef.current,
		this.tflite
	);
	async function render(This) {
		await newPipeline.render();
		This.renderRequestId = requestAnimationFrame(render);
	}
	render(this);
	console.warn('Animation started:', sourcePlayback, backgroundConfig, segmentationConfig);

	this.pipeline = newPipeline
	newPipeline.updatePostProcessingConfig(this.postProcessingConfig);
	this.setProcessingConfig(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef, backgroundImageRef)
}

RenderingPipeline.prototype.buildCanvas2dPipeline = function (sourcePlayback, backgroundConfig, segmentationConfig, canvas, tflite) {
	const ctx = canvas.getContext('2d');
	const [segmentationWidth, segmentationHeight] = this.inputResolutions[segmentationConfig.inputResolution];
	const segmentationPixelCount = segmentationWidth * segmentationHeight;
	const segmentationMask = new ImageData(segmentationWidth, segmentationHeight);
	const segmentationMaskCanvas = document.createElement('canvas');
	segmentationMaskCanvas.width = segmentationWidth;
	segmentationMaskCanvas.height = segmentationHeight;
	const segmentationMaskCtx = segmentationMaskCanvas.getContext('2d');
	const inputMemoryOffset = tflite._getInputMemoryOffset() / 4;
	const outputMemoryOffset = tflite._getOutputMemoryOffset() / 4;
	let postProcessingConfig;

	async function render() {
		if (backgroundConfig.type !== 'none') {
			resizeSource();
		}

		if (backgroundConfig.type !== 'none') {
			runTFLiteInference();
		}
		runPostProcessing();
	}

	function updatePostProcessingConfig(newPostProcessingConfig) {
		postProcessingConfig = newPostProcessingConfig;
	}

	function cleanUp() {// Nothing to clean up in this rendering pipeline
	}

	function resizeSource() {
		segmentationMaskCtx.drawImage(sourcePlayback.htmlElement, 0, 0, sourcePlayback.width, sourcePlayback.height, 0, 0, segmentationWidth, segmentationHeight);

		if (segmentationConfig.model === 'meet' || segmentationConfig.model === 'mlkit') {
			const imageData = segmentationMaskCtx.getImageData(0, 0, segmentationWidth, segmentationHeight);

			for (let i = 0; i < segmentationPixelCount; i++) {
				tflite.HEAPF32[inputMemoryOffset + i * 3] = imageData.data[i * 4] / 255;
				tflite.HEAPF32[inputMemoryOffset + i * 3 + 1] = imageData.data[i * 4 + 1] / 255;
				tflite.HEAPF32[inputMemoryOffset + i * 3 + 2] = imageData.data[i * 4 + 2] / 255;
			}
		}
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

/**
 * webgl2Pipeline.ts
 * @param sourcePlayback
 * @param backgroundImage
 * @param backgroundConfig
 * @param segmentationConfig
 * @param canvas
 * @param tflite
 * @returns {{updatePostProcessingConfig: updatePostProcessingConfig, cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildWebGL2Pipeline = function (sourcePlayback, backgroundImage, backgroundConfig, segmentationConfig, canvas, tflite) {
	const vertexShaderSource = this.glsl`#version 300 es

    in vec2 a_position;
    in vec2 a_texCoord;

    out vec2 v_texCoord;

    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texCoord = a_texCoord;
    }
  `;
	const {width: frameWidth, height: frameHeight} = sourcePlayback;
	const [segmentationWidth, segmentationHeight] = this.inputResolutions[segmentationConfig.inputResolution];
	const gl = canvas.getContext('webgl2');
	const vertexShader = this.compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const vertexArray = gl.createVertexArray();
	gl.bindVertexArray(vertexArray);
	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW);
	const texCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0]), gl.STATIC_DRAW); // We don't use texStorage2D here because texImage2D seems faster
	// to upload video texture than texSubImage2D even though the latter
	// is supposed to be the recommended way:
	// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#use_texstorage_to_create_textures

	const inputFrameTexture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, inputFrameTexture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST); // TODO Rename segmentation and person mask to be more specific

	const segmentationTexture = this.createTexture(gl, gl.RGBA8, segmentationWidth, segmentationHeight);
	const personMaskTexture = this.createTexture(gl, gl.RGBA8, frameWidth, frameHeight);
	const resizingStage = this.buildResizingStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite);
	const loadSegmentationStage = (segmentationConfig.model === 'meet')
		? this.buildSoftmaxStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, segmentationTexture)
		: this.buildLoadSegmentationStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, segmentationTexture)
	const jointBilateralFilterStage = this.buildJointBilateralFilterStage(gl, vertexShader, positionBuffer, texCoordBuffer, segmentationTexture, segmentationConfig, personMaskTexture, canvas);
	const backgroundStage = backgroundConfig.type === 'blur'
		? this.buildBackgroundBlurStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas)
		: this.buildBackgroundImageStage(gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas);

	async function render() {
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, inputFrameTexture); // texImage2D seems faster than texSubImage2D to upload
		// video texture

		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourcePlayback.htmlElement);
		gl.bindVertexArray(vertexArray);
		resizingStage.render();

		tflite._runInference();

		loadSegmentationStage.render();
		jointBilateralFilterStage.render();
		backgroundStage.render();
	}

	function updatePostProcessingConfig(postProcessingConfig) {
		jointBilateralFilterStage.updateSigmaSpace(postProcessingConfig.jointBilateralFilter.sigmaSpace);
		jointBilateralFilterStage.updateSigmaColor(postProcessingConfig.jointBilateralFilter.sigmaColor); // TODO Handle no background in a separate pipeline path

		if (backgroundConfig.type === 'none') {
			const backgroundImageStage = backgroundStage;
			backgroundImageStage.updateCoverage([0, 0.9999]);
			backgroundImageStage.updateLightWrapping(0);
		} else if (backgroundConfig.type === 'image') {
			const backgroundImageStage = backgroundStage;
			backgroundImageStage.updateCoverage(postProcessingConfig.coverage);
			backgroundImageStage.updateLightWrapping(postProcessingConfig.lightWrapping);
			backgroundImageStage.updateBlendMode(postProcessingConfig.blendMode);
		}
	}

	function cleanUp() {
		backgroundStage.cleanUp();
		jointBilateralFilterStage.cleanUp();
		loadSegmentationStage.cleanUp();
		resizingStage.cleanUp();
		gl.deleteTexture(personMaskTexture);
		gl.deleteTexture(segmentationTexture);
		gl.deleteTexture(inputFrameTexture);
		gl.deleteBuffer(texCoordBuffer);
		gl.deleteBuffer(positionBuffer);
		gl.deleteVertexArray(vertexArray);
		gl.deleteShader(vertexShader);
	}

	return {
		render,
		updatePostProcessingConfig,
		cleanUp
	};
}

/**
 *
 * @param gl
 * @param vertexShader
 * @param fragmentShader
 * @param positionBuffer
 * @param texCoordBuffer
 * @returns {*}
 */
RenderingPipeline.prototype.createPiplelineStageProgram = function (gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer) {
	const program = this.createProgram(gl, vertexShader, fragmentShader);
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

RenderingPipeline.prototype.createProgram = function (gl, vertexShader, fragmentShader) {
	const program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error(`Could not link WebGL program: ${gl.getProgramInfoLog(program)}`);
	}

	return program;
}

RenderingPipeline.prototype.compileShader = function (gl, shaderType, shaderSource) {
	const shader = gl.createShader(shaderType);
	gl.shaderSource(shader, shaderSource);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		throw new Error(`Could not compile shader: ${gl.getShaderInfoLog(shader)}`);
	}

	return shader;
}

RenderingPipeline.prototype.createTexture = function (gl, internalformat, width, height, minFilter = gl.NEAREST, magFilter = gl.NEAREST) {
	const texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
	gl.texStorage2D(gl.TEXTURE_2D, 1, internalformat, width, height);
	return texture;
}

RenderingPipeline.prototype.readPixelsAsync = async function (gl, x, y, width, height, format, type, dest) {
	const buf = gl.createBuffer();
	gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
	gl.bufferData(gl.PIXEL_PACK_BUFFER, dest.byteLength, gl.STREAM_READ);
	gl.readPixels(x, y, width, height, format, type, 0);
	gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
	await this.getBufferSubDataAsync(gl, gl.PIXEL_PACK_BUFFER, buf, 0, dest);
	gl.deleteBuffer(buf);
	return dest;
}

RenderingPipeline.prototype.getBufferSubDataAsync = async function (gl, target, buffer, srcByteOffset, dstBuffer, dstOffset, length) {
	const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
	gl.flush();
	const res = await this.clientWaitAsync(gl, sync);
	gl.deleteSync(sync);

	if (res !== gl.WAIT_FAILED) {
		gl.bindBuffer(target, buffer);
		gl.getBufferSubData(target, srcByteOffset, dstBuffer, dstOffset, length);
		gl.bindBuffer(target, null);
	}
}

RenderingPipeline.prototype.clientWaitAsync = function (gl, sync) {
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

/**
 * backgroundBlurStage.ts
 * @param gl
 * @param positionBuffer
 * @param texCoordBuffer
 * @param personMaskTexture
 * @param canvas
 * @returns {{cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildBackgroundBlurStage = function (gl, positionBuffer, texCoordBuffer, personMaskTexture, canvas) {
	const vertexShaderSource = this.glsl`#version 300 es

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
	const fragmentShaderSource = this.glsl`#version 300 es

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
	const {width: outputWidth, height: outputHeight} = canvas;
	const texelWidth = 1 / outputWidth;
	const texelHeight = 1 / outputHeight;
	const vertexShader = this.compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const personMaskLocation = gl.getUniformLocation(program, 'u_personMask');
	const texelSizeLocation = gl.getUniformLocation(program, 'u_texelSize');
	const flipYLocation = gl.getUniformLocation(program, 'u_flipY');
	const texture1 = this.createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
	const texture2 = this.createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
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

/**
 * backgroundImageStage.ts
 * @param gl
 * @param positionBuffer
 * @param texCoordBuffer
 * @param personMaskTexture
 * @param backgroundImage
 * @param canvas
 * @returns {{cleanUp: cleanUp, updateCoverage: updateCoverage, updateLightWrapping: updateLightWrapping, updateBlendMode: updateBlendMode, render: render}}
 */
RenderingPipeline.prototype.buildBackgroundImageStage = function (gl, positionBuffer, texCoordBuffer, personMaskTexture, backgroundImage, canvas) {
	const vertexShaderSource = this.glsl`#version 300 es

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
	const fragmentShaderSource = this.glsl`#version 300 es

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
	const {width: outputWidth, height: outputHeight} = canvas;
	const outputRatio = outputWidth / outputHeight;
	const vertexShader = this.compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
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
		backgroundTexture = RenderingPipeline.prototype.createTexture(gl, gl.RGBA8, backgroundImage.naturalWidth, backgroundImage.naturalHeight, gl.LINEAR, gl.LINEAR);
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

/**
 * jointBilateralFilterStage.ts
 * @param gl
 * @param vertexShader
 * @param positionBuffer
 * @param texCoordBuffer
 * @param inputTexture
 * @param segmentationConfig
 * @param outputTexture
 * @param canvas
 * @returns {{updateSigmaColor: updateSigmaColor, updateSigmaSpace: updateSigmaSpace, cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildJointBilateralFilterStage = function (gl, vertexShader, positionBuffer, texCoordBuffer, inputTexture, segmentationConfig, outputTexture, canvas) {
	const fragmentShaderSource = this.glsl`#version 300 es

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
	const [segmentationWidth, segmentationHeight] = this.inputResolutions[segmentationConfig.inputResolution];
	const {width: outputWidth, height: outputHeight} = canvas;
	const texelWidth = 1 / outputWidth;
	const texelHeight = 1 / outputHeight;
	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
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

/**
 * resizingStage.ts
 * @param gl
 * @param vertexShader
 * @param positionBuffer
 * @param texCoordBuffer
 * @param segmentationConfig
 * @param tflite
 * @returns {{cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildResizingStage = function (gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite) {
	const fragmentShaderSource = this.glsl`#version 300 es

    precision highp float;

    uniform sampler2D u_inputFrame;

    in vec2 v_texCoord;

    out vec4 outColor;

    void main() {
      outColor = texture(u_inputFrame, v_texCoord);
    }
  `; // TFLite memory will be accessed as float32

	const tfliteInputMemoryOffset = tflite._getInputMemoryOffset() / 4;
	const [outputWidth, outputHeight] = this.inputResolutions[segmentationConfig.inputResolution];
	const outputPixelCount = outputWidth * outputHeight;
	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputFrameLocation = gl.getUniformLocation(program, 'u_inputFrame');
	const outputTexture = this.createTexture(gl, gl.RGBA8, outputWidth, outputHeight);
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

		RenderingPipeline.prototype.readPixelsAsync(gl, 0, 0, outputWidth, outputHeight, gl.RGBA, gl.UNSIGNED_BYTE, outputPixels);

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

/**
 * softmaxStage.ts
 * @param gl
 * @param vertexShader
 * @param positionBuffer
 * @param texCoordBuffer
 * @param segmentationConfig
 * @param tflite
 * @param outputTexture
 * @returns {{cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildSoftmaxStage = function (gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, outputTexture) {
	const fragmentShaderSource = this.glsl`#version 300 es

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
	const [segmentationWidth, segmentationHeight] = this.inputResolutions[segmentationConfig.inputResolution];
	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer);
	const inputLocation = gl.getUniformLocation(program, 'u_inputSegmentation');
	const inputTexture = this.createTexture(gl, gl.RG32F, segmentationWidth, segmentationHeight);
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

/**
 * loadSegmentationStage.ts
 * @param gl
 * @param vertexShader
 * @param positionBuffer
 * @param texCoordBuffer
 * @param segmentationConfig
 * @param tflite
 * @param outputTexture
 * @returns {{cleanUp: cleanUp, render: render}}
 */
RenderingPipeline.prototype.buildLoadSegmentationStage = function (gl, vertexShader, positionBuffer, texCoordBuffer, segmentationConfig, tflite, outputTexture) {
	const fragmentShaderSource = this.glsl`#version 300 es
    precision highp float;
    uniform sampler2D u_inputSegmentation;
    in vec2 v_texCoord;
    out vec4 outColor;
    void main() {
      float segmentation = texture(u_inputSegmentation, v_texCoord).r;
      outColor = vec4(vec3(0.0), segmentation);
    }
  `

	// TFLite memory will be accessed as float32
	const tfliteOutputMemoryOffset = tflite._getOutputMemoryOffset() / 4
	const [segmentationWidth, segmentationHeight] = this.inputResolutions[segmentationConfig.inputResolution]

	const fragmentShader = this.compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
	const program = this.createPiplelineStageProgram(gl, vertexShader, fragmentShader, positionBuffer, texCoordBuffer)
	const inputLocation = gl.getUniformLocation(program, 'u_inputSegmentation')
	const inputTexture = this.createTexture(gl, gl.R32F, segmentationWidth, segmentationHeight)

	const frameBuffer = gl.createFramebuffer()
	gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer)
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, outputTexture, 0)

	gl.useProgram(program)
	gl.uniform1i(inputLocation, 1)

	function render() {
		gl.viewport(0, 0, segmentationWidth, segmentationHeight)
		gl.useProgram(program)
		gl.activeTexture(gl.TEXTURE1)
		gl.bindTexture(gl.TEXTURE_2D, inputTexture)
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, segmentationWidth, segmentationHeight, gl.RED, gl.FLOAT, tflite.HEAPF32, tfliteOutputMemoryOffset)
		gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer)
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
	}

	function cleanUp() {
		gl.deleteFramebuffer(frameBuffer)
		gl.deleteTexture(inputTexture)
		gl.deleteProgram(program)
		gl.deleteShader(fragmentShader)
	}

	return { render, cleanUp }
}
