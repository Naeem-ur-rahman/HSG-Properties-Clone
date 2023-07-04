window.addEventListener('DOMContentLoaded', () => {
     // Carosel Code

     const container = document.querySelector(".carousel-container");
     const prevBtn = document.querySelector(".carousel-control.prev");
     const nextBtn = document.querySelector(".carousel-control.next");
     const items = document.querySelectorAll(".carousel-item");
     let currentIndex = 0;

     prevBtn.addEventListener("click", function () {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          updateCarousel();

     });

     nextBtn.addEventListener("click", function () {
          currentIndex = (currentIndex + 1) % items.length;
          updateCarousel();

     });

     function updateCarousel() {
          const itemWidth = items[0].offsetWidth;
          const translateX = -currentIndex * itemWidth;
          container.style.transform = `translateX(${translateX}px)`;
     }

     // Resize event listener to update the carousel on window resize
     window.addEventListener("resize", function () {
          updateCarousel();
     });

     // Initial update of the carousel on page load
     updateCarousel();

     // home carosel end

});