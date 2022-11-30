const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const panelEl = document.querySelector('.panel');

const endDate = new Date("December 25 2022");
const endDateInMs = endDate.getTime();

const nowInMs = new Date().getTime();

const diff = endDateInMs - nowInMs;

const secondInMs = 1000;
const minInMs = 60 * secondInMs;
const hourInMs = 60 * minInMs;
const dayInMs = 24 * hourInMs;



const counterTimer = setInterval(timer, 1000);

function timer() {
    const nowInMs = new Date().getTime();

    const diff = endDateInMs - nowInMs;

if(diff > 0) {
daysEl.innerHTML = Math.floor(diff / dayInMs);
hoursEl.innerHTML= Math.floor((diff % dayInMs) / hourInMs);
minutesEl.innerHTML = Math.floor((diff % hourInMs)/minInMs);
secondsEl.innerHTML = Math.floor((diff % minInMs) / secondInMs);
} else {
    clearInterval(timer);
    panelEl.innerHTML = "<h1>Buon Natale!🎄</h1>"
}
}