let inpSpacing = document.getElementById('spacing');
let inpBlur = document.getElementById('blur');
let inpColor = document.getElementById('base');
let image = document.querySelector('img');
let jsText = document.querySelector('.hl');

image.style.padding = `${inpSpacing.value}px`;
image.style.filter = `blur(${inpBlur.value}px)`;
image.style.backgroundColor = inpColor.value;
jsText.style.color = inpColor.value;

inpSpacing.oninput = function(e) {
  image.style.padding = `${e.target.value}px`;
}

inpBlur.oninput = function(e) {
  image.style.filter = `blur(${e.target.value}px)`;
}

inpColor.oninput = function(e) {
  image.style.backgroundColor = e.target.value;
  jsText.style.color = e.target.value;
}
