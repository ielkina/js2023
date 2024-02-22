console.log('segment');

//Напиши скрипт который проверяет вхождение числа в отрезок обозначенный х1 и х2.
//До х1
//После х2
//От х1 до х2
//До х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 50;


console.log(`Число ${number} попадает в отрезок до ${x1} ?`, number < x1);
console.log(`Число ${number} попадает в отрезок до ${x2} ?`, number > x2)

const res = number > x1 && number < x2;
//50>10 && 50<30
//true && false
//&& запинается на false и возвращает его
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2} ?`, number > x1 && number < x2);//false

const res1 = number < x1 || number > x2
//50<10 || 50>30
//false || true
//|| запинается на true и возвращает его
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2} ?`, number < x1 || number > x2);//true
