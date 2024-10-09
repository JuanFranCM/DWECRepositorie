"use strict"

const correctUser = "usuario";
const correctPassword = "contraseña";

const loginForm = document.getElementById("loginForm");
const mainContent = document.getElementById("contenidoCompleto");

const userInput = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");

const cerrarSesion = document.getElementById("logout");

const cookieActual = getCookieFor("loggedIn");

/* event.preventDefault(); */
if ( cookieActual ==="true"){

    /* mostrarContenido(); */
    document.getElementById("contenidoCompleto").style.display="block";

    /* ocultarLogin(); */
    document.getElementById("loginForm").style.display="none";
    
    /* document.getElementById("contenidoCompleto").style.display="block";
    document.getElementById("loginForm").style.display="none"; */

}

    /* Login */
    submitButton.addEventListener("click", function () {
        console.log("validando");

        const userValue = userInput.value;
        const passwordValue = password.value;

        if ((userValue === correctUser) && (passwordValue===correctPassword)){
            alert("Bienvenido");
            document.getElementById("contenidoCompleto").style.display="block";
            document.getElementById("loginForm").style.display="none";

            setCookie("loggedIn", "true");

        }else{
            alert("Credenciales incorrectos");
        }
    })


    /* submitButton.addEventListener("click", function () {

        const userValue = userInput.value;
        const passwordValue = password.value;

        if ((userValue === correctUser) && (passwordValue===correctPassword)){
            alert("Bienvenido");
            document.getElementById("contenidoCompleto").style.display="block";
            document.getElementById("loginForm").style.display="none";

            setCookie("loggedIn", "true");

        }else{
            alert("Credenciales incorrectos")
        }
    }) */

    

    cerrarSesion.addEventListener("click", function (){
        console.log("cerrando log");

        deleteCookie("loggedIn");
        document.getElementById("contenidoCompleto").style.display="none";
        document.getElementById("loginForm").style.display="block";
        


    })



    





