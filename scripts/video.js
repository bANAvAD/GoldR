const video = document.getElementById('myVideo');
const btnPlay = document.getElementById('play');
const btnMute = document.getElementById('mute');
const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('Previous');
const playlist = ['video1','video2','video3'];
var number = 0


function play(){
	console.log("Пингвин");
	if (video.paused) {
		video.play();
		btnPlay.innerHTML = 'Play'
	}
	else {
		video.pause();
		btnPlay.innerHTML = 'Pause'
	}
}

function mute(){
	if (video.muted == true) {
		video.muted = false
		btnMute.innerHTML = 'Mute'
	}
	else {
		video.muted = true
		btnMute.innerHTML = 'Unmute'
	}
}

function next(){
 	if (number == playlist.length -1) {
 		number = 0
 	}
 	else {
 		number+=1
 	}
 	video.src = `videos/${playlist[number]}.mp4`
 }

function previous(){
 	if (number == 0) {
 		number = playlist.length -1
 	}
 	else {
 		number-=1
 	}
 	video.src = `videos/${playlist[number]}.mp4`
 }


