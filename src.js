const hourHand = document.getElementById("hour")
const minHand = document.getElementById("minute")
const secHand = document.getElementById("second")

const hourDiv = document.getElementById('hours');
const minDiv = document.getElementById('minutes');
const secDiv = document.getElementById('seconds');
const ampmDiv = document.getElementById('ampm');

setInterval ( () => {
    let day = new Date();
    let hours = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();

    let hr = hours * 30 + minutes / 2 + seconds / 120;
    let mn = minutes * 6 + seconds / 10;
    let sc = seconds * 6;

    hourHand.style.transform = `rotate(${hr}deg)`;
    minHand.style.transform = `rotate(${mn}deg)`;
    secHand.style.transform = `rotate(${sc}deg)`;

    //Digital clock
    
    let amPm = hours >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if (hours > 12) {
        hours -= 12;
    }

    // add zero before single digit number
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    hourDiv.innerHTML = hours;
    minDiv.innerHTML = minutes;
    secDiv.innerHTML = seconds;
    ampmDiv.innerHTML = amPm;
})