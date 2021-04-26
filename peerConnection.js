const remoteVideo = document.getElementById('remoteVideo');
let localPeerConnection;
let remotePeerConnection;
const offerOptions = {
	offerToReceiveAudio: 1,
	offerToReceiveVideo: 1
};

function getName(pc) {
	return (pc === localPeerConnection) ? 'localPeerConnection' : 'remotePeerConnection';
}

async function createPeerConnection(stream) {
	if(localPeerConnection && remotePeerConnection){
		console.warn("replaceTrack")
		let track = stream.getVideoTracks()[0]
		let transceiver = localPeerConnection.getTransceivers()[0]
		transceiver.sender.replaceTrack(track)
			.then(function () {
				console.info('use replaceTrack to add stream ')
			})
			.catch(function (error) {
				console.warn(error)
			})
		return
	}

	console.log('Starting call');
	const videoTracks = stream.getVideoTracks();
	const audioTracks = stream.getAudioTracks();
	if (videoTracks.length > 0) {
		console.log(`Using video device: ${videoTracks[0].label}`);
	}
	if (audioTracks.length > 0) {
		console.log(`Using audio device: ${audioTracks[0].label}`);
	}
	const configuration = {};
	console.log('RTCPeerConnection configuration:', configuration);
	localPeerConnection = new RTCPeerConnection(configuration);
	console.log('Created local peer connection object localPeerConnection');
	localPeerConnection.addEventListener('icecandidate', e => localPeerOnIceCandidate(localPeerConnection, e));
	localPeerConnection.addEventListener('iceconnectionstatechange', e => onIceStateChange(localPeerConnection, e));

	remotePeerConnection = new RTCPeerConnection(configuration);
	console.log('Created remote peer connection object remotePeerConnection');
	remotePeerConnection.addEventListener('icecandidate', e => remotePeerOnIceCandidate(remotePeerConnection, e));
	remotePeerConnection.addEventListener('iceconnectionstatechange', e => onIceStateChange(remotePeerConnection, e));
	remotePeerConnection.addEventListener('track', gotRemoteStream);

	stream.getTracks().forEach(track => localPeerConnection.addTrack(track, stream));
	console.log('Added local stream to localPeerConnection');

	try {
		console.log('localPeerConnection createOffer start');
		const offer = await localPeerConnection.createOffer(offerOptions);
		await onCreateOfferSuccess(offer);
	} catch (error) {
		console.log(`Failed to create session description: ${error.toString()}`);
	}
}

function gotRemoteStream(e) {
	if (remoteVideo.srcObject !== e.streams[0]) {
		remoteVideo.srcObject = e.streams[0];
		console.log('remotePeerConnection received remote stream');
	}
}

function setVideoParameters(pc){
	var sender = pc.getSenders()[0]
	var videoParameters = sender.getParameters();
	if (JSON.stringify(videoParameters) === '{}') {
		videoParameters.encodings = []
		videoParameters.encodings[0] = {}
	}

	var maxBitRate
	if(!maxBitRate){
		console.warn('get invalid maxBitRate: ' + maxBitRate)
		maxBitRate = 1024000
	}else {
		maxBitRate = maxBitRate * 1000
	}

	videoParameters.encodings[0].maxBitrate = maxBitRate
	videoParameters.degradationPreference =  'maintain-framerate'    // maintain-framerate维持帧率；maintain-resolution 维持分辨率，balanced 保持平衡

	console.warn("videoParameters: \n", JSON.stringify(videoParameters, null, '   '))
	sender.setParameters(videoParameters).then(function () {
		console.warn("setParameters set success!!!")
	}).catch(function (error) {
		console.error(error)
	})
}

async function onCreateOfferSuccess(desc) {
	console.log(`Offer from localPeerConnection\n${desc.sdp}`);
	console.log('localPeerConnection setLocalDescription start');
	try {
		await localPeerConnection.setLocalDescription(desc);
		setVideoParameters(localPeerConnection)
		onSetLocalSuccess(localPeerConnection);
	} catch (e) {
		onSetSessionDescriptionError();
	}

}

async function onCreateAnswerSuccess(desc) {
	console.log(`Answer from remotePeerConnection:\n${desc.sdp}`);
	console.log('remotePeerConnection setLocalDescription start');
	try {
		await remotePeerConnection.setLocalDescription(desc);
		onSetLocalSuccess(remotePeerConnection);
	} catch (e) {
		onSetSessionDescriptionError(e);
	}
}

async function localPeerOnIceCandidate(pc, event){
	console.log(`${getName(pc)} ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
	let iceState = pc.iceGatheringState
	if (iceState === 'completed' || iceState === 'complete' || (event && !event.candidate)) {
		console.log('onIceCandidate: ICE GATHERING COMPLETED')
		console.log('remotePeerConnection setRemoteDescription start');
		try {
			await remotePeerConnection.setRemoteDescription(localPeerConnection.localDescription);
			onSetRemoteSuccess(remotePeerConnection);
		} catch (e) {
			onSetSessionDescriptionError();
		}

		console.log('remotePeerConnection createAnswer start');
		// Since the 'remote' side has no media stream we need
		// to pass in the right constraints in order for it to
		// accept the incoming offer of audio and video.
		try {
			const answer = await remotePeerConnection.createAnswer();
			await onCreateAnswerSuccess(answer);
		} catch (e) {
			console.error(e)
		}
	}else if (iceState === 'failed') {
		console.log("onIceCandidate: ice state is 'failed'");
	}
}

async function remotePeerOnIceCandidate(pc, event) {
	console.log(`${getName(pc)} ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
	let iceState = pc.iceGatheringState
	if (iceState === 'completed' || iceState === 'complete' || (event && !event.candidate)) {
		console.log('onIceCandidate: ICE GATHERING COMPLETED')
		console.log('localPeerConnection setRemoteDescription start');
		try {
			await localPeerConnection.setRemoteDescription(remotePeerConnection.localDescription);
			onSetRemoteSuccess(localPeerConnection);
		} catch (e) {
			onSetSessionDescriptionError(e);
		}
	} else if (iceState === 'failed') {
		console.log("onIceCandidate: ice state is 'failed'");
	}
}

function onSetLocalSuccess(pc) {
	console.log(`${getName(pc)} setLocalDescription complete`);
}

function onSetRemoteSuccess(pc) {
	console.log(`${getName(pc)} setRemoteDescription complete`);
}

function onSetSessionDescriptionError(error) {
	console.log(`Failed to set session description: ${error.toString()}`);
}

function onIceStateChange(pc, event) {
	if (pc) {
		console.log(`${getName(pc)} ICE state: ${pc.iceConnectionState}`);
		console.log('ICE state change event: ', event);
	}
}


let localVideoStatsDiv = document.getElementById('localVideoStatus')
let remoteVideoStatsDiv = document.getElementById('remoteVideoStatus')
let bitrateDiv = document.querySelector('div#bitrate');
let peerDiv = document.querySelector('div#peer');
let bytesPrev;
let timestampPrev;

function showRemoteStats(results) {
	// calculate video bitrate
	results.forEach(function(report) {
		let now = report.timestamp;

		let bitrate;
		if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
			let bytes = report.bytesReceived;
			if (timestampPrev) {
				bitrate = 8 * (bytes - bytesPrev) / (now - timestampPrev);
				bitrate = Math.floor(bitrate);
			}
			bytesPrev = bytes;
			timestampPrev = now;
		}
		if (bitrate) {
			bitrate += ' kbits/sec';
			bitrateDiv.innerHTML = '<strong>Bitrate:</strong> ' + bitrate;
		}
	});

	// figure out the peer's ip
	let activeCandidatePair = null;
	let remoteCandidate = null;

	// Search for the candidate pair, spec-way first.
	results.forEach(function(report) {
		if (report.type === 'transport') {
			activeCandidatePair = results.get(report.selectedCandidatePairId);
		}
	});
	// Fallback for Firefox and Chrome legacy stats.
	if (!activeCandidatePair) {
		results.forEach(function(report) {
			if (report.type === 'candidate-pair' && report.selected ||
				report.type === 'googCandidatePair' &&
				report.googActiveConnection === 'true') {
				activeCandidatePair = report;
			}
		});
	}
	if (activeCandidatePair && activeCandidatePair.remoteCandidateId) {
		remoteCandidate = results.get(activeCandidatePair.remoteCandidateId);
	}
	if (remoteCandidate) {
		if (remoteCandidate.ip && remoteCandidate.port) {
			peerDiv.innerHTML = '<strong>Connected to:</strong> ' +
				remoteCandidate.ip + ':' + remoteCandidate.port;
		} else if (remoteCandidate.ipAddress && remoteCandidate.portNumber) {
			// Fall back to old names.
			peerDiv.innerHTML = '<strong>Connected to:</strong> ' +
				remoteCandidate.ipAddress +
				':' + remoteCandidate.portNumber;
		}
	}
}

// Display statistics
setInterval(function() {
	if (localPeerConnection && remotePeerConnection) {
		remotePeerConnection.getStats(null)
			.then(showRemoteStats, function(err) {
				log.info(err);
			});
	} else {
		// log.info('Not connected yet');
	}
	// Collect some stats from the video tags.
	if (localVideo.videoWidth) {
		localVideoStatsDiv.innerHTML = '<strong>Video dimensions:</strong> ' +
			localVideo.videoWidth + 'x' + localVideo.videoHeight + 'px';
	}
	if (remoteVideo.videoWidth) {
		remoteVideoStatsDiv.innerHTML = '<strong>Video dimensions:</strong> ' +
			remoteVideo.videoWidth + 'x' + remoteVideo.videoHeight + 'px';
	}
}, 1000);
