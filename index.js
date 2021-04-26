let localVideo = document.getElementById('localVideo')
let backgroundImageRef = document.getElementById('bgImg')
let captureStreamVideo = document.getElementById('captureStreamVideo')
let localStream
let usePipeline
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

async function getVideoStream(){
	console.warn("get video stream...")
	try {
		let streamChange = false
		if(localStream){
			closeStream(localStream)
			streamChange = true
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
		pipeConversion2Cavans(streamChange)
	}catch (error){
		console.error(error)
	}
}

let backgroundConfig = {type: "image", url: backgroundImageRef.src}
function backgroundChange(config){
	console.log('backgroundChange: ', config)
	backgroundConfig.type = config.type
	backgroundConfig.url = config.url
	backgroundImageRef.src = config.url
	pipeConversion2Cavans()
}

async function pipeConversion2Cavans(newStream){
	let sourcePlayback = {
		sourceStream: localStream,
		newStream: newStream
	}
	let segmentationConfig = {
		backend: "wasmSimd",
		inputResolution: getSelectVaule('resSelect'),
		model: getSelectVaule('modelSelect') || 'meet',
		pipeline: getSelectVaule('pipeSelect'),
	}
	console.log("sourcePlayback: ", sourcePlayback)
	console.log('segmentationConfig: ', segmentationConfig)
	console.log('backgroundConfig: ', backgroundConfig)

	if(!usePipeline){
		usePipeline = new RenderingPipeline()
	}
	usePipeline.useRenderingPipeline(sourcePlayback, backgroundConfig, segmentationConfig, backgroundImageRef, function (data){
		console.warn("useRenderingPipeline callback data: ", data)
		if(data.canvas){
			let canvas = data.canvas
			let stream
			if(canvas.captureStream){
				stream = canvas.captureStream()
			}else if(canvas.mozCaptureStream){
				stream = canvas.mozCaptureStream()
			}else {
				log.error('Current browser does not support captureStream!!')
			}
			localVideo.srcObject = stream
			createPeerConnection(stream)
		}
	})
}

window.onload = async function (){
	console.log('window is onload..')
	getVideoStream()
}

/*************************************************************************************************************/

