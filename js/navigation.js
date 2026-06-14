const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const header = document.getElementById("header");

// Toggle mobile menu
burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close mobile menu when a link is clicked
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Add scrolled class to header on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});