window.onload = function carregarElements() {
    let colors = ["vermell","groc","rosa","verd","negre"];
    colors.sort();
    let dropdown = document.createElement("select");
    for(let i=0;i<colors.length;i++){     
        let opt = document.createElement("option"); 
        opt.text = colors[i];
        opt.value = colors[i];
        dropdown.options.add(opt);      
    }
    let container=document.getElementById("dropdown-container");
    container.appendChild(dropdown);
    crearDesplegable();
    document.getElementsByName("codi")[0].addEventListener("input", () => {codi();});
    document.getElementsByClassName("edifici")[0].addEventListener("input", () => {edifici();});
    document.getElementsByName("ubi")[0].addEventListener("input", () => {passadis();}); 
    document.getElementsByName("ubi")[1].addEventListener("input", () => {estanteria();});
    document.getElementsByName("ubi")[2].addEventListener("input", () => {forat();});
    document.getElementById("donarAlta").addEventListener("click", () => {comprovarExpressions();});
    document.getElementsByTagName("select")[0].addEventListener("change", codi);
    document.getElementsByName("mides")[0].addEventListener("inputs", sumaMides);
    document.getElementsByName("mides")[1].addEventListener("input", sumaMides);
    document.getElementsByName("mides")[2].addEventListener("input", sumaMides);
}

function crearDesplegable(){
    let poblacions = ['joanetes','hostalets','olot','torello','manlleu','sant feliu','les preses','el mallol'];
    let desplegable = document.createElement("select");
    for(let i=0;i<poblacions.length;i++){     
        let pob = document.createElement("option"); 
        pob.text = poblacions[i];
        pob.value = poblacions[i];
        desplegable.options.add(pob);      
    }
    document.getElementsByClassName("examen")[0].appendChild(desplegable);
}

function canviarImatgeUbicacio(num){
    document.getElementsByClassName("ubicacio")[num].src ="tick.png";
}

function canviarImatgeUbicacioX(num){
    document.getElementsByClassName("ubicacio")[num].src ="creu.png";
}

function sumaMides() {
    let midesCorrectes = true;
    let amplada = document.getElementsByName("mides")[0].value;
    let llargada = document.getElementsByName("mides")[1].value;
    let altura = document.getElementsByName("mides")[2].value;
    if(amplada <= 0 || llargada <= 0 || altura <= 0) {
        midesCorrectes = false;
        document.getElementsByName("numeros")[0].innerHTML = "";
    } else {
        let mida = amplada + 'x' + llargada + 'x' + altura;
        document.getElementsByName("numeros")[0].innerHTML = mida;
    }
}

function codi() {
    let a = document.getElementsByName("codi")[0].value.charAt(10);
        switch(a) {
            case "0":
                lletraCodi ="A";
                break;
            case "1":
                lletraCodi ="X";
                break;
            case "2":
                lletraCodi = "M";
                break;
            case "3":
                lletraCodi = "T";
                break;
            case "4":
                lletraCodi = "B";
                break;
            case "5":
                lletraCodi = "C";
                break;
            case "6":
                lletraCodi = "S";
                break;
            case "7":
                lletraCodi = "O";
                break;
            case "8":
                lletraCodi = "P";
                break;
            case "9":
                lletraCodi = "Z";
                break;
        }
        let primeresLletres = document.getElementsByTagName("select")[0].value.slice(0,3);
    let regCodi1 = new RegExp(`^${primeresLletres}`, "i");
    let regCodi2 = new RegExp(`-[0-9]{7}-${lletraCodi}{1}$`);
    if(regCodi1.test(document.getElementsByName("codi")[0].value) && regCodi2.test(document.getElementsByName("codi")[0].value)){
        document.getElementById("imgCodi").src = "tick.png";
        
    } else {
        document.getElementById("imgCodi").src = "creu.png";
    }
}

function edifici() {
    let primeresLletres = document.getElementsByTagName("select")[1].value.slice(0,5);
    let regEdifici = new RegExp(`^${primeresLletres}`);
    let regEdifici2 = new RegExp(/\+[0-9]{3}\.[a-z]{2}$/);
    if(regEdifici.test(document.getElementsByClassName('edifici')[0].value) && regEdifici2.test(document.getElementsByClassName('edifici')[0].value)){
        canviarLabel('correcte');
    } else {
        canviarLabel('incorrecte');
    }
}

function canviarLabel(paraula){
    document.getElementsByClassName('comprovar')[0].innerHTML = paraula;
}

function passadis(){
    let regPas = new RegExp(/^P\-[0-9]{2}\-[de]{1}$/);
    if(regPas.test(document.getElementsByName("ubi")[0].value)){
        canviarImatgeUbicacio(0);
    } else {
        canviarImatgeUbicacioX(0);
    }
}

function forat(){
    let regFor = new RegExp(/^[0-9]{2}\*[a-zA-Z]{3}\*[0-9]{2}\\[0-9]{2}$/);
    if(document.getElementsByName("ubi")[2].value.match(regFor)){
        canviarImatgeUbicacio(2);
    } else {
        canviarImatgeUbicacioX(2);
    }
}

function estanteria(){
    let regEst = new RegExp(/^EST\+[0-9]{2}\.[0-9]{2}$/);
    if(regEst.test(document.getElementsByName("ubi")[1].value)){
        canviarImatgeUbicacio(1);
    } else {
        canviarImatgeUbicacioX(1);
    }
}

function comprovarExpressions(){
    let regCorrectes = false;
    if(document.getElementsByClassName("ubicacio")[0].src =="file:///C:/Users/Bernat/Desktop/INSTI_ASSIGNATURES/2DAW/Assignatura%20boada/tick.png" && document.getElementsByClassName("ubicacio")[1].src =="file:///C:/Users/Bernat/Desktop/INSTI_ASSIGNATURES/2DAW/Assignatura%20boada/tick.png" && document.getElementsByClassName("ubicacio")[2].src =="file:///C:/Users/Bernat/Desktop/INSTI_ASSIGNATURES/2DAW/Assignatura%20boada/tick.png" && document.getElementById("imgCodi").src == "file:///C:/Users/Bernat/Desktop/INSTI_ASSIGNATURES/2DAW/Assignatura%20boada/tick.png") {
        mostrarProducte();
    }
}

function mostrarProducte() {
    if(document.getElementsByName("numeros")[0].innerHTML != "" ){
        document.getElementsByName("final")[0].innerHTML = "familia:" + document.getElementsByTagName("select")[0].value + "<br>codi:" + document.getElementsByName("codi")[0].value + "<br>nom:" + document.getElementsByName("nom")[0].value + "<br>caracteristiques:" + document.getElementsByName("numeros")[0].innerHTML + "<br>ubicació:<br> passadís:" + document.getElementsByName("ubi")[0].value + "<br>estanteria:" + document.getElementsByName("ubi")[1].value + "<br>forat:" + document.getElementsByName("ubi")[2].value;    
    } else {
        document.getElementsByName("final")[0].innerHTML = "";
    }
}