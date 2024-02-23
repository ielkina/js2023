console.log(`even`);
//Напиши скрипт который подсчитывает сумму все четных чисел в массиве
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
//переменная суммы четных чисел total 
let total = 0;
console.log(numbers);

//первый вариант

//перебрать массив

for(let i = 0; i < numbers.length; i += 1){
  const number = numbers[i]
  console.log(number);
  //найти четные числа на каждой итерации проверить элемент на четность
  if (number % 2 === 0){
    console.log(`${number} четное`);
    //сложить их если четный сложить их к total
    total += number
  }
}
console.log(`Сумма всех четных чисел  ${total}`);

//второй вариант

const numbers1 = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
let total1 = 0;
console.log(numbers1);

for (const number of numbers) {
  console.log(number);
  if (number % 2 !== 0) {
    console.log(`${number} - не четное`);
  }
  if (number % 2 === 0) {
    console.log(`${number} - Четное`);
    total1 += number;
  }
}
console.log(`Сумма всех четных чисел  ${total1}`);

//третий вариант

const numbers2 = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
let total2 = 0;
console.log(numbers2);

for (const number of numbers2) {
  if (number % 2 !== 0) {
    console.log(`${number} - не четное`);
    continue
  }
  console.log(`${number} - четное`);
  total2 += number
}
console.log(`Сумма всех четных чисел  ${total2}`);