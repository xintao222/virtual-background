(this["webpackJsonpvirtual-background"] = this["webpackJsonpvirtual-background"] || []).push([[0], {

	/***/ 332:
	/***/ (function (module, __webpack_exports__, __webpack_require__) {

// 		"use strict";
// // ESM COMPAT FLAG
// 		__webpack_require__.r(__webpack_exports__);
//
// // EXTERNAL MODULE: ./node_modules/react/index.js
// 		var react = __webpack_require__(5);
// 		var react_default = /*#__PURE__*/__webpack_require__.n(react);
//
// // EXTERNAL MODULE: ./node_modules/react-dom/index.js
// 		var react_dom = __webpack_require__(40);
// 		var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
// 		var makeStyles = __webpack_require__(376);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
// 		var createStyles = __webpack_require__(389);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
// 		var CardContent = __webpack_require__(379);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
// 		var Typography = __webpack_require__(337);
//
// // EXTERNAL MODULE: ./node_modules/react/jsx-dev-runtime.js
// 		var jsx_dev_runtime = __webpack_require__(14);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
// 		var Avatar = __webpack_require__(386);
//
// // EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
// 		var Paper = __webpack_require__(336);

// EXTERNAL MODULE: ./node_modules/@tensorflow-models/body-pix/dist/body-pix.esm.js
		var body_pix_esm = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs/dist/index.js + 514 modules
		var dist = __webpack_require__(293);

/************************************************************************************************************/

		async function loadMeetModel(tflite){
			const newSelectedTFLite = tflite
			if (!newSelectedTFLite) {
				throw new Error(`TFLite backend unavailable: ${segmentationConfig.backend}`);
			}

			const modelFileName = segmentationConfig.inputResolution === '144p' ? 'segm_full_v679' : 'segm_lite_v681';
			const modelResponse = await fetch(`${"/public"}/models/${modelFileName}.tflite`);
			const model = await modelResponse.arrayBuffer();

			const modelBufferOffset = newSelectedTFLite._getModelBufferMemoryOffset();
			newSelectedTFLite.HEAPU8.set(new Uint8Array(model), modelBufferOffset);
		}

		let sourcePlayback = {
			height: 853,
			htmlElement: document.getElementById('localVideo'),
			width: 1280,
		}
		let backgroundConfig = {
			type: "image",
			url: '/public/backgrounds/sea.jpg'
		}
		let segmentationConfig = {
			backend: "wasmSimd",
			inputResolution: "96p",
			model: "meet",
			pipeline: "canvas2dCpu",
		}
		let canvasRef = {
			current: document.getElementById('canvasRef'),
		}
		function useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, bodyPix, tflite){
			let renderRequestId;
			let addFrameEvent = function (){
				console.warn('addFrameEvent:1111111111111111')
			}
			const newPipeline = buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef.current, null, tflite, addFrameEvent);
			async function render() {

				await newPipeline.render();
				renderRequestId = requestAnimationFrame(render);
			}

			render();
			console.warn('Animation started:', sourcePlayback, backgroundConfig, segmentationConfig);
		}


		async function getVideoStream(){
			console.warn("get stream...")
			let constraints = {
				audio: false,
				video: {
					width: 640,
					height: 480
				}
			}

			try {
				let localVideo = document.getElementById('localVideo')
				localVideo.srcObject = await navigator.mediaDevices.getUserMedia(constraints)

				let tflite = await createTFLiteModule()
				console.warn("tflite: ", tflite)

				await loadMeetModel(tflite)

				useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, null, tflite)
			}catch (error){
				console.error(error)
			}
		}

		window.onload = async function (){
			console.log('window is onload..')
			getVideoStream()
		}

	})

}, [[332, 1, 2]]]);
