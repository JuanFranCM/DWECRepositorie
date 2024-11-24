"use strict"

import { Lista } from '../../classes/Lista.js';
import { anado, elimino } from '../../modules/scriptLista.js';
import { anadoPrior, eliminoPrior } from '../../modules/scriptListaPrior.js';

// OBJETOS
// ***** LISTA *****
export let toDo = new Lista();
export let toDoPrior = new Lista();
export const res = document.getElementById("resLis");
export const resPrior = document.getElementById("resPrior");
export const TAREAS = ['0-📞LLAMAR', '1-🚮Tirar basura', '2-🏋️ENTRENAR', '3-🛏️Hacer cama', '4-🧽FREGAR', '5-🛒COMPRAR', '6-🧹LIMPIAR', '7-📖ESTUDIAR', '8-🚿LAVARSE', '9-🥗COMIDA'];
export const MAX_TAREAS = 10; // ¿Cuántos coches puedo tener esperando en el taller?
export let ultTarea = "";

window.onload = function () {
    // ACCIONES
    // ***** LISTA *****
    document.getElementById("anadir").addEventListener("click", anado);
    document.getElementById("eliminar").addEventListener("click", elimino);
    // ***** LISTA PRIORIDAD *****
    document.getElementById("anadirPrior").addEventListener("click", anadoPrior);
    document.getElementById("eliminarPrior").addEventListener("click", eliminoPrior);
}
