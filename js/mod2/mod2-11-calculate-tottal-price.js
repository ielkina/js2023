//Напиши функцию calculateTotalPrice(items)
//которая принимает массив цен (чисел) и возвращает их сумму

const cart = [54,28,105,70,92,17,120,12,25,90]
let total = 0;

for (const value of cart){
  total += value;
}
console.log('Total :', total);

const calculateTotalPrice = function (items) {
  console.log(items);
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
}

console.log(calculateTotalPrice([1, 2, 3]));//6
console.log(calculateTotalPrice([5, 10, 15, 20]));//50
console.log(calculateTotalPrice([100, 200, 300]));//600
// //или
const r1 = calculateTotalPrice([1, 2, 3]);
console.log(r1);
console.log(`Общая сумма покупок ${r1}`);//возвращает строку
console.log('Общая сумма покупок',r1);//возвращает цифру

