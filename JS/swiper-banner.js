const bannerSwiper = new Swiper(".bannerSwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
          el: ".banner-pagination",
          clickable: true,
        },

        navigation: {
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        },
      });