// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Asegurar que coincide con el ID en HTML
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    actualizarLista(); // Actualizar la lista en pantalla
    inputNombre.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultadoSorteo").innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

// Asignar eventos a los botones cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
