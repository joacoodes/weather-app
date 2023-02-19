import './styles/style.css';
import {editCardWeather} from './components/weatherCard'

const API_KEY = '415d5a1848b664f7afa53286a0c1e218';
const block = document.getElementById('app');

//REFERENCIAS
const submitButton = document.getElementById('search-submit');
let inputSearch = document.getElementById('search-input');
//let weatherCard = document.getElementById('weather-card-id');

// TOMA LA DATA DE LA API
const weatherData = async (city_name) => {
  try {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name}&appid=${API_KEY}`);
    const data = await resp.json();
    return editCardWeather(data);
  } catch (error){
    throw error;
  };
}

const inputVerification = () => {
  if (inputSearch.value != '') {
    block.style.height = "500px";
    weatherData(inputSearch.value);
    inputSearch.classList.remove("searchError");
  } else {
    inputSearch.classList.add("searchError");
  } 
}

// DISPARA LA PETICION EN EL CASO DE QUE NO EXISTA LA CARD
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  inputVerification();
});