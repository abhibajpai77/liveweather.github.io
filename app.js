//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const weatherApi = {
    key : "8b865c1577f7860cfd8e86f82c164ae2",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
    
}

const searchInputBox=document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode ==13){
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display="block";
    }
});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

let city=document.getElementById('city');
city.innerText = `${weather.name}, ${weather.sys.country}`;

let weatherType=document.getElementById('weather');
weatherType.innerText = `${weather.weather[0].main}`;

let temperatur=document.getElementById('temp');
temperatur.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

let minMaxTemp=document.getElementById('min-max');
minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

let date=document.getElementById('date');
let todayDate=new Date();
date.innerText=dateManage(todayDate);

if(weatherType.textContent == 'Clear'){
    document.body.style.backgroundImage = "url('photos/clear.jpg')";
}

else if(weatherType.textContent == 'Haze'){
    document.body.style.backgroundImage = "url('photos/haze.jfif')";
}

else if(weatherType.textContent == 'Smoke'){
    document.body.style.backgroundImage = "url('photos/haze.jfif')";
}

else if(weatherType.textContent == 'Rain'){
    document.body.style.backgroundImage = "url('photos/rain.jfif')";
}

else if(weatherType.textContent == 'Snow'){
    document.body.style.backgroundImage = "url('photos/snow.jfif')";
}

else if(weatherType.textContent == 'Thunderstorm'){
    document.body.style.backgroundImage = "url('photos/thunderstorm.jfif')";
}

else if(weatherType.textContent == 'Clouds'){
    document.body.style.backgroundImage = "url('photos/cloudy.jfif')";
}

}

function dateManage(dateArg){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}),${year}`;
}