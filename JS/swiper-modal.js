const modalProductSwiper = new Swiper(".modalProductSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".modal-product-next",
    prevEl: ".modal-product-prev",
  },

  observer: true,
  observeParents: true,
});

/* Actualizar Swiper cuando se abre el modal */
const openModalButtons = document.querySelectorAll(".open-modal-btn");

openModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      modalProductSwiper.update();
    }, 100);
  });
});