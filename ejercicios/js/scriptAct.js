"use strict"
/*****************Script minicalculadora y String modText y modTextAPI*******************/



/**
 * Botones de acción
 */
const operadores = document.getElementsByClassName("operador");
const operadoresArray = Array.from(operadores);



/**
 * Event Listener
 */
operadoresArray.forEach(operador => {
    operador.addEventListener("click", function () {
    
        selectorOperador(operador);

    })
})


