const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let bannerImg = document.querySelector(".banner-img");
let bannerTag = document.getElementById("tag");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let index = 0;

// Initialisation de l'image et du texte
bannerImg.src = "./assets/images/slideshow/" + slides[0].image;
bannerTag.innerHTML = slides[0].tagLine;

// Fonction pour mettre à jour l'image, le texte et les dots
function updateSlide() {
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bannerTag.innerHTML = slides[index].tagLine;

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Flèche droite
arrowRight.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0; // Boucle vers le premier slide
  }
  updateSlide();
});

// Flèche gauche
arrowLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1; // Boucle vers le dernier slide
  }
  updateSlide();
});
window.onload = setInterval(function () {
  index++;

  if (index >= slides.length) {
    index = 0; // Boucle vers le premier slide
  }
  updateSlide();
}, 3000);
