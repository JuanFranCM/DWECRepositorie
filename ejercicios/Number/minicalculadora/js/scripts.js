/*****************Scripts para minicalculadora*******************/

/**
 * valores HTML
 */
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado")

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


