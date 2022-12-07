// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("bored__idea-container").innerHTML = `
//       <h1 class="bored__idea-title">${data.activity}</h1>
//     `;
//   });

document.getElementById("bored__idea-btn").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("bored__idea-text").innerHTML = `
        ${data.activity}
      `;
    });
});
