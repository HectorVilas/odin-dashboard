const
  cards = document.querySelector(".cards"),
  card = document.querySelector(".card");
const
  navBar = document.querySelector(".nav"),
  navParas = document.querySelectorAll(".nav p"),
  navWidthToggle = document.querySelector(".nav > .toggle");

//duplicate original card x times
function cloneCard(n){
  for(let i = n-1; i > 0; i--){
    const clone = card.cloneNode(true);
    cards.appendChild(clone);
  }
};

function toggleNavBar(){
  navBar.classList.toggle("small-bar");
  navParas.forEach(para => para.classList.toggle("hidden"));
  navWidthToggle.classList.toggle("rotated");
};

//listeners
navWidthToggle.addEventListener("click", toggleNavBar);


//on load
cloneCard(15);
navWidthToggle.classList.toggle("rotated");