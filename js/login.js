"use strict"

const correctUser = "usuario";
const correctPassword = "contraseña";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const userInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");


/* Login */
submitButton.addEventListener("click", function () {

    const userValue = userInput.value;
    const passwordValue = password.value;

    if ((userValue === correctUser) && (passwordValue===correctPassword)){
        alert("Bienvenido");
        
        setCookie("loggedIn", "true");

        loginMessage.style.color = "green";
        loginMessage.innerText = "Bienvenido";


        userInput.disabled = true;
        passwordInput.disabled = true;
        submitButton.disabled = true;

        setTimeout(function () {
            window.location.href = "./ejercicios/index.html"; 
        }, 2000);


    }else{
        loginMessage.style.color = "red";
        loginMessage.innerText = "Credenciales incorrectas";
    }
})


/**
 * Impedir retorno tras salir de logout
 */

window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function () {

    window.location.href = "#";
});

    




    





