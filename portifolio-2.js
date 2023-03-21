//Query selector ebaaaaa
const paragrafo = document.querySelector('p');
const butao = document.querySelector('button');

paragrafo.innerHTML = 'vai aparecer uma nota musical aqui';

//array das notas musicas
var cMaior = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

//função bobobo!!!
function bobobo() {
    //meu primeiro loop :))
    for (i = 0; i < cMaior.length; i++) {
        var sortear = Math.ceil(Math.random() * i)
        var socorro = cMaior[sortear]
        paragrafo.innerHTML = socorro;
    }
    var meuAudio = new Audio('xylophone/' + socorro + '.wav');
    meuAudio.play();
}

butao.addEventListener('click', bobobo)