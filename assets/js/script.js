// OpenWeather
const API_KEY = "a762d82bf3b974b8623cb50a0bc41a7f";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let weather = document.getElementById("condition");
var condition;


searchButton.addEventListener("click", addweatherData);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    $("#weather").css('visibility','visible').hide().fadeIn(900);
    addweatherData();
  }
}

function addweatherData() {
  $("#weather").fadeIn(900);

  getWeatherData().then(weatherData => {
    cityName.innerHTML = weatherData.name;
    temperature.innerHTML = parseInt(weatherData.main.temp - 273) + "°";
    icon.src = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    humidity.innerHTML = "Humidity: " + weatherData.main.humidity + "%";
    condition = weatherData.weather[0].main;
    weather.innerHTML = "is: " + weatherData.weather[0].description;

  })

}

function getWeatherData() {
  let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + API_KEY;
  return fetch(searchLink).then(data => {
    return data.json();
  })
}


// function changeBackground(){
//   console.log(condition)
//   switch (condition) {
//       case "Snow":
//         $(".card-body").css({backgroundColor: '#f0f0f0'});
//       case "Thunderstorm":
//         $(".card-body").css({backgroundColor: '#eaf24b'});
//       case "Drizzle":
//         $(".card-body").css({backgroundColor: '#f0f0f0'});
//       case "Rain":
//         $(".card-body").css({backgroundColor: '#b3bac4'});
//       case "Clear":
//         $(".card-body").css({backgroundColor:'#b688d1'});
//       case "Clouds":
//         $(".card-body").css({backgroundColor: '#f0f0f0'});
//
//   }


// Smooth scrolling
$("#link-home").click(function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 400);
});
$("#link-contact").click(function(event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 400);
});
