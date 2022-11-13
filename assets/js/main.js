const nav = document.getElementById("nav");
const headerMenu = document.getElementById("header-menu");

headerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav__container .nav__list");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        console.log("clicked");
        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
        }
    });
});
