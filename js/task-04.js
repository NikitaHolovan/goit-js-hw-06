let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const dekrementBtn = document.querySelector('#counter').firstElementChild;
const inkrementBtn = document.querySelector('#counter').lastElementChild;

inkrementBtn.addEventListener('click', event => {
  console.log("Вешаю слушателя события на целевую кнопку");
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrementBtn.addEventListener('click', event => {
  console.log("Снимаю слушателя события с целевой кнопки");
  valueEl -= 1;

  counterValue.innerText = valueEl;
  console.log("counterValue", counterValue);
});