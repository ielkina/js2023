/* Функции обратного вызова(callback)
- Функция может принимать другие функции как параметры
- Функция которая передается другой функции как аргумент называется
"функция обратного (отложенного)вызова" (callback-функция)
- Функция которая принимает другую функцию как параметр или функцию как результат 
своей работы называется "функцией высшего порядка" */

// //callback - присвоении ссылки на функцию fnB как параметр
// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100); //вызов функции fnB
// };

// const fnB = function (number) {
//   console.log('fnB', number);
// };

// fnA('fnA', fnB);

/*Функция doMath(a,b,callback)*/

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };
// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 8, sub);
//или
//инлайн функция
// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 8, function (x, y) {
//   return x - y;
// });

/*Отложенные вызовы : регистрация событий*/

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log(`Клик по кнопке  ${Date.now()}`);
// };
// buttonRef.addEventListener('click', handleBtnClick);

// /*Отложенные вызовы: геолокация*/
// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
//   //или
//   // function (position) {
//   //   console.log(position);
//   // },
//   // function (error) {
//   //   console.log(error);
//   // }
// );

/*Отложенные вызовы: интервалы*/
// const callback = function () {
//   console.log('Через 2 секунды внутри колбэка в таймауте');
// };
// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('Код после таймаута');

/*отложенные  функции: http-запросов*/
//API URL: http://pokeapt.co/art/v2/pokemon

// const onRequestSuccess = function (response) {
//   console.log('Вызов функции onRequestSuccess после успешного ответа бекэнда');
//   console.log(response);
// };

// fetch('http://pokeapt.co/art/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);

// console.log('перед fetch');
// console.log('после fetch');

/*фильтр*/

const filter = function (array, callback) {
  const filteredArray = [];
  for (const item of array) {
    const passed = callback(item);
    if (passed) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};
//1 надо передать функцию
//2 функция получает элемент массива
//3 если элемент массива удовлетворяет условию от функции вернет true
//3 если элемент массива не удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};
const callback2 = function (value) {
  return value <= 3;
};
const getFruitsQuantity = function (fruits) {
  return fruits.quantity >= 120;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], callback2);
console.log(r2);

const fruits = [
  { name: '🍎', quantity: 200, isFresh: true },
  { name: '🍍', quantity: 90, isFresh: false },
  { name: '🍌', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, getFruitsQuantity);
console.log(r3);
