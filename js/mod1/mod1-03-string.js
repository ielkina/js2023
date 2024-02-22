console.log('string');
//Длинна строки свойство length
const message = 'В этой строке 26 символов.';
console.log(message.length);//26

//конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + " " + lastName;
console.log(firstName + lastName);
console.log(fullName);

//Напиши скрипт который выведет строку в форме:
//"Гость х у поселяется в z номер q"
//подставить вместо x y z q значение переменных

const room = 716;
const type = 'VIP';
const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' поселяется ' + 'в ' + room + ' ' + type;

console.log(welcomeMsg);

//Шаблонные строки (template strings)
//Возвращение к составлению строки поселение в отель

const quantity = 10 + 5;
const orderMsg = 'Вы заказываете 5 холодильников.';
const orderMsg1 = `Вы заказываете ${quantity} холодильников.`;

console.log(`Гость ${firstName + ' ' + lastName} поселяется в ${type} номер ${room}`);
console.log(`Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`);
console.log(`duffel; fdlgj; skafh ${5 + 5}`);
console.log(orderMsg1);

//Нормализация с методом toLowerCase()
//Что ищем?
const brand = 'Samsung';
const normaliseBrand = brand.toLowerCase();
const inDb = 'samsung'
console.log(firstName.toLowerCase());//нижний регистр
console.log(firstName.toUpperCase());//верхний регистр
// console.log(normaliseBrand);
let brand1 = 'Samsung';
brand1 = brand1.toLowerCase();
console.log(brand1);

let prom = prompt('Привет, Введи бренд');
prom = prom.toLowerCase();
console.log(prom[0]);//обращение к символу строки по индексу
console.log(prom.slice(3));//отрезает ненужные символы по индексу с лева, т.е отрезается с третьего символа
console.log(prom.slice(5).toUpperCase());
prom = prom[0] + prom.slice(5).toLowerCase();

//prom[0]-символ не меняется
//prom.slice(5)-отрезается все перед пятым символом строки
//toLowerCase()-привет оставшиеся символы в нижний регистр

console.log(prom);

//поиск в строке с методом includes()
const blacklistWord1 = 'спам'
const blacklistWord2 = 'распродажа'

const string1 = `Привет, я принц Абдул, это не спам, предлагаю тебе миллион!`
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!'
const string3 = 'Рекламная компания #fatlivesmatter'
const normaliseString2 = string2.toLowerCase();

console.log(string1.includes(blacklistWord1));//true
console.log(string1.includes(blacklistWord2));//false

console.log(string2.includes(blacklistWord1));//false
console.log(normaliseString2.includes(blacklistWord2));//true

console.log(string3.includes(blacklistWord1));//true
console.log(string3.includes(blacklistWord2));//false


