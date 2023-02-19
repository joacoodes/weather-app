import imgThunderstorm from '../assets/sun-light.png';
import imgDrizzle from '../assets/cloud-rain-light.png';
import imgRain from '../assets/umbrella-light.png';
import imgSnow from '../assets/snowflake-light.png';
import imgClear from '../assets/sun-light.png';
import imgClouds from '../assets/cloud-light.png';
import imgDefault from '../assets/waves-light.png';

export const editCardWeather = (data) => {
  //Referencias
  const cardId = document.getElementById('weather-card-id');
  const weatherImage = document.getElementById('weatherImage');
  const temp = document.getElementById('temp');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');

  const weatherTemp = data.main.temp.toFixed(0);
  const windSpeedFixed = data.wind.speed.toFixed(1);
  const weatherType = data.weather[0].main;

  switch (weatherType) {
    case "Thunderstorm":
      weatherImage.src = `${imgThunderstorm}`;
      break;
    case "Drizzle":
      weatherImage.src = `${imgDrizzle}`;
      break;
    case "Rain":
      weatherImage.src = `${imgRain}`;
      break;
    case "Snow":
      weatherImage.src = `${imgSnow}`;
      break;
    case "Clear":
      weatherImage.src = `${imgClear}`;
      break;
    case "Clouds":
      weatherImage.src = `${imgClouds}`;
      break;
    default:
      weatherImage.src = `${imgDefault}`;
      break;
  };

  cardId.style.display = "flex";
  temp.innerHTML = `${weatherTemp}ºC`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${windSpeedFixed}m/s`;
}