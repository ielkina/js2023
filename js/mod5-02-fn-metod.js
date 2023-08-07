/*call and apply*/

const showThis = function (a, b, c) {
  console.log(a, b, c);
  console.log('showThis - this', this);
};

showThis();

const objA = {
  a: 5,
  b: 10,
};

//метод call
showThis.call(objA, 10, 220, 30); //через запятую можно передать непроизвольное количество аргументов
showThis.apply(objA, [1, 2, 3]); //передается массив аргументов

const objB = {
  a: 1,
  b: 1,
};

showThis.call(objB, 10, 220, 30);

// showThis();

///***************************************************** */

// const changeColor = function (color) {
//   console.log('changeColor - this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
// };
// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*bind
копия функции в спривязанным контекстом
*/

// const changeHatColor = changeColor.bind(hat); //всегда будет ссылаться на обьект hat
// const changeSweaterColor = changeColor.bind(sweater);

// changeSweaterColor();
// changeHatColor('yelow');
// console.log(hat)
// changeColor();

const counter = {
  value: 0,
  increment(value) {
    console.log('increment-this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement-this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter))
updateCounter(10, counter.decrement.bind(counter))
console.log(counter)


