async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const weather = `
      Weather in ${data.name}:<br>
      ${data.weather[0].main} - ${data.weather[0].description}<br>
      Temp: ${data.main.temp}°C<br>
      Humidity: ${data.main.humidity}%<br>
      Wind: ${data.wind.speed} m/s
    `;
    document.getElementById("weatherResult").innerHTML = weather;
  } else {
    document.getElementById("weatherResult").innerHTML = "City not found.";
  }
}
