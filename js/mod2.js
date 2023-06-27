/**for */

// const max = 100;
// const min = 20;
// let result = '';

// for (let i = min; i < max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//     result += i + ' ';
//   }
// }

// for (let i = min; i < max; i += 5) {
//   console.log(i);
// }

// console.log(result);

// const x = 10;
// const x1 = 10;

// const arr = [10];
// const arr2 = [10];
// console.log(x === x1);
// console.log(arr === arr2);

/*массивы*/

// const genres = ['jazz', 'blues'];
// //добавляем еще один элемент в конец массива
// genres.push('rock&roll');
// //Вырезаем последний элемент массива
// const delVal2 = genres.pop();
// //вырезает элемент с 0 индексом
// const delVal = genres.shift();
// //вставляем элемент в массив под индексом 0
// genres.unshift('hip-hop', 'country');
// // genres.slice(индекс элемента - 1, сколько элементов хотим удалить - 1, что хотим вставить вместо удаленного элемента - 'reggae')
// console.log(genres);
// genres.splice(-1, 1, 'reggae');
// console.log(genres);
// //или
// genres.splice(genres.length - 1, 1, 'blues');
// console.log(genres);
// //вырезанный элемент массива
// console.log(delVal);
// console.log(delVal2);

/*массивы и строчки*/

// const value = '8 11';
// const numbers = value.split(' ');
// // const result = numbers[0] * numbers[numbers.length - 1];
// const result = numbers[0] * numbers[1];

// console.log(numbers);
// console.log(result);

/*перебор массива*/

// const fruit = ['🍎', '🥝', '🍓', '🍌', '🍋', '🍇', '🍑'];

// //итерацыя массива
// for (let i = 0; i < fruit.length; i += 1) {
//   console.log(i);
//   console.log(fruit[i]);
//   console.log(`${i + 1} ${fruit[i]}`);
// }

/**массивы и циклы */
// const names = 'Jacob, William, Solomon, Nick';
// const phones = '546465654546,46454897894,13254648989';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(namesArr[i]);
//   console.log(phonesArr[i]);
//   console.log(`${namesArr[i]} = ${phonesArr[i]}`);
// }

/*массивы и строчки*/

// const string = 'Welcome to future';
// const arr = string.split(' ');
// arr.pop();
// arr.shift();
// console.log(arr);

// const string = 'Welcome to the future';
// const arr = string.split('');//переводим в массив по буквенно
// const newArr =[]

// for (let i = arr.length - 1; i >= 0; i -= 1) { //перебираем массив от конечного индекса до начального
//   newArr.push(arr[i]) //пушим в новый массив
// }

// console.log(newArr.join('')); //.join переводим массив в строку

/*поиск элементов*/

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) min = numbers[i];
//   if (numbers[i] > max) max = numbers[i];
// }
// console.log(min);
// console.log(max);

/**************** */

// const arr = [1, 2, true, 3, undefined, 'str', null, 'asd', false];
// const missedArr = [true, undefined, null, false];
// // console.log(arr.filter((item) => !missedArr.includes(item)));
// //или
// const newArr = [];

// for (let i = 0; i < arr.length; i += 1) {
//   if (missedArr.includes(arr[i])) continue
//   newArr.push(arr[i])
// }
// console.log(arr);

//или
// for (const item of arr) {
//   switch (item) {
//     case true:
//     case undefined:
//     case null:
//     case false:
//       break;
//     default:
//       newArr.push(item);
//   }
// }
// console.log(newArr);

// const obj = {};
// obj[1] = 'hi';
// obj['1'] = 'hello';
// console.log(obj[1]);
// console.log(obj['1']);
// console.log(obj);
/******************* */
// const phase = 'I am a student again ';
// let currentWord = '';
// let result = '';

// for (let i = 0; i < phase.length; i += 1) {
//   currentWord += phase[i];

//   if (phase[i + 1] === ' ') {
//     currentWord = currentWord.trim();

//     if (currentWord.length > 2) {
//       result += currentWord[0].toLocaleUpperCase() + '.';
//     }

//     currentWord = '';
//   }
// }
// console.log(result.slice(0, -1));

// const phase = 'I am a student again ';
// const arr = phase.split(' ');
// let result = [];

// for (const word of arr) {
//   if (word.length > 2) {
//     result.push(word[0].toLocaleUpperCase());
//   }
// }

// console.log(result.join('.'));
/****************** */
// let a = 1_230 + 2_000;
// console.log(a);

// let sayHiMixin = {
//   sayHi() {
//     console.log(`Привет, ${this.name}`);
//   },
//   sayBye() {
//     console.log(`Пока, ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.assign(User.prototype, sayHiMixin);
// new User('Вася').sayHi();

// const arrNumbers = [1, 1, 3, 4, 5, 6, 7, 8, 9, 12, 9, 9, 7];
// const arrClearNumber = [];
// // const arrRepeatedNumbers = [];
// // // for (const number of arrNumbers) {
// // //   if (arrClearNumber.includes(number)) {
// // //     arrRepeatedNumbers.push(number);
// // //   } else {
// // //     arrClearNumber.push(number);
// // //   }
// // // }
// // // console.log(arrClearNumber);
// // // console.log(arrRepeatedNumbers);
// // // console.log(`количество повторяющихся номеров -
// // // ${arrRepeatedNumbers.length}`);

// // //или
// for (let i = 0; i < arrNumbers.length; i += 1) {
//   if (arrNumbers.indexOf(arrNumbers[i]) === i) {
//     arrClearNumber.push(arrNumbers[i]);
//   }
// }
// console.log(arrClearNumber);

