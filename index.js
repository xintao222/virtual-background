let localVideo = document.getElementById('localVideo')
let canvas = document.getElementById('canvasRef')
let bgImg = document.getElementById('bgImg')
let localStream
let constraints = {
	video: {
		width: 640,
		height: 360
	}
}

/**
 * 获取video input设备列表
 */
let mediaDeviceInstance
let videoInputList = []
let videoinputList = document.getElementById('videoList')
document.onreadystatechange = function () {
	if (document.readyState === "complete") {
		navigator.mediaDevices.enumerateDevices().then(function (deviceInfos){
			let videoinputLists = []
			for (let i = 0; i < deviceInfos.length; i++){
				let deviceInfo = deviceInfos[i]
				if (deviceInfo.kind === 'videoinput') {
					videoinputLists.push({
						label: deviceInfo.label,
						deviceId: deviceInfo.deviceId,
						groupId: deviceInfo.groupId,
					})
				}
			}

			if (videoinputLists.length) {
				for (let j = 0; j < videoinputLists.length; j++) {
					if (!videoinputLists[j].label) {
						videoinputLists[j].label = 'camera' + j
					}
					videoInputList.push('<option class="cameraOption" value="' + videoinputLists[j].deviceId + '">' + videoinputLists[j].label + '</option>')
					console.log('camera: ' + videoinputLists[j].label)
				}
			}
			videoinputList.innerHTML = videoInputList.join('')
		}).catch(function (error){
			console.error(error)
		});
	}
}

function getUsingDeviceId () {
	let deviceId
	let selectedIndex = videoinputList.options.selectedIndex
	let selectedOption = videoinputList.options[selectedIndex]
	if(selectedOption && selectedOption.value){
		console.log('selected videoInput value: ', selectedOption.value)
		deviceId = selectedOption.value
	}

	return deviceId
}

function getSelectResolution(){
	let res
	let resSelect = document.getElementById('resSelect')
	let selectedIndex = resSelect.options.selectedIndex
	let selectedOption = resSelect.options[selectedIndex]
	if(selectedOption && selectedOption.value){
		console.log('selected resolution value: ', selectedOption.value)
		res = selectedOption.value
	}

	return res
}

function getPipeSelect(){
	let pipeSelect = document.getElementById('pipeSelect')
	let pipe
	let selectedIndex = pipeSelect.options.selectedIndex
	let selectedOption = pipeSelect.options[selectedIndex]
	if(selectedOption && selectedOption.value){
		console.log('selected resolution value: ', selectedOption.value)
		pipe = selectedOption.value
	}

	return pipe
}

/**
 * 改变分辨率
 */
function resolutionChange(){
	let res = getSelectResolution()
	switch (res){
		case '96p':
			constraints.video.width = 160
			constraints.video.height = 96
			break
		case '144p':
			constraints.video.width = 256
			constraints.video.height = 144
			break
		case '360p':
			constraints.video.width = 640
			constraints.video.height = 360
			break
		case '720p':
			constraints.video.width = 1280
			constraints.video.height = 720
			break
		case '1080p':
			constraints.video.width = 1920
			constraints.video.height = 1080
			break
		default:
			break
	}
	getVideoStream()
}

let backgroundConfig = {type: "blur", url: ''}
function backgroundChange(config){
	console.log('backgroundChange: ', config)
	backgroundConfig.type = config.type
	backgroundConfig.url = config.url
	bgImg.src = config.url

	canvas2pipelines(true)
}
/******************************************************************************************************************/
let tflite
async function canvas2pipelines(update){
	let sourcePlayback = {
		htmlElement: localVideo,
		width: localVideo.videoWidth,
		height: localVideo.videoHeight,
	}
	let segmentationConfig = {
		backend: "wasmSimd",
		inputResolution: getSelectResolution(),
		model: "meet",
		pipeline: getPipeSelect(),
	}
	let canvasRef = {current: canvas}
	console.warn("sourcePlayback: ", sourcePlayback)
	console.warn('segmentationConfig: ', segmentationConfig)
	console.warn('backgroundConfig: ', backgroundConfig)
	console.warn("canvasRef: ", canvasRef)
	if(!update){
		tflite = await createTFLiteModule()
		console.warn('tflite: ', tflite)
		await loadMeetModel(tflite, segmentationConfig)
	}

	let backgroundImageRef = {
		current: bgImg
	}
	useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef, tflite, backgroundImageRef)
}

async function getVideoStream(){
	console.warn("get video stream...")
	try {
		let deviceId = getUsingDeviceId()
		if(deviceId){
			constraints.video.deviceId = deviceId
		}

		console.log('getuserMedia constraints: ', JSON.stringify(constraints, null, '    '))
		localStream = await navigator.mediaDevices.getUserMedia(constraints)
		console.log('localStream: ', localStream)

		localVideo.srcObject = localStream
		localVideo.onloadedmetadata = async function (){
			console.log('video onloadedmetadata.')
			canvas.width = localVideo.videoWidth
			canvas.height = localVideo.videoHeight
			canvas2pipelines()

			getCanvasStream()
		}
	}catch (error){
		console.error(error)
	}
}

window.onload = async function (){
	console.log('window is onload..')
	getVideoStream()
}

/******************************************************************************************************************/
// 点对点测试
// 背景是图片时，获取到的视频拿不到图片部分
function getCanvasStream(){
	let stream
	if(canvas.captureStream){
		stream = canvas.captureStream()
	}else if(canvas.mozCaptureStream){
		stream = canvas.mozCaptureStream()
	}else {
		log.error('Current browser does not support captureStream!!')
	}
	console.warn('getCanvasStream: ', stream)
	let captureStreamVideo = document.getElementById('captureStreamVideo')
	captureStreamVideo.srcObject = stream
}


// var video = document.createElement('video')
// video.id = 'captureStreamVideo'
// video.autoplay = true
// video.controls = true
// var parent = document.getElementById('root')
// parent.appendChild(video)
// var canvas = document.querySelectorAll('canvas')[0]
