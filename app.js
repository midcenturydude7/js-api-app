// Mutable Variables | Global
let deckId = "";
let computerScore = 0;
let myScore = 0;

// DOM Variables
const cardsContainer = document.getElementById("cards-container");
const newDeckBtn = document.getElementById("new-deck-btn");
const drawBtn = document.getElementById("draw-btn");
const headerSubTitleLeft = document.getElementById("header-subtitle-left");
const headerSubtitleResult = document.getElementById("header-subtitle-result");
const cardCounter = document.getElementById("card-counter");
const cardsScoreComputerEl = document.getElementById("cards-score-computer");
const cardsScoreUserEl = document.getElementById("cards-score-user");
const headerTitle = document.getElementById("header-title");

async function apiNewDeck() {
  const urlNewDeck =
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";
  const response = await fetch(urlNewDeck);
  const data = await response.json();
  deckId = data.deck_id;
  const cardsRemaining = data.remaining;
  cardCounter.textContent = cardsRemaining;
}

async function apiDraw() {
  const urlDeck = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`;
  const response = await fetch(urlDeck);
  const data = await response.json();

  cardsContainer.children[1].innerHTML = `
        <img class="cards-img" src="${data.cards[0].image}">
      `;

  cardsContainer.children[3].innerHTML = `
        <img class="cards-img" src="${data.cards[1].image}">
      `;

  const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
  headerSubtitleResult.textContent = winnerText;

  const cardsRemaining = data.remaining;
  cardCounter.textContent = cardsRemaining;

  if (data.remaining === 0) {
    drawBtn.disabled = true;
    headerSubtitleResult.textContent = "";
    headerSubTitleLeft.textContent = "";
    if (computerScore > myScore) {
      return (headerTitle.textContent = "The Computer Won!");
    } else if (myScore > computerScore) {
      return (headerTitle.textContent = "YOU WON!!!");
    } else headerTitle.textContent = "It's a tie!";
  }
}

newDeckBtn.addEventListener("click", apiNewDeck);
drawBtn.addEventListener("click", apiDraw);

const determineCardWinner = (card1, card2) => {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];

  valueOptions.indexOf(card1.value);
  valueOptions.indexOf(card2.value);

  if (card1.value > card2.value) {
    computerScore++;
    cardsScoreComputerEl.textContent = `Computer score: ${computerScore}`;
    return "Pute won!";
  } else if (card2.value > card1.value) {
    myScore++;
    cardsScoreUserEl.textContent = `My score: ${myScore}`;
    return "You won!";
  } else {
    return "War!";
  }
};

/* RESOURCES */
// Practice with arrays and .filer() and .map() methods
// const voters = [
//   { name: "Joe", email: "joe@joe.com", voted: true },
//   { name: "Jane", email: "jane@jane.com", voted: true },
//   { name: "Bo", email: "bo@bo.com", voted: false },
//   { name: "Bane", email: "bane@bane.com", voted: false },
// ];

// const voterArr = voters
//   .filter((voter) => voter.voted)
//   .map((voter) => voter.email);
// console.log(voterArr);

// Practice with callback functions
// const textCallback = () => {
//   console.log("I finally ran!");
// };

// setTimeout(textCallback, 2000);

// Practice with callbacks and filter() method
// const people = [
//   { name: "Jack", hasPet: true },
//   { name: "Jill", hasPet: false },
//   { name: "Alice", hasPet: true },
//   { name: "Bob", hasPet: false },
// ];

// function filterArray(array, callback) {
//   const resultingArray = [];
//   // Write your filtering logic here
//   for (let item of array) {
//     const shouldBeIncluded = callback(item);
//     if (shouldBeIncluded) {
//       resultingArray.push(item);
//     }
//   }
//   return resultingArray;
// }

// const peopleWithPets = filterArray(people, (person) => {
//   return person.hasPet;
// });
// console.log(peopleWithPets);
