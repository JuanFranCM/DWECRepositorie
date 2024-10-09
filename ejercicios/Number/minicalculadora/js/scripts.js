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
        const id = operador.id;
        let resultadoActual = Number(resultado.textContent);
        console.log(id);

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

        

    })
})


