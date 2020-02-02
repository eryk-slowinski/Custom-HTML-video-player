const video = document.querySelector('.vid');
const playPauseBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const fullscreenBtn = document.querySelector('.fullscreen');
const duration = document.querySelector('.duration');
const currentTime = document.querySelector('.time');

const togglePlay = () => (video.paused) ? video.play() : video.pause();
const handleDuration = () => video.currentTime = video.duration * (duration.value / 100);
const durationUpdate = () => duration.value = (video.currentTime / video.duration) * 100;
const handleFullScreen = () => (!document.fullscreenElement) ? video.requestFullscreen() : document.exitFullscreen();

const videoStop = () => {
    video.load();
    console.log(video.currentTime);
    console.log(duration.value);
    duration.value = 0;
}

const handleTime = () => {
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    currentTime.textContent = `${minutes  < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

playPauseBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', () => {
    durationUpdate();
    handleTime();
});
duration.addEventListener('change', handleDuration)
stopBtn.addEventListener('click', videoStop);
fullscreenBtn.addEventListener('click', handleFullScreen);