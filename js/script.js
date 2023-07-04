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

});