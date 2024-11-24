"use strict"

import { Pila } from '../../classes/Pila.js';
import { introduzco, obtengo } from '../../modules/scriptPila.js';


// OBJETOS
// ***** PILA *****
export let colada = new Pila();
export const res = document.getElementById("res");
export const PRENDAS = ['👚CAMISA', '👖PANTALÓN', '👕CAMISETA', '🩲CALZONCILLO', '🧦CALCETINES', '🧥CHAQUETA', '🧣BUFANDA', '👢Botas', '🦺CHALECO', '🩳Bañador'];
export const CESTA_COLADA = 10;  
export let ultPrenda = "";


window.onload = function () {
    // ACCIONES
    // ***** PILA *****
    document.getElementById("introducir").addEventListener("click", introduzco);
    document.getElementById("obtener").addEventListener("click", obtengo);

}
