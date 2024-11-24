"use strict";

// Manejar la selección de los ejercicios del menú "NUMBER"
document.getElementById("minicalculadora").addEventListener("click", function () {
    loadExercise('minicalculadora');
});

document.getElementById("conversorbases").addEventListener("click", function () {
    loadExercise('conversorbases');
});


// Manejar la selección de los ejercicios del menú "String"
document.getElementById("modText").addEventListener("click", function () {
    loadExercise('modText');
});

document.getElementById("modTextAPI").addEventListener("click", function () {
    loadExercise('modTextAPI');
});


// Manejar la selección de los ejercicios del menú "Array"
document.getElementById("matrices").addEventListener("click", function () {
    loadExercise('matrices');
});
 



// Manejar la selección de los ejercicios del menú "CRUD"
document.getElementById("crudCookie").addEventListener("click", function () {
    loadExercise('crudCookie');
});
document.getElementById("crudLocalStorage").addEventListener("click", function () {
    loadExercise('crudLocalStorage');
});
document.getElementById("crudSessionStorage").addEventListener("click", function () {
    loadExercise('crudSessionStorage');
});
document.getElementById("crudIndexedDB").addEventListener("click", function () {
    loadExercise('crudIndexedDB');
});
 



// Manejar la selección de los ejercicios del menú "Estructuras"
document.getElementById("pila").addEventListener("click", function () {
    loadExercise('pila');
});
document.getElementById("cola").addEventListener("click", function () {
    loadExercise('cola');
});
document.getElementById("lista").addEventListener("click", function () {
    loadExercise('lista');
});
