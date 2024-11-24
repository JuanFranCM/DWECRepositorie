// ***** LISTA CON PRIORIDAD *****
import { toDoPrior, TAREAS, MAX_TAREAS, resPrior } from '../Lista/js/main.js';
import { generaAleatorioEnteros} from './aleatorio.js';

export function anadoPrior() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDoPrior.tamano()); 

    if (toDoPrior.tamano() == MAX_TAREAS) {
        resPrior.innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDoPrior.enlistar(TAREAS[tarea], posicion);
        resPrior.innerHTML = "QUEDA POR HACER: <br />";
        mostrar(toDoPrior);
        
    }
}

export function eliminoPrior() {
    if (toDoPrior.tamano()>1) {
        toDoPrior.desenlistar(toDoPrior.posicionMayor().posicion);
        resPrior.innerHTML = "QUEDA POR HACER: <br />";
        mostrar(toDoPrior);
        
        
    } else if (toDoPrior.tamano()==1){
        toDoPrior.desenlistar(toDoPrior.posicionMayor().posicion);
        resPrior.innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    }
}

function mostrar(array){

    array.devolver().forEach(vehiculo => {
        resPrior.innerHTML += "<div class='elemento'>" + vehiculo + "</div>" ;

    });
    resPrior.innerHTML += "LA SIGUIENTE TAREA ES :<br />" + toDoPrior.ojear(toDoPrior.posicionMayor().posicion);
}