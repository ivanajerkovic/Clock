const hourHand = document.getElementById("hour")
const minHand = document.getElementById("minute")
const secHand = document.getElementById("second")

const hourDiv = document.getElementById('hours')
const minDiv = document.getElementById('minutes')
const secDiv = document.getElementById('seconds')
const ampmDiv = document.getElementById('ampm')

let day = new Date()
let hours = day.getHours()
let minutes = day.getMinutes()
let seconds = day.getSeconds()

let hr = hours * 30 + minutes / 2 + seconds / 120
let mn = minutes * 6 + seconds / 10
let sc = seconds * 6

hourHand.style.transform = `rotate(${hr}deg)`
minHand.style.transform = `rotate(${mn}deg)`
secHand.style.transform = `rotate(${sc}deg)`

setInterval ( () => {
    hr += 1 / 120 
    mn += 1 / 10
    sc += 6

    hourHand.style.transform = `rotate(${hr}deg)`
    minHand.style.transform = `rotate(${mn}deg)`
    secHand.style.transform = `rotate(${sc}deg)`

    //Digital clock
    let number = hours * 3600 + minutes * 60 + seconds
    number++
    seconds = number % 60
    minutes = Math.floor(number / 60) % 60
    hours = Math.floor(number / 3600) % 24
    console.log(hours, minutes)
    
    let amPm = hours >= 12 ? "PM" : "AM"

    // add zero before single digit number
    let s = (seconds < 10) ? `0${seconds}`:`${seconds}`
    let m = (minutes < 10) ? `0${minutes}`:`${minutes}`
    let hh = (hours > 12) ? hours - 12 : hours 
    let h = (hh < 10) ? `0${hh}`:`${hh}`

    hourDiv.innerHTML = h
    minDiv.innerHTML = m
    secDiv.innerHTML = s
    ampmDiv.innerHTML = amPm
}, 1000)