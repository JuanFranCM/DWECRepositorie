"use strict"

async function obtenerUsuario() {

  console.log("obteniendo usuario");
  
  try {
      let num = Math.floor(Math.random() * (826-1) + 1);
    const response = await fetch(`https://rickandmortyapi.com/api/character/${num}`);

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    console.log(response);

    // Convertir la respuesta a JSON
    const data = await response.json();
    console.log(data);

    grabarDato(data.name, data.species, data.image);

  } catch (error) {
    // Manejar errores
    /* citaDiv.textContent = 'Ocurrió un error al obtener broma'; */
    console.error(error);
  }
}