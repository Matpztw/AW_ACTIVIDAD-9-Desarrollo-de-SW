
// EJ1

const escenarios = document.querySelectorAll(".playlist-item");
const cancionActual = document.querySelector("#cancion-actual");

// Escuchador de eventos
escenarios.forEach(escenario => {

    escenario.addEventListener("click", function() {

        // Remover la clase "activo"
        escenarios.forEach(item => {
            item.classList.remove("activo");
        });

        // Añadir clase activo
        this.classList.add("activo");

        // Obtener el valor
        const nombreCancion = this.getAttribute("data-cancion");

        // Actualizar la zona del DOM de cancion activa
        cancionActual.textContent = nombreCancion;

    });

});

// EJ2

// Obtener los elementos del DOM
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const cantidad = document.querySelector("#cantidad");
const total = document.querySelector("#total");

// Variables
let cantidadBoletos = 1;
const precio = 850;
// Actualizar contador y total
function actualizarCompra() {
    cantidad.textContent = cantidadBoletos;

    total.textContent = "$" + (cantidadBoletos * precio) + " MXN";
}

// Evento para sumar boletos
btnSumar.addEventListener("click", function() {
    cantidadBoletos++;

    actualizarCompra();
});

// Evento para restar boletos
btnRestar.addEventListener("click", function() {

    // Evitar que la cantidad sea menor a 1
    if (cantidadBoletos > 1) {
        cantidadBoletos--;
    }

    actualizarCompra();
});



// EJ3

// Obtener los elementos del DOM
const inputPeticion = document.querySelector("#input-peticion");
const btnEnviar = document.querySelector("#btn-enviar");
const muro = document.querySelector("#muro");

// Escuchador de eventos
btnEnviar.addEventListener("click", function() {

    // Obtener el valor del input
    const nombreArtista = inputPeticion.value.trim();

    // Verificar que no esté vacío
    if (nombreArtista !== "") {

        // Crear un nuevo elemento
        const nuevaPeticion = document.createElement("li");

        // Añadir clases de Bootstrap
        nuevaPeticion.classList.add("list-group-item", "bg-dark", "text-light", "border-secondary");

        // Agregar el nombre del artista
        nuevaPeticion.textContent = "🎵 " + nombreArtista;

        // Insertar la petición en el muro
        muro.appendChild(nuevaPeticion);

        // Limpiar el input
        inputPeticion.value = "";

    } else {
        alert("Por favor, escribe el nombre de un artista o banda.");
    }

});
