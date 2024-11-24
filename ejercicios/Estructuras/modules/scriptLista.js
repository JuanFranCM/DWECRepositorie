// ***** LISTA *****
import { toDo, TAREAS, MAX_TAREAS, res } from '../Lista/js/main.js';
import { generaAleatorioEnteros} from './aleatorio.js';

export function anado() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDo.tamano());
    console.log(toDo.devolver());

    if (toDo.tamano() == MAX_TAREAS) {
        res.innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDo.enlistar(TAREAS[tarea], posicion);
        res.innerHTML = "QUEDA POR HACER: <br />";
        
        mostrar(toDo);
    }
}


export function elimino(posicion = generaAleatorioEnteros(0, toDo.tamano()-1)) {
    console.log(toDo.devolver());

    if (toDo.tamano() > 1) {
        toDo.desenlistar(posicion);
        res.innerHTML = "QUEDA POR HACER: <br />";
        mostrar(toDo);
        
    }else if (toDo.tamano()==1) {
        toDo.desenlistar(posicion);
        res.innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    }
}


function mostrar(lista){

    lista.devolver().forEach((tarea, index )=> {
        
         let row = document.createElement("div");
         row.classList.add("elementoLista");
         row.innerHTML = tarea;
         row.addEventListener("click", function(){
             console.log(index);
             elimino(index);
         });
         res.appendChild(row);
     });
 
}