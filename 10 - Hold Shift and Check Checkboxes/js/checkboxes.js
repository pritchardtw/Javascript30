let nodeInputs = document.getElementsByTagName('input');
const inputsArray = Array.from(nodeInputs);
let inputs = inputsArray;

let shiftDown = false;
let lastSelected = null;
let lastSelectedData = null;

function handleChange(e) {
  if(e.target.checked && shiftDown && lastSelected && lastSelected.checked) {
    inputs = Array.from(inputsArray);
    let currentSelectedData = parseInt(e.target.getAttribute('data-id'));
    let selectedElements;
    let unselectedElements;
    if(currentSelectedData > lastSelectedData) {
      selectedElements = inputs.slice(lastSelectedData, currentSelectedData + 1);
      inputs.splice(lastSelectedData, currentSelectedData + 1);
      unselectedElements = inputs;
    } else {
      selectedElements = inputs.slice(currentSelectedData, lastSelectedData + 1);
      inputs.splice(currentSelectedData, lastSelectedData + 1);
      unselectedElements = inputs;
    }
    selectedElements.forEach(element => element.checked = true);
    // unselectedElements.forEach(element => element.checked = false);
    lastSelected = e.target;
    lastSelectedData = parseInt(e.target.getAttribute('data-id'));
  } else if (e.target.checked) {
    lastSelected = e.target;
    lastSelectedData = parseInt(e.target.getAttribute('data-id'));
  }
}

function handleKeyDown(e) {
  if(e.keyCode === 16) {
    shiftDown = true;
  }
}

function handleKeyUp(e) {
  if(e.keyCode === 16) {
    shiftDown = false;
  }
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
inputs.forEach((input, index) => {
  input.onchange = handleChange;
  input.setAttribute('data-id', index);
});
