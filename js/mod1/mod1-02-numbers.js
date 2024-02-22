console.log('numbers');

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"

//[P]Парс числа с Number.parseInt() и Number.parseFloat()

//parseInt
let elementWidth = '50px';
console.log(elementWidth);
elementWidth = Number.parseInt(elementWidth); //запинается на первом не числе
const result = Number.parseInt(elementWidth);

console.log('elementWidth: ', typeof elementWidth);  //number

//метод не изменяет то что в него передают а возвращает новое значение на свое место
//parseInt с лева на право парсит целое число запинается на первом не числе

console.log(elementWidth);
console.log(typeof result);
console.log(result);
console.log('elementWidth: ', elementWidth);

//parseFloat
let elementHeight = '200.74px';
console.log(elementHeight);
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);
//включает в парс точку

//[P]метод число.toFixed(digits)

//Матрешки на примере console.log(число.toFixed(digits))
//отсекает от числа 
let salary = 1300.16472;
//вызывается на самом числе
console.log(salary.toFixed());
salary = salary.toFixed(2);//в скобках количество символов которые мы хотим оставить после запятой
//Приведение (преобразование) к числу с Number(value)
console.log(salary);//возвращает строку
salary = Number.parseFloat(salary);
console.log(salary);//возвращает число
salary = Number(salary.toFixed(2));
//вызов дву методов преобразование в число и отсекание цифр после точки
//сначала метод отсечет число а потом преобразует в число
console.log(salary);
//так  же что б не создавать новую переменную выражение можно сразу записать в консоль лог
console.log(Number(salary.toFixed(2)));//матрешка
//порядок выполнения выражение - из глубины! с начало выполняется метод во вложенных скобках потом во внешних 

//[P]Приведение (преобразование) к числу c Number(value)
//значение NaN (Not a Number) и метод Number.isNaN(value)

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
console.log(Number('5'));
console.log(Number(false));//true приводиться в числовом преобразовании (да), false - 0 (нет).
console.log(Number('dfg')); //NaN(not a number) не смог преобразовать в числовой формат 
console.log(Number(quantity));
console.log(Number(value));



//[P]Объект Math
//Возведение в степень 
//Exponent operator

console.log(Math);
const base = 2;
const power = 5;
const res = Math.pow(2, 3);//возведение в степень
const ult = Math.pow(base, power);//возведение в степень
console.log(res);
console.log(ult);
// оператор экспонента аналог Math.pow
console.log(2 ** 3);//2 в третей степени аналог функции Math.pow(2, 3)


//[P]Задача
//Напиши скрипт который просит пользователя ввести число и степень, возводит число в эту степень и выводит результат в консоль
//Алгоритм решения
//1 попросить ввести число и сохранить в переменную
let first = prompt('Введи число');
first = Number(first);
console.log(first);
//или сокращенное
console.log(Number(first));
//2 попросить ввести степень и сохранить в переменную
let second = prompt('Введи число степени');
second = Number(second);
console.log(second);
//3 возвести введенные данные в степень и вывести в консоль
const perce = first ** second;
console.log(perce);
console.log(Number(first) ** Number(second));//сокращенная

//[P]Генерим псевдослучайные числа
//Math.random
//Math.round()

console.log(Math.random());//возвращает рандомно число от 0 до 1
Math.random() * (max - min) + min

/*const max = 50;
const min = 30;*/

const a = Math.round(Math.random() * (max - min) + min);

console.log(Math.random() * (max - min) + min);
console.log(Math.random() * (50 - 30) + 30)

//округление 
console.log(a);


const color = ['tomato', 'orange', 'blue','teal', 'black', 'red', 'green', 'pink'];
const colorMax = color.length - 1;
const colorMin = 0;
const index = Math.round(Math.random() * (colorMax - colorMin) + colorMin);
const colors = color[index];
console.log(index, colors);
console.log(index, colors);//индекс возвращает строкой
console.log(colors);
document.body.style.background = colors;


var max = 10;
var min = 5;
max = Math.floor();
max = Math.random()
max = max - min + 1;
max = max + min
console.log(max);
Math.floor( Math.random () * (max - min + 1)) + min

const result1 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(result1);