"use strict";

async function getIndexedDB(name) {
    await openDB();

    return new Promise((resolve, reject)  =>{
        const transaction = db.transaction(['BaseDatos'], 'readonly');
        const BaseDatos = transaction.objectStore('BaseDatos');
        const request = BaseDatos.get(name);
    
        request.onsuccess = function() {
            if (request.result) {
                const valor = decodeURIComponent(request.result.valor);
                console.log(`Clave=valor -> ${name}=${valor}`);
                resolve(valor);
    
            } else {
                console.log(`No se encontró valor para la clave ${name}`);
                resolve(null);
            }
        };
    
        request.onerror = function(event) {
            console.error('Error al buscar clave:valor', event);
            reject(event);
        };
    })

}
