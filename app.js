// DOM variables
const footerAuthorInfo = document.getElementById("footer__author-info");
const headerCoinContainer = document.getElementById("header__coin-container");
const theTime = document.getElementById("the-time");

// Error handling variable
const errorMsg = "is not available at this time";

// API call
function unsplashApi() {
  const urlUnsplash =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";

  fetch(urlUnsplash)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      footerAuthorInfo.textContent = `By: ${data.user.name}`;
    })
    .catch((err) => {
      console.log(err);
      document.body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1542856391-010fb87dcfed?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzEzOTI0Nzk&ixlib=rb-4.0.3&q=80)";
    });
}
unsplashApi();

function coinApi() {
  // Coin variables
  const urlBitcoin =
    "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true";
  const urlEthereum =
    "https://api.coingecko.com/api/v3/coins/ethereum?tickers=true";
  const urlCardano =
    "https://api.coingecko.com/api/v3/coins/cardano?tickers=true";

  // API calls
  fetch(urlBitcoin)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      headerCoinContainer.innerHTML += `
      <div class="header__coin-spacing">
        <img src=${data.image.small} class="header-img"/>
        <div class="header__coin-text">${data.name}: $${data.tickers[0].last}
          <div class="header__coin-data-container">
            <div class=".header__coin-price-left">
              <p class="header__coin-data padding">
                <span class="header-icon">
                  <i class="fa-solid fa-chart-line"></i>
                </span>24hr High
              </p>
              <p class="header__coin-data spacer">$${data.market_data.high_24h.usd}</p>
            </div>
            <div class="header__coin-price-right">
              <p class="header__coin-data padding">24hr Low</p>
              <p class="header__coin-data">$${data.market_data.low_24h.usd}<p>
            </div>
          </div>
        </div>
      </div>
      `;
    })
    .catch((err) => {
      console.log(err);
      headerCoinContainer.innerHTML += `
        <p>Bitcoin ${errorMsg}</p>
      `;
    });

  fetch(urlEthereum)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      headerCoinContainer.innerHTML += `
      <div class="header__coin-spacing">
        <img src=${data.image.small} class="header-img"/>
        <div class="header__coin-text">${data.name}: $${data.tickers[0].last}
          <div class="header__coin-data-container">
            <div class=".header__coin-price-left">
              <p class="header__coin-data padding">
                <span class="header-icon">
                  <i class="fa-solid fa-chart-line"></i>
                </span>24hr High
              </p>
              <p class="header__coin-data spacer">$${data.market_data.high_24h.usd}</p>
            </div>
            <div class="header__coin-price-right">
              <p class="header__coin-data padding">24hr Low</p>
              <p class="header__coin-data">$${data.market_data.low_24h.usd}<p>
            </div>
          </div>
        </div>
      </div>
      `;
    })
    .catch((err) => {
      console.log(err);
      headerCoinContainer.innerHTML += `
        <p>Ethereum ${errorMsg}</p>
      `;
    });

  fetch(urlCardano)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      }
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      headerCoinContainer.innerHTML += `
      <div class="header__coin-spacing">
        <img src=${data.image.small} class="header-img"/>
        <div class="header__coin-text">${data.name}: $${data.tickers[0].last}
          <div class="header__coin-data-container">
            <div class=".header__coin-price-left">
              <p class="header__coin-data padding">
                <span class="header-icon">
                  <i class="fa-solid fa-chart-line"></i>
                </span>24hr High
              </p>
              <p class="header__coin-data spacer">$${data.market_data.high_24h.usd}</p>
            </div>
            <div class="header__coin-price-right">
              <p class="header__coin-data padding">24hr Low</p>
              <p class="header__coin-data">$${data.market_data.low_24h.usd}<p>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .catch((err) => {
      console.log(err);
      headerCoinContainer.innerHTML += `
        <p>Cardano ${errorMsg}</p>
      `;
    });
}
coinApi();

// Current time to display on page
const getTime = () => {
  const currentTime = new Date().toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
  theTime.textContent = currentTime;
};
getTime();
