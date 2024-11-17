'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); 

    if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) { 
        datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); 
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"), 
            campoNombre = document.createElement("td"), 
            campoValor = document.createElement("td"), 
            campoBotones = document.createElement("td"),
            
            botonBorrar = document.createElement("button"), 
            imagenBorrar = document.createElement("img"), 
            botonActualizar = document.createElement("button"), 
            imagenActualizar = document.createElement("img"); 


            // DATOS

            campoNombre.innerHTML = datoAcceso.nombre; 
            campoValor.innerHTML = datoAcceso.valor; 


            // Botones

            //Botón borrar
            botonBorrar.textContent = "Borrar";
            botonBorrar.className = "operadorCrud"; 
            botonBorrar.addEventListener('click', function () { 
                borrarDato(datoAcceso.nombre); 
            });

            imagenBorrar.src = "./img/delete.svg";
            imagenBorrar.width = "22"; 
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle; margin-left:10px";
            

            // BOTÓN ACTUALIZAR
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "operadorCrud"; 

            botonActualizar.addEventListener('click', function () { 
                console.log(datoAcceso);
                document.getElementById("nombre").value = decodeURIComponent(datoAcceso.nombre);
                document.getElementById("valor").value = decodeURIComponent(datoAcceso.valor);
                borrarDato(datoAcceso.nombre);
            });
 
            imagenActualizar.src = "./img/recover.svg";
            imagenActualizar.width = "22";
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle; margin-left:10px";
 

            // DOM
            botonBorrar.appendChild(imagenBorrar);
            campoBotones.appendChild(botonBorrar);
            botonActualizar.appendChild(imagenActualizar);
            campoBotones.appendChild(botonActualizar); //Los metemos ambos en el mismo campo para que permanezcan juntos en la tabla

            linea.appendChild(campoNombre);
            linea.appendChild(campoValor);
            linea.appendChild(campoBotones);

            cuerpo.appendChild(linea);
        });

    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }

    console.table(datosAcceso);
}
