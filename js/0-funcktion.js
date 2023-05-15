console.log(`basics`);
//Функции
//Функциональное выражение
//Возврат значения

//объявление функции
//переменные функций должны отвечать на вопрос что делать что сделать
// const add = function (a, b) {
//   //тело функции
//   console.log('a - ', a);//переменные функции
//   console.log('b - ', b);//переменные функции
//   const result = a + b;
//   console.log('a + b =', result);
//   //в теле функции лог не выполняется
//   console.log('Выполняется функция add');
//   return result;
//   //или 
//   return a + b;
// }
// //вызов функции, можно вызвать много раз
// add(2, 3);//здесь передаются параметры переменных функции a, b

// //
// console.log(add(10, 5));

// const r1 = add(30, 50);
// console.log(`r1: ${r1}`);
// console.log('r1:', r1);



//Return - полностью прекращает выполнение функции, внезависимости от вложенности
//Return возвращает только одно значение(массив, число, строку и т.д)
const fn = function (value) {
  console.log(1);
  // return 555;//где будет return там будет прекращено выполнение функции 
  console.log(2);
  // console.log(3);
  // return;//return без обозначения - значение для возврата не определено приводит к false
  //return в if ... else 
  if (value < 50) {
    return 'Больше чем 50';
  } else {
    return 'Меньше чем 50';
  }
  //или
  if (value < 50) {
    return 'Больше чем 50';
  }
  return 'Меньше чем 50';
};
console.log('Результат функции: ', fn(10));
console.log('Результат функции: ', fn(100));


//Стек вызовов
//Stack trace и поиски ошибок

const fnA = function () {
  console.log(`Выполняется функция А`);
  fnB();
}
const fnB = function () {
  console.log(`Выполняется функция B`);
  fnC();
}
const fnC = function () {
  console.log(`Выполняется функция C`);
  // console.log(value);
}

// console.log(`Лог перед вызовом функции А`);
fnA();
// console.log(`Лог после вызовом функции А`);

// console.log(`Лог перед вызовом функции В`);
// fnB();
// console.log(`Лог после вызовом функции В`);

// console.log(`Лог перед вызовом функции С`);
// fnC();
// console.log(`Лог после вызовом функции С`);

