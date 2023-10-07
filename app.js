const input = document.getElementById('input');
const weather = document.getElementById('weather');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const city = document.getElementById('city');
const body = document.querySelector('body');

function changeBg(city){
  
  body.style.backgroundImage= 'url("https://source.unsplash.com/random/900×700/?'+city+'")'
  
  
    
}

input.addEventListener('keyup',(e)=>{
    if(e.key=="Enter"){
       
      if(input.value==""){
        alert("input field is empty")
      }else{
        changeBg(input.value)
        city.innerHTML=input.value;
        getWeather(input.value) 
        input.value=""
       
      }
      
    }
})




const getWeather= async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb3e45369ea4ca4b45dd43ba83cf4c68&units=metric`);
    const data = await res.json()
    weather.innerHTML = Math.ceil(data.main.temp);
    humidity.innerHTML = data.main.humidity;
    speed.innerHTML = Math.ceil(data.wind.speed*3.6);


}