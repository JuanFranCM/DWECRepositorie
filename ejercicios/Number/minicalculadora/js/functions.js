"use strict"


/*********Functions para minicalculadora*******/



function selectorOperador (operador) {
    /**
    * valores HTML
    */
    const valor1 = document.getElementById("valor1");
    const valor2 = document.getElementById("valor2");
    const resultado = document.getElementById("resultado");

    const id = operador.id;
    let resultadoActual = Number(resultado.textContent);


    if (!((id == "entera")||(id=="decimal"))){
        resultado.innerHTML = `${(operar(parseFloat(valor1.value), parseFloat(valor2.value), id)).toFixed(5)}`;

        return;
    }


    if (id == "entera"){
        valor1.value = `${operar(parseFloat(resultadoActual), parseFloat(0), id)}`;
        return;
    }


    if (id=="decimal"){
        valor2.value = `${operar(parseFloat(resultadoActual), parseFloat(0), id)}`;
        return;
    }
}




function operar(a, b, operacion){

    let resultado = 0;

    switch (operacion){
        case "sumar": resultado = a+b;
            break;

        case "restar": resultado = a-b;
            break;

        case "multiplicar": resultado = a*b;
            break;

        case "dividir": resultado = a/b;
            break;

        case "resto": resultado = a%b;
            break;

        case "factorial": 
            if (a >= 0){
                resultado = 1;
                for (let contador = 1; contador <= a; contador++){
                    resultado *= contador;
                }
            }else {
                alert ("No se puede hacer factorial de un número negativo");
            }

            break;

        case "entera":
            resultado = Math.trunc(a);
            break;

        case "decimal":
            resultado= parseFloat("0."+ a.toString().split(".")[1]);

        
        
    }

    return resultado;
}



