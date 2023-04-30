console.log('for');

//Цикл for

// for(инициализация; условие; пост - выражение) {
//тело цикла
// }

// for (let i = 10; i >= 0; i -= 2) {
//   console.log(i);
// }
// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
// }
//i += 3 - тоже самое что и i = i +3
console.log('jhgkj');

//Pre-increment и Post-increment

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//i++ аналог i += 1;

let a = 10;
const b = a++;

console.log(b);

//Напиши скрипт который посчитает общую зарплату работников.
//Количество работников хранится в переменной employees
//Зарплата каждого работника это случайное число от 500 до 5000
//записать сумму в переменную totalSalary и вывести в консоль
//алгоритм
//1 сделать вары
const minSalary = 500;
const maxSalary = 5000;
const employees = 4;
let totalSalary = 0;
//2  перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  //3 сгенерить случайную зп
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary)
  console.log(`ЗП работника номер ${i} - ${salary}`);
  //4 прибавить к тотал
  totalSalary += salary;
}
//5 лог
console.log('totalSalary: ', totalSalary);


//Напиши скрипт который подсчитает сумму всех четырех чисел
//которые входят в диапазон чисел в переменных от min до max
//например min=0 и max=5, то диапазон 0-5, и в нем четыре числа -2 и 4. их сумма 6.
//1 переменные
const min = 0;
const max = 5;
let total = 0;
//2 перебрать for от min до max с шагом 1
for (let i = min; i <= max; i += 1) {
  //проверяем от деления 
  if (i % 2 !== 0) {
    console.log('Не четное: ', i);
    continue;
  }
  //пишем  в сумму
  console.log('четное: ', i);
  total += i;
}
console.log('total: ', total);
