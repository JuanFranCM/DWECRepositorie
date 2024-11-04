"use strict"
let db;

openDB();
function openDB(){
    return new Promise((resolve, reject) => {

        const request = indexedDB.open('BaseDatos', 1);

        request.onerror = function(event) {
    
            reject(db);
            console.error('Error al abrir la base de datos', event);
    
        };
    
        request.onsuccess = function(event) {
    
            db = event.target.result;
            resolve(db);
            console.log('Espacio de base de datos abierto');
        };
    
    
    
        request.onupgradeneeded = function(event) {
            db = event.target.result;
    
            if (!db.objectStoreNames.contains('BaseDatos')) {
    
                db.createObjectStore('BaseDatos', { keyPath: 'nombre' });
                console.log('BD creada');
    
            }
        };

    })


}
