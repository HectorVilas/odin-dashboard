const //card related
  cards = document.querySelector(".cards"),
  card = document.querySelector(".card");
const //navigation bar related
  navBar = document.querySelector(".nav"),
  navParas = document.querySelectorAll(".nav p"),
  navWidthToggle = document.querySelector(".nav > .toggle");
const // light-dark theme related
  root = document.querySelector(":root"),
  switchSound = document.querySelector(".light-sound"),
  chain = document.querySelector(".chain");



//functions

//duplicate original card x times
function cloneCard(n){
  for(let i = n-1; i > 0; i--){
    const clone = card.cloneNode(true);
    cards.appendChild(clone);
  }
};

//hide text on nav bar to make it narrow
function toggleNavBar(){
  navBar.classList.toggle("small-bar");
  navParas.forEach(para => para.classList.toggle("hidden"));
  navWidthToggle.classList.toggle("rotated");
};

//toggle between light and dark theme
function toggleTheme(){
  root.classList.toggle("dark");
  icons.forEach(icon => icon.classList.toggle("dark"));
  switchSound.currentTime = 0;
  switchSound.play();
};



//listeners
navWidthToggle.addEventListener("click", toggleNavBar);

chain.addEventListener("mousedown", toggleTheme);



//on load
cloneCard(15);
navWidthToggle.classList.toggle("rotated");



//this needs to be placed after cloneCard function,
//or cloned icons won't be affected by dark theme
const icons = document.querySelectorAll(`img[src*="icons"]`);