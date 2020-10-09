const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false; // Variável para bloquear tabuleiro no momento do Click

function flipCard() {

     if(lockBoard) return;     

     if(this === firstCard) return;

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

     resetBoard();
}

function unflipCards() {
     lockBoard = true;

     setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

          resetBoard();
          //lockBoard = false;
     }, 1500);
}


/* Desestruturação das nossas variáveis em Arrays */
function resetBoard() {
     [hasFlippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
}


// Immediately invoked function expression
     // Quando precisamos declarar uma função e chamar a mesma imediatamente quando nosso código vai rodar 
          // Usamos essa expressão 
(function shuffle() {
     cards.forEach((card) => {
          let randomPosition = Math.floor(Math.random() * 12);
          card.style.order = randomPosition;
     });
})();


cards.forEach((card) => {
     card.addEventListener('click', flipCard);
});



