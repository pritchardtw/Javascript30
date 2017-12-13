const seconds = Array.from(document.querySelectorAll('li')).reduce((acc, element) => {
  const time = element.getAttribute('data-time').trim().split(':');
  const minutes = parseInt(time[0]);
  const seconds = parseInt(time[1]);
  return acc + (minutes*60) + seconds;
}, 0);

const totalMinutes = Math.floor(seconds / 60);
const totalHours = Math.floor(totalMinutes / 60);

let hour = totalHours;
let minute = totalMinutes % 60;
let second = seconds % 60;

console.log(`${hour}:${minute}:${second}`);
