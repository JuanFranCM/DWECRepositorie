'use strict';
let datos = [];
let solicitudDB, 
    bd,
    canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";
solicitudDB = indexedDB.open(nombreBD, versionBD); 
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`); 
};
solicitudDB.onsuccess = function (event) { 
    console.info('Conexión satisfactoria'); 
    bd = event.target.result; 
};
solicitudDB.onupgradeneeded = function (event) { 
    console.info('Base de datos creada'); 
    bd = event.target.result; 
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
    registros.createIndex("nombre", "nombre", { unique: false }); // CREAMOS UN CAMPO 'nombre'
    registros.createIndex("valor", "valor", { unique: false }); // CREAMOS UN CAMPO 'clave'
    registros.createIndex("imagen", "imagen", { unique: false }); // CREAMOS UN CAMPO 'imagen'

    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }
};

mostrarDatos();


// DATOS
const nombre = document.getElementById("nombre");
const valor = document.getElementById("valor");
const imagen = document.getElementById("imagen");


// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    let urlImg = "./img/perfilaut.png";
    console.log(imagen.value);
    if(!(imagen.value=="")){
        urlImg = imagen.value;
    }
    grabarDato(nombre.value, valor.value, urlImg);

    nombre.value="";
    valor.value="";
    imagen.value="";
});


//API +1 y +5 llamado
const solicitarUsuario = document.getElementById("solUsuario");
solicitarUsuario.addEventListener("click", function(){
    usuarioApi();
});

const solicitarUsuarios = document.getElementById("solUsuarios");
solicitarUsuarios.addEventListener("click", async function(){
    let num = 5; //Variar este número para cambiar cantidad de usuarios solicitados

    for(let i = 0; i<num; i++){
        console.log("generando 1 usuario");
        await usuarioApi();
    }
    
});


async function usuarioApi(){

    await obtenerUsuario();

} 


