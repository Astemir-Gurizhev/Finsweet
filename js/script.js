// "use strict"

// //elem.innerHTML="What of the fucker maker showcontribute"
// let elem = document.querySelector(".ewq p")

//   //вешаем на него события
// elem.onmouseout = function() {
//     elem.style.color='';
//   }

//   elem.onmouseover = function() {
//     elem.style.color='yellow';
//   };

// window.onload = function () {

//     //получаем идентификатор элемента

//     //вешаем на него событие

//     elem.onclick = function() {
//         //производим какие-то действия

//         if (this.innerHTML=='We hired people who are <br> Always Passionate about <br> what they do') 
//             elem.innerHTML="What of the fucker maker showcontribute - click me please"
//         else
//             elem.innerHTML="We hired people who are <br> Always Passionate about <br> what they do"

//             //предотвращаем переход по ссылке href
//         return false;
//     }


// }

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