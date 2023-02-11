// ************ AUTO PLAY SUR L'ELEMENT background-video

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  video.play();
});

// ********************* MENU STICKY ***********************


// ********************* MENU BURGER ***********************

// const burgerMenu = document.querySelector('.burger-menu');
// const dropdownMenu = document.querySelector('.dropdown-menu');

// burgerMenu.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('show-dropdown');
// });

// ******************** PLAYBUTTON + PAUSE ********************

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

