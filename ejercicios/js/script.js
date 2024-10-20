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
 