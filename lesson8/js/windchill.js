var temperature = parseInt(document.getElementById('temperature').innerHTML);
var wspeed = parseInt(document.getElementById('wspeed').innerHTML);

function getwindChill(temperature, wspeed)
{
    if (temperature <= 50 && wspeed >= 3) {
        windchill = 35.4 + 0.6215 * temperature - 35.75 * (Math.pow(wspeed, 0.16)) + 0.4275 * temperature * (Math.pow(wspeed, 0.16));
        return windchill.toFixed(1);
    }

    else {
        return "N/A";
    }
}

getwindChill(temperature, wspeed);

document.getElementById("windchill").innerHTML = " " + getwindChill(temperature, wspeed) + "°" + " " + "F";