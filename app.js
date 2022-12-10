const urlPost = "https://apis.scrimba.com/jsonplaceholder/posts";
const urlTodos = "https://apis.scrimba.com/jsonplaceholder/todos";
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");
let postsArray = [];

// Weather vars
const urlWeather =
  "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=portland&units=imperial";

const renderPosts = () => {
  let html = "";
  for (let post of postsArray) {
    html += `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
  }
  document.getElementById("main__blog-post").innerHTML = html;
};

fetch(urlPost)
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stops page from reloading on 'click' event
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(urlPost, options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post); // Moves new post to top of list
      renderPosts(); // Render new post to page
      form.reset(); // Reset the form
    });
});

fetch(urlWeather)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// Practice with POST requests
// fetch(urlTodos, {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Buy milk",
//     completed: false,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
