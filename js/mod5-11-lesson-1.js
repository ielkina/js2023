/* Контекст вызова this*/

/** This существует только внутри функции
 * На контекст не влияет то где функция была //!Обьявлена
 * На контекст влияет то где функция //! ВЫЗЫВАЕТСЯ
 */

//TODO: Рассмотрим как this ведет себя в методах

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Galyna',
//   age: 40,
//   //ссылка на метод в другом обьекте
//   showThis: user.showThis,
//   showName: user.showName,
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Рассмотрим как this ведет себя в обычных функциях (строгий, не строгий режим)

//?Function expression
// 'use strict';
// const func = function () {
//   console.log(this);
//   console.log(this.name); //утрата контекста
// };
// // //если this в функции в не строгом режиме функция вызванная без контекста(obj.fn() функция вызванная с контекстом) будет ссылаться на глобальный обьект.функция вызванная таким способом  называется утрата контекста

// const user = {
//   name: 'Mariya',
//   showName: func, //ссылка на функцию
// };
// user.showName(); //вызов функции с контекстом не в строгом режиме, в строгом режиме будет ошибка

// // fn(); //undefined вызов функции без контекста. при вызове функции без контекста, контекст теряется и выдается ошибка

//?Function declaration
//объявленная переменная с var всплывает вверху как и функция declaration
//Поведение declaration такое же самое каки у функции expression
// 'use strict';
// function func() {
//   console.log(this)

// }

// const user = {
//   name: "Vitaliy",
//   showName: func,
// }
// // func()
// user.showName()

//?Arrow function
//стрелочные функции своего контекста не имеют

// 'use strict';
//не важно в каком режиме
//всегда будет ссылаться на глобальный обьект
//стрелочная функция не принимает контекста у нее просто нет контекста

// const func = () => {
//   console.log(this);
//   console.log(this.name);
// };

//но она может взять контекст из родительской функции которые не являются стрелочными функциями
// function generalFn() {
//   const func = () => {
//     console.log(this);
//   };
//   func();
// }

// const user = {
//   name: 'Vitaliy',
//   showName: generalFn,
// };
// // func();
// generalFn();
// user.showName();

//TODO: Присвоении функции как метода обьекта

// const showThis = function () {
//   // this = user
//   console.log(`showThis`, this);
// };

// const showThisName = function () {
//   // this = user
//   console.log(`showThisName ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showThis = showThis;
// user.showThisName = showThisName;
// //тоже самое что и
// // const user = {
// //   name: 'Luis',
// //   age: 30,
// //   showThis: showThis,
// //   showThisName: showThisName,
// // };

// user.showThis();
// user.showThisName();

//TODO: Вызов метода обьекта без контекста. Передача реализации

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log(`showThis`, this);
//   },
//   showThisName() {
//     console.log(`showThisName ${this.name}`);
//   },
//   showThisAge() {
//     console.log(`showThisAge ${this.age}`);
//   },
// };
// const showThis = user.showThis;
// const showThisName = user.showThisName;
// const showThisAge = user.showThisAge;

// showThis(); //утрата контекста
// showThisName();
// showThisAge();
// user.showThis.call({})

//TODO: this в callback функциях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`showThis`, this);
//   },

//   showThisName() {
//     console.log(`showThisName ${this.name}`);
//   },
//   showThisAge() {
//     console.log(`showThisAge ${this.age}`);
//   },
// };

// // const someFunction = function (callback) {
// //   // callback()//нет контекста
// // };
// // someFunction(user.showThisName);

// const someFunction = function (callback, context) {
//   callback.call(context); //исправление утраты контекста с помощью метода call
// };

// someFunction(user.showThisName, user); // утрата контекста. передается ссылка на метод обьекта а в самом калбеке нет контекста
// //поэтому контекст теряется

//утрата контекста когда есть вложенные функции

function func1() {
  console.log(this);

  //чтобы исправить утрату контекста нужно переписать на стрелочную где она будет наследовать контекст
  //с родительской функции

  function func2() {
    console.log(this);
  }
  func2(); //нет контекста
}

func1(); //вложенная функция, нет контекста

//TODO: this в строчных функциях. Стрелочные функции не имеют своего this, в стрелочных всегда ссылается на родительский this

//Напишите метод changeAge который изменяет возраст пользователя через стрелочную функцию. что произойет?
//сделайте, что  все работало верно

// const user = {
//   name: 'lois',
//   age: 30,
//   changeAge: function (newAge) {
//     this.age = newAge;
//   },
// };

// user.changeAge(40)
// console.log(user);

//Каким будет результат выполнение этого кода

// let user = {
//   name: 'Джон',
//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// const goFN = user.go;

// goFN();

//Здесь функция makeUser возвращает обьект ref
//каким будет результат при обращении к свойству обьекта ref почему?

// const makeUser = function () {
//   return {
//     name: 'djon',
//     ref: this,
//   };
// };

// const user = makeUser(); //нет контекста 
 
// console.log(user);

// console.log(user.ref.name);//

//каким будет результат

const makeUser = function () {
  return {
    name: 'djon',
    ref: this,
  };
};

const user = makeUser(); //нет контекста 
 
console.log(user);

console.log(user.ref.name);//


