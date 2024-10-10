"use strict"

const cookieActual = getCookieFor("loggedIn");

if ( !(cookieActual ==="true")){

    const rutaBase =window.location.pathname.split('/');
    let posLogin = rutaBase.indexOf("DWECRepositorie");
    let rutaLogin = rutaBase.slice(0, posLogin + 1);
    const rutaDestino  = (rutaLogin).join('/') + '/index.html';

    window.location.href = rutaDestino; 
    

}
