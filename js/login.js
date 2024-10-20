"use strict"

const correctUser = "usuario";
const correctPassword = "contraseña";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const userInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");


/**** Control de valores de login *****/

userInput.addEventListener('focus', function() {
    if(this.value == 'usuario') {
      this.value = '';
    }
  });
  
  userInput.addEventListener('blur', function() {
    if(this.value == '') {
      this.value = 'usuario';
    }
  });

  passwordInput.addEventListener('focus', function() {
    if(this.value == 'contraseña') {
      this.value = '';
    }
  });
  
  passwordInput.addEventListener('blur', function() {
    if(this.value == '') {
      this.value = 'contraseña';
    }
  });




/* Login */
submitButton.addEventListener("click", function () {

    const userValue = userInput.value;
    const passwordValue = password.value;


    // Validaciones adicionales
    const userRegex = /^.{3,}$/;
    if (!userRegex.test(userValue)) {
        alert("El usuario debe ser de al menos 3 caracteres.");
        return
    }




    if ((userValue === correctUser) && (passwordValue===correctPassword)){
        



      setLocalStorage("loggedIn", "true");

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

    




    





