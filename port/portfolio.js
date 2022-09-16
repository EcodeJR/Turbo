const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
    if (window.screenY >= 450) {
        header.classList.add("scrolled")
    } else if (window.screenY <= 400) {
        header.classList.remove('scrolled')
    }
});