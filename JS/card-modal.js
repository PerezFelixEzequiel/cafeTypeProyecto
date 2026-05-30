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
const modalImgFrente = document.getElementById("modal-img-frente");
const modalImgDorso = document.getElementById("modal-img-dorso");

//Perfil de Sabores en Modal

function cargarPerfilSabores(perfilSabores) {
  const sabores = ["intensidad", "acidez", "cuerpo", "dulzor"];

  sabores.forEach(function (sabor) {
    const contenedor = document.querySelector(`[data-sabor="${sabor}"]`);
    const cantidad = perfilSabores[sabor];

    contenedor.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
      const grano = document.createElement("span");

      grano.classList.add("grano-svg");

      contenedor.appendChild(grano);

      if (i <= cantidad) {
        setTimeout(function () {
          grano.classList.add("grano-activo");
        }, i * 300);
      }
    }
  });
}

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
    modalImgFrente.src = productoSeleccionado.imagen.frente;
    modalImgFrente.alt = productoSeleccionado.nombre + " frente";

    modalImgDorso.src = productoSeleccionado.imagen.dorso;
    modalImgDorso.alt = productoSeleccionado.nombre + " dorso";

    cargarPerfilSabores(productoSeleccionado.perfilSabores);

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




