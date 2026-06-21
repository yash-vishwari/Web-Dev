const API_URL = "";

const API_KEY = "";

document.getElementById("searchButton").addEventListener("click",()=>
{
    getWeather();
});
async function getWeather()
{

const city = document.getElementById("city_input").value.trim().toLowerCase();
console.log(city);

const response = await fetch(API_URL + `q=${city}` + `&appid=${API_KEY}`);
const data = await response.json();


document.querySelector(".city").innerText =data.name;
const temp =data.main.temp;
document.querySelector(".temp").innerText = Math.round(temp) + "°C";
document.querySelector(".humidity").innerText =data.main.humidity+"%";
document.querySelector(".wind").innerText =data.wind.speed+" km/h"

document.querySelector(".weather").style.display = "block";


}

