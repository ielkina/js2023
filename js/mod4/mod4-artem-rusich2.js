//[P]callback функция переданная в качестве параметра
function first(y) {
  console.log(1);
  y();
}
function second(a, b) {
  console.log(a * b);
}

first(function () {
  second(5, 7);
});

// map перебирает массив и возвращает массив такой же длинны
const arr = [1, 2, 3, 4, 5, 6, 7];

const result = arr.map((item, idx, arr) => item * 2);

const result1 = arr.map((item, idx, arr) => {
  item * 2
});
console.log(result);
console.log(result1);
console.log(arr);

/**************************************************************** */

// const arr = [1, 2, 3, 4, 5, 6, 7]

//возвращает парный элемент умноженный на 2

const result2 = arr.map(item => {
  if (!(item % 2)) {
    return item * 2
  }
  return item
})

const result3 = arr.map(item => !(item % 2) ? item * 2 : item)

console.log(result3);

/************************************************************************ */
// const arr = [1, 2, 3, 4, 5, 6, 7];

function customMap(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    result.push(callback(item, i, arr));
  }
  return result;
}
console.log(customMap(arr, foo));

function foo(item, idx, arr) {
  if (!(item % 2)) {
    return item * 2
  }
  return item
}
/***************************************************************************** */
const arr1 = [
  {
    name: 'User 1',
    skills: ['html', 'css'],
  },
  {
    name: 'User 2',
    skills: ['js', 'react'],
  },
  {
    name: 'User 3',
    skills: ['node.js', 'express'],
  },
];

const result4 = arr1.map(item => item.skills.map(skill => skill));
console.log(result4);

// flatMap

const result5 = arr1.flatMap(item => item.skills)
console.log(result5);

/***************************************************************************** */
// find

// const arr = [1, 2, 3, 4, 5, 6, 7];

const result6 = arr.find(item => item > 5);
console.log(result6);

//кто знает js

// const arr1 = [{
//     name: 'User1',
//     skills: ['html', 'css']
// }, {
//     name: 'User2',
//     skills: ['js', 'react']
// }, {
//     name: 'User3',
//     skills: ['node.js', 'express']
// }]

const result7 = arr1.find(item => item.skills.includes('js')).name
console.log(result7);

/************************************************************************************** */

// findIndex

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = [
//   {
//     name: 'User 1',
//     skills: ['html', 'css'],
//   },
//   {
//     name: 'User 2',
//     skills: ['js', 'react'],
//   },
//   {
//     name: 'User 3',
//     skills: ['node.js', 'express'],
//   },
// ];

const arrSkills = arr1.map((item, idx, arr) => item.skills);
const result8 = arr1.findIndex(item => item.skills.includes('node.js'));
const result9 = arr1.findIndex(item => item.skills.includes('avadakedavra'))

console.log(arrSkills);
console.log(result9);

/***************************************************************************************** */

// filter возвращает массив

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result10 = numbers
  .filter(item => !(item % 2))
  .map((item, _, arr) => item * 2);

console.log(result10);

/******************************************************************************************* */

// every

// const numbers = [1, 2, 3, 4, 5, 6, 7];
const number1 = [2, 4, 6, 8, 10]
const result11 = number1.every(item => !(item % 2))
console.log(result11);

// const arr1 = [{
//     name: 'User 1',
//     age: 18
// }, {
//     name: 'User 2',
//     age: 12
// }, {
//     name: 'User 3',
//     age: 19
// }]

const result12 = arr1.every(user => user.age >= 18)
console.log(result12);

/***************************************************************** */

// some

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const number1 = [2, 4, 6, 8, 10]

const result13 = number1.some(item => {
  console.log(item);
  return !(item % 2)
})
console.log(result13);

/********************************************************************* */

// sort

// const numbers = [1, 2, 3, 4, 5, 6, 7];

const result14 = numbers.sort((a, b) => b - a); //от большего к меньшему
console.log('result14', result14);

const result15 = [...numbers].sort((a, b) => a - b);
console.log('result15', result15);
console.log('numbers', numbers);

numbers.sort()
console.log(numbers);

const str = ['s', 'a', 'f', 'B', 'A', 'S'];
const result16 = str.sort((a, b) => a - b)
const result17 = str.sort()
const result18 = str.sort((a, b) => a.localeCompare(b));
console.log(result18);

const arr2 = [
  {
    name: 'Den',
    age: 18,
  },
  {
    name: 'Slava',
    age: 12,
  },
  {
    name: 'Max',
    age: 19,
  },
];

arr2.sort((a, b) => a.name.localeCompare(b.name));
console.table(arr2);

/************************************************************************** */

//reduce

// const numbers = [1, 2, 3, 4, 5, 6, 7];
const result19 = numbers.reduce((acc, item, idx, arr) => {
  console.log(acc);
  console.log(item);
  console.log(idx);
  console.log(arr);
  console.log('----------------------------------');
  return acc + item;
}, 0);
console.log(result19);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

const result20 = numbers.reduce((acc, item) => {
  console.log('acc', acc);
  console.log('item', item);
  acc.push(item * 2);
  return acc;
}, []);
console.log(result20);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result21 = numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     console.log('item', item);
//     return acc.push(item * 2)
// }, [])

// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 30000,
    onSale: false,
  },
];

//[P]Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

const getModels = cars => {
  return cars.map(car => car.model);
};
getModels(cars)
console.table(getModels(cars));

//[P]Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(item => ({
    ...item,//порядок диструктуризации важен так как изменение будут происходить раньше чем деструктуризация
    //а нам необходимо изменять уже диструктуризированный массив
    price: item.price * (1 - discount),
  }));

console.log(makeCarsWithDiscount(cars, 0.2));
console.log(makeCarsWithDiscount(cars, 0.4));

//[P]Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

const filterByPrice = (cars, threshold) =>
  cars.filter(({ price }) => price <= threshold);

console.log(filterByPrice(cars, 30000));
console.log(filterByPrice(cars, 25000));

//[P]Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

const getCarsWithDiscount = cars => {
  return cars.filter(({ onSale }) => onSale)
};
//или
const getCarsWithDiscount1 = cars => cars.filter(({ onSale }) => onSale);

console.table(getCarsWithDiscount(cars));

//[P]Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

const getCarsWithType = (cars, type) =>
  cars.filter(({ type: carType }) => carType === type);

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));

const getFord = (cars, carPrice) =>
  cars
    .filter(({ price }) => price < carPrice)
    .filter(({ make }) => make === 'Honda');
//или
const getFord1 = (cars, carPrice, carName) =>
  cars.filter(({ make, price }) => price < carPrice && make === carName);

console.log(getFord(cars, 25000, 'Ford'));

//[P]Example 6 - Метод find

const getCarByModel = (cars, model) =>
  cars.find(({ model: carModel }) => model === carModel);

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));

//[P]Example 7 - Метод sort

// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення властивості amount.

const sortByAscendingAmount = cars => cars.sort((a, b) => a.price - b.price);
const sortByAscendingAmount1 = cars =>
  [...cars].sort(({ price: a }, { price: b }) => a - b); //чтоб и мутировать оригинальный массив используем операцию [...cars]-spread

console.log(cars);
console.table(sortByAscendingAmount(cars));

//[P]Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

const sortByDescendingPrice = cars =>
  [...cars].sort((a, b) => b.price - a.price);
console.log(cars);
console.table(sortByDescendingPrice(cars));

//[P]Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

const sortByModel = (cars, order) => {
  if (order === 'asc') {
    return [...cars].sort((a, b) => a.model.localeCompare(b.model))
  } else {
    return [...cars].sort((a, b) => b.model.localeCompare(a.model))
  }
};

const sortByModel1 = (cars, order) =>
  [...cars].sort(({ model: a }, { model: b }) =>
    order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
  );

const sortByModel2 = (cars, order) => [...cars].sort(({ model: a }, { model: b }) => a.localeCompare(b))

const sortByModel3 = (cars, order) => [...cars].sort(({ model: a }, { model: b }) => b.localeCompare(a))

console.table(sortByModel(cars, 'asc')); //asc -алфавитный порядок
console.table(sortByModel(cars, 'desc')); //desc - обратный порядок

//[P]Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

const getTotalAmount = cars =>
  cars.reduce((acc, { amount }) => acc + amount, 0);

console.log(getTotalAmount(cars));

//[P]Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

const getModelsOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ model }) => model);
//или
const getModelsOnSale1 = cars =>
  cars
    .filter(({ onSale }) => onSale)
    .map(({ make, model, price }) => `${make} ${model} ${price}`);

console.log(getModelsOnSale(cars));

//[P]Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

/**
 * Get cars on sale and sort them //что делает функция
 * @param {Array} cars - Array with object //тип данных {Array}, название параметра (cars)
 * @returns {Array} - sorted array on sale //возвращает тип данных {Array}
 *
 */

const getSortedCarsOnSale = cars =>
  cars
    .filter(({ onSale }) => onSale) //возвращает true
    .sort(({ price: a }, { price: b }) => a - b); //сортирует от меньшего к большему

console.log('cars', cars);
console.log(getSortedCarsOnSale(cars));

/************************************************************************************************************* */

//присвоить ключу букву которая есть в строке а в значение указать количество ее повторения

const str1 = 'duaguidgasuidgauisdhasudasdfhsgvfakhfugduashc';

// у метода reduce всегда должен быть возврат
const resulte21 = str1.split('').reduce((acc, item) => {
  // acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1;//1

  // item in acc ? (acc[item] += 1) : (acc[item] = 1); //2

  const keys = Object.keys(acc); //3
  keys.includes(item) ? (acc[item] += 1) : (acc[item] = 1);

  return acc;
}, {}); //какой тип данны вы хотите такой и записываете в конце скобок {} вернет обьект, []-вернет массив

console.log(resulte21);

/************************************************************************** */
// const arr3 = ['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault'];
// Загальна кількість авто 6:
// 1 Honda - порядковый номер и название
// 2 Audi
// 6 Reno
//если
//const arr = []; пустой  - Вибачте авто немає

function logCars(arr) {
  const result = arr.reduce(
    (acc, car, idx) => {
      return acc + `${idx + 1} - ${car}\n`;
    },
    arr.length
      ? `Загальна кількість авто ${arr.length}: \n`
      : `Вибачте авто немає 😥 ${foo()}`
    // : `Вибачте авто немає 😥`
  );
  console.log('*** *** ***');
  return result;
}

function foo() {
  return 'foo fn 🤪';
}

console.log(logCars(['Honda', 'Audi', 'BMW', 'Skoda', 'Ford', 'Renault']));
console.log(logCars([]));

/******************************************************************************* */

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];
const count = fruitBasket.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1; // якщо ключа ще не було створено
  // acc[fruit] = (0) + 1;// => 1
  // acc[fruit] = (acc[fruit] || 0) + 1;якщо ключ вже існує
  // acc[fruit] = acc[fruit]  + 1;
  return acc;
}, {});

console.log(count);// { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
const user = {};
user.age = 1;
console.log(user);

const result21 = 2 === 2 ? 'Yes' : 'NO';
console.log(result21);

// const str1 = 'asdaskfjnaskjfnmaeklsmflasfasdsapoldwa';
const obj = abc => [...abc].reduce((acc, item) => {
    console.log(acc);
    acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
    acc[item] = (acc[item] || 0) + 1
    return acc;
}, {});

console.log(obj(str1));

const allCourses = ['html', 'js', "css", 'js']
const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
//                                     //   'html'   0                     0                      0
//                                     //    "js"    1                     1                      1
//                                     //    "css"   2                     2                      2
//                                     //    'js'    3                     1                      3

console.log(uniqueCourses);