//выбор кнопки по атрибуту data-add
const btnAdd = document.querySelector('button[data-add]');//выбор элемента по атрибуту
const valueInput = document.querySelector('input[data-value]'); 
const outputElement = document.querySelector('.js-output span'); //выбор элемента по тегу и по классу
const resetBtn = document.querySelector('button[data-reset]');

btnAdd.textContent = 'Подсчитать';
resetBtn.textContent = 'Очистить';

console.log(btnAdd);
console.log(resetBtn);
console.log(outputElement);
console.log(valueInput);
console.dir(btnAdd.textContent);
console.dir(btnAdd);
console.dir(valueInput);

let total = 0;

//слушатель события клика
btnAdd.addEventListener('click', function () {
  console.log('click');
  const value = Number(valueInput.value);
  console.log(value);
  total += value;
  outputElement.textContent = total;
  // очистка строки после отправки
  valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
  total = 0;
  outputElement.textContent = total;
});
