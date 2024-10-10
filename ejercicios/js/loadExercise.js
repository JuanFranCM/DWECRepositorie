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

  }
}