console.log(`even`);
//Напиши скрипт который подсчитывает сумму все четных чисел в массиве
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11]
//переменная суммы четных чисел total 
let total = 0;
console.log(numbers);

//первый вариант
//перебрать массив
// for(let i = 0; i < numbers.length; i += 1){
//   const number = numbers[i]
//   console.log(number);
//   //найти четные числа на каждой итерации проверить элемент на четность
//   if (number % 2 === 0){
//     console.log(`${number} четное`);
//     //сложить их если четный сложить их к total
//     total += number
//   }
// }


//второй вариант

// for (const number of numbers) {
//   // console.log(number);
//   if (number % 2 !== 0) {
//     console.log(`${number} - не четное`);
//   }
//   if (number % 2 === 0) {
//     console.log(`${number} - Четное`);
//     total += number;
//   }
// }

//третий вариант 
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log(`${number} - не четное`);
    continue
  }
  console.log(`${number} - четное`);
  total += number
}
console.log(`Сумма всех четных чисел  ${total}`);