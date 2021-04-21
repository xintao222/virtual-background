(this["webpackJsonpvirtual-background"] = this["webpackJsonpvirtual-background"] || []).push([[0], {

	/***/ 332:
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

		"use strict";
// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
		var react = __webpack_require__(5);
		var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
		var react_dom = __webpack_require__(40);
		var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
		var makeStyles = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
		var createStyles = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
		var CardContent = __webpack_require__(379);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
		var Typography = __webpack_require__(337);

// EXTERNAL MODULE: ./node_modules/react/jsx-dev-runtime.js
		var jsx_dev_runtime = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
		var Avatar = __webpack_require__(386);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
		var Paper = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/@tensorflow-models/body-pix/dist/body-pix.esm.js
		var body_pix_esm = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs/dist/index.js + 514 modules
		var dist = __webpack_require__(293);

// CONCATENATED MODULE: ./src/core/hooks/useStats.ts
		function useStats() {
			const [fps, setFps] = Object(react["useState"])(0);
			const [durations, setDurations] = Object(react["useState"])([]);
			const previousTimeRef = {current: 0};
			const beginTimeRef = {current: 0};
			const durationsRef = {current: []};
			const eventCount = {current: 0};
			const frameCountRef = {current: 0}; // The useCallbacks below are required to prevent infinite loop
			// when the functions are called inside useEffect

			const beginFrame = Object(react["useCallback"])(() => {
				beginTimeRef.current = Date.now();
			}, []);
			const addFrameEvent = Object(react["useCallback"])(() => {
				const time = Date.now();
				durationsRef.current[eventCount.current] = time - beginTimeRef.current;
				beginTimeRef.current = time;
				eventCount.current++;
			}, []);
			const endFrame = Object(react["useCallback"])(() => {
				const time = Date.now();
				durationsRef.current[eventCount.current] = time - beginTimeRef.current;
				frameCountRef.current++;

				if (time >= previousTimeRef.current + 1000) {
					// todo: 处理后的canvas的fps显示处理
					setFps(frameCountRef.current * 1000 / (time - previousTimeRef.current));
					setDurations(durationsRef.current);
					previousTimeRef.current = time;
					frameCountRef.current = 0;
				}

				eventCount.current = 0;
			}, []);
			return {fps, durations, beginFrame, addFrameEvent, endFrame};
		}

// CONCATENATED MODULE: ./src/core/hooks/useRenderingPipeline.ts
		function useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite) {
			const [pipeline, setPipeline] = Object(react["useState"])(null);
			const backgroundImageRef = Object(react["useRef"])(null);
			const canvasRef = Object(react["useRef"])(null);
			let {fps, durations, beginFrame, addFrameEvent, endFrame} = useStats();

			Object(react["useEffect"])(() => {
				segmentationConfig = {
					backend: "wasmSimd",
					inputResolution: "96p",
					model: "meet",
					pipeline: "canvas2dCpu",
				}
				console.warn('segmentationConfig: ', JSON.stringify(segmentationConfig, null, '    '))

				// The useEffect cleanup function is not enough to stop
				// the rendering loop when the framerate is low
				let shouldRender = true;
				let renderRequestId;
				addFrameEvent = function (){}
				const newPipeline = buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef.current, null, tflite, addFrameEvent);

				async function render() {
					if (!shouldRender) {
						return;
					}

					// todo: beginFrame、endFrame 用于显示处理后的video的fps
					// beginFrame();
					await newPipeline.render();
					// endFrame();
					renderRequestId = requestAnimationFrame(render);
				}

				render();
				console.warn('Animation started:', sourcePlayback, backgroundConfig, segmentationConfig);
				setPipeline(newPipeline);
				// return () => {
				// 	shouldRender = false;
				// 	cancelAnimationFrame(renderRequestId);
				// 	newPipeline.cleanUp();
				// 	console.warn('Animation stopped:', sourcePlayback, backgroundConfig, segmentationConfig);
				// 	setPipeline(null);
				// };
			}, []);
			return {pipeline, backgroundImageRef, canvasRef, fps, durations};
		}


// CONCATENATED MODULE: ./src/core/components/OutputViewer.tsx
		var OutputViewer_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\OutputViewer.tsx"
		function OutputViewer(props) {
			const {
				pipeline,
				backgroundImageRef,
				canvasRef,
				fps,
				durations: [resizingDuration, inferenceDuration, postProcessingDuration]
			} = useRenderingPipeline(props.sourcePlayback, props.backgroundConfig, props.segmentationConfig, props.bodyPix, props.tflite);

			// const statDetails = [`resizing ${resizingDuration}ms`, `inference ${inferenceDuration}ms`, `post-processing ${postProcessingDuration}ms`];
			// const stats = `${Math.round(fps)} fps (${statDetails.join(', ')})`;

			console.warn("props.sourcePlayback: ", props.sourcePlayback)
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: 'makeStyles-root-8',
				children: [props.backgroundConfig.type === 'image' && /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("img", {  // 源文件图片
					ref: backgroundImageRef,
					className: 'makeStyles-render-9',
					src: props.backgroundConfig.url,
					alt: "",
					// todo: 这里设置背景隐藏后背景无法看到
					hidden: ''
				}, void 0, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("canvas", {   // 转换后的canvas
					ref: canvasRef,
					className: 'makeStyles-render-9',
					width: props.sourcePlayback.width,
					height: props.sourcePlayback.height
				}, props.segmentationConfig.pipeline, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 61,
					columnNumber: 7
				}, this), /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Typography["a" /* default */], {   // fps
					className: 'makeStyles-stats-10',
					variant: "caption",
					children: ''
				}, void 0, false, {
					fileName: OutputViewer_jsxFileName,
					lineNumber: 70,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: OutputViewer_jsxFileName,
				lineNumber: 51,
				columnNumber: 5
			}, this);
		}

// CONCATENATED MODULE: ./src/core/components/SourceViewer.tsx
		var SourceViewer_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\SourceViewer.tsx"
		function SourceViewer(props) {
			const [sourceUrl, setSourceUrl] = Object(react["useState"])();
			const [isLoading, setLoading] = Object(react["useState"])(false);
			const [isCameraError, setCameraError] = Object(react["useState"])(false);
			const videoRef = Object(react["useRef"])(null);
			Object(react["useEffect"])(() => {
				setSourceUrl(undefined);
				setLoading(true);
				setCameraError(false); // Enforces reloading the resource, otherwise
				// onLoad event is not always dispatched and the
				// progress indicator never disappears

				setTimeout(() => setSourceUrl(props.sourceConfig.url));
			}, [props.sourceConfig]);
			Object(react["useEffect"])(() => {
				async function getCameraStream() {
					try {
						const constraint = {
							video: true
						};
						const stream = await navigator.mediaDevices.getUserMedia(constraint);
						console.warn("getCameraStream: ", stream)
						if (videoRef.current) {
							videoRef.current.srcObject = stream;
							return;
						}
					} catch (error) {
						console.error('Error opening video camera.', error);
					}

					setLoading(false);
					setCameraError(true);
				}
				console.warn(props)

				if (props.sourceConfig.type === 'camera') {
					getCameraStream();
				} else if (videoRef.current) {
					videoRef.current.srcObject = null;
				}
			}, [props.sourceConfig]);

			function handleImageLoad(event) {
				const image = event.target;
				props.onLoad({
					htmlElement: image,
					width: image.naturalWidth,
					height: image.naturalHeight
				});
				setLoading(false);
			}

			function handleVideoLoad(event) {
				const video = event.target;
				props.onLoad({
					htmlElement: video,
					width: video.videoWidth,
					height: video.videoHeight
				});
				setLoading(false);
			}

			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: 'makeStyles-root-6',
				children: [
					/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("video", {
						ref: videoRef,
						className: 'makeStyles-sourcePlayback-7',
						src: sourceUrl,
						hidden: isLoading,
						autoPlay: true,
						playsInline: true,
						controls: false,
						muted: true,
						loop: true,
						onLoadedData: handleVideoLoad
					}, void 0, false, {
						fileName: SourceViewer_jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: SourceViewer_jsxFileName,
				lineNumber: 74,
				columnNumber: 5
			}, this);
		}


// CONCATENATED MODULE: ./src/core/components/ViewerCard.tsx
		var ViewerCard_jsxFileName = "D:\\github_learning\\virtual-background-demo-test\\src\\core\\components\\ViewerCard.tsx";
		function ViewerCard(props) {
			const [sourcePlayback, setSourcePlayback] = Object(react["useState"])();
			Object(react["useEffect"])(() => {
				setSourcePlayback(undefined);
			}, [props.sourceConfig]);
			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Paper["a" /* default */], {
				className: 'makeStyles-root-3',
				children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(SourceViewer, {
					sourceConfig: props.sourceConfig,
					onLoad: setSourcePlayback
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 33,
					columnNumber: 7
				}, this), sourcePlayback && props.bodyPix && props.tflite ? /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(OutputViewer, {
					sourcePlayback: sourcePlayback,
					backgroundConfig: props.backgroundConfig,
					segmentationConfig: props.segmentationConfig,
					postProcessingConfig: props.postProcessingConfig,
					bodyPix: props.bodyPix,
					tflite: props.tflite
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this) : /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
					className: 'makeStyles-noOutput-4',
					children: /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(Avatar["a" /* default */], {
						className: 'makeStyles-avatar-5'
					}, void 0, false, {
						fileName: ViewerCard_jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: ViewerCard_jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: ViewerCard_jsxFileName,
				lineNumber: 32,
				columnNumber: 5
			}, this);
		}

// CONCATENATED MODULE: ./src/core/hooks/useTFLite.ts
		function useTFLite(segmentationConfig) {
			const [tflite, setTFLite] = Object(react["useState"])();
			const [tfliteSIMD, setTFLiteSIMD] = Object(react["useState"])();
			const [selectedTFLite, setSelectedTFLite] = Object(react["useState"])();
			const [isSIMDSupported, setSIMDSupported] = Object(react["useState"])(false);
			Object(react["useEffect"])(() => {
				async function loadTFLite() {
					createTFLiteModule().then(setTFLite);
				}

				loadTFLite();
			}, []);
			Object(react["useEffect"])(() => {
				async function loadMeetModel() {
					if (!tflite || isSIMDSupported && !tfliteSIMD || !isSIMDSupported && segmentationConfig.backend === 'wasmSimd' || segmentationConfig.model !== 'meet') {
						return;
					}

					setSelectedTFLite(undefined);
					const newSelectedTFLite = segmentationConfig.backend === 'wasmSimd' ? tfliteSIMD : tflite;
					if (!newSelectedTFLite) {
						throw new Error(`TFLite backend unavailable: ${segmentationConfig.backend}`);
					}

					const modelFileName = segmentationConfig.inputResolution === '144p' ? 'segm_full_v679' : 'segm_lite_v681';
					console.log('Loading meet model:', modelFileName);
					const modelResponse = await fetch(`${"/public"}/models/${modelFileName}.tflite`);
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
					setSelectedTFLite(newSelectedTFLite);
				}

				loadMeetModel();
			}, [tflite, tfliteSIMD, isSIMDSupported, segmentationConfig.model, segmentationConfig.backend, segmentationConfig.inputResolution]);
			return {tflite: selectedTFLite, isSIMDSupported};
		}

// CONCATENATED MODULE: ./src/core/hooks/useBodyPix.ts
		async function useBodyPix() {
			return null;
		}

// CONCATENATED MODULE: ./src/App.tsx
		function App() {
			const [sourceConfig, setSourceConfig] = Object(react["useState"])({
				type: 'camera',
				url: '',
			});
			const [backgroundConfig, setBackgroundConfig] = Object(react["useState"])({
				type: 'image',
				url: "/public/backgrounds/architecture-5082700_1280.jpg"
			});
			const [segmentationConfig, setSegmentationConfig] = Object(react["useState"])({
				model: 'meet',
				backend: 'wasm',
				inputResolution: '96p',
				pipeline: 'webgl2'
			});
			const [postProcessingConfig, setPostProcessingConfig] = Object(react["useState"])({
				smoothSegmentationMask: true,
				jointBilateralFilter: {sigmaSpace: 1, sigmaColor: 0.1},
				coverage: [0.5, 0.75],
				lightWrapping: 0.3,
				blendMode: 'screen'
			});
			const bodyPix = useBodyPix();
			const {tflite, isSIMDSupported} = useTFLite(segmentationConfig);

			return /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])("div", {
				className: 'makeStyles-root-1',
				children: [/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(ViewerCard, {
					sourceConfig: sourceConfig,
					backgroundConfig: backgroundConfig,
					segmentationConfig: segmentationConfig,
					postProcessingConfig: postProcessingConfig,
					bodyPix: bodyPix,
					tflite: tflite
				}, void 0, false, {
					fileName: null,
					lineNumber: 63,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: null,
				lineNumber: 62,
				columnNumber: 5
			}, this);
		}

// CONCATENATED MODULE: ./src/index.tsx
		var src_jsxFileName = 'null';
		react_dom_default.a.render( /*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(react_default.a.StrictMode,
			{
			children: [
				/*#__PURE__*/Object(jsx_dev_runtime["jsxDEV"])(App, {}, void 0, false, {
				fileName: src_jsxFileName,
				lineNumber: 10,
				columnNumber: 5
			}, undefined)
			]
		}, void 0, true, {
			fileName: src_jsxFileName,
			lineNumber: 8,
			columnNumber: 3
		}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function

	})

}, [[332, 1, 2]]]);
