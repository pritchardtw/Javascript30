const audioFiles = document.getElementsByTagName('audio');
const drumDivs = document.getElementsByClassName('key');
let audioFilesObjects = {};
let drumObjects = {};
for(let i = 0; i < audioFiles.length; i++) {
  audioFilesObjects[audioFiles[i].getAttribute('data-key')] = audioFiles[i];
}
for(let i = 0; i < drumDivs.length; i++) {
  drumObjects[drumDivs[i].getAttribute('data-key')] = drumDivs[i];
}

function playAudio(id) {
    let file = audioFilesObjects[id];
    file.currentTime = 0;
    file.play();
}

function toggleCSS(id) {
  console.log(drumObjects[id]);
  drumObjects[id].className += " playing";
  setTimeout(() => { drumObjects[id].className = "key"; }, 50);
}

document.addEventListener('keydown', (event) => {
  let keyCode = event.keyCode;
  toggleCSS(keyCode);
  playAudio(keyCode);
});
