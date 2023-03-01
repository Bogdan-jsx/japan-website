const bodyElem = document.querySelector("body");
const loader = document.querySelector(".loader");

window.onload = () => {
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 300);
}