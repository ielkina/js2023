// "use strick" //в модульной системе писать не нужно
console.log('vars');

// Переменные и типы примитивов
// const и let
// Логирование с методом console.log
// Уникальность идентификатора

// const x = 5;
// const x = 10;//ошибка идентификатор должен быть уникальный
// const x;//консоль выдаст ошибку const всегда должны инициализироваться т.е присваиваться идентификатор и через const нельзя перезаписать другое значение x=10;
//переменные объявленные через лет можно переопределять

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать';
const isOpen = true;
const shouldConfirm = false;

console.log('hi', age, totalPrice);
console.log('Цена :', totalPrice);
console.log('5'); //в консоли браузера тип данных будет отличаться цветом в данном примере обычный цвет
console.log(5); //в данном примере синий цвет обозначает тип данных число

// оператор typeof

const type = typeof 'dfkgj';
console.log(type);

const number = typeof 5;
console.log(number);

console.log(typeof isOpen);

// Как window.alert() блокирует интерпретацию
console.log('to');
alert('sdf');
console.log('after');
