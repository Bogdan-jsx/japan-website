const bodyElem = document.querySelector("body");
const loader = document.querySelector(".loader");
const preloaderGif = document.querySelector(".loader > img")

window.onload = () => {
    preloaderGif.style.opacity = 0;
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 300);
}