const wURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&APPID=e5471d9c45ee420f0d1bffd165f48ae8&units=imperial";

fetch(wURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let currentW = document.getElementById('current');
        const getWeather = jsObject.weather[0].main;
        currentW.textContent = getWeather;

        let temperat = document.querySelector("#temperature");
        temperat.textContent = jsObject.main.temp;

        let hum = document.querySelector("#humidity");
        hum.textContent = jsObject.main.humidity;

        let windSpeed = document.querySelector("#wspeed");
        windSpeed.textContent = jsObject.wind.speed;

        let t = parseFloat(document.getElementById('temperature').textContent);
        let s = parseFloat(document.getElementById('wspeed').textContent);
        
        if (t<=50 && s>=3) {
            windchill = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.425 * t * (Math.pow(s, 0.16)));
        
            document.getElementById('windchill').textContent = (windchill);
        }
        
        else {
        
            document.getElementById('windchill').textContent = ("N/A");
        }
    });

const fURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&APPID=e5471d9c45ee420f0d1bffd165f48ae8&units=imperial";

fetch(fURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        for (let i = 0; i < forecast.length; i++) {
    document.getElementById(`data${i + 1}`).textContent = forecast[i].main.temp.toFixed(0) + "\xB0";
    document.getElementById(`label${i + 1}`).textContent = weekday[(date.getDay() + i + 1) % 7];

    document.getElementById(`pic${i + 1}`).setAttribute('src', "https://openweathermap.org/img/wn/" + forecast[i].weather[0].icon + "@2x.png");
    document.getElementById(`pic${i + 1}`).setAttribute('alt', forecast[i].weather[0].description);


}
    
});
