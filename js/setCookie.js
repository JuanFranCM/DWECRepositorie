"use strict"

let caducidadCookie = 1* 60 * 1000;

function setCookie(name, value){
    if (navigator.cookieEnabled == true){
        
        let theDate = new Date();
        console.log(theDate);

        let currentMiliseconds = theDate.getTime();
        console.log(currentMiliseconds);

        let expirationMiliseconds = currentMiliseconds + caducidadCookie;
        console.log(expirationMiliseconds);

        theDate.setTime(expirationMiliseconds);
        console.log(theDate);

        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
        /* document.cookie = "testCookie=valorDePrueba; path=/;"; */
    }else {

        alert("Uso de cookies desactivado en este navegador");
    }

}

    
