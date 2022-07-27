let secondsContainer = document.querySelector('#seconds');
let minutesContainer = document.querySelector('#minutes');
let hoursContainer = document.querySelector('#hours');
let daysContainer = document.querySelector('#days');
let nextYearContainer = document.querySelector('#year');
let spinnerLoading = document.querySelector('#loading');
let countdown = document.querySelector('#countdown');

let nextYear = new Date().getFullYear() + 1;
let newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearContainer.innerHTML = nextYear;

let getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

let insertCountdownValues = ({days, hours, minutes, seconds}) => {
    secondsContainer.innerHTML = getTimeUnit(seconds);
    minutesContainer.innerHTML = getTimeUnit(minutes);
    hoursContainer.innerHTML = getTimeUnit(hours);
    daysContainer.innerHTML = getTimeUnit(days);
}

let updateCountdown = () => {
    let currentTime = new Date();
    let difference = newYearTime - currentTime;
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(difference / 1000 / 60) % 60;
    let seconds = Math.floor(difference / 1000) % 60;

    insertCountdownValues({days, hours, minutes, seconds});
} 

let handleCountdownDisplay = () => {
    spinnerLoading.remove();
    countdown.style.display = 'flex';
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000);