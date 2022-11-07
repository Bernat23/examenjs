window.onload = function () {
    resizeCanvas();
    loadEstrelles();
    generarEstrelles();
    mostrarEstrelles();
    moviment();
    document.getElementsByClassName("numero")[0].addEventListener("input", () => {mostrarValors(document.getElementsByClassName("numero")); restar();});
}

class Estrella {
    constructor(x, y, radi, opacitat){
        this.x = x;
        this.y = y;
        this.radi = radi;
        this.opacitat = opacitat;
    }
}

function restar() {
    guardat = parseInt(localStorage.getItem("estrelles"));
    nEstrelles = parseInt(document.getElementsByClassName("numero")[0].value);
    if(guardat > nEstrelles) {
        for(let i = 0; i < guardat - nEstrelles; i++){
            posicionsEstrelles.pop();
        }
    } else {
        let nit = document.getElementById("nit");
        for(let i = 0; i < nEstrelles - guardat; i++){
            estrella = new Estrella();
            estrella.radi = midaEstrella();
            do {
                estrella.x = random(0,nit.width);
                estrella.y = random(0,nit.height);
            } while(!posicioCorrecte(estrella, posicionsEstrelles));
            estrella.opacitat = random(0.3, 1);
            posicionsEstrelles.push(estrella);
        }
    }
    localStorage.setItem("estrelles", document.getElementsByClassName("numero")[0].value);
    mostrarEstrelles();
}

function midaEstrella() {
    return Math.floor(Math.random() * localStorage.getItem("radi")) + 1;
}



function resizeCanvas() {
    let nit = document.getElementById("nit");
    nit.width = window.innerWidth -  120;
    nit.height = window.innerHeight - 100;
}

function loadEstrelles() {
    let estrelles = document.getElementsByClassName("numero")[0];
    if (localStorage.getItem("estrelles") == null) {
        document.getElementsByClassName("numero")[1].innerHTML = estrelles.value;
    } else {
        document.getElementsByClassName("numero")[1].innerHTML = localStorage.getItem("estrelles");
    }
    estrelles.value = localStorage.getItem("estrelles");
}

function mostrarValors(element) {
    element[1].innerHTML = element[0].value;
}

var posicionsEstrelles = new Array();


function generarEstrelles() { 
    let nit = document.getElementById("nit");
    let ctx = nit.getContext("2d");
    for(let i = 0; i < document.getElementsByClassName("numero")[0].value; ++i){
        estrella = new Estrella();
        estrella.radi = midaEstrella();
        do {
            estrella.x = random(0,nit.width);
            estrella.y = random(0,nit.height);
        } while(!posicioCorrecte(estrella, posicionsEstrelles));
        estrella.opacitat = random(0.3, 1);
        posicionsEstrelles[i] = estrella;
    }
    mostrarEstrelles();
}

function mostrarEstrelles() {
    let nit = document.getElementById("nit");
    var ctx = nit.getContext("2d");
    let estrelles = document.getElementsByClassName("numero")[0].value;
    ctx.clearRect(0, 0, nit.width, nit.height);
    for(let i = 0; i < estrelles - 1; ++i) {
        estrella = posicionsEstrelles[i];
        console.log(estrella + "  " + i);
        ctx.beginPath();
        ctx.arc(estrella.x, estrella.y, estrella.radi, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = estrella.opacitat;
        ctx.fillStyle = randomColors();
        ctx.fill();
        ctx.stroke();
    }
}


function random(min, max) {
    return Math.random() * ((max + 1) - min) + min;
}

function posicioCorrecte(estrella, posicionsEstrelles) {
    for(let i = 0; i < posicionsEstrelles.length; i++) {
        let distancia = Math.sqrt((estrella.x - posicionsEstrelles[i].x) ** 2 +(estrella.y - posicionsEstrelles[i].y)**2) ;
        if(distancia < parseInt(localStorage.getItem("distancia")) + estrella.radi + posicionsEstrelles[i].radi) {
            return false;
        }
    }
    return true;
}

function moviment() {
    document.getElementsByTagName('button')[0].addEventListener('click',() => input(1));
    document.getElementsByTagName('button')[1].addEventListener('click',() =>input(-1));
}

function input() {
    document.getElementsByTagName("input")[0].value;
}

function moureEstrelles(num){
    document.getElementsByTagName("input")[0].value = document.getElementsByTagName("input")[0].value + num;
    moureFinal();
}

function moureFinal() {
    for(let i = 0; i < posicionsEstrelles.length; i++) {
        posicionsEstrelles[i].x += document.getElementsByTagName("input")[0].value;
        posicionsEstrelles[i].y += document.getElementsByTagName("input")[0].value;
    }
    mostrarEstrelles();
}

function randomColors(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    if(color === '#000000'){
        randomColors();
    }
    return color;
}
