const wURL = "https://api.openweathermap.org/data/2.5/weather?id=5596467&APPID=e5471d9c45ee420f0d1bffd165f48ae8&units=imperial";

fetch(wURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentW = document.getElementById('current');
        const getWeather = jsObject.weather[0].main;
        currentW.textContent = getWeather;

        let temperature = document.querySelector("#temperature");
        temperature.textContent = jsObject.main.temp;
        
        document.getElementById('humidity').textContent = jsObject.main.humidity;

        let windSpeed = document.querySelector("#wspeed");
        windSpeed.textContent = jsObject.wind.speed;
           
        
        let t = parseFloat(document.getElementById('temperature').textContent);
        let s = parseFloat(document.getElementById('wspeed').textContent);
        
        if (t<=50 && s>=3) {
            windchill = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.425 * t * (Math.pow(s, 0.16)));
        
            document.getElementById('windchill').textContent = (windchill).toFixed(0) + "°F";
        }
        
        else {
        
            document.getElementById('windchill').textContent = ("N/A");
        }
    });

5596467