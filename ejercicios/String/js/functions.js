"use strict"


/*********Functions para modText y modTextAPI*******/
const textoForm = document.getElementById("texto");

function selectorOperador (operador) {
    
    const id = operador.id;
    

    


    if (!((id == "random")||(id=="stop")||(id=="fast")||(id=="slow"))){
        operar(id);
        return;
    }
    
    if (((id == "random")||(id=="stop")||(id=="fast")||(id=="slow"))){

        random(id);
    }


}





function operar(operacion){
    const vocalesMinus = "aeiouáéíóú";
    const vocalesMayus = "AEIOUÁÉÍÓÚ";
    let texto = textoForm.value

    let resultado = "";
    

    switch (operacion){
        case "upperAll": resultado = texto.toUpperCase();
            break;

        case "lowerAll": resultado = texto.toLowerCase();
            break;

        case "upperFirst": 
            resultado = texto.split(' ')
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
            .join(' ');
            break;

        case "upperLast": ;
            resultado = texto.split(' ')
            .map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase())
            .join(' ');
            break;

        case "lowerFirst": 
            resultado = texto.split(' ')
            .map(palabra => palabra.charAt(0).toLowerCase() + palabra.slice(1))
            .join(' ');
            break;

        case "lowerLast": ;
            resultado = texto.split(' ')
            .map(palabra => palabra.slice(0, -1) + palabra.slice(-1).toLowerCase())
            .join(' ');
            break;

        case "upperVocal": 
            resultado = texto.split("")
            .map(letra => vocalesMinus.includes(letra) ? letra.toUpperCase():letra)
            .join("");
            break;

        case "minusVocal": 
            resultado = texto.split("")
            .map(letra => vocalesMayus.includes(letra) ? letra.toLowerCase():letra)
            .join("");
            
            break;

        case "upperConst": 
            resultado = texto.split("")
            .map(letra => !(vocalesMinus.includes(letra))? letra.toUpperCase():letra)
            .join("");
            break;

        case "lowerConst": 
            resultado = texto.split("")
            .map(letra => !(vocalesMayus.includes(letra))? letra.toLowerCase():letra)
            .join("");
            break;

    }
    console.log(resultado);
    textoForm.value= resultado;
}


function random(operacion){


    switch (operacion){
        case "random": 
            intervalo(3000);
            break;

        case "stop": 
            clearInterval(randomCall);
            break;

        case "fast": 
            intervalo(1000);
            break;


        case "slow": 
            intervalo(5000);
            break;


    }

}

let intervaloCreado;
let randomCall;
function intervalo(milliseconds){
    
    if (intervaloCreado){
        clearInterval(randomCall);
    }
    
    randomCall = setInterval(llamadaAleatoria, milliseconds);
    intervaloCreado = true;

    
}


const tablaOperadores=[
    "upperAll",
    "lowerAll",
    "upperFirst",
    "upperLast",
    "lowerFirst",
    "lowerLast",
    "upperVocal",
    "minusVocal",
    "upperConst",
    "lowerConst"
];

function llamadaAleatoria(){
    let numAl = Math.floor(Math.random()*10);
    console.log(numAl);
    operar(tablaOperadores[numAl]);
}

