let inpSpacing = document.getElementById('spacing');
let inpBlur = document.getElementById('blur');
let inpColor = document.getElementById('base');

inpSpacing.oninput = function(e) {
  document.documentElement.style.setProperty('--spacing', `${e.target.value}px`);
}

inpBlur.oninput = function(e) {
  document.documentElement.style.setProperty('--blur', `${e.target.value}px`);
}

inpColor.oninput = function(e) {
  document.documentElement.style.setProperty('--base', `${e.target.value}`);
}
