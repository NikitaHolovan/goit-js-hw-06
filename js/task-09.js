function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let bgColor = document.querySelector('.color');

const btn = document.querySelector('.change-color');
btn.addEventListener('click', changeBgColor);

function changeBgColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bgColor.textContent = randomColor;
}
