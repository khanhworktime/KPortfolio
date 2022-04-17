// Menu responsive
var header = document.querySelector('header');
var sideMenu = document.querySelector(".side-menu");
var menuHamBtn = document.querySelector(".menu-ham");

menuHamBtn.addEventListener("click", function () {
    menuHamBtn.classList.toggle("ham-stack");
    menuHamBtn.classList.toggle("ham-close");
    sideMenu.classList.toggle("closed");
})

function scrollHandler() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.onscroll = () => scrollHandler();