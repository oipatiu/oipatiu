const myAudio = new Audio('music.ogg')
function playAudio(){
    const text = document.getElementById('status');
    stopAudio()
    myAudio.play()
    text.textContent = 'Audio is playing.'
}
function stopAudio(){
    const text = document.getElementById('status');
    text.textContent = 'Audio stopped.'
    myAudio.pause();
    myAudio.currentTime = 0;
}
function pauseAudio(){
    const text = document.getElementById('status');
    text.textContent = 'Audio paused.';
    myAudio.pause();
}
function getMousePos(event){
    const div = document.getElementById('div1')
    x = event.clientX;
    if(x <= 100){
        div.textContent =  `Volume: ${event.clientX} ?`
    }
}
function setVolume(event){
    const myvolume = event.clientX / 100
    if(myvolume <= 1){
        const canvas = document.getElementById("volumeCanvas")
        const ctx = canvas.getContext('2d');
        ctx.reset();
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, x, 25);
        myAudio.volume = myvolume
    } else{
        myAudio.volume = 1
        const canvas = document.getElementById("volumeCanvas")
        const ctx = canvas.getContext('2d');
        ctx.reset();
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 100, 25);
    }
    
} 
