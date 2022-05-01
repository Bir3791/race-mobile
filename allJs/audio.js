volumeContainer.addEventListener("mousedown", controlAudio);

function controlAudio() {
    volumeControls[0].classList.toggle("hidden");
    volumeControls[1].classList.toggle("hidden");
    if (volumeControls[0].classList.contains("hidden")) {
        Audio.play();
        Audio.playbackRate = 0.8;
        Audio.volume = 0.2;
        console.log(Audio.volume);
    } else {
        Audio.pause();
    }
}

