/*****************Scripts para conversor de bases*******************/

/**
 * valores
 */
const valor = document.getElementById("valor");
const resultado = document.getElementById("resultado")

/**
 * Botones de acción
 */
const binario = document.getElementById("binario");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");


/**
 * Listeners
 */
binario.addEventListener("click", function(){
    resultado.innerHTML=parseInt(valor.value).toString(2)
})

octal.addEventListener("click", function(){
    resultado.innerHTML=parseInt(valor.value).toString(8)
})

hexadecimal.addEventListener("click", function(){
    resultado.innerHTML=parseInt(valor.value).toString(16)
})
