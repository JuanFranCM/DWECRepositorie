'use strict';

let datosAcceso = []; 


const nombre = document.getElementById("nombre"); 
const valor = document.getElementById("valor"); 
const grabar = document.getElementById("guardar"); 

mostrarDatos(); // muestro el contenido
grabar.addEventListener("click", function (evento) { 
    grabarDato(nombre.value, valor.value);
});
