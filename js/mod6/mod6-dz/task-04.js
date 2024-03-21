// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValueEl = document.querySelector('#value'); //получаем доступ к спану
const buttonEl = document.querySelectorAll('#counter button'); //получаем доступ к кнопкам
let counterValue = 0;

buttonEl.forEach(button => {
  button.addEventListener('click', event => {
    //добавляем на кнопку действие клик
    const action = event.target.getAttribute('data-action'); //выбираем элементы по атрибуту на котором будут события
    if (action === 'decrement') {
      //если у атрибута значение dec то уменьшаем значение value
      counterValue -= 1;
    } else if (action === 'increment') {
      //если у атрибута значение inc то добавляем value
      counterValue += 1;
    }
    counterValueEl.textContent = counterValue; //записываем значение в спан value
  });
});

// const valueSpan = document.getElementById('value');
// const btnEls = document.querySelectorAll('[data-action]');

// let counterValue = 0;

// function updateValue() {
//   valueSpan.textContent = counterValue;
// }

// function handleClick(event) {
//   const action = event.target.dataset.action;
//   if (action === 'decrement') {
//     counterValue -= 1;
//   } else if (action === 'increment') {
//     counterValue += 1;
//   }
//   updateValue();
// }
// // Додаємо слухача кліку до кожної кнопки
// btnEls.forEach(button => {
//   button.addEventListener('click', handleClick);
// });

// // Ініціалізуємо значення лічильника при завантаженні сторінки
// updateValue();

//  // Отримуємо посилання на елементи DOM
// const valueSpan = document.getElementById('value');
// const decrementButton = document.querySelector('[data-action="decrement"]');
// const incrementButton = document.querySelector('[data-action="increment"]');

// // Змінна для зберігання поточного значення лічильника
// let counterValue = 0;

// // Функція для оновлення значення лічильника на сторінці
// function updateValue() {
//   valueSpan.textContent = counterValue;
// }

// // Слухач кліку для кнопки декременту
// decrementButton.addEventListener('click', function () {
//   counterValue--;
//   updateValue();
// });

// // Слухач кліку для кнопки інкременту
// incrementButton.addEventListener('click', function () {
//   counterValue++;
//   updateValue();
// });

// // Ініціалізуємо значення лічильника при завантаженні сторінки
// updateValue();
