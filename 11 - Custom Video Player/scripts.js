const vPlayerVid = document.querySelector('video');
const bPlay = document.querySelector('button[title="Toggle Play"]');
const bSkip10 = document.querySelector('button[data-skip="-10"]');
const bSkip25 = document.querySelector('button[data-skip="25"]');
const inpVolume = document.querySelector('input[name="volume"]');
const inpPlayRate = document.querySelector('input[name="playbackRate"]');
const divProgFilled = document.querySelector('.progress__filled');
let playing = false;

function togglePlay() {
  if(playing) {
    vPlayerVid.pause();
    bPlay.innerHTML = "►";
    playing = false;
  } else {
    vPlayerVid.play();
    bPlay.innerHTML = "&#10074 &#10074";
    playing = true;
  }
}

bPlay.onclick = togglePlay;
vPlayerVid.onclick = togglePlay;
vPlayerVid.onended = () => {
  togglePlay();
  divProgFilled.style.flexBasis = "0%";
}
vPlayerVid.ontimeupdate = e => {
  divProgFilled.style.flexBasis = `${(e.target.currentTime / e.target.duration) * 100}%`;
}
inpVolume.oninput = e => vPlayerVid.volume = e.target.value;
inpPlayRate.oninput = e => vPlayerVid.playbackRate = e.target.value;
bSkip10.onclick = () => { vPlayerVid.currentTime -= 10 };
bSkip25.onclick = () => { vPlayerVid.currentTime += 25 };
