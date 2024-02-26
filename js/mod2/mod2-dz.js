function checkAge(age) {
  let message = 'Вы не совершеннолетний';

  if (age >= 18) {
    message = 'Вы совершеннолетний человек';
    return message;
  }
  return message;
}
console.log(checkAge(14));

function checkAge1(age) {
  let message;

  if (age >= 18) {
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }
  return message;
}
console.log(checkAge1(15));

function checkAge2(age) {
  return age >= 18 ? 'Вы совершеннолетний' : 'Вы не совершеннолетний';
}
console.log(checkAge2(15));

//update arrow fn

const checkAge3 = age =>
  age >= 18 ? 'Вы совершеннолетний человек' : 'Вы не совершеннолетний человек';

console.log(checkAge3(15));

//[P]Задача 1
// Запиши условие в инструкции if так, чтобы функция работала правильно.

const checkAge4 = (age) => {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }
  return 'You are a minor';
}
console.log(checkAge4(20));
console.log(checkAge4(8));
console.log(checkAge4(14));
console.log(checkAge4(38));

//update arrow fn

const checkAge5 = age => (age >= 18 ? 'You are an adult' : 'You are a minor');

console.log(checkAge5(20));
console.log(checkAge5(8));
console.log(checkAge5(14));
console.log(checkAge5(38));

//[P]Задача 2
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
}
//или
function checkPassword1(password) {
  // const ADMIN_PASSWORD = 'jqueryismyjam';
  // if (password === ADMIN_PASSWORD) {
  //   return 'Welcome!';
  // }
  return password === 'jqueryismyjam'
    ? 'Welcome!'
    : 'Access denied, wrong password!';
}
console.log(checkPassword('mangohackzor'));
console.log(checkPassword('polyhax'));
console.log(checkPassword1('jqueryismyjam'));

//update arrow fn

const checkPassword2 = password =>
  password === 'jqueryismyjam' ? 'Welcome!' : 'Access denied, wrong password!';

console.log(checkPassword('mangohackzor'));
console.log(checkPassword1('polyhax'));
console.log(checkPassword2('jqueryismyjam'));

//[P]Задача 3
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  } else
    if (ordered > available) {
      return 'Your order is too large, not enough goods in stock!';
    }
  return 'The order is accepted, our manager will contact you';
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
console.log(checkStorage(0, 0));

//update arrow fn

const checkStorage1 = (available, ordered) =>
  ordered === 0
    ? 'Your order is empty!'
    : 'The order is accepted, our manager will contact you' &&
      ordered > available
      ? 'Your order is too large, not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage1(200, 20));
console.log(checkStorage1(200, 250));
console.log(checkStorage1(150, 0));
console.log(checkStorage1(0, 0));

//[P]Задача 4
// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

const fruits = ["apple", "plum", "pear", "orange"]

//[P]Задача 5
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];
console.log(lastElement);

//[P]Задача 6
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
// const fruits = ['apple', 'plum', 'pear', 'orange'];
console.log(fruits[1] = 'peach');
console.log(fruits[3] = 'banana');

//[P]Задача 7
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;
console.log(fruitsArrayLength); //4

//[P]Задача 8
// Объяви две переменные:

// const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement1 = fruits[lastElementIndex];
console.log(lastElementIndex);
console.log(lastElement1);

//[P]Задача 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]]
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

//update arrow fn

const getExtremeElements1 = array => [array[0], array[array.length - 1]];

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements1(['Earth', 'Mars', 'Venus']));
console.log(getExtremeElements1(['apple', 'peach', 'pear', 'banana']));

//[P]Задача 10
//Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}

console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango hurries to the train', '-'));
console.log(splitMessage('Mango hurries to the train', '_'));
console.log(splitMessage('Mango', ''));
console.log(splitMessage('best_for_week', '_'));

//update arrow fn

const splitMessage1 = (message, delimiter) => message.split(delimiter);

console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango hurries to the train', '-'));
console.log(splitMessage1('Mango hurries to the train', '_'));
console.log(splitMessage1('Mango', ''));
console.log(splitMessage1('best_for_week', '_'));

//[P]Задача 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(' ');
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice('Web-development is creative work', 40));
console.log(calculateEngravingPrice('Web-development is creative work', 20));

//update arrow fn

const calculateEngravingPrice1 = (message, pricePerWord) =>
  message.split(' ').length * pricePerWord;

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
console.log(calculateEngravingPrice1('Web-development is creative work', 40));
console.log(calculateEngravingPrice1('Web-development is creative work', 20));

//[P]Задача 12
// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

function makeStringFromArray(array, delimiter) {
  let string = array.join(delimiter);
  return string;
}

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
);
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));

//update arrow fn

const makeStringFromArray1 = (array, delimiter) => array.join(delimiter);

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
);
console.log(makeStringFromArray1(['M', 'a', 'n', 'g', 'o'], ''));
console.log(makeStringFromArray1(['top', 'picks', 'for', 'you'], '_'));

//[P]Задача 13
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

function slugify(title) {
  let string = title.toLowerCase().split(' ').join('-');
  return string;
}

console.log(slugify('Arrays for bagginess'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

//update arrow fn

const slugify1 = title => title.toLowerCase().split(' ').join('-');

console.log(slugify('Arrays for bagginess'));
console.log(slugify('English for developer'));
console.log(slugify1('Ten secrets of JavaScript'));
console.log(slugify1('How to become a JUNIOR developer in TWO WEEKS'));

//[P]Задача 14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(2);
console.log(firstTwoEls); //["apple", "plum"]
console.log(nonExtremeEls); //["plum", "pear", "orange"]
console.log(lastThreeEls);//["pear", "orange", "banana"]

//[P]Задача 15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients);

//[P]Задача 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
  let array = firstArray.concat(secondArray);
  if (array.length > maxLength) {
    array = array.slice(0, maxLength);
    return array;
  }
  return array;
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//update arrow fn

const makeArray1 = (firstArray, secondArray, maxLength) => {
  let array = firstArray.concat(secondArray);
  if (array.length > maxLength) {
    array = array.slice(0, maxLength);
    return array;
  }
  return array;
};

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 2));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray1(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray1(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray1(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

//[P]Задача 17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

const start = 3;
const end = 7;
for (let i = start; i <= end; i += 1) {
  console.log(i);
}

//[P]Задача 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}

console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));
console.log(calculateTotal());

//[P]Задача 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i > fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

//[P]Задача 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  }
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//[P]Задача 21
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// Другой широко используемый метод итерации — .reduce(). Метод .reduce() возвращает одно значение после перебора элементов массива, тем самым уменьшая массив. Взгляните на пример ниже:

const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(summedNums); // Output: 17

function findLongestWord(string) {
  return string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

//update arrow fn

const findLongestWord1 = string =>
  string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));

//[P]Задача 22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i += 1) numbers.push(i);
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));

//[P]Задача 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

function filterArray(numbers, value) {
  const array = [];
  for (const item of numbers) {
    if (item > value) {
      array.push(item);
    }
  }
  return array;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

function filterArray1(numbers, value) {
  const newArray = [];

  for (let i = 0; numbers.length > i; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  console.log(newArray);
  // [5, 10, 15, 21, 4]
  return newArray;
}
console.log(filterArray1([1, 2, 3, 4, 5], 3));

//[P]Задача 24
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit)
}

console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit('pear'));
console.log(checkFruit('Pear'));
console.log(checkFruit('apple'));

//update arrow fn

const checkFruit1 = fruit => {
  const fruits = ['apple', 'plum', 'pear', 'orange']
  return fruits.includes(fruit)
}


console.log(checkFruit('plum'));
console.log(checkFruit('mandarin'));
console.log(checkFruit1('pear'));
console.log(checkFruit1('Pear'));
console.log(checkFruit1('apple'));

//[P]Задача 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//[P]Задача 26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice1(order) {
  let total = 0;
  for (const num of order) {
    total += num;
  }
  return total;
}

console.log(calculateTotalPrice1([12, 85, 37, 4]));
console.log(calculateTotalPrice1([164, 48, 291]));
console.log(calculateTotalPrice1([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice1([]));

//[P]Задача 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray2(numbers, value) {
  const filteredNumbers = [];
  for (const num of numbers) {
    if (num > value) {
      filteredNumbers.push(num);
    }
  }
  return filteredNumbers;
}

console.log(filterArray2([1, 2, 3, 4, 5], 3));
console.log(filterArray2([1, 2, 3, 4, 5], 4));
console.log(filterArray2([1, 2, 3, 4, 5], 5));
console.log(filterArray2([12, 24, 8, 41, 76], 38));
console.log(filterArray2([12, 24, 8, 41, 76], 20));

//[P]Задача 28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//[P]Задача 29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

function getEvenNumbers(start, end) {
  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(7, 7));

//[P]Задача 30
//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

const start1 = 6;
const end1 = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break
  }
}
console.log(number);

//[P]Задача 31
//Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

function findNumber(start, end, divisor) {
  let number;
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));

//[P]Задача 32
//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
);
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
