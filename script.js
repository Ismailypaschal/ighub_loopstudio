const mobile_container = document.getElementById("mobile_container");
const hamburger = document.getElementById("hamburger");
const x = document.getElementById("x");

function showSideBar() {
    mobile_container.classList.toggle("show");
    hamburger.classList.toggle("hide");
    x.classList.toggle("show");
}