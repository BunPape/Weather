var APIKey = "2d690ecb9758753b8353d62a9c29e067";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)