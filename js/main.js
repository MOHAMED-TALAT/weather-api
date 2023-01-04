
let sityWeather
async function GetSityWeather (x = "cairo" ){
    sityWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${x}&days=3`)
    sityWeather = await sityWeather.json()
   
    diplay_days()




}

GetSityWeather()

function diplay_days(){


   var cartona =  `
    <div class="col-md-4 this_day ">
    <p class = "date"> ${sityWeather.forecast.forecastday[0].date.slice(-2)} ${day_of_week[day1] }  </p>
    <p > ${ sityWeather.location.name}</p>
    <span> <span> ${sityWeather.forecast.forecastday[0].day.maxtemp_c   }<sup> o</sup>C </span>  <img src="${ sityWeather.forecast.forecastday[0].day.condition.icon}" alt=""></span>
    <p> ${sityWeather.forecast.forecastday[0].day.condition.text}</p>

    <div class="ico mt-4">
      <span class="me-3"><img src="img/icon-umberella@2x.png" alt="icon-umberella"> 20%</span>
      <span class="mx-3"><img src="img/icon-wind@2x.png" alt="icon-wind"> ${sityWeather.current.wind_kph}km/h</span>
      <span class="mx-3"><img src="img/icon-compass@2x.png" alt="icon-compass"> ${sityWeather.current.wind_dir}</span>
    </div>
  </div>


  <div class="col-md-4 this_day this_day2  ">
    <p  class = "date" > ${sityWeather.forecast.forecastday[1].date.slice(-2)} ${day_of_week[day2]} </p>
    <img src="${ sityWeather.forecast.forecastday[1].day.condition.icon}" alt="">
    <span  >  <br> <span> ${sityWeather.forecast.forecastday[1].day.maxtemp_c  }<sup> o</sup>C </span>   </span>
    <p> ${sityWeather.forecast.forecastday[1].day.condition.text}</p>

  </div>


  <div class="col-md-4 this_day ">
    <p  class = "date"> ${sityWeather.forecast.forecastday[2].date.slice(-2)} ${day_of_week[day3]} </p>
    <img src="${ sityWeather.forecast.forecastday[2].day.condition.icon}" alt="">
    <span>   <br> <span> ${sityWeather.forecast.forecastday[2].day.maxtemp_c  }<sup> o</sup>C </span> </span>
    <p> ${sityWeather.forecast.forecastday[2].day.condition.text}</p>


 </div>`
  document.querySelector(".row2").innerHTML = cartona;
  return cartona ;
}




// get day 

var day_of_week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var d = new Date();
let day1 = d.getDay() - 1
var day2 
var day3 


if (day1 < 6){
    day2 = day1 + 1 
    if (day2 == 6){
        day3 = 0 
    }
    else{
        day3 = day2 + 1 
    }
    
}
else {
    day1 = 6
    day2 = 0
    day3 = day2 + 1

}


