url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/";

document.getElementById("deck-btn").addEventListener("click", (e) => {
  e.preventDefault;
  fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
});


