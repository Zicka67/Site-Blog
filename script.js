  document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("background-video");
    video.play();
  });

  // ********************************************

    const burger = document.getElementById('burger');
    const navLinks = document.querySelector('.left-side');

    burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // *****************************************

    const playButton = document.querySelector(".play-button");
    const video = document.querySelector("video");

playButton.addEventListener("click", function() {
  video.play();
});
})