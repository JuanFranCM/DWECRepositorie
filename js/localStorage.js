"use strict"

const loggedIn = getLocalStorage("loggedIn")

 if ( !(loggedIn ==="true")){

    const rutaBase =window.location.pathname.split('/');
    let posLogin = rutaBase.indexOf("ejercicios");
    let rutaLogin = rutaBase.slice(0, posLogin);
    const rutaDestino  = (rutaLogin).join('/') + '/index.html';

    window.location.href = rutaDestino; 
    

} 
