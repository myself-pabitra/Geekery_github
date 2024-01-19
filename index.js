
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var videoContainer = document.querySelector('.video-container');

    window.addEventListener('scroll', function () {
        // Check if the user has scrolled down by half of the video container height
        if (window.scrollY <= videoContainer.offsetHeight / 2) {
            navbar.classList.add('navbar_fixed');
            navbar.classList.remove('fade-out');
        } else {
            navbar.classList.add('fade-out');
            navbar.classList.remove('navbar_fixed');
        }
    });
});