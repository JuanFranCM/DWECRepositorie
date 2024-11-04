   
"use strict";

function setIndexedDB(name, value) {

    const transaction = db.transaction(['BaseDatos'], 'readwrite');
    const BaseDatos = transaction.objectStore('BaseDatos');
    const request = BaseDatos.put({ nombre: name, valor: encodeURIComponent(value || "") });

    request.onsuccess = function() {
        console.log(`Guardado el par clave=valor ${name}=${encodeURIComponent(value || "")}`);
    };

    request.onerror = function(event) {
        console.error('Error al guardar clave=valor', event);
    };
}

