document.getElementById("bored__idea-btn").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("bored__idea-text").innerHTML = data.activity;
      const grabElement = document.querySelector(".bored__bot-header");
      grabElement.classList.add("bored__bot-header--fun");
      addText();
    });
});

const addText = () => {
  document.querySelector(".bored__bot-header").innerHTML = `
    <div class="bored__bot-header--repeat">
      <h1 class="bored__bot-title">BoredBot</h1><br>
      <p class="bored__bot-header-text">Get ready for some inspiring things to do!</p>
    </div>
  `;
};
