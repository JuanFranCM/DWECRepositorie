"use strict"

function crearMatriz(dimensiones){

    let matriz = [];

    for (let fila=0; fila< dimensiones; fila++){
        matriz[fila]=[];
    
    }

    for (let fila=0; fila< dimensiones; fila++){
        
        for (let columna = 0; columna<dimensiones; columna++){
            matriz[fila][columna] = 0;
        }
    }

    console.log(matriz);

    return matriz;


    
}

function rellenarMatriz(matriz){
    console.log("rellenando matriz");

    for (let fila=0; fila< matriz.length; fila++){
        
        for (let columna = 0; columna<matriz.length; columna++){
            matriz[fila][columna] = valorAleatorio(10, 100);
        }
    }
    console.log(matriz);
    return matriz;

}

function valorAleatorio(min, max){
    console.log("Valor Al");
    let valor = Math.floor(Math.random()*(max-min) + min);
    console.log(valor);
    console.log(max);
    console.log(min);
    return valor;
}



function mostrarMatriz(matriz){
    let tabla = document.createElement("table");
    console.log("estoy mostrando la matriz");
    for (let fila=0; fila< matriz.length; fila++){
        let filaHtml = document.createElement("tr");
        
        for (let columna = 0; columna<matriz.length; columna++){
            let contenido = document.createTextNode(matriz[fila][columna]);

            let columnaHtml = document.createElement("td");

            columnaHtml.appendChild(contenido);
            filaHtml.appendChild(columnaHtml);
        }

        tabla.appendChild(filaHtml);
    }

    return tabla;

}



function operar(id, matrizA, matrizB){

    let matrizResultado = [];
    console.log("operar");

    switch(id){
        case "sumar":
            console.log("presuma");
                matrizResultado = sumarMatrices(matrizA, matrizB);
            break;

        case "restar":
            matrizResultado = restarMatrices(matrizA, matrizB);
            break;

        case "multiplicar":
            matrizResultado = multiplicarMatrices(matrizA, matrizB);
            break;
    }

    return matrizResultado;

}

function sumarMatrices(matrizA, matrizB){
    console.log("sumando");

    let matrizTemp = crearMatriz(matrizA.length);


    for (let fila=0; fila < matrizA.length; fila++){
        
        for (let columna = 0; columna< matrizB.length; columna++){
            matrizTemp[fila][columna] = matrizTemp[fila][columna] + (matrizA[fila][columna] + matrizB[fila][columna]) ;
        }
    }

    return matrizTemp;
    

}

function restarMatrices(matrizA, matrizB){


    let matrizTemp = crearMatriz(matrizA.length);


    for (let fila=0; fila < matrizA.length; fila++){
        
        for (let columna = 0; columna< matrizB.length; columna++){
            matrizTemp[fila][columna] = matrizTemp[fila][columna] + (matrizA[fila][columna] - matrizB[fila][columna]) ;
        }
    }


    return matrizTemp;

}

function multiplicarMatrices(matrizA, matrizB){


    
    let matrizTemp = crearMatriz(matrizA.length);


    for (let i=0; i < matrizA.length; i++){
        
        for (let j = 0; j< matrizB.length; j++){

            for(let k = 0; k < matrizA[i].length; k++){

                matrizTemp[i][j] = matrizTemp[i][j] + (matrizA[i][k] * matrizB[k][j]) ;
            }

        }
    }


    return matrizTemp;

}





