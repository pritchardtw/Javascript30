let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function updateClock() {
  let date = new Date();
  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let secondsRotate = (seconds / 60.0) * 360.0;
  let minutesRotate = (minutes / 60.0) * 360.0;
  let hoursRotate = (hours / 12.0) * 360.0;

  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
