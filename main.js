const video = document.querySelector('.vid');
const playPauseBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const fullscreenBtn = document.querySelector('.fullscreen');
const duration = document.querySelector('.duration');
const currentTime = document.querySelector('.time');

const togglePlay = () => (video.paused) ? video.play() : video.pause();
const handleDuration = () => video.currentTime = duration.value;

function videoStop() {
    video.load();
    duration.value = 0;
}


playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
duration.addEventListener('change', handleDuration)
stopBtn.addEventListener('click', videoStop);