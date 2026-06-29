// Elementos del modal carrito
const modalCarrito = document.querySelector(".modal-carrito");
const btnAbrirCarrito = document.querySelector(".btn-tienda");
const btnCerrarCarrito = document.getElementById("close-carrito-btn");

// Abrir carrito
btnAbrirCarrito.addEventListener("click", function () {
  modalCarrito.style.display = "flex";
});

// Cerrar carrito con la X
btnCerrarCarrito.addEventListener("click", function () {
  modalCarrito.style.display = "none";
});

// Cerrar carrito al tocar fuera del contenido
modalCarrito.addEventListener("click", function (event) {
  if (event.target === modalCarrito) {
    modalCarrito.style.display = "none";
  }
});