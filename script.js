const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // Variável para bloquear tabuleiro no momento do Click

function flipCard() {

     if(lockBoard) return;     

     this.classList.add('flip'); // toggle => Efeito de tirar e adicionar || ADD -> Apenas adicionar 1 vez

     if(!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = this;
          return;
     }

     secondCard = this;
     hasFlippedCard = false;
     checkforMath();
}

function checkforMath() {
     if(firstCard.dataset.card === secondCard.dataset.card) {
          disableCards();
          return;
     }

     unflipCards();
}

function disableCards() {
     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
     setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
     }, 1500);
}

cards.forEach((card) => {
     card.addEventListener('click', flipCard);
});



