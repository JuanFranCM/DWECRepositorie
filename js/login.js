"use strict"

const correctUser = "usuario";
const correctPassword = "contraseña";

const loginForm = document.getElementById("loginForm");
const mainContent = document.getElementById("contenidoCompleto");

const userInput = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = loginForm.querySelector('input[type="button"]');

submitButton.addEventListener("click", function () {

    const userValue = userInput.value;
    const passwordValue = password.value;

    if ((userValue === correctUser) && (passwordValue===correctPassword)){
        alert("Bienvenido");
        document.getElementById("contenidoCompleto").style.display="block";
        document.getElementById("loginForm").style.display="none";

    }else{
        alert("Credenciales incorrectos")
    }
})



    





