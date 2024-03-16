const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "6793f39ba0527497636398447cefaaab&units=metric"
const weatherIcon = document.querySelector(".weather-icon");

let btn = document.querySelector("#searchButton");

async function checkWeather(cityName) {
    const URL = `${BASE_URL}${cityName}&appid=${apiKey}`;
    const response = await fetch(URL);
    if(response.ok) {
        const data = await response.json();
        updateWeather(data);
        
    } else {
        alert("City Not Found");
        document.querySelector("#cityName").value = "";
    }
};


btn.addEventListener("click", () => {
    let cityName = document.querySelector("#cityName");
    // console.log(cityName.value);
    checkWeather(cityName.value);
});

const updateWeather = (data) => {
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°c`;
    document.querySelector(".wind").innerText = `${data.wind.speed} km/hr`;
    document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
    updateWeatherImage(data.weather[0].main);

};

const updateWeatherImage = (weatherCondition) => {
    if(weatherCondition === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition === "Clear"){
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondition === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition === "Humidity"){
        weatherIcon.src = "images/humidity.png";
    } else if (weatherCondition === "Mist"){
        weatherIcon.src = "images/mist.png";
    } else if (weatherCondition === "Rain"){
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondition === "Snow"){
        weatherIcon.src = "images/snow.png";
    } else if (weatherCondition === "Wind"){
        weatherIcon.src = "images/wind.png";
    }

}