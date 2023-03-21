function sleep(time){
    const date = Date.now();
    let currentDate = null;
    do{
        currentDate = Date.now();
    } while (currentDate - date < time);

}

const button = document.getElementById('button')
function audio(texto) {
    const textBox = document.getElementById('text').value;
    const array = getNotes(textBox)
    let timer = 0
    
    const thisInterval = setInterval(() => {
        if (timer <= array.length && array[timer] != undefined){
            console.log(array[timer])
            console.log(timer)
            array[timer].play()
            timer++
        } else{
            timer = 0
            clearInterval(thisInterval);
        }
    },
         175);

    

function getNotes(textBox){
    const array = []
    if(textBox.length != 0){
        for(i = 0; i < textBox.length; i++){
            let letter = textBox.charAt(i)
            let plays = new Audio(`audios/${letter}.wav`)
            let audio = array.push(plays)
        }
        return array
}
}
}

button.addEventListener('click', audio);