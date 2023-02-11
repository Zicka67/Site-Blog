document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  video.play();
});

// ********************************************

const burger = document.getElementById('burger');
const navLinks = document.querySelector('left-side');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');})

  // ****************************************

  const playButton = document.querySelector(".play-button");
  const video = document.querySelector("#video2");
  
  playButton.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
      video.pause();
      playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  });
   
  video.addEventListener("mouseover", function() { 
    playButton.style.visibility = "visible";
  });
  
  video.addEventListener("mouseout", function() {              
    playButton.style.visibility = "hidden";
  });

// ** transformer le button play on pause inerhtml + add class hover  
//  + 
// ** Problème de flicker a corriger

