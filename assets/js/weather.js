
import { weather_data } from './data.js';


let loadDayForecastData = () => {
    let [guayaquil, ambato, tena] = weather_data

    //let {city, date, ...other} = guayaquil
    let ciudad = document.getElementById("city");
    ciudad.innerHTML = guayaquil.city

    let fecha = document.getElementById("date");
    fecha.innerHTML = guayaquil.date;

    let maxtemperatureHtml = document.getElementById("maxtemperature")
    maxtemperatureHtml.innerHTML = guayaquil.maxtemperature

    let mintemperatureHtml = document.getElementById("mintemperature")
    mintemperatureHtml.innerHTML = guayaquil.mintemperature

    let cloudinessHtml = document.getElementById("cloudiness")
    cloudiness.innerHTML = guayaquil.cloudiness

    let windHtml = document.getElementById("wind")
    wind.innerHTML = guayaquil.wind

    let rainfallHtml = document.getElementById("rainfall")
    rainfall.innerHTML = guayaquil.rainfall

    let [late, night] = guayaquil.forecast_today

    //LATE
    let late_iconHtml = document.getElementById("late_icon")
    late_iconHtml.innerHTML = late.icon;

    let late_temperatureHtml = document.getElementById("late_temperature")
    late_temperatureHtml.innerHTML = late.temperature

    let late_forecastHtml = document.getElementById("late_forecast")
    late_forecastHtml.innerHTML = late.forecast

    let late_textHtml = document.getElementById("late_text")
    late_textHtml.innerHTML = late.text

    //NIGHT
    let night_iconHtml = document.getElementById("night_icon")
    night_iconHtml.innerHTML = night.icon

    let night_temperatureHtml = document.getElementById("night_temperature")
    night_temperatureHtml.innerHTML = night.temperature

    let night_forecastHtml = document.getElementById("night_forecast")
    night_forecastHtml.innerHTML = night.forecast

    let night_textHtml = document.getElementById("night_text")
    night_textHtml.innerHTML = night.text

}

let loadWeekForecastData = () => {
    let [guayaquil, ambato, tena] = weather_data

    let week = document.getElementsByClassName("list-group")

    for (let dia of guayaquil.forecast_week) {
        week[0].innerHTML = week[0].innerHTML +
            `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia.text}</h6>
                    <span class="text-xs">${dia.date}</span>
                </div>
                <div class="d-flex align-items-center ">
                    <span class="font-weight-bold te|xt-dark mx-2">${dia.temperature.max}</span> |  <span class="text-dark mx-2">${dia.temperature.min}</span>
                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia.icon}</i></div>
                </div>
            </li>`
    }

}


loadDayForecastData();
loadWeekForecastData();