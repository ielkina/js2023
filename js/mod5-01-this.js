/*Функция это частый случай обьекта -> ССЫЛОЧНЫЙ ТИП*/

// console.log([] === []);
// console.log({} === {});
// console.log(function () {} === function () {});
// //функция это обьект
// const fnA = function () {
//   console.log('hello');
// };

// const fnB = fnA;

// console.log(fnB === fnA);

/*Контекст this
-Где и как обьявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
-Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно 
*/
/*Как метод обьекта. В контексте обьекта*/

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };
// user.showTag();

//1 правило если функция вызывается как метод обьекта this всегда ссылается на этот обьект
//2 правило если фн вызывается не как метод обьекта this будет или undefined или window

/*Вызов без контекста this будет
В строгом режиме undefined 
не в строгом режиме window
*/

// const foo = function () {
//   console.log(this);
// };
// foo();
// console.log(foo());

/* Как метод обьекта. но обьявлена как внешняя функция.
В контексте обьекта
*/

// const showTag = function () {
//   console.log('showTag - this', this);
//   console.log('showTag - this.tag', this.tag);
// };

// showTag();

// const user1 = {
//   tag: 'Mango',
// };
// user1.showUserTag = showTag;
// console.log('user', user1);

// user1.showUserTag();

/*Вызов без контекста
но обьявлена как метод обьекта
*/

// const user2 = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag-this', this);
//     console.log('showTag-this.tag', this.tag);
//   },
// };

// user2.showTag()

// const outerShowTag = user2.showTag;

// outerShowTag()//undefined не понимает на на какой обьект ссылается
// user.showTag()//this ссылается на обьект

// const showThis = user2.showTag; //ссылка на оригинальную функцию обьекта

// showThis();//this не понимает на какой обьект ссылаться - undefined

// user2.showThis()//ошибка

/*Контекст в callback-функции*/

// const user3 = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag-this', this);
//     console.log('showTag-this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };

// invokeAction(user3.showTag)//передаем ссылку только на метод без обьекта

//тренировка

// const fn = function () {
//   console.log('fn - this', this);
// };

// fn(); //undefined

//
// const book = {
//   title: 'React',
//   showThis() {
//     console.log('showThis-this', this);
//   },
//   showTitle() {
//     console.log('showTitle-this.title', this.title);
//   },
// };

// book.showThis(); //обьект

// const outerShowThis = book.showThis; //ссылка на метод в обьекте

// outerShowThis(); //undefined вызываем ссылку на метод в обьекте !!!!

// const outerShowTitle = book.showTitle; //ссылка на метод в обьекте

// outerShowTitle(); //undefined вызываем ссылку на метод в обьекте !!!!

/*************************************************** */

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     //1
//     console.log('changeColor - this', this);
//     this.color = color;
//   };
//   // changeColor(); //undefined нет обьекта
//   const sweater = {
//     color: 'teal',
//   };
//   //2. записываем на 1 ссылку
//   sweater.updateColor = changeColor; //this ссылка на обьект в теле функции
//   // sweater.updateColor('red')//обьекта
//   return sweater.updateColor; //3. возвращаем значение из свойства 2 в 1 т.е записываем в 1. и записываем в пер swapColor
// };

// makeChangeColor();
// const swapColor = makeChangeColor(); //1. записываем(вызываем) результат работы фн в переменную

//и вызываем 3. как мы вызвали такой там и this
// swapColor('blue'); //this undefined

//

// const makeChangeColor1 = function () {
//   const changeColor = function (color) {
//     console.log('changeColor - this', this);
//   };
//   return changeColor
// };

// const updateColor = makeChangeColor1()
// updateColor('yellow')//undefined


// const hat = {
//   color: 'blue',
//   updateColor,
// }

// hat.updateColor('orange')//undefined

//

const counter = {
  value: 0,
  increment(value) {
    console.log('increment-this', this)
    this.value += value;
  },
  decrement(value) {
    console.log('decrement-this', this)
    this.value += value;
  }
}

const updateCounter = function (value, operation) {
  operation(value);
}

updateCounter(10, counter.increment)//ссылки на методы обьекта
updateCounter(5, counter.decrement)
//при передачи метода обьекта как колбэка контекст не сохраняется