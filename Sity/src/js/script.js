// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__plan");
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i=0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// accordion
let acc = document.getElementsByClassName("filter__tittle");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function (){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show")
    }
}

// filter
let modal = document.getElementById("MyModal");
let btn = document.getElementById("FilterBtn");
let close = document.getElementsByClassName("modal-filter__close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// menu
let button = document.querySelector('.header_menu');
let menu = document.querySelector('.js-menu');

button.addEventListener('click', toggleMenu);

function toggleMenu() {
   menu.classList.toggle('opened');
}

// map
let mapbtn = document.getElementById("MapBtn");
let map = document.getElementsByClassName("content-map");
let content = document.getElementsByClassName("content-block");

map.onclick = function() {
    content.style.display = "none";
    map.style.display = "block";   
}

