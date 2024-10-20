"use strict"

const boton = document.getElementById("joke");
const contenedorTexto = document.getElementById("texto");
boton.addEventListener("click", obtenerBroma);


async function obtenerBroma(){
    let broma = "";

  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');


    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    console.log(response);


    const data = await response.json();
    console.log(data);


    contenedorTexto.value = `"${data.setup}"\n${data.punchline}`;
    console.log(data.setup);
  } catch (error) {
    // Manejar errores
    contenedorTexto.value = 'Ocurrió un error al obtener broma';
    console.error(error);
  }



}