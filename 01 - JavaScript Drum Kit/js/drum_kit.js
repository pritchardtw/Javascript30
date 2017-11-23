const audioFiles = document.getElementsByTagName('audio');
const drumDivs = document.querySelectorAll('.key');
drumDivs.forEach(key => key.addEventListener('transitionend', function(e) {
  if(e.propertyName === 'transform') {
    this.classList.remove('playing');
  }
}));
let audioFilesObjects = {};
let drumObjects = {};
for(let i = 0; i < audioFiles.length; i++) {
  audioFilesObjects[audioFiles[i].getAttribute('data-key')] = audioFiles[i];
}
for(let i = 0; i < drumDivs.length; i++) {
  drumObjects[drumDivs[i].getAttribute('data-key')] = drumDivs[i];
}

function playAudio(id) {
    if(!audioFilesObjects[id]) {
      return;
    }
    let file = audioFilesObjects[id];
    file.currentTime = 0;
    file.play();
}

function addCSS(id) {
  if(!drumObjects[id]) {
    return;
  }
  drumObjects[id].classList.add("playing");
}

document.addEventListener('keydown', (event) => {
  let keyCode = event.keyCode;
  addCSS(keyCode);
  playAudio(keyCode);
});
