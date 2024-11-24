// ***** PILA *****
import { colada, PRENDAS, CESTA_COLADA, res } from '../Pila/js/main.js';
import { generaAleatorioEnteros} from './aleatorio.js';


export function introduzco() {
    let prenda = generaAleatorioEnteros(0, 9);

    if (colada.tamano() == CESTA_COLADA) {
        res.innerHTML = "<div class='elemento'>La cesta está hasta arriba, limpia algo</div>";
    } else {
        colada.apilar(PRENDAS[prenda]);
        res.innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />";
        console.log(colada.devolver());
        mostrar(colada);

    }
}

export function obtengo() {
    if (colada.vacio()) {
        res.innerHTML = '<div class="elemento">NO HAY ROPA QUE LAVAR</div>';
    } else {
        if (colada.tamano() == 1) {
            colada.desapilar();
            res.innerHTML = '<div class="elemento">NO HAY ROPA QUE LAVAR</div>';
        } else {
            colada.desapilar();
            res.innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />";
            mostrar(colada);
        }
    }
}

function mostrar(array){
    let cont = 1
    array.devolver().forEach(vehiculo => {
        res.innerHTML += "<div class='elemento'>"+cont+ "-" + vehiculo + "</div>" ;
        cont++;
    });
    if (!colada.vacio()) {
        res.innerHTML += "LA SIGUIENTE PRENDA A LAVAR ES :<br />" + colada.ojear();
    }
}