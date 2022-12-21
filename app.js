/* eslint-disable indent */
import { apiKey } from "./apiKey.js";

// DOM variables
const footerAuthorInfo = document.getElementById("footer__author-info");
const headerCoinContainer = document.getElementById("header__coin-container");
const theTime = document.getElementById("the-time");
const headerWeatherContainer = document.querySelector(
  ".header__weather-container"
);

// API urls
const urlBitcoin = "https://api.coingecko.com/api/v3/coins/bitcoin";
const urlEthereum = "https://api.coingecko.com/api/v3/coins/ethereum";
const urlCardano = "https://api.coingecko.com/api/v3/coins/cardano";

// Error handling variable
const errorMsg = "is not available at this time";

// Background image API call
function unsplashApi() {
  const urlUnsplash =
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";

  fetch(urlUnsplash)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      footerAuthorInfo.textContent = `Photo credit: ${data.user.name}`;
    })
    .catch((err) => {
      console.log(err);
      document.body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1542856391-010fb87dcfed?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzEzOTI0Nzk&ixlib=rb-4.0.3&q=80)";
    });
}
unsplashApi();

// Cryptocurrency API calls/data request
const cryptoApi = () => {
  // Url array
  const urls = [urlBitcoin, urlEthereum, urlCardano];

  for (const url of urls) {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const dailyCurrent = data.market_data.current_price.usd;
        const percentageNum =
          data.market_data.price_change_percentage_1h_in_currency.usd;
        const percentageChange = percentageNum.toFixed(5).slice(0, -1);
        headerCoinContainer.innerHTML += `
        <div class="header__coin-spacing">
          <img src=${data.image.small} class="header-img"/>
          <div class="header__coin-text">
            <div class="header__coin-ticker">
              <p>${data.symbol}: $${dailyCurrent}</p>
              <p class="ticker-align">${
                percentageChange < 0
                  ? // eslint-disable-next-line quotes
                    `<span class="percentage-spacer-red"><i class="fa-solid fa-caret-down"></i></span>`
                  : // eslint-disable-next-line quotes
                    `<span class="percentage-spacer"><i class="fa-solid fa-caret-up"></i></span>`
              }${percentageChange}%
              </p>
            </div>
            <div class="header__coin-data-container">
              <div class=".header__coin-price-left">
                <p class="header__coin-data padding">
                  <span class="header-icon">
                    <i class="fa-solid fa-chart-line"></i>
                  </span>24hr High
                </p>
                <p class="header__coin-data spacer">$${
                  data.market_data.high_24h.usd
                }</p>
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
};
cryptoApi();

// Current time to display on page
const getTime = () => {
  const currentTime = new Date().toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
  theTime.textContent = currentTime;
};
setInterval(getTime, 1000);

// Open Weather Map API call
const getWeather = (lat, lon) => {
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  fetch(urlWeather)
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather is not available");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const temp = Math.round(data.main.temp);
      headerWeatherContainer.innerHTML = `
        <div class="header__weather-info">  
          <img src="${iconUrl}"/>
          <p class="weather-temp">${temp}°</p>
          <p class="weather-desc">${data.weather[0].description}</p>
        </div>
        <div class="weather-location">
          <p class="location-icon"><i class="fa-solid fa-location-dot"></i><p>
          <p>${data.name}</p>
        </div>
      `;
    })
    .catch((err) => console.log(err));
};

const testGeolocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    getWeather(position.coords.latitude, position.coords.longitude);
  });
};
console.log(testGeolocation());
