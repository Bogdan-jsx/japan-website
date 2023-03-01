const body = document.querySelector("body");
const burgerMenuBtn = document.querySelector(".burger-menu-btn");
const navElem = document.querySelector("nav");

if (window.innerWidth > 1150) {
    window.onscroll = () => {
        if (window.innerWidth <= 1150) return;

        const offset = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        const percentage = (offset / (documentHeight - windowHeight));
        const value = -150 * percentage;

        body.style.backgroundPosition = `center ${value}px`;
    } 
}

burgerMenuBtn.onclick = () => {
    burgerMenuBtn.classList.toggle("opened-menu");

    navElem.style.display = burgerMenuBtn.classList.contains("opened-menu") ? "block" : "none";
}
