'use strict';

function grabarDato(name, value) {
    if (!(name=="" || value =="")){
        console.log("Grabando dato...");
        datosAcceso.push({
            nombre: name,
            valor: value
        });


        sessionStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); 

    }
}
