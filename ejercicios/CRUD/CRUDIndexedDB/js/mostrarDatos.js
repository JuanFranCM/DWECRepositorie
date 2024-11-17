'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "Los datos almacenados son: <br />";
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;
            console.log(registros);
            for (let registro of registros) {
                let linea = document.createElement("tr"), 
                    campoNombre = document.createElement("td"), 
                    campoValor = document.createElement("td"),
                    campoImagen = document.createElement("img"),
                    campoBotones = document.createElement("td"),

                    botonBorrar = document.createElement("button"),
                    imagenBorrar = document.createElement("img"),
                    botonActualizar = document.createElement("button"),
                    imagenActualizar = document.createElement("img");

                linea.classList.add("rowTabla");
                
                //Campo del registro
                campoNombre.innerHTML = registro.nombre;
                campoValor.innerHTML = registro.valor;
                campoImagen.src = registro.imagen;
                campoImagen.width = "150";
                campoImagen.height = "150";
                campoImagen.style = "vertical-align: middle; margin-bottom:10px";


                //Botones
                //Borrar
                botonBorrar.textContent = "Borrar";
                botonBorrar.className = "operadorCrud"; 
                botonBorrar.addEventListener('click', function () { 
                    borrarDato(registro.id);
                });
                imagenBorrar.src = "./img/delete.svg";
                imagenBorrar.width = "22";
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle; margin-left:10px";

                //ACTUALIZAR
                botonActualizar.textContent = "Actualizar";
                botonActualizar.className = "operadorCrud";

                botonActualizar.addEventListener('click', function () { 

                    console.log(registro);
                    document.getElementById("nombre").value = decodeURIComponent(registro.nombre);
                    document.getElementById("valor").value = decodeURIComponent(registro.valor);
                    document.getElementById("imagen").value = decodeURIComponent(registro.imagen);
                    borrarDato(registro.id); 
                });
 
                imagenActualizar.src = "./img/recover.svg";
                imagenActualizar.width = "22";
                imagenActualizar.height = "22";
                imagenActualizar.style = "vertical-align: middle; margin-left:10px";
 


                //AppendChild
                botonBorrar.appendChild(imagenBorrar);
                botonActualizar.appendChild(imagenActualizar);
                campoBotones.appendChild(botonBorrar);
                campoBotones.appendChild(botonActualizar);//Introducimos los dos botones en el mismo espacio de la tabla


                linea.appendChild(campoNombre);
                linea.appendChild(campoValor);
                linea.appendChild(campoImagen);
                linea.appendChild(campoBotones);

                cuerpo.appendChild(linea);
            }
        }
    };
}