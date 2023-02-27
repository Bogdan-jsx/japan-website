const body = document.querySelector("body");

window.onscroll = () => {
    const offset = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const percentage = (offset / (documentHeight - windowHeight));
    const value = -150 * percentage;

    body.style.backgroundPosition = `center ${value}px`;
}