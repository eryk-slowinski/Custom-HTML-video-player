const video = document.querySelector('.vid');
const playPauseBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const fullscreenBtn = document.querySelector('.fullscreen');
const duration = document.querySelector('.duration');
const currentTime = document.querySelector('.time');

const videoStop = () => {
    video.currentTime = 0;
    video.pause();
    duration.value = 0;
}

const render = () => {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    currentTime.textContent = `${minutes  < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    duration.value = (video.currentTime / video.duration) * 100;
}

const updatePlayIcon = () => {
    if (video.paused) playPauseBtn.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    else playPauseBtn.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
}

const handleFullScreen = () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

const togglePlay = () => (video.paused) ? video.play() : video.pause();
const handleDuration = () => video.currentTime = video.duration * (duration.value / 100);

playPauseBtn.addEventListener('click', togglePlay);
stopBtn.addEventListener('click', videoStop);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', render);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
duration.addEventListener('change', handleDuration)
fullscreenBtn.addEventListener('click', handleFullScreen);