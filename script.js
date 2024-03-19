var audio = document.getElementById("myAudio");
var songName = document.getElementById("nazwaPiosenki");
var timeoutId;

function volumeDown() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
        resetLabel();
    }
}

function volumeUp() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
        resetLabel();
    }
}

function pause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        resetLabel();
    }
}

function resetLabel() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        if (audio.paused) {
            songName.innerHTML = "Odtwarzanie zatrzymane";
        } else {
            songName.innerHTML = "rvtrospekcja x ventisei - zilikami";
        }
    }, 5000);
}

audio.addEventListener("play", function() {
    songName.innerHTML = "rvtrospekcja x ventisei - zilikami";
    resetLabel();
});

audio.addEventListener("pause", function() {
    songName.innerHTML = "Odtwarzanie zatrzymane";
    resetLabel();
});

audio.addEventListener("volumechange", function() {
    songName.innerHTML = "Głośność: " + Math.round(audio.volume * 100) + "%";
    resetLabel();
});
