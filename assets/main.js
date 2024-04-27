var navMenu = document.querySelector(".nav-icon-menu");
var navClose = document.querySelector(".nav-icon-close ");
var navContent  = document.querySelector(".nav-content");


navMenu.onclick = function(e){
    navMenu.classList.toggle('no-show');
    navClose.classList.toggle('show');
    navContent.classList.toggle('show');
}
navClose.onclick = function () {
    navMenu.classList.toggle("no-show");
    navClose.classList.toggle("show");
    navContent.classList.toggle('show');
}


