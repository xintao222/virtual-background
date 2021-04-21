
async function loadMeetModel(tflite, segmentationConfig){
	const newSelectedTFLite = tflite
	if (!newSelectedTFLite) {
		throw new Error(`TFLite backend unavailable: ${segmentationConfig.backend}`);
	}

	const modelFileName = segmentationConfig.inputResolution === '144p' ? 'segm_full_v679' : 'segm_lite_v681';
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
}

let sourcePlayback = {
	width: 640,
	height: 480,
	htmlElement: document.getElementById('localVideo'),
}
let backgroundConfig = {
	type: "image",
	url: '/public/backgrounds/architecture-5082700_1280.jpg'
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
function useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, tflite){
	let renderRequestId;
	const newPipeline = buildCanvas2dPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef.current, tflite);
	async function render() {
		await newPipeline.render();
		renderRequestId = requestAnimationFrame(render);
	}

	render();
	console.warn('Animation started:', sourcePlayback, backgroundConfig, segmentationConfig);
}


async function getVideoStream(){
	console.warn("get video stream...")
	try {
		let localVideo = document.getElementById('localVideo')
		localVideo.srcObject = await navigator.mediaDevices.getUserMedia({video: true})

		let tflite = await createTFLiteModule()
		console.warn("tflite: ", tflite)

		await loadMeetModel(tflite, segmentationConfig)

		useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, tflite)
	}catch (error){
		console.error(error)
	}
}

window.onload = async function (){
	console.log('window is onload..')
	getVideoStream()
}
