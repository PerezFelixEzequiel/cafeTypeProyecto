const menuToggle = document.querySelector(".menu-toggle");
const navegacion = document.querySelector("#menu-principal");

menuToggle.addEventListener("click", () => {
  navegacion.classList.toggle("active");

  const menuAbierto = navegacion.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", menuAbierto);
  menuToggle.setAttribute(
    "aria-label",
    menuAbierto ? "Cerrar menú" : "Abrir menú"
  );
});