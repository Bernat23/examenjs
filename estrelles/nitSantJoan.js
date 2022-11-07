window.onload = function() {
    loadDistancia();
    loadEstrelles();
    loadRadi();
    //window.addEventListener("resize", );
    document.getElementById("mostrar").addEventListener("click", () => {generarCel(); loadMostrar()});
    document.getElementsByClassName("numero")[0].addEventListener("input", () => {mostrarValors(document.getElementsByClassName("numero")); storageEstrelles();});
    document.getElementsByClassName("radi")[0].addEventListener("input", () => {mostrarValors(document.getElementsByClassName("radi"));  storageRadi();});
    document.getElementsByClassName("distancia")[0].addEventListener("input", () => {mostrarValors(document.getElementsByClassName("distancia")); storageDistancia();});
}


function storageEstrelles() {
    let estrelles = document.getElementsByClassName("numero")[0].value;
    localStorage.setItem("estrelles", estrelles);
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

function storageRadi() {
    let radi = document.getElementsByClassName("radi")[0].value;
    document.getElementsByClassName("radi")[1].innerHTML = radi;
    localStorage.setItem("radi", radi);
}

function loadRadi() {
    let radi = document.getElementsByClassName("radi")[0];
    if (localStorage.getItem("radi") == null) {
        document.getElementsByClassName("radi")[1].innerHTML = radi.value;
    } else {
        document.getElementsByClassName("radi")[1].innerHTML = localStorage.getItem("radi");
    }
    radi.value = localStorage.getItem("radi");
}

function storageDistancia() {
    let distance = document.getElementsByClassName("distancia")[0].value;
    document.getElementsByClassName("distancia")[1].innerHTML = distance;
    localStorage.setItem("distancia", distance);
}

function loadDistancia() {
    let distancia = document.getElementsByClassName("distancia")[0];
    if (localStorage.getItem("distancia") == null) {
        document.getElementsByClassName("distancia")[1].innerHTML = distancia.value;
    } else {
        document.getElementsByClassName("distancia")[1].innerHTML = localStorage.getItem("distancia");
    }
    distancia.value = localStorage.getItem("distancia");
}



class Estrella {
    constructor(x, y, radi, opacitat){
        this.x = x;
        this.y = y;
        this.radi = radi;
        this.opacitat = opacitat;
    }
}

function mostrarValors(element) {
    element[1].innerHTML = element[0].value;
}

function generarCel() {
    generarEstrelles();
}



var posicionsEstrelles = new Array();


function random(min, max) {
    return Math.random() * ((max + 1) - min) + min;
}

