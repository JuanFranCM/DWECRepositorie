"use strict"

import { Lista } from './Lista.js';

export class Pila extends Lista {
    constructor() {
        super();
    }

    apilar(elemento) {
        super.enlistar(elemento, 0);
    }

    desapilar() {
        super.desenlistar(0);
    }

    vacio() {
        return super.vacio();
    }

    tamano() {
        return super.tamano();
    }

    ojear() {
        return super.ojear(0);
    }
}
