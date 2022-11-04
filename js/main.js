// varibales
let search = document.querySelector(`.search-box`)
let city = document.querySelector(`.city`)
let date = document.querySelector(`.date`)
let temp = document.querySelector(`.temp`)
let weather = document.querySelector(`.weather`)
let container = document.querySelector(`.container`)
let desc = document.querySelector(`#description`)

//default value 
city.innerHTML = `Enter a city name`
date.innerHTML = ``
weather.innerHTML = ``
temp.innerHTML = ``

// function to get result from search box
search.addEventListener(`keypress`, currCity)

function currCity(e) {
    if (e.keyCode == 13 && search.value !== '') {
        city.innerHTML = 'Loading...'
        getResult(search.value)


    }

}

function getResult(cities) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${`23aa5d907bccdb4cecbead255b82af7a`}`)
        .then(resp => resp.json(resp))

        .then(resp => displayRes(resp))
}

function displayRes(result) {
    search.value = ``
    // innerHTML = city
    city.innerHTML = result.name + ',' + result.sys.country
    // innerHTML Date
    let dd = new Date()
    date.innerHTML = dd.toDateString()
    // innerHTML temp
    //formula to convert from k to c temp
    let celsius = Math.trunc(result.main.temp - 273.15)
    temp.innerHTML = celsius + '°c'
    // change icon
    let iconId = result.weather[0].icon
    let url = `http://openweathermap.org/img/wn/${iconId}@2x.png`
    let img = document.getElementById(`img.png`)
    img.src = url
    // innerHTML weather description
    weather.innerHTML = result.weather[0].main
    // descriptio innerHTML
    desc.innerHTML = result.weather[0].description

}