let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-menu-togle');
let overlay = document.querySelector('.overlay')
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('hidden')

})

overlay.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('hidden')

})