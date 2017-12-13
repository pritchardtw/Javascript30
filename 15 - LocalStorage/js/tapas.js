const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let itemCount = 0;

const items = JSON.parse(localStorage.getItem('item1')) || [];
itemsList.innerHTML = "";
renderItems(items);

function toggleCheck(e) {
  const index = e.target.getAttribute('data-id');
  const childInput = document.querySelector(`input[data-id='${index}']`);
  childInput.checked = !childInput.checked;
  items[index].checked = !items[index].checked;
  localStorage.setItem('item1', JSON.stringify(items));
}

function renderItems(items) {
  items.forEach(item => {
    const newLi = document.createElement('li');
    newLi.setAttribute('data-id', item.id);

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.checked = item.checked;
    newCheckbox.setAttribute('data-id', item.id);

    const newLabel = document.createElement('label');
    newLabel.innerHTML = item.text;
    newLabel.setAttribute('data-id', item.id);

    newLi.appendChild(newCheckbox);
    newLi.appendChild(newLabel);
    newLi.onclick = toggleCheck;

    itemCount++;
    itemsList.appendChild(newLi);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  let newItem = {};
  newItem.text = e.target[0].value;
  this.reset();
  newItem.checked = false;
  newItem.id = itemCount;
  items.push(newItem);
  localStorage.setItem('item1', JSON.stringify(items));
  renderItems([newItem]);
}

addItems.addEventListener('submit', handleSubmit);
