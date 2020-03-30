// create function to display analog clock 

function analogClock(){
    
    let clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    let time = document.getElementById('clock');
    time.innerHTML = hours + " : " + minutes +" . "+ seconds
}

analogClock()
setInterval(analogClock, 1000)