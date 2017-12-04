let secretPhrase = ['h', 'a', 'h', 'a', 'l', 'o', 'l'];
let index = 0;

function onKeyUp(e) {
  if(e.key === secretPhrase[index]) {
    index++;
    if(index === 7) {
      console.log("you did it!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

document.onkeyup = onKeyUp;
