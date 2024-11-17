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


    case 'matrices':
        console.log("matrices");
        mainContent.innerHTML = 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Matrices</h5>
                    <p class="card-text">Uso de arrays para operaciones con matrices</p>
                    <a href="./Array/Matrices/index.html" class="btn botEj">Solución</a>
                </div>
            </div>`
            break;



    case 'crudCookie':
        console.log("crudCookie");
        mainContent.innerHTML = 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Crud con cookies</h5>
                    <p class="card-text">Uso de cookies para manejo de crud</p>
                    <a href="./CRUD/CRUDCookie/index.html" class="btn botEj">Solución</a>
                </div>
            </div>`
            break;


    case 'crudLocalStorage':
        console.log("crudLocalStorage");
        mainContent.innerHTML = 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Crud con localStorage</h5>
                    <p class="card-text">Uso de localStorage para manejo de crud</p>
                    <a href="./CRUD/CRUDLocalStorage/index.html" class="btn botEj">Solución</a>
                </div>
            </div>`
            break;


    case 'crudSessionStorage':
        console.log("crudSessionStorage");
        mainContent.innerHTML = 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Crud con SessionStorage</h5>
                    <p class="card-text">Uso de SessionStorage para manejo de crud</p>
                    <a href="./CRUD/CRUDSessionStorage/index.html" class="btn botEj">Solución</a>
                </div>
            </div>`
            break;


    case 'crudIndexedDB':
        console.log("crudIndexedDB");
        mainContent.innerHTML = 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Crud con indexedDB + API</h5>
                    <p class="card-text">Uso de indexedDB para manejo de crud + uso de api</p>
                    <a href="./CRUD/CRUDIndexedDB/index.html" class="btn botEj">Solución</a>
                </div>
            </div>`
            break;
  }
}