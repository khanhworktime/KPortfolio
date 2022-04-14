// Menu responsive

var sideMenu = document.querySelector(".side-menu");
var menuHamBtn = document.querySelector(".menu-ham");

menuHamBtn.addEventListener("click", function () {
    menuHamBtn.classList.toggle("ham-stack");
    menuHamBtn.classList.toggle("ham-close");
    sideMenu.classList.toggle("closed");
})