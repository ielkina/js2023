//⁡⁣⁣⁢Колбэк функция⁡

function greet(name) {
  return `Добро пожаловать ${name}`;
}
// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}`);
  callback(name);
}

//⁡⁣⁣⁢Инлайн функция⁡

// Передаём инлайн функцию greet как колбэк
registerGuest('Манго', function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest('Поли', function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

registerGuest('Mango', greet);
greet('Манго');
// Вызываем функцию greet и выводим результат в консоль
console.log(greet('Манго'));
// Выводим функцию greet в консоль не вызывая её
console.log(greet);
console.log(registerGuest);

//⁡⁣⁣⁢Несколько колбэков⁡

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   }
//   // else {
//   return console.log(`Соединяем с ${recipient}, ожидайте...`);
//   // Логика принятия звонка
//   // }
// }

// processCall('Mango');

//рефакторинг

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;
  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

// Логика принятия звонка
function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
}

// Логика активации автоответчика
function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
}

// Логика записи голограммы
function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
}

processCall('Манго', takeCall, activateAnsweringMachine);
processCall('Поли', takeCall, leaveHoloMessage);

//⁡⁣⁣⁢Абстрагирование⁡ ⁡⁣⁣⁢повторения

function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log('Logging value: ', value);
}

function repeat(n, action) {
  for (let i = 1; i < n + 1; i += 1) {
    action(i);
  }
}

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2

/* Метод forEach*/

// // массив.forEach(function callback(element, index, array) {
// //   // Тело коллбек-функции
// // });

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

/*Стрелочные функции*/

// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.
// const add = (a, b, c) => {
//   return a + b + c;
// };

// Если параметр один, его объявление может быть без круглых скобок.
const add = a => {
  return a + 5;
};

// Если параметров нет, то обязательно должны быть пустые круглые скобки.

const breed = () => {
  console.log('Привет!');
};

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return console.log(a + b + c);
};
arrowAdd(1, 2, 3);
// console.log(arrowAdd(1, 2, 3));

/*Неявный возврат*/
// Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return явный возврат (explicit return)

// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return).

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAddet = (a, b, c) => a + b + c;

/*Псевдомассив arguments*/

// У стрелочных функций нет локальной переменной arguments, содержащей все аргументы. Если необходимо собрать все аргументы в массив, используется операция rest.

const addut = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

/*Стрелочные функции как коллбеки*/

// const numbers = [5, 10, 15, 20, 25];

// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
//
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

/*Разновидности кода*/

// Декларативное программирование
// Описывает то, что мы хотим получить в результате, а не как это сделать. Порядок выполнения и способ достижения не важен.

// Императивное программирование
// Описывает процесс вычисления в виде заданной последовательности инструкций, изменяющих состояние программы. Описание того, как что-то выполняется.

// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// Метод filter() скрывает в себе логику перебора коллекции и вызывает callback-функцию, которую мы ему передаем для каждого элемента, возвращая массив элементов, подошедших под критерий.

/*Чистые функции*/

// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/*Перебирающие методы массива*/

// array.method(callback[(currentValue, index, array)]);

// array.method((item, idx, arr) => {
//   // логика которая будет применяться на каждой итерации
// });

// array.method(item => {
//   // логика которая будет применяться на каждой итерации
// });

/*Метод map()*/

// Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

// массив.map((element, index, array) => {
//   // Тело коллбек-функции
// });

// Поэлементно перебирает оригинальный массив.
// Не изменяет оригинальный массив.
// Результат работа коллбек-функции записывается в новый массив.
// Возвращает новый массив такой же длины.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

// Массив объектов

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.score);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

/*Метод flatMap()*/

// Метод flatMap(callback) аналогичен методу map(), но применяется в случаях когда результат это многомерный массив который необходимо «разгладить».

// массив.flatMap((element, index, array) => {
// Тело коллбек-функции
// });

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// students.map(student => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

/*Метод filter()*/

// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

// массив.filter((element, index, array) => {
//   // Тело коллбек-функции
// });

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает новый массив.
// Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
// Если коллбек вернул true элемент добавляется в возвращаемый массив.
// Если коллбек вернул false элемент не добавляется в возвращаемый массив.
// Если ни один элемент не удовлетворил условию, возвращает пустой массив.

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Фильтрация уникальных элементов

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
//   { name: "Яблоко", courses: ["физика", "биология"] },
//   { name: "Манго", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//   (courses, index, array) => array.indexOf(courses) === index
// );

// console.log(uniqueCourses);

/*Массив объектов*/

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

/*Метод find()*/
// Если метод filter(callback) используется для поиска всех элементов удовлетворяющим условию, то метод find(callback) позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. То есть он ищет до первого совпадения.

// массив.find((element, index, array) => {
//   // Тело коллбек-функции
// });

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.

// Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, автомобиля по серийному номеру, книги по названию и т. п.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === "white"); // undefined

// console.log(colorPickerOptions.find(option => option.label === 'blue'));
// console.log(colorPickerOptions.find(option => option.color === '#3F51B5'));

/*Метод findIndex()*/

// Метод findIndex(callback) это современная замена методу indexOf(). Позволяет выполнять поиск по более сложным условиям чем просто равенство. Используется как для поиска в массиве примитивов, так и в массиве объектов.

// массив.findIndex((element, index, array) => {
//   // Тело коллбек-функции
// });

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает индекс первого элемента удовлетворяющего условию, то есть когда коллбек возвращает true.
// Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает -1.

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.findIndex(option => option.label === 'blue'); // 2
colorPickerOptions.findIndex(option => option.label === 'pink'); // 3
colorPickerOptions.findIndex(option => option.label === 'white'); // -1

console.log(colorPickerOptions.findIndex(option => option.label === 'white'));
console.log(colorPickerOptions.findIndex(option => option.color === '#F44336'));

/*Методы every() и some()


  Метод every()*/

// Проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// массив.every((element, index, array) => {
//   // Тело коллбек-функции
// });

//   Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если все элементы массива удовлетворяют условию.
// Возвращает false если хотябы один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает false.

// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every(value => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every(value => value >= 0); // false

console.log([1, 2, 3, 4, 5].every(value => value >= 0));

/*Метод some()*/

// Проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает true если хотя бы один элемент массива удовлетворяет условию.
// Возвращает false если ни один элемент массив не удовлетворяет условию.
// Перебор массива прекращается если коллбек возвращает true.


// Есть хотя бы один элемент больше либо равный нулю? - да
[1, 2, 3, 4, 5].some(value => value >= 0); // true

console.log([1, 2, 3, 4, 5].some(value => value >= 0));

// Есть хотя бы один элемент больше либо равный нулю? - да
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Есть хотя бы один элемент меньше нуля? - да
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true


/*Массив объектов*/

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable1 = fruits.every(fruit => fruit.name === 'jgfjgfgfg'); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true

console.log(allAvailable1);
console.log(anyAvailable);

/*Метод reduce()*/

// Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.


// массив.reduce((previousValue, element, index, array) => {
//   // Тело коллбек-функции
// }, initialValue);

// Не изменяет оригинальный массив.
// Поэлементно перебирает оригинальный массив.
// Возвращает что угодно.
// Делает что угодно.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32

// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.

//Массив объектов

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(averageScore);//67.4

//Продвинутый reduce

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);

/*​‌‍‌Метод sort()​*/

// Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

// Сортирует и изменяет исходный массив.
// Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
// По умолчанию сортирует по возрастанию.
// Сортировка происходит путём приведения значений к строке и сравнения порядковых номеров в таблице Unicode.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// Массив строк сортируется по алфавиту.
// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// // При этом порядковый номер заглавных букв меньше чем у прописных.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Из-за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько производных коллекций на базе исходной. Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию. Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// // scores.sort()

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ​‌‍‌Свой порядок сортировки чисел

// Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

// массив.sort((a, b) => {
//   // Тело коллбек-функции
// });

// a - первый элемент для сравнения.
// b - второй элемент для сравнения.

// Если вызов compareFunction(a, b) возвращает любое отрицательное значение, то есть a меньше b, сортировка поставит a перед b. Это сортировка по возрастанию.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// Если вызов compareFunction(a, b) возвращает любое положительное значение больше нуля, то есть b больше a, сортировка поставит b перед a. Это сортировка по убыванию.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Eсли вызов compareFunction(a, b) вернёт 0, сортировка оставит a и b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

// Свой порядок сортировки строк

// Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare()

// firstString.localeCompare(secondString);

// Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// Возвращает отрицательное значение если firstString должна быть перед secondString.
// Возвращает положительное значение больше нуля если firstString должна быть после secondString.
// Если строки одинаковы, возвращается ноль.

// Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

// Сортировка объектов

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);



// ‍Цепочки методов

// Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name из сортированного массива.

const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
  { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
  { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
];

// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.

// Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. Каждый следующий метод будет выполняться на результате работы предыдущего.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// 1 Делаем копию исходного массива перед сортировкой.
// 2 На копии вызываем метод sort().
// 3 К результату работы метода sort() применяем метод map().
// 4 Переменной names присваивается результат работы метода map().

// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']

// 1 На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// 2 К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// 3 На результате метода filter() вызываем sort().
// 4 Переменной uniqueSortedCourses присваивается результат работы метода sort().

// Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода, это дополнительный перебор массива, что при достаточном количестве, может сказаться на производительности.