


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header-menu-togle');
menuBtn.addEventListener('mouseup', function(){
    menuBtn.classList.add('active');
	menu.classList.add('active');
})
menuBtn.addEventListener('mousedown', function(){
    menuBtn.classList.remove('active');
	menu.classList.remove('active');
})