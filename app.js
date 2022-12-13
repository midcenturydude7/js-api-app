let deckId = "";

const apiShuffle = () => {
  const urlShuffle =
    "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";
  fetch(urlShuffle)
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      console.log(data);
      console.log(deckId);
    });
};

const apiDeck = () => {
  const urlDeck = `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`;
  fetch(urlDeck)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("card-container").innerHTML = `
        <img class="card-img" src="${data.cards[0].image}">
        <img class="card-img" src="${data.cards[1].image}">
      `;
    });
};

document.getElementById("shuffle-btn").addEventListener("click", apiShuffle);
document.getElementById("deck-btn").addEventListener("click", apiDeck);

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
