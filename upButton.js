let upButton = document.querySelector('.up-button');

window.onscroll = function () {
    if (window.pageYOffset > 630) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
};

upButton.onclick = function () {
    window.scrollTo(0, 0);
}