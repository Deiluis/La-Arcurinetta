const menuBtn = document.querySelector('#menu-button');
const nav = document.querySelector('.nav');

const subMenuBtn = document.querySelector(".submenu-container");
const subMenu = document.querySelector(".nav__submenu");
const subMenuLink = document.querySelector(".nav__link--submenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('fa-times');
    nav.classList.toggle('nav--show');

    if(subMenu.classList.contains("desplegar")) {
        subMenu.classList.remove("desplegar");
        subMenu.removeAttribute("style");
    }
});

window.addEventListener("scroll", () => {

    if ((window.innerWidth <= 1024) &&
        (window.innerWidth < window.innerHeight)) {
        
        menuBtn.classList.remove('fa-times');
        nav.classList.remove('nav--show');

        if(subMenu.classList.contains("desplegar")) {
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        }
    }  
});

subMenuBtn.addEventListener("click", () => {

    if(window.innerWidth < 1024) {

        const height = subMenu.scrollHeight;
        
        if(subMenu.classList.contains("desplegar")) {
            subMenu.classList.remove("desplegar");
            subMenu.removeAttribute("style");
        } else {
            subMenu.classList.add("desplegar");
            subMenu.style.height = height + "px";
        }
    }
});

subMenuLink.addEventListener("click", e => {
    e.preventDefault();
})