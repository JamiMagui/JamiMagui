  let allCards = [];
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = "";
  let player = {
    name: "You",
    chips: 145
  }
  let messageEl = document.getElementById("message-el");
  let sumEl = document.getElementById("sum-el")
  let cardsEl = document.getElementById("cards-el")
  let playerEl = document.getElementById("player-el")
  
  playerEl.textContent = player.name + ": $" + player.chips

function getRandomInt() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
      return 11
    } else if (randomNumber > 10) {
      return 10
    } else {
    return randomNumber}
    };
  
function startGame() {
  isAlive = true;
  let firstCard = getRandomInt();
  let secondCard = getRandomInt();
  allCards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  runGame()

}

function runGame() {

    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "You've got Blackjack!";
          hasBlackJack = true;
      } else {
        message = "You've lost!";
          isAlive = false;
    };
  

    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " "
    }
  }

  function newCard(){
    if (isAlive && hasBlackJack === false) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomInt();
    sum += card;
    allCards.push(card)
    runGame();
  }}
  // Cash out!

