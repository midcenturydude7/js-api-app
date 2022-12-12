const url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";
let deckId = "";

const apiCall = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      console.log(deckId);
    });
};

document.getElementById("deck-btn").addEventListener("click", apiCall);

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
