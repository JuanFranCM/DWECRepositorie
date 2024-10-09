"use strict"


/*********Functions para minicalculadora*******/

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
