console.log(`payment`);
//Посчитать общую сумму покупок в корзине
const cart = [54, 28, 105, 70, 92, 17, 120, 23, 56, 48]

console.table(cart);

//1. переменная total до цикла

//если объявить внутри цикла она будет видна только внутри цикла
let total = 0;
//2. перебрать массив
//первый вариант решения
for (let i = 0; i < cart.length; i += 1) {
  // console.log(cart[i]);
  //3. каждый элемент приплюсовать к total
  total += cart[i]
  //или 
  // total = total + cart[i]
}
console.log('total:', total);

//Добавить налог

for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.1);
}
for (let value of cart) {
  value = Math.round(value * 1.1);
}
console.log(cart);


//второй вариант решения

const cart1 = [54, 28, 105, 70, 92, 17, 120, 23, 56, 48]

console.table(cart1);

for (const value of cart1) {
  total += value;
}
console.log('Total: ', total);
//Добавить налог
for (let i = 0; i < cart1.length; i += 1) {
  cart1[i] = Math.round(cart1[i] * 1.1);
}
for (let value of cart1) {
  value = Math.round(value * 1.1);
}
console.log(cart1);
//Если нужно изменить элемент массива используем for с счетчиком, если нет используем for ... of