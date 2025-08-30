const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherInfo = document.getElementById("weatherInfo");
const darkModeToggle = document.getElementById("darkModeToggle");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  fetchWeather(city);
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      cityName.textContent = `📍 ${data.name}, ${data.sys.country}`;
      temperature.textContent = `🌡️ Temp: ${data.main.temp} °C`;
      condition.textContent = `☁️ Weather: ${data.weather[0].description}`;
      humidity.textContent = `💧 Humidity: ${data.main.humidity}%`;
      wind.textContent = `💨 Wind: ${data.wind.speed} m/s`;
      weatherInfo.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
