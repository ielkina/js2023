console.log('branching');

//Оператор ветвления if 
if (
  //выражение которое приводит к true или false - boolean
  //если выражение приводит к true выполняется код тела
  //если к false тело данного кода игнорируется
  //проще говоря если "да" выполняй тело, если "нет" не выполняй тело
  0
) {
  //тело
  console.log('dsf');
}
console.log('дальше');

//Оператор ветвления if ... else

if (5 > 30) {
  //если true выполнятся код этого тела
  console.log('X > Y');
} else {
  //если false выполняется код этого тела
  console.log('X < Y');
}

//Оператор ветвления ... else...if
const salary = 1000;

if (salary <= 500) {
  console.log('уровень 1');
} else if (salary > 500 && salary < 1500) {
  console.log('уровень 2');
} else if (salary > 1500 && salary < 3000) {
  console.log('уровень 3');
} else {
  console.log('уровень 4');
}

//Тернарный оператор

const balance = -1000;
// let message;

// if (balance >= 0) {
//   message = 'Пользовательский баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = условие ? выражение1 : выражение2
//условие приводится к true или false
//условие условие приводит к true вычисляется выражение1 и возвращается на то же место
//если условие false то после двоеточия

const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);

//Блочная область видимости переменных
//по принципу матрешки
const a = 'a';//глобальная переменная
//область видимости глобально
console.log(a);
const b = 'b';

if (true) {
  const a = 'a'
  console.log(a);//блочная переменная
  //область видимости только в теле блока
  console.log(b);
}
console.log(b);
