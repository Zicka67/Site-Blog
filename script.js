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
const video = document.getElementsByTagName("video")[1];

playButton.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    playButton.style.display = "none";
  } else {
    video.pause();
    playButton.style.display = "block";
  }
});



// ** transformer le button play on pause inerhtml + add class hover  




  // *********************************

//   // Get the button
//   const topBtn = $("#scrollTop"); // Target le bouton

//   //Faire aparaitre le bouton apres 40px
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 20) {
//       topBtn.show();
//     } else {
//       topBtn.hide();
//     }
//   });

//     // utilise la methode animate de JS Jquery pour remonter la page
//   topBtn.click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 2000);
//   });
// })
