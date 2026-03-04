document.getElementById("btnTexto").addEventListener("click", function() {
    document.getElementById("titulo").textContent = "pe causa";
});

document.getElementById("btnColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById("miInput").addEventListener("input", function() {
    document.getElementById("resultado").textContent = this.value;
});

document.getElementById("btnAgregar").addEventListener("click", function() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "ola mundo";
    document.getElementById("contenedor").appendChild(nuevoParrafo);
});

document.getElementById("btnEliminar").addEventListener("click", function() {
    const elemento = document.getElementById("borrar");
    if (elemento) {
        elemento.remove();
    }
});