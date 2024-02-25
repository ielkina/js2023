/*call and apply*/

const showThis = function (a, b, c) {
  console.log(`showThis в контексте`, this);
  console.log(a, b, c);
};
showThis();

const objA = {
  a: 'a',
};
const objB = {
  b: 'b',
};
// Метод call(аргумент в контексте которого эту фн нужно вызвать, произвольное количество аргументов) вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
//call берет фн на которой мы вызвали и принудительно  вызывает в контексте обьекта
//через запятую можно передать непроизвольное количество аргументов
showThis.call(objA, 1, 2, 3);
showThis.call(objB, 4, 5, 6);

//apply передается массив аргументов
showThis.apply(objA, [1, 2, 3]);
showThis.apply(objB, [3, 4, 5]);

/***************************************************** */

const changeColor = function (color) {
  console.log('changeColor - this', this);
  this.color = color;
};
const hat = {
  cloth: 'hat',
  color: 'black',
};
const sweater = {
  cloth: 'sweater',
  color: 'green',
};
changeColor.call(hat, 'red');
console.log(hat);
changeColor.call(sweater, 'blue');
console.log(sweater);
changeColor.apply(sweater, ['orange']);
console.log(sweater);

/*bind копия функции в с привязанным контекстом при этом оригинальная функция не изменяется*/

//(забиндить) всегда будет ссылаться на обьект hat
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeSweaterColor('violet');
changeHatColor('yellow');
console.log(sweater)
console.log(hat)
// changeColor();//undefined

/***************************************************************** */

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
