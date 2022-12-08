document.getElementById("bored__idea-btn").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("bored__idea-text").innerHTML = data.activity;
      const grabElement = document.querySelector(".bored__bot-header");
      grabElement.classList.add("bored__bot-header--fun");
    });
});
