/*Задача */
//Написать сценарий который будет выводить среднее количество символов 3 введеных строк
//пользователь будет вводить строки в prompt
//а результат будет выводить с помощью alert

// const textFromUserFirst = prompt('ВВедите первую строку');
// const textFromUserSecond = prompt('ВВедите вторую строку');
// const textFromUserFired = prompt('ВВедите третью строку');
// const textFull = textFromUserFirst + textFromUserSecond + textFromUserFired;
// let textSum = Math.round(textFull.length / 3);

// alert(textSum);

/*Задача*/

//Написать сценарий который будет у пользователя спрашивать 2 числа и вывести делятся ли они без остатка друг на друга

// const firsNumber = 10;//prompt('Введите первое число')
// const secondNumber = 2;//prompt('Введите второе число')
// const result = firsNumber % secondNumber || `делиться без остатка`;
// const result2 = firsNumber % secondNumber && `делиться c остатка`;
// // ` использовать только тогда когда будем использовать интерполяцию потому как они требуют
// //доп ресурса из за поддержки интерполяции
// console.log(result);
// console.log(result2);

/*Задача*/

//Спросить у пользователя две строчки и вывести строку и его длину
// const firstStr = 'Миру'   //prompt('Введите первое слово')
// const secondStr = 'Мир'    //prompt('Введите второе слово')
// const result = `${firstStr} ${secondStr} длина фразы ${(firstStr + secondStr).length} символов`
// console.log(result);

/*Задача */
//Напиши сценарий который будет спрашивать у пользователя 2 слова и выводи сумму их длинны без учета пробелов
// const firstUserStr = 'dfg'
// const secondUserStr = 'df'
// const fullText = `${firstUserStr}${secondUserStr}`
// const result = fullText.replaceAll(' ', '')//убирает все пробелы
// console.log(fullText.length);

/*Задача */
//Напиши сценарий который будет выводить количество символов введеного строки
//пользователь будет вводить строки в prompt
//а результат будет выводить с помощью alert
//если пользователь написал пустую строку выводит нет значения

// const textFromUser = 'лол'; //prompt('ВВедите строку');
// const result = textFromUser.length || 'нет значения'
// console.log(result);

/*Задача*/

//Написать сценарий который будет парное ли число
//если да выводите с помощью алерт  да парное
//если нет то не парное

//1 получить число от пользователя
//2 проверить парное или нет
//3 вывести да или нет

// const samNum = +prompt('введите число')

// const result = samNum % 2 || 'парное'

// console.log(result);

/*Задача */

//Спроси у пользователя 2 числа с помощью промпт и сложить их
//после этого вывести с помощью алерт "сумма = наше число"

// const firstNum = prompt('firstNum');
// const secondNum = prompt('secondNum');

// const total = Number(firstNum) + Number(secondNum);

// alert(`сумма = ${total}`);

// let weigh = '88.3';
// let height = '1,75';
// const weighSlice = Number(weigh.slice(0, 2));
// // const weighSliceEnd = +weigh.slice(-1);
// // const weighSlice = weigh.slice(0, 2);
// // const weighSliceEnd = weigh.slice(-1);
// // const newWeigh = weighSlice + '.' + weighSliceEnd;
// console.log(weighSlice); //slice не меняет
// // console.log(weighSliceEnd);
// // console.log(Number(newWeigh));
// // console.log(+newWeigh);

// // console.log('weigh', Number.parseInt(weigh));
// // console.log('height', +height);

// // const bmi = +newWeigh / Math.pow(+height, 2);
// // console.log(bmi);
// // console.log(bmi.toFixed(2));

// console.log(height.replace(',', '.'));

// console.log(10 >= '7');
// //когда жс при не строгом сравнении пытается привести к намберу если типы данных разные
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// //
// console.log('false' === false); //''false' - строка, true = буль разные типы данных

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('0' === false);

//строгое сравнение сначала сравнивает типы а потом значение
// console.log('Papaya' === 'papaya'); //112>80 поэтому фолс
// console.log('Papaya'.charCodeAt());
// console.log('papaya'.charCodeAt());

// console.log(undefined == null);//0==0
// //undefined -> false -> 0
// //null -> false -> 0
// console.log(undefined === null);//разные типы данных

// //unicode
// console.log('P'.charCodeAt()); //unicode-'P',charCodeAt() 'P' = 80
// console.log('p'.charCodeAt());
// console.log('1'.charCodeAt());
// console.log('2'.charCodeAt());
// console.log('4'.charCodeAt());
// console.log('4'.charCodeAt());

//&& возвращает первое false или последнее true, если есть хотя бы одно false вернется false
// console.log(true && 3);
// console.log(false && 3);
// console.log(false && 4 && 'kiwi');
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true && null && 'kiwi');

// //|| возвращает первое true или последнее false

// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(-1 || 2 || undefined); //-1 это тру
// console.log(null || false || undefined);

// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

/*?? Значение по умолчанию и оператор нулевого сравнения*/
/* работает как и || но
За false принимаются только 2 значения
 undefined
 null*/

// console.log(null ?? false ?? null);

// const icon = 0;
// const img = 10;

// // const mild = icon || img//10
// const mild = icon ?? img; //0
// console.log(mild);

// /*%*/

// const totalMinutes = 65;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// // const newHours = String(hours).padStart(2, 0);
// // const newMinutes = String(minutes).padStart(2, 0);
// console.log(
//   `${String(hours).padStart(2, 0)} : ${String(minutes).padStart(2, 0)}`
// );
// console.log(`${hours} : ${minutes}`);
// console.log('hours', hours); //number
// console.log('hours', newHours); //str
// console.log('minutes', newMinutes); //str

// console.log('hours', hours);
// const hours = totalMinutes / 60
// console.log('hours', hours.toFixed(2));

// const answer = prompt('JS');
// const currentAnswer = 'JS';

// if (answer !== null) {
//   // const normalizeAnswer = answer.toLocaleLowerCase();
//   if (answer.toLocaleLowerCase() === currentAnswer.toLocaleLowerCase()) {
//     alert('yes');
//   } else {
//     alert('no');
//   }
// }

// console.log(true === !null);
// console.log(true !== null);

// const hours = 14;
// const minutes = 0;
// let timeString;
// if (minutes > 0) {
//   timeString = `${hours}ч.  ${minutes}хв.`;
// } else {
//   timeString = `${hours}ч.`;
// }
// console.log(timeString);
/***********/
// const userInput = prompt('Введите число');
// let message;
// // if (userInput !== null) {
// if (userInput > 0) {
//   message = 'Это положительное число';
// } else if (userInput === null) {
//   message = 'Вы отменили ввод';
// } else if (userInput === undefined || userInput === ' ' || userInput === '') {
//   message = 'Вы ничего не ввели';
// } else if (Number(userInput) === 0) {
//   message = 'Это ноль';
// } else if (userInput < 0) {
//   message = 'Это отрицательное число';
// } else {
//   message = 'Это не число';
// }
// console.log(message);
// // }
// //alert(message);
/********** */

// const a = 120;
// const b = 180;
// const maxValue = a > b ? a : b;

// if (a > 100 && b > 100) {
//   console.log(maxValue);
// } else {
//   console.log(maxValue + 512);
// }

// console.log(maxValue + 512);
/************************** */

// let link = 'https://my-site.com/about';

// if (link.endsWith('/')) {
//   console.log(link);
// } else link += '/';

// console.log(link);

/************************ */

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) link += '/';

// console.log(link);

/*************************** */
// let link = 'https://my-site.com/about';

// // if (link.includes('my-site') && !link.endsWith('/')) link += '/';

// link.includes('my-site') && !link.endsWith('/') ? (link += '/') : link;

// console.log(link);

/******************* */
// const hours = 10;
// if (hours > 17) console.log('Pending');
// else if (hours >= 17 && hours <= 24) console.log('Expires');
// else console.log('Overdue');

/************* */

// const deadLine = 3;
// if (deadLine === 0) console.log('today');
// else if (deadLine === 1) console.log('tomorrow');
// else if (deadLine === 2) console.log('after tomorrow');
// else if (deadLine >= 3) console.log('in the future');
// else console.log('you are fired');


//подходит только с условием со строгим равенством и не подходит с условиями с какими то доп условиями
// switch (deadLine) {
//   case 0:
//     console.log('today');
//     break;
//   case 1:
//     console.log('tomorrow');
//     break;
//   case 2:
//     console.log('after tomorrow');
//     break;
//   case 3:
//     console.log('in the future');
//     break;
//   default:
//     console.log('you are fired');
//     break;
// }

/********************** */
const max = 120;
const min = 100;