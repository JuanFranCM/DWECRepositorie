"use strict"

let caducidadCookie = 1* 60 * 1000;

function setCookie(name, value){
    if (navigator.cookieEnabled == true){
        
        let theDate = new Date();

        let currentMiliseconds = theDate.getTime();

        let expirationMiliseconds = currentMiliseconds + caducidadCookie;

        theDate.setTime(expirationMiliseconds);

        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
    }else {

        alert("Uso de cookies desactivado en este navegador");
    }

}

    
