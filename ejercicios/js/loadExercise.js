"use strict";

function loadExercise(exercise) {
  const mainContent = document.getElementById("contenido");
  switch (exercise) {
    case 'minicalculadora':
        mainContent.innerHTML = 
        `<div class="card">
            
            <div class="card-body">
                <h5 class="card-title">Mini Calculadora</h5>
                <p class="card-text">Calculo</p>
                <a href="./Number/minicalculadora/index.html" class="btn botEj">Solución</a>
            </div>
        </div>`
      break;
      
    case 'conversorbases':
        mainContent.innerHTML = 

        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">Conversor de bases</h5>
                <p class="card-text">Binario, oct, hex</p>
                <a href="./Number/conversorbases/index.html" class="btn botEj">Solución</a>
            </div>

        </div>`
        break;


    case 'modText':
      mainContent.innerHTML = 
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">Modificador de texto</h5>
                <p class="card-text">Cambio lower/upper Case</p>
                <a href="./String/modText/index.html" class="btn botEj">Solución</a>
            </div>
        </div>`
        break;



    case 'modTextAPI':
      mainContent.innerHTML = 
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">Modificador de texto con API</h5>
                <p class="card-text">Mod text junto con uso de API</p>
                <a href="./String/modTextApi/index.html" class="btn botEj">Solución</a>
            </div>
        </div>`
        break;

  }
}