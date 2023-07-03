window.addEventListener('DOMContentLoaded', () => {

     let menuIcon = document.querySelector('#hamburg');
     let cancelIcon = document.querySelector('#cancel');
     let navbar = document.querySelector('.navbar');

     menuIcon.onclick = () => {
          //     menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
     };

     cancelIcon.onclick = () => {
          navbar.classList.toggle('active');
     }

     window.onscroll = () => {
          navbar.classList.remove('active');
          //inscroll add sticky class to header
          let header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 50);
     };

     //// this is to prevent menu list to not clickable


     let anchorTags = document.querySelectorAll('.navbar ul > li > a');

     if (window.matchMedia('(max-width: 991px)').matches) {
          anchorTags.forEach((anchorTag) => {
               anchorTag.addEventListener('click', (event) => {
                    event.preventDefault();
               });
          });
     }



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

     // home carosel end

     // sale Carosel Code

     const s_container = document.querySelector(".sale_carousel-container");
     const s_prevBtn = document.querySelector(".sale_carousel-control.prev");
     const s_nextBtn = document.querySelector(".sale_carousel-control.next");
     const s_items = document.querySelectorAll(".sale_carousel-item");
     let s_currentIndex = 0;

     s_prevBtn.addEventListener("click", function () {
          s_currentIndex = (s_currentIndex - 1 + s_items.length) % s_items.length;
          updateCarousel_sale();
          console.log("Clicked prev");
     });

     s_nextBtn.addEventListener("click", function () {
          s_currentIndex = (s_currentIndex + 1) % s_items.length;
          updateCarousel_sale();
          console.log("Clicked next");
     });

     function updateCarousel_sale() {
          const s_itemWidth = s_items[0].offsetWidth;
          // const s_translateX = -s_currentIndex * s_itemWidth;
          const s_translateX = -s_currentIndex * 33;
          s_container.style.transform = `translateX(${s_translateX}%)`;
     }


     // Resize event listener to update the carousel on window resize
     window.addEventListener("resize", function () {
          updateCarousel();
          updateCarousel_sale();
     });

     // Initial update of the carousel on page load
     updateCarousel();
     updateCarousel_sale();

     // sale carosel end

});