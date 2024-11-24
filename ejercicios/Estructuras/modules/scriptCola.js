// ***** COLA *****
import { taller, MATRICULAS, AFORO_TALLER, res } from '../Cola/js/main.js';
import { generaAleatorioEnteros} from './aleatorio.js';


export function llega() {
    let matricula = generaAleatorioEnteros(0, 9);
    
    if (taller.tamano() == AFORO_TALLER) {
        res.innerHTML = "<div class='elemento'>Demasiados coches en lista de espera</div>";
    } else {
        taller.encolar(MATRICULAS[matricula]);
        res.innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />";
        
        mostrar(taller);
        
    }
}

export function atiendo() {

    if((taller.tamano() > 1)) {

        taller.desencolar();
        res.innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />" ;
        mostrar(taller);

    }else if (taller.tamano() == 1) {
        
        taller.desencolar();
        res.innerHTML = "<div class='elemento'>No hay coches en lista de espera</div>";
    } 
    
}

function mostrar(array){
    let cont = 1
    array.devolver().forEach(vehiculo => {
        res.innerHTML += "<div class='elemento'>"+cont+ "-" + vehiculo + "</div>" ;
        cont++;
    });

    if (!taller.vacio()) {
        res.innerHTML += "EL SIGUIENTE COCHE A REPARAR ES :<br />" + taller.ojear();
    }
}