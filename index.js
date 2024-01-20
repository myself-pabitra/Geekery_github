
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





  var screenWidth = window.innerWidth;

  // Adjust the threshold as needed (967 pixels in this case)
  if (screenWidth < 967) {
    document.querySelector('#callout_large_screen').classList.add('hidden')
    document.querySelector('#callout_small_screen').classList.remove('hidden')
  } else {
    document.querySelector('.my-component').style.display = 'none';
  }


// Initial check on page load
toggleComponentVisibility();

// Attach the function to the resize event to update visibility on window resize
window.addEventListener('resize', toggleComponentVisibility);
