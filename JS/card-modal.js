// Elementos del modal
const modal = document.getElementById("modal");
const openModalBtn = document.querySelectorAll(".open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

// Campos del modal
const modalNombre = document.getElementById("modal-nombre");
const modalPrecio = document.getElementById("modal-precio");
const modalOrigen = document.getElementById("modal-origen");
const modalTueste = document.getElementById("modal-tueste");
const modalDescripcion = document.getElementById("modal-descripcion");

// Abrir modal
openModalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const productId = btn.dataset.productId;
    const productoSeleccionado = productosCafe[productId];

    console.log("ID del producto:", productId);
    console.log("Producto seleccionado:", productoSeleccionado);

    // Evita errores si el producto no existe
    if (!productoSeleccionado) {
      console.log("No se encontró el producto");
      return;
    }

    // Cargar datos en el modal
    modalNombre.textContent = productoSeleccionado.nombre;
    modalPrecio.textContent = productoSeleccionado.precio;
    modalOrigen.textContent = productoSeleccionado.origen;
    modalTueste.textContent = productoSeleccionado.tueste;
    modalDescripcion.textContent = productoSeleccionado.descripcionLarga;

    modal.style.display = "flex";
  });
});

// Cerrar con botón
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cerrar al hacer click fuera
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});




