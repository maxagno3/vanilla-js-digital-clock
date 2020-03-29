// let secondHand = document.querySelector('.sec-hand');
// let minsHand = document.querySelector('.min-hand');
// let hourHand = document.querySelector('.hour-hand');

// function setDate(){
//     let now = new Date();
//     let seconds = now.getSeconds();
//     let secondDegree = ((seconds/60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondDegree}deg)`;

//     let mins = now.getMinutes();
//     let minDegrees = ((mins/60) * 360) + 90;
//     minsHand.style.transform = `rotate(${minDegrees}deg)`

//     let hour = now.getHours();
//     let hourDegrees = ((hour/12) * 360) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`
// }

// setInterval(setDate, 1000)

function startTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    second = checkTime(seconds);
    document.querySelector('.clock').innerHTML = hours + ':' + minutes + ':' + seconds;
    let time = setTimeout(startTime, 500);
}

function checkTime(i){
    if (i < 10) {
        i += '0';
    }
    return i;
}