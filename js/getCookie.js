"use strict"


function getCookieFor(name) {
    console.log("hola");
    console.log(document.cookie);
    let cookies = document.cookie.split("; ");
    console.log(cookies);

    console.log("ESTOY EN EL for");
    for (let i = 0; i < cookies.length; i++) {
        console.log(`Esta es la cookie: ${i}`);
        let cookie = cookies[i].split("=");
        console.log(cookie);
        if (decodeURIComponent(cookie[0]) == name) { 
            return decodeURIComponent(cookie[1]); 
        }
    }
}
