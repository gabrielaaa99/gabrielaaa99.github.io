let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

var x = document.lastModified;
document.getElementById("lastUpdate").innerHTML = x;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}