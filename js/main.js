'use strict';

const humburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}) 

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        humburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)