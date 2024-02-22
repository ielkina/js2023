console.log('switch');

//Напиши скрипт выбора стоимости отеля по количеству звезд. 1-20$, 2-20$, 3-50$, 4-70$, 5-120$

//Если в переменной stars что-то кроме чисел 1-5, выведи строку "Такого количества звезд нет"

const stars = 3;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
}
else if (stars === 3) {
  price = 50;
}
else if (stars === 4) {
  price = 70;
}
else if (stars === 5) {
  price = 120;
} else {
  console.log("Такого количества звезд нет");
}

//if можно заменить switch 

//синтаксис
switch (stars) {
  case 1:
    price = 20;
    //break инструмент для выделение кейсов, нужен прервать выполнение кода при нужном условии
    // каждый кейс должен заканчиваться break
    break;
  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  case 4:
    price = 70;
    break;
  case 5:
    price = 120;
    break;
  //если все условия не выполнены пишем инструкцию default: кейс по умолчанию
  default:
    console.log("Такого количества звезд нет");
}
console.log(price);

//Напиши скрипт выбора стоимости отеля по количеству звезд. 1.2-20$, 3.4-30$, 5 - 120$

if (stars === 1 || stars === 2) {
  price = 20;
} else if (stars === 3 || stars === 4) {
  price = 30;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет');
}

console.log(price);

switch (stars) {
  //кейсы можно объединять
  case 1:
  case 2:
    price = 20;
    //между case и break может быть непроизвольное количество строк
    break;
  case 3:
  case 4:
    price = 30;
    break;

  case 5:
    price = 120;
    break;
  default:
    console.log('Такого количества звезд нет');
}
console.log(price);

//Напиши скрипт выбора опции доставки товара.
//Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта.
//В переменную message записать сообщение в зависимости от опции
//"Вы сможете забрать товар завтра с 12:00 в нашем офисе"
//"Курьер доставит заказ завтра с 9:00 до 18:00"
//"Посылка будет отправлена сегодня"
//"Вам перезвонит менеджер"

//Алгоритм решения задачи
//1. сделать переменные
const option = 2;
let message = '';

//2. сделать switch 1 2 3

switch (option) {
  case 1:
    //3. в каждом кейсе записать message
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня';
    break;
  default:
    console.log('Вам перезвонит менеджер');
}
//4. сделать log message
console.log(message);

//Задачи
//1.Написать сценарий который будет выводить количество символов введенного ряда
//пользователь будет вводить ряд в prompt
////в результате будет выводиться с помощью alert
//если пользователь написал пустой ряд выводить, нет значения

const randomString = prompt('введите строку');
const result = randomString.length || 'нема значення';
alert(result);
console.log(result);
console.log(alert(result));

//2. Написать сценарий котрый будет выводить
//парное ли введенное число
//Если да выводить спомощью alert - так парне.
//если нет то - не парное
//Алгоритм
//1  получить от пользователя значение
//2 проверить парное или нет
//3 ввести значение да или нет
//1 способ перевести строку вводимых данных в число
//+prompt переводит строку в число

const numberFromUser = +prompt('Enter your Number');
//2 способ перевести строку вводимы данных в число
let numberFromUser1 = prompt('Enter your Number')
numberFromUser1 = Number(numberFromUser1);
console.log(numberFromUser1);

console.log(numberFromUser);
const result1 = numberFromUser % 2 || 'парное число';
alert(result1);
console.log(result1);

//3
//Спросить у пользователя 2 числа с помощью prompt и сложить
//после этого вывести с помощью alert 'сумма = наше число'

const number1 = +prompt('введите первое число');
const number2 = +prompt('введите второе число');
alert(`сумма = ${number1 + number2}`);
console.log(`сумма = ${number1 + number2}`);
alert(
  `сумма = ${+prompt('введите первое число') + +prompt('введите второе число')}`
);
console.log(`сумма = ${+prompt('введите первое число') + +prompt('введите второе число')}`)
