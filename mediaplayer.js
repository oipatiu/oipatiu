const play = document.getElementById('play');
const pause = document.getElementById('pause');
const barra = document.getElementById('barra');
const durations = document.getElementById('duration');
const myAudio = new Audio('songie.ogg');

function playAudio () {
    myAudio.play();
    durations.textContent = minutos(Math.floor(myAudio.duration));
}

function pauseAudio() {
    myAudio.pause();
}

function duracao() {
    let progresso = document.querySelector('progress');
    progresso.style.width = Math.floor((myAudio.currentTime / myAudio.duration) * 100) + "%";
    let decorrer = document.getElementById('initialDuration');
    decorrer.textContent = minutos(Math.floor(myAudio.currentTime));
}

function minutos(segundos) {
    let min = Math.floor(segundos / 60);
    let sec = segundos % 60;
    if (sec < 10) {
        sec = '0' + sec;
    }
    return min+':'+sec;
}

myAudio.addEventListener('timeupdate', duracao)
play.addEventListener('mousedown', playAudio)
pause.addEventListener('mousedown', pauseAudio)