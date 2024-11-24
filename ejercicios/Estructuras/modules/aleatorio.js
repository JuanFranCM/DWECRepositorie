"use strict"

export function generaAleatorioEnteros(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior);
}

