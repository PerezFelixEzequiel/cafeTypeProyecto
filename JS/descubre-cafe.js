// Elementos de la sección
const descubreCafe = document.getElementById("descubre-cafe");
const btnDescubrir = document.querySelector(".btn-descubrir");

// Liberar módulos
btnDescubrir.addEventListener("click", function () {
  descubreCafe.classList.add("activo");
});