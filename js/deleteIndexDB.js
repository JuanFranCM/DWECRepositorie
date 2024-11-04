"use strict";

function deleteIndexedDB(name) {
    const transaction = db.transaction(['BaseDatos'], 'readwrite');
    const BaseDatos = transaction.objectStore('BaseDatos');
    const request = BaseDatos.delete(name);

    request.onsuccess = function() {
        console.log(`Eliminado el valor de la clave ${name}`);
    };

    request.onerror = function(event) {
        console.error('Error al eliminar el valor', event);
    };
}
