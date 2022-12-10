const urlPost = "https://apis.scrimba.com/jsonplaceholder/posts";
const urlTodos = "https://apis.scrimba.com/jsonplaceholder/todos";

fetch(urlPost)
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);

    for (let post of postsArr) {
      document.getElementById("main__blog-post").innerHTML += `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  `;
    }
  });

// document.getElementById("new-post").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const postTitle = document.getElementById("post-title").value;
//   const postBody = document.getElementById("post-body").value;
//   const data = {
//     title: postTitle,
//     body: postBody,
//   };
//   console.log(data);
// });

document.getElementById("new-post").addEventListener("submit", (e) => {
  e.preventDefault(); // Stops page from reloading on 'click' event
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
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
    .then((data) => console.log(data));
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
