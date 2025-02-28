// API credentials
const apiKey = "ef9571d04c1347f944a305789f26c430";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// Fetching API results and updating the DOM
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      displayError(response.status);
    }
    const data = await response.json();
    // console.log("success");
    //   document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
    document.querySelector(
      ".weather-icon"
    ).src = `img/${data.weather[0].main}.png`;
    // console.log(`img/${data.weather[0].main}.png`);
    // console.log(data);
  } catch (err) {
    displayError(response.status);
  }
}

// Selecting the input field and search button
searchBox = document.querySelector(".search-section input");
searchButton = document.querySelector(".search-section button");

// // Calling the function when the search button is clicked
searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

function displayError(status) {
  document.querySelector(".city-name").innerHTML = `Invalid request: ${status}`
}