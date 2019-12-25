let modal = document.getElementById("myModal");
let btn = document.getElementById("BookBtn");
let close = document.getElementsByClassName("modal__header-close")[0];

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

let tab;
let tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName("content-block");
    tab = document.getElementsByClassName("content-tabs__elems");
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i<tabContent.length; i++){
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("active");
    }
}

document.getElementById("tabs").onclick = function (event) {
    let target = event.target;
    if(target.className == "tab"){
        for (let i = 0; i< tab.length; i++){
            if (target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains("hide")) {
        hideTabsContent(0);
        tab[b].classList.add("active");
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");

    }
}

let select = document.getElementsByClassName("form-block__select_row");
let i;

for (i = 0; i < select.length; i++) {
    select[i].onclick = function (){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("display");
    }
}