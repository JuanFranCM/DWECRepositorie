"use strict"

function deleteCookie(name){
    let theDate = new Date();
    let currentMiliseconds = theDate.getTime();
    let expirationMiliseconds = currentMiliseconds - caducidadCookie;
    theDate.setTime(expirationMiliseconds);

    let cookieString = document.cookie.split("; ")

    for (let i = 0; i< cookieString.length; i++){
        let cookie = cookieString[i].split("=");

        if(decodeURIComponent(cookie[0]) == name){
            console.log(cookie[1]);
            document.cookie = encodeURIComponent(name) + "=;expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
        }
    }
}

/* window.location.href="" */