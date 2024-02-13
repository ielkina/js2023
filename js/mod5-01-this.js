/* Функция это частый случай обьекта -> ССЫЛОЧНЫЙ ТИП */
//this - локальная переменная которая есть внутри фн, обькта

//Это условие всегда будет возвращать ''false'', так как JavaScript сравнивает объекты по ссылке, а не по значению.
console.log('[] === []', [] === []); //false
console.log('{} === {}', {} === {}); //false

// Это условие всегда будет возвращать ''false'', так как JavaScript сравнивает объекты по ссылке, а не по значению.
console.log(
  'function () {} === function () {}',
  function () {} === function () {}
); //false
//Функция это сложный тип. Когда мы передаем функцию, мы передаем не копию(обьекта, функции) а ссылку.
//функция это обьект
const fnA = function () {
  console.log('hello');
};
const fnB = fnA;
console.log('fnB === fnA', fnB === fnA); //true

/* Контекст this
Контекст в js похож на контекст в предложении 
-Где и как обьявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
-Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно 
*/

/* Как метод обьекта. В контексте обьекта */

//1 правило если функция вызывается как метод обьекта this всегда ссылается на этот обьект
const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  },
};
user.showTag();


/* Вызов без контекста this будет
В строгом режиме undefined 
не в строгом режиме window
*/
//2 правило если фн вызывается не как метод обьекта this будет или undefined (строгий режим) или window (не в строгом режиме)
const foo = function () {
  console.log(this); //undefined
};
foo();

/* Как метод обьекта. но обьявлена как внешняя функция (this вне обьекта). В контексте обьекта.*/
//this фн внешняя, потом кладем эту фн в свойства обьекта и вызываем в контексте обькта(ссылка на обькт)

const showTag = function () {
  console.log('showTag - this', this); //undefined
  console.log('showTag - this.tag', this.tag); //TypeError
};
// showTag();

const user1 = {
  tag: 'Apple',
};
//This вне обькт будет работать когда обькт ссылается на функцию где этот this
user1.showUserTag = showTag;//ссылка на фн showTag
console.log('user1', user1);
user1.showUserTag();

/*Вызов без контекста но обьявлена как метод обьекта*/
//this делаем методом обьекта и вызываем в контексте обьекта 

const user2 = {
  tag: 'Orange',
  showTag() {
    console.log('showTag-this', this);
    console.log('showTag-this.tag', this.tag);
  },
};
user2.showTag()//this ссылается на обьект
// const outerShowTag = user2.showTag;
// outerShowTag()//при вызова без обьекта undefined, TypeError не понимает на какой обьект ссылается
const showThis = user2.showTag; //независимая переменная ссылка на оригинальную функцию обьекта
// showThis();//ReferenceError this не понимает на какой обьект ссылаться
// user2.showThis()//TypeError ошибка

/*Контекст в callback-функции*/

const user3 = {
  tag: 'Banana',
  showTag() {
    console.log('showTag-this', this); //undefined
    console.log('showTag-this.tag', this.tag);
  },
};
user3.showTag();//вызов метода(this) в контексте обьекта

//независимая переменная 
const invokeAction = function (action) {
  console.log(action);
  action();//вызов функции без контекста 
};
// invokeAction(user3.showTag)

//ТРЕНИРОВКА

/********************************************************* */

const fn = function () {
  console.log('fn - this', this);
};
fn(); //undefined


const book = {
  title: 'React',
  showThis() {
    console.log('showThis-this', this);
  },
  showTitle() {
    console.log('showTitle-this.title', this.title);
  },
};
book.showThis(); //вызов this в контексте обьекта, ссылается на обьект
const outerShowThis = book.showThis; //независимая переменная ссылка на метод в обьекте
outerShowThis(); //undefined вызываем без контекста ссылку на метод в обьекте !!!!
const outerShowTitle = book.showTitle; //независимая переменная ссылка на метод в обьекте
// outerShowTitle(); //вызов независимой переменной без контекста TypeError, вызываем ссылку на метод в обьекте !!!!

/*************************************************** */

const makeChangeColor = function () {
  const changeColor = function (color) {
    //1
    console.log('changeColor - this', this);
    this.color = color;
  };
  // changeColor(); //undefined нет обьекта, вызов без контекста обьекта
  const sweater = {
    color: 'teal',
  };
  //2. записываем на 1 ссылку
  sweater.updateColor = changeColor;//добавляем новый метод в обьект, передаем ссылку в этот метод на колбэк фн changeColor
  //this ссылка на обьект sweater в теле функции makeChangeColor
  sweater.updateColor('red')//вызов в контексте обьекта sweater
  return sweater.updateColor;
  //3. возвращаем значение из свойства 2 в 1 т.е записываем в 1. и записываем в пер swapColor
};

makeChangeColor();
//1. записываем(вызываем) результат работы фн в переменную
const swapColor = makeChangeColor();
// и вызываем 3. как мы вызвали такой там и this
// swapColor('blue'); //вызов this без контекста undefined


/********************************************************* */
const makeChangeColor1 = function () {
  const changeColor = function (color) {
    console.log('changeColor - this', this);
    this.color = color;
  };
  return changeColor
};
//независимая переменная в которой лежит ссылка
const updateColor = makeChangeColor1()
//вызов без контекста, вне обьекта
// updateColor('yellow')//вызов без контекста = undefined

const hat = {
  color: 'blue',
  //олдскульно 
  // updateColor : updateColor,
  updateColor,//ссылка на переменную в торой лежит ссылка на фн, поэтому условие не выполнится 
}

hat.updateColor('orange')//'blue' - консоль лог до обновления, вызов в контексте обьекта в котором лежит ссылка на функцию которая вызвана без контекста 
console.log(hat);//лог после выполнения

/*************************************************************** */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment-this', this)
    this.value += value;
  },
  decrement(value) {
    console.log('decrement-this', this)
    this.value -= value;
  }
}

const updateCounter = function (value, operation) {
  operation(value);//вызов без контекста
}

updateCounter(10, counter.increment)//ссылки(колбэк) на методы обьекта
updateCounter(5, counter.decrement)
//при передачи метода обьекта как колбэка контекст не сохраняется
//методы обьекта ничего не знают о теле обьекта при вызове колбэка
