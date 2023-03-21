//pega o canvas
/*const canvas = document.querySelector('canvas');*/
var canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


let zeroCounter = 0
let oneCounter = 0
function sortColors(){
    var r = Math.floor(Math.random() * 2); //rgb random
    var g = Math.floor(Math.random() * 2); //rgb random
    var b = Math.floor(Math.random() * 2); //rgb random
    var cores = [r, g, b] // array

    for(i = 0; i < 2; i++) {
        if(cores[i] == 0) {
            zeroCounter++
        } else if(cores[i] == 1){
            cores[i] = 255
            oneCounter++
        }
        if(zeroCounter == 3){
            const sorteador0 = Math.floor(Math.random() * cores.length)
            cores[sorteador0] = 255
            zeroCounter = 0
        }
        if(oneCounter == 3){
            const sorteador1 = Math.floor(Math.random() * cores.length)
            cores[sorteador1] = 0
            oneCounter = 0
        }
    }
    return(cores)
}
// sortColors() = Retornar o valor de "Cores"




// Variáveis para a circunferência (não é círculo é circunferenciaaaawka iwhgaoishnaoiwgyhnaoi0phn)
const numCircles = Math.floor(Math.random() * 188)

//vários circulos
for(w = 1; w < numCircles; w++){
    //posição aleatória
    var posX = Math.floor(Math.random() * canvas.clientWidth)
    var posY = Math.floor(Math.random() * canvas.clientHeight)
    //desenho da circunferênciaaa
    ctx.fillStyle = `rgba(${sortColors()}, 0.2)`
    ctx.strokeStyle = `rgba(${sortColors()}, 0.2)`
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(posX, posY, 80, 0, 2 * Math.PI);
    // ctx.arc(posX / 2, posY / 2, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}



/*
 var dataURL = canvas.toDataURL("image/png");
$('blog').setStyle('background-image', 'url(' + dataURL + ')');

$('blog').setStyle({'background':"url(" + canvas.toDataURL("image/png")+ ")" });*/