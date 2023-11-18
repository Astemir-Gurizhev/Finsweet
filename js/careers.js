let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-menu-togle');
menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
    // menuBtn.addEventListener('mouseover', function() {
    //     menuBtn.classList.toggle('active');
    //     menu.classList.toggle('hmt-hidden');
    // })