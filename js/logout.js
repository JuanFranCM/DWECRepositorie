"use strict"

checkLoggin();

async function checkLoggin(){

    const loggedIn = await getIndexedDB("loggedIn");


    return new Promise(() =>{

        
        if ( !(loggedIn ==="true")){

            const rutaBase =window.location.pathname.split('/');
            let posLogin = rutaBase.indexOf("DWECRepositorie");
            let rutaLogin = rutaBase.slice(0, posLogin + 1);
            const rutaDestino  = (rutaLogin).join('/') + '/index.html';
        
            window.location.href = rutaDestino; 
            
        
        }
        

    });
}


const cerrarSesion = document.getElementById("logout");

cerrarSesion.addEventListener("click", function (){

    deleteIndexedDB("loggedIn");
    window.location.href = "./index.html";


})







