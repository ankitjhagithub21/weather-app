
const API_KEY = "eb3e45369ea4ca4b45dd43ba83cf4c68";
const units = "metric";

async function getWeather(API_KEY, city, units) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`);
    return await response.json();
}


btn.addEventListener("click", (e) => {
    
    
    getWeather(API_KEY, city.value, units)
        .then(data => {
            console.log(data)
            cityName.innerHTML=data.name;
            temp.innerHTML=data.main.temp;
            temp1.innerHTML=Math.floor(data.main.temp);
            max_temp.innerHTML=data.main.temp_max;
            min_temp.innerHTML=data.main.temp_min;
            feels_like.innerHTML=data.main.feels_like;
            humidity.innerHTML=data.main.humidity;
            humidity1.innerHTML=data.main.humidity;
            desc.innerHTML=data.weather[0].description;
            wind_speed.innerHTML = data.wind.speed;
            wind_speed1.innerHTML = data.wind.speed;
            let Sunrise=new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            let Sunset=new Date(data.sys.sunset * 1000).toLocaleTimeString();
            sunrise.innerHTML = Sunrise;
            sunset.innerHTML = Sunset;
        })
        .catch(error => {
            console.error(error);
        });

    e.preventDefault();
})
