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

// *********
video.addEventListener("mouseover", function() { 
  playButton.style.visibility = "visible";
});

video.addEventListener("mouseout", function() {              
  playButton.style.visibility = "hidden";
});

// ********************************* blog *******************

function filterGridItems(category) {    //DOMContentLoaded pour afficher au chargement de page ?
  // Sélectionne tous les éléments de la grille
  const gridItems = document.querySelectorAll('.grid-item');

  let count = 0; // Initialise le compteur à 0

  // Parcours chaque élément de la grille
  gridItems.forEach(item => {
    // Si l'élément a la catégorie correspondante
    if (item.dataset.category === category || category === "all") {  
      // Affiche l'élément
      item.style.display = 'block';
      count++; // Incrémente le compteur
    } else {
      // Sinon masque l'élément
      item.style.display = 'none';
    }
  });

  // Met à jour le nombre d'éléments affichés dans le bouton
  const button = document.querySelector(`a[href="#blog"][onclick="filterGridItems('${category}')"]`);  //Les backticks ` permettent d'utiliser des templates de chaînes de caractères (template literals) en JavaScript. Cela permet d'interpoler des expressions en utilisant ${expression} dans la chaîne de caractères.
  button.querySelector('input').value = `${category} (${count})`;
}



