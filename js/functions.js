"use strict"

function mostrar(resultado) {
    console.log(`Estoy mostrando el resultado del ejercicio ${resultado.getAttribute('name')}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ejercicio ${resultado.getAttribute('name')}`;
}
