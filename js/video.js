var video;

// Initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay turned off");
	video.loop = false;
	console.log("Loop turned off");
});

// Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Updated volume information");
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Video playback speed is " + video.playbackRate);
});

// Increase the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Video playback speed is " + video.playbackRate);
});

// Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video. Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current video timestamp is " + video.currentTime);
});

// Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video muted");
	}
});

// Change the volume based on the slider and update the volume information
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume changed to " + video.volume * 100 + "%");
});

// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	if(!video.classList.contains("oldSchool")){
		video.classList.add("oldSchool");
		console.log("Video is playing in old school mode");
	}
});

// Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
	if(video.classList.contains("oldSchool")){
		video.classList.remove("oldSchool");
		console.log("Video is playing in original mode");
	}
});