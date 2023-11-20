

let burger = document.querySelector('.burger')
let headerMenuBurger = document.querySelector('.header-menu__burger')
let overlay = document.querySelector('.overlay')
burger.addEventListener('click', () => {
    headerMenuBurger.classList.toggle('header-menu-burger__active')
    overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', function() {
    headerMenuBurger.classList.toggle('header-menu-burger__active')
    overlay.classList.toggle('hidden')

})