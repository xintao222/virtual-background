let localVideo = document.getElementById('localVideo')
let canvas = document.getElementById('canvasRef')
let bgImg = document.getElementById('bgImg')
let localStream
let tflite
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

function getSelectVaule(targetId){
	let value
	let videoinputList = document.getElementById(targetId)
	let selectedIndex = videoinputList.options.selectedIndex
	let selectedOption = videoinputList.options[selectedIndex]
	if(selectedOption && selectedOption.value){
		console.log('selected ' + targetId + ' value: ', selectedOption.value)
		value = selectedOption.value
	}

	return value
}

function closeStream(stream){
	try {
		stream.oninactive = null
		let tracks = stream.getTracks()
		for (let track in tracks) {
			tracks[track].onended = null
			console.info('close stream')
			tracks[track].stop()
		}
	} catch (error) {
		console.info('closeStream: Failed to close stream')
		console.info(error)
	}
	stream = null
}

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

async function getVideoStream(){
	console.warn("get video stream...")
	try {
		if(localStream){
			closeStream(localStream)
		}

		let deviceId = getSelectVaule('videoList')
		if(deviceId){
			console.log('set deviceId: ', deviceId)
			constraints.video.deviceId = {
				exact: deviceId
			}
		}

		console.log('getuserMedia constraints: ', JSON.stringify(constraints, null, '    '))
		localStream = await navigator.mediaDevices.getUserMedia(constraints)
		console.log('localStream: ', localStream)

		localVideo.srcObject = localStream
		localVideo.onloadedmetadata = async function (){
			console.log('video onloadedmetadata.')
			canvas.width = localVideo.videoWidth
			canvas.height = localVideo.videoHeight
			pipeConversion2Cavans()
		}
	}catch (error){
		console.error(error)
	}
}

/**
 * 改变分辨率
 */
function videoInputResChange(){
	let res = getSelectVaule('videoInputRes')
	switch (res){
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

function pipeSelectChange(){
	// todo: 重新创建canvas，以解决canvas getContext（“2d”）返回null问题，canvas请求过其他类型后不能再请求不同类型的上下文
	canvas.remove()
	let parent = document.getElementById('cavansArea')
	let newCavans = document.createElement('canvas')
	newCavans.id = 'canvasRef'
	newCavans.classList.add('makeStyles-render-9')
	newCavans.width = localVideo.videoWidth
	newCavans.height = localVideo.videoHeight
	parent.appendChild(newCavans)
	canvas = newCavans

	pipeConversion2Cavans(true)
}

function modelSelectChange(){
	pipeConversion2Cavans(true)
}

async function pipeConversion2Cavans(update){
	let sourcePlayback = {
		htmlElement: localVideo,
		width: localVideo.videoWidth,
		height: localVideo.videoHeight,
	}
	let segmentationConfig = {
		backend: "wasmSimd",
		inputResolution: getSelectVaule('resSelect'),
		model: getSelectVaule('modelSelect') || 'meet',
		pipeline: getSelectVaule('pipeSelect'),
	}
	let canvasRef = {current: canvas}
	console.warn("sourcePlayback: ", sourcePlayback)
	console.warn('segmentationConfig: ', segmentationConfig)
	console.warn('backgroundConfig: ', backgroundConfig)
	console.warn("canvasRef: ", canvasRef)
	if(!update){
		tflite = await createTFLiteModule()
		console.warn('tflite: ', tflite)
		await loadTFLiteModel(tflite, segmentationConfig)
	}

	if(segmentationConfig.pipeline === 'webgl2'){
		bgImg.hidden = true
	}else {
		bgImg.hidden = false
	}

	let pipeline = useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, canvasRef, tflite, bgImg)

	console.warn("show video stream get from canvas!")
	getCanvasStream()
}

let backgroundConfig = {type: "image", url: bgImg.src}
function backgroundChange(config){
	console.log('backgroundChange: ', config)
	backgroundConfig.type = config.type
	backgroundConfig.url = config.url
	bgImg.src = config.url

	pipeConversion2Cavans(true)
}

window.onload = async function (){
	console.log('window is onload..')
	getVideoStream()
}


