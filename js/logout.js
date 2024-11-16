"use strict"

const cerrarSesion = document.getElementById("logout");

cerrarSesion.addEventListener("click", function (){

    deleteLocalStorage("loggedIn");
    window.location.href = "./index.html"


})






