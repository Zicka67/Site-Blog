document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("background-video");
    video.play();
  });


const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})