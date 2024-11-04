"use strict"

const dimension = document.getElementById("dimensiones");

const MA = document.getElementById("MA");
const MB = document.getElementById("MB");
const Resultado = document.getElementById("Resultado");

let matrizA = [];
let matrizB = [];


function selectorOperador (operador) {

    let dimensionesMatriz = parseInt(dimension.value);
    
    const id = operador.id;
    
    if(!(id=="generar")){
        console.log("diferente a operar");
        Resultado.replaceChildren(mostrarMatriz(operar(id, matrizA, matrizB)));
        return;
    }

    if(id=="generar"){
        console.log("generando matrices");
        matrizA = crearMatriz(dimensionesMatriz);
        matrizA = rellenarMatriz(matrizA);
        MA.replaceChildren(mostrarMatriz(matrizA));

        matrizB = crearMatriz(dimensionesMatriz);
        matrizB = rellenarMatriz(matrizB);
        MB.replaceChildren(mostrarMatriz(matrizB));

        return;
    }

}