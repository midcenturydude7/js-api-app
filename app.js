function unsplashApi() {
  const urlUnsplash =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";
  fetch(urlUnsplash)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.body.textContent = `By ${data.user.name}`;
    });
}
unsplashApi();
