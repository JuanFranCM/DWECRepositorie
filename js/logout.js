"use strict"

const cerrarSesion = document.getElementById("logout");

cerrarSesion.addEventListener("click", function (){
    console.log("entrando en logout");

    deleteCookie("loggedIn");

    const rutaBase =window.location.pathname.split('/');
    let posLogin = rutaBase.indexOf("DWECRepositorie");
    let rutaLogin = rutaBase.slice(0, posLogin + 1);
    const rutaDestino  = (rutaLogin).join('/') + '/index.html';
    console.log(rutaDestino);
    window.location.href = rutaDestino; 

})





    
    



