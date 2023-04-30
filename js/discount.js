console.log('discount');

//Напиши скрипт подсчета суммы покупки со скидкой в зависимости от потраченной суммы за все время (партнерская программа)
//общая сумма потраченного храниться в переменной totalSpent
//Сумма текущего платежа храниться в переменной payment
//Скидка храниться в переменной discount

//Если потрачено от [100 до 1000) - бронзовый партнер, скидка 2%
//Если потрачено от [1000 до 5000) - серебрянный партнер, скидка 5 %
//Если потрачено больше [5000 - золотой партнер, скидка 10%]
//Если потрачено меньше 100 - не партнер, скидка 0%

//В результате вывести сообщение
//"Оформляем заказ на сумму [сумма] со скидкой [скидка]%"

let totalSpent = 2000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('бронзовый партнер, скидка 2%');
  discount = 0.02; //0.02 - 2 %, 0.2 - 20%
}
else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('серебряный партнер, скидка 5%');
  discount = 0.05;
}
else if (totalSpent >= 5000) {
  console.log('золотой партнер, скидка 10%');
  discount = 0.1;
} else {
  console.log('не партнер, скидка 0%');
}

// payment = payment - payment * discount;
payment -= payment * discount;

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;

console.log(`Общая сумма потраченная в магазине: ${totalSpent}`);


//"Бронзовый партнер, скидка 2%"
//"Серебряный партнер, скидка 5%"
//"Золотой партнер, скидка 10%"
//"У вас еще нет партнерской скидки"


// [1, 5) - от одного включительно до 5 не включительно
