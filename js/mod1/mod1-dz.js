//[P]Задача 1
// Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000

//1 объявляем переменные и присваиваем значение

const productName = 'Droid';
const pricePerItem = 2000;

console.log('pricePerItem' + 'productName');
console.log(productName, pricePerItem);

//[P]Задача 2
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

let productName1 = 'Droid';
let pricePerItem1 = 2000;

productName1 = 'Repair droid';
pricePerItem1 += 1500;

console.log('pricePerItem', 'productName');
console.log(productName1, pricePerItem1);

//[P]Задача 3
//Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

//[P]Задача 4
//Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

const pricePerItem2 = 3500;
const orderedQuantity = 4;
const totalPrice = pricePerItem2 * orderedQuantity;
console.log(totalPrice);

//[P]Задача 5
//Объяви переменную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

const productName3 = 'Droid';
const pricePerItem3 = 3500;

const message = `You picked ${productName3}, price per item is ${pricePerItem3} credits`;
console.log(message);

//[P]Задача 6
//Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

const pricePerItem6 = 800;
const orderedQuantity6 = 6;
const deliveryFee = 50;
const totalPrice6 = pricePerItem6 * orderedQuantity6 + deliveryFee;
const message6 = `You ordered droids worth ${totalPrice6} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message6);

//[P]Задача 7
//Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.
//Пример
// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log('multiply function invocation');
}

// 2. Вызовы функции multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation

//update function arrow fn
const upMultiply = () => console.log('multiply function invocation');

upMultiply();

function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();

//update fn arrow

const sayHi1 = () => console.log('Hello, this is my first function!');
sayHi1();

//[P]Задача 8
//Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он легировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.
//Пример
// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }
// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550
//update arrow fn
// const multiply = (x, y, z) => {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };
// 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//update fn arrow

const add1 = (a, b, c) => console.log(`Addition result equals ${a + b + c}`);
add1(15, 27, 10);
add1(10, 20, 30);
add1(5, 10, 15);

//[P]Задача 9
//Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.
function add9(a, d, c) {
  return a + d + c;
}
add9(2, 5, 8);
console.log(add9(15, 27, 10));
console.log(add9(10, 20, 30));
console.log(add9(5, 10, 15));

//update arrow fn
const acc = (a, d, c) => a + d + c;
console.log(acc(2, 5, 8));
console.log(acc(15, 27, 10));
console.log(acc(10, 20, 30));
console.log(acc(5, 10, 15));

//[P]ЗАдача 10
//Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
//Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.
//Внимание
// Обрати внимание на то, что в коде нет вызовов функции makeMessage. С этого задания и дальше мы сами будем вызывать твои функции и проверять то, как они работают. Результат наших проверок ты увидишь в блоке Результаты под редактором кода.

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Scanner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));

//update arrow fn

const makeMessage1 = (name, price) =>
  `You picked ${name}, price per item is ${price} credits`;

console.log(makeMessage1('Radar', 6150));
console.log(makeMessage1('Scanner', 3500));
console.log(makeMessage1('Reactor', 8000));
console.log(makeMessage1('Engine', 4070));

//[P]Задача 11
//Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}

console.log(calculateTotalPrice(5, 10));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
console.log(calculateTotalPrice(1, 3500));
console.log(calculateTotalPrice(12, 70));

//update arrow fn

const calculateTotalPrice1 = (orderedQuantity, pricePerItem) =>
  orderedQuantity * pricePerItem;

console.log(calculateTotalPrice1(5, 10));
console.log(calculateTotalPrice1(8, 60));
console.log(calculateTotalPrice1(3, 400));
console.log(calculateTotalPrice1(1, 3500));
console.log(calculateTotalPrice1(12, 70));

//[P]Задача 12
//Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

//update arrow fn

const makeOrderMessage1 = (orderedQuantity, pricePerDroid, deliveryFee) =>
  `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price`;

console.log(makeOrderMessage1(2, 100, 50));
console.log(makeOrderMessage1(4, 300, 100));
console.log(makeOrderMessage1(10, 70, 200));

//[P]Задача 13
//Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

//update arrow fn

const isAdult1 = age => age >= 18;
console.log(isAdult1(20));
console.log(isAdult1(14));
console.log(isAdult1(8));
console.log(isAdult1(37));

//[P]Задача 14
//Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.
//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}
console.log(isValidPassword('mangodab3st'));
console.log(isValidPassword('kiwirul3z'));
console.log(isValidPassword("jqueryismyjam"));

//update arrow fn

const SAVED_PASSWORD1 = 'jqueryismyjam';
const isValidPassword1 = password => password === SAVED_PASSWORD1;

console.log(isValidPassword1('mangodab3st'));
console.log(isValidPassword1('kiwirul3z'));
console.log(isValidPassword1('jqueryismyjam'));

//[P]Задача 15
//Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
//Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
//В противном случае должен выполняться блок else и записывается строка "You are a minor".

function checkAge(age) {
  let message;
  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}
console.log(checkAge(18));
console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(14));
console.log(checkAge(38));

//update arrow fn

const checkAge1 = age => (age >= 18 ? 'You are an adult' : 'You are a minor');

console.log(checkAge1(18));
console.log(checkAge1(20));
console.log(checkAge1(8));
console.log(checkAge1(14));
console.log(checkAge1(38));

//[P]Задача 16
//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

function checkStorage(available, ordered) {
  let message;
  if (available < ordered) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

console.log(checkStorage(30, 40));
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

//update arrow fn

const checkStorage1 = (available, ordered) =>
  available < ordered
    ? 'Not enough goods in stock!'
    : 'Order is processed, our manager will contact you.';

console.log(checkStorage1(30, 40));
console.log(checkStorage1(100, 50));
console.log(checkStorage1(100, 130));
console.log(checkStorage1(200, 20));
console.log(checkStorage1(200, 150));
console.log(checkStorage1(150, 180));

//[P]Задача 17
//Замени выражения со стандартными математическими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

let a = 5
let b = 10
let c = 15
let d = 20

a += 2
b -= 4
c *= 3
d /= 10

console.log(a, b, c, d);

//[P]Задача 18
//Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  const totalPrice = pricePerDroid * orderedQuantity;

  let message;

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered  ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
  }
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

//update arrow fn

const makeTransaction1 = (pricePerDroid, orderedQuantity, customerCredits) =>
  pricePerDroid * orderedQuantity > customerCredits
    ? 'Insufficient funds!'
    : `You ordered  ${orderedQuantity} droids, you have ${customerCredits - pricePerDroid * orderedQuantity
    } credits left`;

console.log(makeTransaction1(3000, 5, 23000));
console.log(makeTransaction1(1000, 3, 15000));
console.log(makeTransaction1(5000, 10, 8000));
console.log(makeTransaction1(2000, 8, 10000));
console.log(makeTransaction1(500, 10, 5000));

//[P]Задача 19
//Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  return message;
}

console.log(checkPassword('mangohackzor'));
console.log(checkPassword(null));
console.log(checkPassword('polyhax'));
console.log(checkPassword('jqueryismyjam'));

//update arrow fn

const ADMIN_PASSWORD1 = 'jqueryismyjam';
const checkPassword1 = password =>
  password === null
    ? 'Canceled by user!'
    : 'Access denied, wrong password!' && password === ADMIN_PASSWORD1
      ? 'Welcome!'
      : 'Access denied, wrong password!';

console.log(checkPassword1('mangohackzor'));
console.log(checkPassword1(null));
console.log(checkPassword1('polyhax'));
console.log(checkPassword1('jqueryismyjam'));

//[P]Задача 20
//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Если товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
//В противном случае в переменную message присваивается строка "The order is accepted, our manager will contact you".

function checkStorage3(available, ordered) {
  let message
  if (ordered === 0) {
    message = `There are no products in the order!`;
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  return message
}
console.log(checkStorage3(100, 50));
console.log(checkStorage3(100, 130));
console.log(checkStorage3(70, 0));
console.log(checkStorage3(200, 20));
console.log(checkStorage3(200, 250));
console.log(checkStorage3(150, 0));

//update arrow fn

const checkStorage2 = (available, ordered) => {
  let message;
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  return message;
};

console.log(checkStorage2(100, 50));
console.log(checkStorage2(100, 130));
console.log(checkStorage2(70, 0));
console.log(checkStorage2(200, 20));
console.log(checkStorage2(200, 250));
console.log(checkStorage2(150, 0));

//[P]Задача 21
//Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
//Присвой переменной isInRange выражение проверки вхождения number в числовой промежуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

function isNumberInRange(start, end, number) {
  const isInRange = start <= number && number <= end;
  return isInRange;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

//update arrow fn

const isNumberInRange1 = (start, end, number) =>
  start <= number && number <= end;

console.log(isNumberInRange1(10, 30, 17));
console.log(isNumberInRange1(10, 30, 5));
console.log(isNumberInRange1(20, 50, 24));
console.log(isNumberInRange1(20, 50, 76));

//[P]Задача 22
//Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'vip' || subType === 'pro';
  return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));
console.log(checkIfCanAccessContent('starter'));
console.log(checkIfCanAccessContent('vip'));
console.log(checkIfCanAccessContent('free'));

//update arrow fn

const checkIfCanAccessContent1 = subType =>
  subType === 'vip' || subType === 'pro';

console.log(checkIfCanAccessContent1('pro'));
console.log(checkIfCanAccessContent1('starter'));
console.log(checkIfCanAccessContent1('vip'));
console.log(checkIfCanAccessContent1('free'));

//[P]Задача 23
//Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.
//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

function isNumberInRange2(start, end, number) {
  const isInRange = start <= number && number <= end;
  const isNotInRange = !isInRange;
  return isNotInRange;
}
console.log(isNumberInRange2(10, 30, 17));
console.log(isNumberInRange2(10, 30, 5));
console.log(isNumberInRange2(20, 50, 24));
console.log(isNumberInRange2(20, 50, 76));

//update arrow fn

const isNumberInRange3 = (start, end, number) =>
  !(start <= number && number <= end);

console.log(isNumberInRange3(10, 30, 17));
console.log(isNumberInRange3(10, 30, 5));
console.log(isNumberInRange3(20, 50, 24));
console.log(isNumberInRange3(20, 50, 76));

//[P]Задача 24
//Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (50000 <= totalSpent) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent <= 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent <= 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }
  return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount());

//update arrow fn

const GOLD_DISCOUNT1 = 0.1;
const SILVER_DISCOUNT1 = 0.05;
const BRONZE_DISCOUNT1 = 0.02;
const BASE_DISCOUNT1 = 0;

const getDiscount1 = totalSpent => {
  let discount;
  if (50000 <= totalSpent) {
    discount = GOLD_DISCOUNT1;
  } else if (totalSpent >= 20000 && totalSpent <= 50000) {
    discount = SILVER_DISCOUNT1;
  } else if (totalSpent >= 5000 && totalSpent <= 20000) {
    discount = BRONZE_DISCOUNT1;
  } else {
    discount = BASE_DISCOUNT1;
  }
  return discount;
};
console.log(getDiscount1(137000));
console.log(getDiscount1(46900));
console.log(getDiscount(8250));
console.log(getDiscount1());

//[P]Задача 25
//Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

function checkStorage4(available, ordered) {
  let message;
  // Change code below this line
  message =
    available < ordered
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  // Change code above this line
  return message;
}

//update arrow fn

const checkStorage5 = (available, ordered) =>
  available < ordered
    ? 'Not enough goods in stock!'
    : 'The order is accepted, our manager will contact you';

console.log(checkStorage5(100, 50));
console.log(checkStorage5(100, 130));
console.log(checkStorage5(200, 20));
console.log(checkStorage5(200, 150));
console.log(checkStorage5(150, 180));

//[P]Задача 26
//Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

function checkPassword26(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  return message;
}
console.log(checkPassword26('jqueryismyjam'));
console.log(checkPassword26('angul4r1sl1f3'));
console.log(checkPassword26('r3actsux'));

//update arrow fn

const ADMIN_PASSWORD26 = 'jqueryismyjam';
const checkPassword25 = password =>
  password === ADMIN_PASSWORD26
    ? 'Access is allowed'
    : 'Access denied, wrong password!';

console.log(checkPassword25('jqueryismyjam'));
console.log(checkPassword25('angul4r1sl1f3'));
console.log(checkPassword25('r3actsux'));

//[P]Задача 27
//Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case 'organization':
      price = 50;

      break;
    case 'professional':
      price = 20;
      break;

    default:
      'starter';
      price = 0;
  }

  return price;
}

console.log(getSubscriptionPrice('professional'));
console.log(getSubscriptionPrice('organization'));
console.log(getSubscriptionPrice('starter'));

//update arrow fn

const getSubscriptionPrice1 = type => {
  let price;

  switch (type) {
    case 'organization':
      price = 50;

      break;
    case 'professional':
      price = 20;
      break;

    default:
      'starter';
      price = 0;
  }

  return price;
};

console.log(getSubscriptionPrice1('professional'));
console.log(getSubscriptionPrice1('organization'));
console.log(getSubscriptionPrice1('starter'));

//[P]Задача 28
//Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".

function checkPassword2(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}
console.log(checkPassword2('mangohackzor'));
console.log(checkPassword2('polyhax'));
console.log(checkPassword2('jqueryismyjam'));

//update arrow fn

const ADMIN_PASSWORD2 = 'jqueryismyjam';
const checkPassword3 = password => {
  let message;
  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD2:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }
  return message;
};
console.log(checkPassword3('mangohackzor'));
console.log(checkPassword3('polyhax'));
console.log(checkPassword3('jqueryismyjam'));

//[P]ЗАдача 29
//Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.
//Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соответствующие значения.

function getShippingCost(country) {
  let price;
  let message;
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }
  return (message = `Shipping to ${country} will cost ${price} credits`);
}
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));

//update arrow fn

const getShippingCost1 = country => {
  let price;
  let message;
  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${price} credits`;
};
console.log(getShippingCost1('Australia'));
console.log(getShippingCost1('Germany'));
console.log(getShippingCost1('China'));
console.log(getShippingCost1('Chile'));
console.log(getShippingCost1('Jamaica'));
console.log(getShippingCost1('Sweden'));

//[P]Задача 30
//Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;
  return message;
}
console.log(getNameLength('Poly'));
console.log(getNameLength('Harambe'));
console.log(getNameLength('Billy'));
console.log(getNameLength('Joe'));

//update arrow fn

const getNameLength1 = name => `Name ${name} is ${name.length} characters long`;

console.log(getNameLength1('Poly'));
console.log(getNameLength1('Harambe'));
console.log(getNameLength1('Billy'));
console.log(getNameLength1('Joe'));

//[P]Задача 31
//Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

const courseTopic = 'JavaScript essentials';
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

//[P]Задача 32
//Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
//string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

function getSubstring(string, length) {
  let substring = string.slice(0, length);
  return substring;
}
console.log(getSubstring('Hello world', 3));
console.log(getSubstring('Hello world', 6));
console.log(getSubstring('Hello world', 8));
console.log(getSubstring('Hello world', 11));
console.log(getSubstring('Hello world', 0));

//update arrow fn

const getSubstring1 = (string, length) => string.slice(0, length);

console.log(getSubstring1('Hello world', 3));
console.log(getSubstring1('Hello world', 6));
console.log(getSubstring1('Hello world', 8));
console.log(getSubstring1('Hello world', 11));
console.log(getSubstring1('Hello world', 0));

//[P]Задача 33
//Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
//Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

function formatMessage(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message.slice(0, maxLength);
  } else if (message.length >= maxLength) {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
}

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

//update arrow fn

const formatMessage1 = (message, maxLength) => {
  let result;
  if (message.length <= maxLength) {
    result = message.slice(0, maxLength);
  } else if (message.length >= maxLength) {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
};

console.log(formatMessage1('Curabitur ligula sapien', 16));
console.log(formatMessage1('Curabitur ligula sapien', 23));
console.log(formatMessage1('Vestibulum facilisis purus nec', 20));
console.log(formatMessage1('Vestibulum facilisis purus nec', 30));
console.log(formatMessage1('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage1('Nunc sed turpis a felis in nunc fringilla', 41));

//[P]Задача 34
//Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase()
  return normalizedInput
}
console.log(normalizeInput('Hello world'));
console.log(normalizeInput("This ISN'T SpaM"));
console.log(normalizeInput('Big SALE'));

//update arrow fn

const normalizeInput1 = input => input.toLowerCase();

console.log(normalizeInput1('Hello world'));
console.log(normalizeInput1("This ISN'T SpaM"));
console.log(normalizeInput1('Big SALE'));

//[P]Задача 35
//Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
//Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullname, name) {
  const result = fullname.includes(name)
  return result
}
console.log(checkForName('Egor Kolbasov', 'Egor'));
console.log(checkForName('Egor Kolbasov', 'egor'));
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName('Egor Kolbasov', 'Zhenya'));
console.log(checkForName('Vadim Nekrasov', 'Vadim'));
console.log(checkForName('Vadim Nekrasov', 'vadim'));
console.log(checkForName('Vadim Nekrasov', 'Dima'));

//update arrow fn

const checkForName1 = (fullname, name) => fullname.includes(name);

console.log(checkForName1('Egor Kolbasov', 'Egor'));
console.log(checkForName1('Egor Kolbasov', 'egor'));
console.log(checkForName1('Egor Kolbasov', 'egOr'));
console.log(checkForName1('Egor Kolbasov', 'Zhenya'));
console.log(checkForName1('Vadim Nekrasov', 'Vadim'));
console.log(checkForName1('Vadim Nekrasov', 'vadim'));
console.log(checkForName1('Vadim Nekrasov', 'Dima'));

//[P]Задача 36
//Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

function checkForSpam(message) {
  let result = message.toLowerCase();
  return result.includes('spam') || result.includes('sale');
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));

//update arrow fn

const checkForSpam1 = message => {
  let result = message.toLowerCase();
  return result.includes('spam') || result.includes('sale');
};

console.log(checkForSpam1('Latest technology news'));
console.log(checkForSpam1('JavaScript weekly newsletter'));
console.log(checkForSpam1('Get best sale offers now!'));
console.log(checkForSpam1('Amazing SalE, only tonight!'));
console.log(checkForSpam1('Trust me, this is not a spam message'));
console.log(checkForSpam1('Get rid of sPaM emails. Our book in on sale!'));