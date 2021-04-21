
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
