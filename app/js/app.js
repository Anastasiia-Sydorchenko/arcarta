// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})

// HAMBURGER MENU 
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock'); // remove scroll when burger menu is active
   });

   $('.header__menu').click(function () {
      $('.header__burger, .header__menu').removeClass('active');
      $('body').removeClass('lock'); // close burger menu after click
   });
});