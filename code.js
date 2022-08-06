const
  cards = document.querySelector(".cards"),
  card = document.querySelector(".card");

//duplicate original card x times
function cloneCard(n){
  for(let i = n-1; i > 0; i--){
    const clone = card.cloneNode(true);
    cards.appendChild(clone);
  }
};

cloneCard(15);