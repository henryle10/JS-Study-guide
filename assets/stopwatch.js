// Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set intervals & timerstatus

let timerInterval = null;
let timerStatus = "stopped"


// Stop Watch Function
function stopWatch() {
    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString()
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString()
    } else {
        leadingHours = hours;
    }


    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = '<i id="pause" class="fa-solid fa-pause"></i>';
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i id="play" class="fa-solid fa-play"></i>';
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('startStopBtn').innerHTML = '<i id="play" class="fa-solid fa-play"></i>';
    timerStatus = "stopped";

    document.getElementById('timer').innerHTML = "00:00:00"

})
