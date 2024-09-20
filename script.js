const searchbox = document.querySelector('.search input')
const searchbtn = document.getElementById('searchbtn')
const weatherIcon = document.querySelector(".weather-icon")
const apiKey = "1b67741e671f36afb41beefb7c6c02c0"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkWeather(city_name){
    const response = await fetch(apiUrl + city_name + `&appid=${apiKey}`)
    const displayWeather = document.querySelector('.weather')
    const hw = document.querySelector('.details')
    const error = document.querySelector('.error')

    if(response.status == 404){
        displayWeather.style.display = 'none'
        hw.style.display = 'none'
        error.style.display = 'block'
    }
    else{
        var data = await response.json()
        console.log(data)
    
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "images/wind.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
    
        displayWeather.style.display = 'block'
        hw.style.display = 'flex'
        error.style.display = 'none'
        
    }

}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value)
})

