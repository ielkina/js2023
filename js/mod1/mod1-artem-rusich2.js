'use strict';
console.log(0 || '🥭'); //🥭
console.log(null && '🥑' && '🥭'); //null
console.log(null || '🥑' || '🥭'); //🥑
console.log('🥑' && '🥭' || null); //🥭
console.log('🥭' && null || false); //false
console.log(('🍋' && '🍎') || null); //последний тру 🍎
console.log('🍋' || '🍎');//первый тру 🍋

//ВВедение пользователя и распространение
//Используя конструкцию if...else
//Напиши скрипт для выведения часов и минут в консоль браузера в виде ряда формата "14 г. 26 хв". Если значение переменной равняется 0, то вывести строку "14г", без минут

const hours = 14;
const minutes = 26;
let timeString;

if (minutes > 0) {
  timeString = `${hours} г. ${minutes} хв.`;
} else {
  timeString = `${hours} г.`;
}
console.log(timeString);

//[P]if..else
//выполняется в том случае если выражение в скобках true
if (6 > 5) {
  console.log('true');
} else {
  console.log('false');
}

const value = 3;
if (value > 5) {
  // 7> 5 => true
  console.log('4>5');
} else if (value > 6) {
  console.log('4>6');
} else if (value > 3) {
  console.log('4>3');
} else {
  console.log('else');
}

const value1 = 0;
if (value1) {
  //0 => false
  console.log('if');
} else {
  //1=true
  console.log('else');
}

// condition ? example 1 : example 2
//                      ⬇️true       ⬇️false
// const result = 5 > 6 ? 'больше' : 'меньше';
// //result =  (5 > 6(выражение, условие)) ?(если) 'больше'(true) : 'меньше'(false)
// console.log(result);

let num = 1;
let res;
if (num >= 0) {
  res = '1';
} else {
  res = '2';
}
console.log(res);
//или короткий вариант с помощью тернарного оператора
const num1 = 1 >= 0 ? 'true' : 'false';
console.log(num1);//true

const result = 5 > 6 ? 'true' : 'false';

let result1;

if (7 > 6) {
  result1 = 'больше';
} else {
  result1 = 'меньше';
}
console.log(result1);

const result2 = 10 + 5;
console.log(result2);
// console.log(testValue);
const value2 = 5;
if (value2 === 1) {
  console.log('one');
} else if (value2 === 2) {
  console.log('two');
} else if (value2 === 5) {
  console.log('Good result');
} else {
  console.log("default")
}
//[P]свитч работает только со строками и числами,и на строгое сравнение
const val = 5;
switch (val) {
  case 1:
    console.log('case one');
    break;
  case 2:
    console.log('case two');
    break;
  case 5:
    console.log('case 3');//
    break;
  default:
    console.log('default');
}

//если убрать break все условия будут выполненные

const a = 'name';
switch (a) {
  case 'age':
    console.log('one');
    break;
  case 'name':
    console.log('two');
    break;
  case 'city':
    console.log('Good result');
    break;
  default:
    console.log('default');
}

// *****************************************************

//[P]Области видимости
// 1 Глобальна  - const, let
// 2 Блочна - любое вырождение которое находится в фигурных {} скобках
// 3 Функциональна

// const let
// var

// Блочна
// {}

// Функциональна
// function(){
// }

//область видимость стремиться середины во внешний код но не оборот

const b = 15;
if (true) {
  console.log(b);//15
}
if (true) {
  var c = 22;
}
console.log(c);//22

/*function foo() {
  console.log(b);
  var d = 23;
}
console.log(d);//error*/

let e = 15; //глобальная переменная
if (true) {
  // Блочна
  let e = 1;//перезаписывается на 25
  e = 25;//⬆️
  console.log(e);//25
}
console.log(e);//15 - глобальная переменная

// глобальна

// let f = 15;
// if (true) {
//   // звернення до ініціалізації
//   //нарушение порядка инициализации переменной
//   f = 25; //не инициализированная
//   let f = 1;
//   // console.log(f);
// }
//в приоритете обращение к переменной в блоке
// console.log(f);//ошибка

// глобальна;

let a1 = 10;
if (true) {
  // блочна
  let a1 = 20;//перезаписывается на 30
  if (true) {
    a1 = 30;//⬆️
  }
  console.log(a1); //30
}
console.log(a1); //10 - глобальная переменная

let a2 = 1;//переменная перезаписывается на 3
if (true) {
  // блочна
  a2 = 2;//⬆️ нет объявления
  if (true) {
    a2 = 3;//⬆️ нет объявления
  }
}
console.log(a2); //3

let a3 = 15.1; //глобальная переменная
if (true) {
  let a3 = 15.2; // блочная переменная
  if (true) {
    a3 = 25;
  }
}
console.log(a3); //15.1

//приоритет объявленная блочная переменной
//если переменная не находит инициализации внутри блока она ищет ее выше или вне

let a4 = 15.1; //глобальная переменная
if (true) {
  let a4 = 15; // блочна
  if (true) {
    a4 = 25;
  }
  console.log(a4); //25 блочная переменная
}
console.log(a4); //15.1 глобальная переменная

//#####

let a5 = 15.1; //глобальная
if (true) {
  a5 = 15.2; //блочная. т.к она не объявленная она ище ее инициализации выше и перезаписывает
  if (true) {
    let a5 = 25;
    console.log(a5);//25
  }
  console.log(a5);//15.2
}
console.log(a5);//15,2 - перезаписанная глобальная переменная

//#####

let b1 = 25;
if (true) {
  let a6 = 15; //блочная
  b1 = 44;
  if (true) {
    a6 = 25;
    b1 = 31;
  }
  a6 = 44;
  console.log(b1);//31
}
// console.log(a6);//ошибка вне области видимости


let b2 = 25;
if (true) {
  let a7 = 15; //блочная
  b2 = 44;
  if (true) {
    a7 = 25;
    b2 = 31;
  }
  a7 = 44;
  console.log(a7); //44
}
console.log(b2); //31

//#####

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}
// 12345;

const str = 'hello world';
for (let i = 0; i < str.length; i += 1) {
  console.log(str[i]);
}

// while(true){
//     console.log('hello world');
// }

const str1 = 'hello world';
let i = 0;

//[P]wile - проверил и сделал
while (i < str1.length) {
  if (str1[i] === 'w') {
    console.log('+');
    break; //прерывает весь цикл
  }
  console.log('-', str1[i]);
  i += 1;
}

//[P]do...wile - сделал и проверил

const str2 = 'hello world';
let i1 = 15;
do {
  if (str2[i] === 'w') {
    console.log('yes');
    break;
  }
  console.log('no');
  i += 1;
} while (i < str2.length)

// Example 1 - Введення користувача та розгалуження

// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

//1 задать вопрос пользователю с вводом данных в модальное окно
//  переменная с вопросом через промпт для получение данных
//2 цикл на проверку введенных данных
//  цикл if...else на проверку true и else(false)
//3 если правильно вывести сообщение в модальное окно правильно
//  вывод соответствующего сообщения в модальное окно без ввода данных alert
//4 если нет вывести соответствующее сообщение в модальное окно
//  вывод соответствующего сообщения в модальное окно без ввода данных alert

const value3 = prompt("Яка офіційна назва JavaScript?");
if (value3 === 'ECMAScript') {
  //если пользователь ввел ECMAScript
  alert('Правильно!'); //в модальном окне выводится это сообщение
} else { //в противном случае
  alert("Не знаєте? ECMAScript!") // это сообщение
}

// Example 2 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

//1 создать переменные hours и minutes
//2 переменная для общего времени timeString
//3 if...else

const hours1 = 14;
const minutes1 = 2;
let timestring;
if (minutes1) {
  console.log(`${hours1}г. ${minutes1}хв.`);
} else {
  console.log(`${hours1}г.`);
}

// Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

const userInput = Number(prompt('Введіть число'));

console.log('userInput' === 'userInput');

console.log(typeof userInput);

if (!userInput) { // 0 =>! + false => true
  console.log("Це нуль");
} else if (userInput > 0) {
  console.log("Це позитивне число");
} else {
  console.log("Це негативне число");
}

const userInput1 = Number(prompt('Введіть число'));

if (userInput1 % 2) {
  //если есть остаток от деления(не парное)
  console.log('Не парне');
} else {
  //если нет остатка от деления (парное)
  console.log('Парне');
}
//или сокращенный код
console.log(userInput1 % 2 ? 'Не парне' : 'Парне');

// *****************

//if работает только на тру а 0 это false поэтому код не будет выполняться в теле
//а выполнится только в теле else что есть плохим индикатором написания кода
//поэтому следует использовать инверсию

// if (0) {  //плохой вариант написание кода
//   //=> false код в этом месте не выполниться
// } else {
//   console.log('в мене нуль');
// }

// if (!0) {  //правильный вариант написание кода с помощью инверсии
//   //=> false
//   console.log('в мене нуль');
// }

// *************************

// Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const w = 120;
const q = 180;
// if (a > 100 && b > 100) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// } else {
//   console.log(b + 512);
// }
//или сокращенный вариант с тернарным оператором
if (w > 100 && q > 100) {
  console.log(w > q ? w : q);
} else {
  console.log(q + 512);
}

// Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок
if (!link.endsWith('/')) {
  link += '/';
}
// // Пиши код вище за цей рядок
console.log(link);

// Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

let link1 = 'https://somesite.com/aboutmy-site';
// Пиши код нижче за цей рядок
if (!link1.endsWith('/') && link1.includes("my-site")) {
  //includes проверяет есть ли в строчке искомая часть текста
  link1 += '/';
}
// Пиши код вище за цей рядок
console.log(link1);

// Example 7 - Форматування посилання (тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

let link2 = 'https://my-site.com/about';
// if (link2.includes('my-site') && !link2.endsWith('/')) {
// link2 += '/';
// }
console.log(link2.includes('my-site') && !link2.endsWith('/') ? link2 += '/' : link2);

// Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

const hours2 = 19;

if (hours2 < 17) {
  console.log("Pending");
} else if (hours2 >= 17 && hours2 <= 24) {
  console.log("Expires");
} else {
  console.log('Overdue');
}

// Example 9 - Дедлайн здачі проекту (if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

const daysUntilDeadline = 2;
// Пиши код нижче за цей рядок

if (!daysUntilDeadline) {
  //!daysUntilDeadline  = 0 - false
  console.log('Сьогодні');
} else if (daysUntilDeadline === 1) {
  console.log('Завтра');
} else if (daysUntilDeadline === 2) {
  console.log('Післязавтра');
} else {
  console.log('Дата у майбутньому');
}

// Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

const daysUntilDeadline1 = 2;

switch (daysUntilDeadline1) {
  case 0:
    console.log('Сьогодні');
    break;
  case 1:
    console.log('Завтра');
    break;
  case 2:
    console.log('Післязавтра');
    break;
  default:
    console.log('Дата у майбутньому');
}

if (daysUntilDeadline1 === 0) {
  console.log('Сьогодні');
} else if (daysUntilDeadline1 === 1) {
  console.log('Завтра');
} else if (daysUntilDeadline1 === 2) {
  console.log('Післязавтра');
} else {
  console.log('Дата у майбутньому');
}

if (daysUntilDeadline1 >= 0) {
    switch (daysUntilDeadline1) {
        case 0:
            console.log('Сьогодні');
            break;
        case 1:
            console.log('Завтра');
            break;
        case 2:
            console.log('Післязавтра');
            break;
        default:
            console.log('Дата у майбутньому');
    }
} else {
    console.log("Друже ти проспав");
}

// Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

const max = 100;
const min = 20;
// !min => 20 => true => !true=> false
// 1 ''
// 2 0
// 3 null
// 4 undefined
// 5 NaN
// 6 false

const max1 = 100;
const min1 = 20;

for (let i = min; i >= min && i <= max; i += 1) {
    if (!(i % 5)) { //25 % 5 => 0 => false => !false => true
        console.log(i);
    }
}

// Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// Інакше виводити рядок "Невірний пароль"

const login = prompt("Тут має бути ЛОГІН");
if (!login) {
  console.log("Скасовано");
} else if (login === "Админ") {
  const password = prompt("Тут должен быть пароль");
  console.log(password === "Я админ" ? "Доброго дня!" : "НЕ верный пароль");
} else {
  console.log("Я вас не знаю");
}
