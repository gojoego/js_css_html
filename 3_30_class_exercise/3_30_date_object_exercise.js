// create function to display analog clock 

let hours, minutes, seconds;

function analogClock(){
    
    // create new Date object and assign it to variable called "time"
    let clock = new Date();

    // access the "get" functions on Date object with dot accessor
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    let time = document.getElementById('clock');
    time.innerHTML = hours + " : " + minutes +" . "+ seconds
}

analogClock()
setInterval(analogClock, 1000)