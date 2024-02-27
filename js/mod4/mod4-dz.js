/*[P]Задание 1*/
//Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza(); //результат выполнения
const pointer = makePizza; //ссылка на функцию

console.log(result);
console.log(pointer);

/*[P]Задание 2*/

//Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza1(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
console.log(makeMessage('Royal Grand', makePizza1));
console.log(makeMessage('Ultracheese', deliverPizza));

/*[P]Задание 3*/
//Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

function makePizza2(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza2('Royal Grand', function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza2('Ultracheese', function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

// makePizza2('Ultracheese');

/*[P]Задание 4*/

//Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

//Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
//Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
//После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall('Mango', takeCall, activateAnsweringMachine);
processCall('Poly', takeCall, leaveHoloMessage);

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(
      `There is no pizza with a name ${pizzaName}in the assortment.`
    );
  },
};

function makePizza3(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! ${error}`;
}

console.log(pizzaPalace.order('Smoked', makePizza3, onOrderError));
pizzaPalace.order('Four meats', makePizza3, onOrderError);
pizzaPalace.order('Big Mike', makePizza3, onOrderError);
pizzaPalace.order('Vienna', makePizza3, onOrderError);

/*[P]Задание 5*/

//Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  orderedItems.forEach(number => {
    totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

/*[P]Задание 6*/
//Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  numbers.forEach((number, idx, array) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

/*[P]Задание 7*/
//Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }
  firstArray.forEach(item => {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });

  return commonElements;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));

/*[P]Задание 8*/

//Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная
// Change code below this line

const calculateTotalPrice1 = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice1(5, 100));

/*[P]Задание 9*/
//Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// Change code below this line
const calculateTotalPrice2 = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

console.log(calculateTotalPrice2(5, 100));

/*[P]Задание 10*/

//Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
const calculateTotalPrice3 = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => {
    totalPrice += item;
  });
  return totalPrice;
};
// Change code above this line

console.log(calculateTotalPrice3([12, 85, 37, 4]));

/*[P]Задание 11*/
//Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
const filterArray1 = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  // Change code above this line
  return filteredNumbers;
};

console.log(filterArray1([1, 2, 3, 4, 5], 3));

/*[P]Задание 12*/

//Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
const getCommonElements1 = (firstArray, secondArray) => {
  const commonElements = [];
  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  // Change code above this line
  return commonElements;
};

console.log(getCommonElements1([1, 2, 3], [2, 4]));

/*[P]Задание 13*/

//Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

//Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

//Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

const changeEven = (numbers, value) => {
  let newArray = [];
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //   }
  // }
  numbers.forEach(number => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else {
      newArray.push(number);
    }
  });
  return newArray;
};
const numbers = [1, 2, 3, 4, 5];
const pureNumbers = changeEven(numbers, 10);
console.log(numbers);
console.log(changeEven(numbers, 10));
console.log(pureNumbers);

/*[P]Задание 14*/

//Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// Change code below this line
const planetsLengths = planets.map(planets => planets.length);

console.log(planetsLengths);

/*[P]Задание 15*/

//Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
    genres: ['fiction'],
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
    genres: ['horror', 'mysticism'],
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94, genres: ['horror', 'mysticism'], },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67, genres: ['horror', 'mysticism'], },

];

const titles = books.map(book => book.title);
console.log(titles);

/*[P]Задание 16*/

//Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// Change code below this line

const genres = books.flatMap(book => book.genres);

console.log(genres);

/*[P]Задание 17*/

//Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

/*[P]Задание 18*/

//Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

// // Change code below this line
const getUserEmails1 = users => {
  return users.map(user => user.email);
};
// Change code above this line

console.log(getUserEmails1(users));

/*[P]Задание 19*/

//Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

const numbers1 = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line
const evenNumbers = numbers.filter(number => number % 2 === 0); //четные
const oddNumbers = numbers.filter(number => number % 2 !== 0); //не четные
console.log(evenNumbers);
console.log(oddNumbers);

/*[P]Задание 20*/

//Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

const allGenres = books.flatMap(books => books.genres);
const uniqueGenres = allGenres.filter(
  (book, idx) => allGenres.indexOf(book) === idx
);

console.log(allGenres);
console.log(uniqueGenres);

/*[P]Задание 21*/

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.

// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';
// Change code below this line

const topRatedBooks = books.filter(books => books.rating >= MIN_RATING);
const booksByAuthor = books.filter(books => books.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

/*[P]Задание 22*/

//Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Change code below this line
const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};
// Change code above this line

console.log(getUsersWithEyeColor(users, 'blue'));

/*[P]Задание 23*/

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age > minAge && user.age < maxAge);
};

console.log(getUsersWithAge(users, 20, 30));

/*[P]Задание 24*/

//Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.indexOf(friendName) !== -1);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));

/*[P]Задание 25*/

//Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);

  console.log(allFriends);

  const filterFriends = allFriends.filter(
    (friend, index) => allFriends.indexOf(friend) === index
  );
  return filterFriends;
};

console.log(getFriends(users));

/*[P]Задание 26*/

//Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = users => {
  return users.filter(user => user.isActive);
};

console.log(getActiveUsers(users));

/*[P]Задание 27*/

//Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
console.log(getInactiveUsers(users));

/*[P]Задание 28*/

//Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR1 = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(books => books.title === BOOK_TITLE);
const bookByAuthor = books.find(books => books.author === AUTHOR1);

console.log(bookWithTitle);
console.log(bookByAuthor);

/*[P]Задание 29*/
//Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  return users.find(users => users.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));

/*[P]Задание 30*/
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);

/*[P]Задание 31*/

//Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

const isEveryUserActive = users => {
  return users.every(users => users.isActive);
};

console.log(isEveryUserActive(users));

/*[P]Задание 32*/

// Используя метод some() дополни код так, чтобы:

const firstArray1 = [26, 94, 36, 18];
const secondArray1 = [17, 61, 23];
const thirdArray1 = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray1.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray1.some(number => number % 2 !== 0);

const anyElementInSecondIsEven = secondArray1.some(number => number % 2 === 0);
const anyElementInSecondIsOdd = secondArray1.some(number => number % 2 !== 0);

const anyElementInThirdIsEven = thirdArray1.some(number => number % 2 === 0);
const anyElementInThirdIsOdd = thirdArray1.some(number => number % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

/*[P]Задание 33*/
//Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// Change code below this line
const isAnyUserActive = users => {
  return users.some(user => user.isActive === true);
};

// Change code above this line
console.log(isAnyUserActive(users));

/*[P]Задание 34*/
//Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((value, number) => {
  return value + number;
});

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

/*[P]Задание 35*/

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

const players1 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players1.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

/*[P]Задание 36*/

//Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

console.log(calculateTotalBalance(users));

/*[P]Задание 37*/

//Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = users => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};

console.log(getTotalFriendCount(users));

/*[P]Задание 38*/

//Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

/*[P]Задание 39*/

//Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates1 = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

console.log(ascendingReleaseDates1);
console.log(descendingReleaseDates);

/*[P]Задание 40*/

//Онлайн библиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

/*[P]Задание 41*/

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

/*[P]Задание 42*/

//Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance);
};

console.log(sortByAscendingBalance(users));

/*[P]Задание 43*/

//Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// Change code below this line
const sortByDescendingFriendCount = users => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

console.log(sortByDescendingFriendCount(users));

/*[P]Задание 44*/

//Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

console.log(sortByName(users));

/*[P]Задание 45*/

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books =>
  [...books]
    .sort((a, b) => a.author.localeCompare(b.author)) //сортирует по алфавиту имя
    .filter(books => books.rating > MIN_BOOK_RATING) //находит книги нужного рейтинга
    .map(book => book.author); //формирует массив авторов этих книг

console.log(names(books));

/*[P]Задание 46*/

//Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
//[]

const getNamesSortedByFriendCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendCount(users));

/*[P]Задание 47*/

//Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

const getSortedFriends = users => {
  return [...users]
    .map(user => user.friends)
    .reduce((allFriends, user) => [...allFriends, ...user], [])
    .filter((elem, idx, arr) => arr.indexOf(elem) === idx)
    .sort((a, b) => a.localeCompare(b, 'en'));
};
console.log(getSortedFriends(users));

/*[P]Задание 48*/

//Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(user => user.gender === gender)
    .reduce((totalBalance, user) => {
      return totalBalance + user.balance;
    }, 0);
};

console.log(getTotalBalanceByGender(users, 'male'));