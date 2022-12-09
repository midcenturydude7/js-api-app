fetch("https://apis.scrimba.com/jsonplaceholder/posts")
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
