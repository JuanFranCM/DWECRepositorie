'use strict';

function grabarDato(nombre, valor, imagen) {

    if (!(nombre=="" || valor =="")){
        console.log("Grabando datos...");
        solicitudDB = indexedDB.open(nombreBD, versionBD);
        solicitudDB.onerror = function (event) {
            console.error(`IndexedDB error: ${event.target.errorCode}`);
        };
        solicitudDB.onsuccess = function (event) {
            bd = event.target.result;
            canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
            canalBD.put({ nombre, valor, imagen });
        };
        mostrarDatos();
    }else{
        alert("Debe introducir un nombre y un valor obligatoriamente")
    }
}