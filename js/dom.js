console.log('dom');


//выбор кнопки по атрибуту data-add
const btnAdd = document.querySelector('button[data-add]')
const resetBtn = document.querySelector('button[data-reset]')
const valueInput = document.querySelector('input[data-value]')
const totalText = document.querySelector('.data-text span')

btnAdd.textContent = 'Подсчитать'

console.log(btnAdd);
console.log(resetBtn);
console.log(valueInput);
console.dir(btnAdd.textContent);
console.dir(btnAdd);
console.dir(valueInput);



let total = 0;

//слушатель события клика
btnAdd.addEventListener('click', function () {
  console.log(`click`);
  const value = Number(valueInput.value)
  // console.log(value);
  total += value;
  totalText.textContent = total;
  console.log(total);
  //очистка строки после отправки
  valueInput.value = '';
})

resetBtn.addEventListener('click', function () {
  total = 0;
  totalText.textContent = total;
})