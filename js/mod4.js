//конспект
//Колбэк функция

function greet(name) {
  return `Добро пожаловать ${name}`;
}
// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}`);
  callback(name);
}

//Инлайн функция

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

//Несколько колбэков

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

//Абстрагирование повторения

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
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// После
// const arrowAddet = (a, b, c) => a + b + c;

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
  { name: 'apples', amount: 100 },
  { name: 'bananas', amount: 0 },
  { name: 'grapes', amount: 50 },
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
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
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

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet
// // и выводим результат в консоль
// console.log(greet('Mango'));
// // Добро пожаловать Mango.

// // Выводим функцию greet
// // в консоль не вызывая её
// console.log(greet);
/*
ƒ greet() {
     return `Добро пожаловать ${name}.`;
}
*/
/******************************************************************************** */
/** Функция обратного вызова (callback)
 * Функция может принимать другие функции как параметры
 * Функция которая передается другой функции как аргумент называется
 * "функцией обратного (отложенного) вызова (callback - функция)"
 * Функция которая принимаю другую функцию как параметр или
 *  возвращает функцию как результат своей работы называется (callback вышего порядка)
 */

/* Лекция 1 */

function foo(test) {
  //функция которая принимает callback называется функцией высшего порядка
  test();
}
function callback() {
  console.log('test');
}

foo(callback); //передается без круглых скобок

/*функция doMath(a,b, callback)*/

//callback функцию передают в момент вызова функции высшего порядка
// console.log(doMath(10, 20, sum));

// function doMath(a, b, callback) {
//   console.log(a, b);
//   console.log(callback(a, b));
//   return callback(a, b);
// }

// function sum(a, b) {
//   return a + b;
// }

// function min(a, b) {
//   return a - b;
// }

// console.log(doMath(10, 20, min));

/*отложенный вызов: регистрация событий*/

// const buttonElem = document.querySelector('.js-button');
// buttonElem.addEventListener('click', boo);

// function boo() {
//   console.log('click');
// }

/*отложенный вызов: интервалы*/

// setTimeout(boo, 1000)//сработает 1 раз через 5 сек
// setInterval(boo, 1000)//сработает каждую секунду

function robot(x, call1, call2) {
  if (x > 10) {
    return call1(x);
  } else {
    return call2(x);
  }
}

function test1(x) {
  return x / 10;
}
function test2(x) {
  return x / 2;
}

const result = robot(15, test1, test2); //  /10
console.log(result);

console.log(robot(9, test1, test2)); // /2

// console.log(robot(20, sum));

/*forEach*/

const array = ['123', 3, 5, 1, 7, 3, 12, 6, 8];
// debugger
// array.forEach(call);

// function call(item, index, array) {
//   //порядок передачи параметров обязателен
//   console.log(item);
// }

array.forEach(function (val, idx, array) {
  //инлайновое
  console.log(idx);
});

function ju(callback) {}

ju(function callback() {}); //инлайн callback фн

function cur(x, y) {
  return console.log(x + y);
}
const num1 = 10 + 10 + 10;

cur(num1, 20 - 15 - 30);

// cur(10 + 10 + 10, 20 - 15 - 30);

/*Стрелочные функции 
объявление
явный и неявный возврат
аргументы
*/

function func(x1, x2, x3) {
  return x1 + x2 + x3;
}

const func1 = (x1, x2, x3) => {
  return x1 + x2 + x3; //явный возврат
};

const func2 = (x1, x2, x3) => x1 + x2 + x3; //не явный возврат

func1(1, 2, 3);

// если есть только один параметр круглые скобки можно не ставить
// если два параметра будут без скобок это будет ошибка

/*Практика*/
//есть две функции
//1 - add - слаживает все числа вмассив
//2 - result - принимает массив и колбэк, возвращает результат колбэк. В колбэке передаем только числа

const resultt = (array, cb) => {
  const elements = [];
  for (const element of array) {
    if (typeof element === 'number') {
      elements.push(element);
    }
  }
  return cb(elements);
};

const addet = array => {
  let total = 0;
  for (const item of array) {
    total += item;
  }
  return total;
};

const getMax = array => Math.max(...array);

const getArrayLength = array => array.length;

console.log(resultt([1, 2, 45, true, 'asada', 45], addet));
console.log(resultt([1, 2, 45, true, 'asada', 45], getArrayLength));
console.log(resultt([1, 2, 45, true, 'asada', 45], getMax));

//написать функцию которая принимает марку авто и колбэк функцию для поиска авто, функция возвращает в консоль количество /найденых авто марку авто модель авто и стоимость

//количество найденных авто 2:
//1 Honda Accord, 20000
//2 Honda Civic, 12000

//колбэк функция принимает марку авто и ищет в обьекте возвращает массив иде

const cars = {
  id1: {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
  },
  id2: {
    car: 'Audi',
    type: 'Q7',
    price: 10000,
  },
  id3: {
    car: 'BMW',
    type: '5 series',
    price: null,
  },
  id4: {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
  },
};

const findCars = (model, cb) => {
  const idx = cb(model);
  let result = `количество найденных авто ${idx.length}: \n`;
  idx.forEach(function (item, idx) {
    const { car, type, price } = cars[item];
    result += `${idx + 1} ${car} ${type} ${price} \n`;
  });
  return console.log(result);
};

const findByModel = model => {
  const arrayResult = [];
  // Object.entries(cars).forEach(([id, value]) => {
  //   if (value.car === model) {
  //     arrayResult.push(id);
  //   }
  // });
  //или
  for (const [id, value] of Object.entries(cars)) {
    if (value.car === model) {
      arrayResult.push(id);
    }
  }
  return arrayResult;
};

const findByMaxPrice = price => {
  const arrayResult = [];
  Object.entries(cars).forEach(([id, value]) => {
    if (value.price !== null && value.price <= price) {
      arrayResult.push(id);
    }
  });
  return arrayResult;
};

findCars('Honda', findByModel);
findCars('Ford', findByModel);
findCars(10000, findByMaxPrice);

/********************************************************************************* */

//Лекция 2
//кахут
//чистой функция это та функция которая не меняет входные данные
//forEach - ничего не возвращает а только перебирает массив
//
const values1 = ['a', 'b', 'c'];
values1.forEach(value => console.log(value));
//map() мутирует(изменяет) ли массив? - нет (возвращает новый массив той  же длинны)
//filter() - для поиска нескольких элементов массива
//filter() - что возвращает - всегда массив
//filter() - что возвращает если ничего не найдет - пустой массив
//.find() - для чего используют - дл поиска одного уникального элемента массива
//.find() - что возвращает если ничего не найдет = undefined
//.reduce() - результат работы метода = что угодно зависит от логики и начального значения акумулятора
//.reduce() - какие аргументы и в каком порядке = акумулятор, элемент, индекс, массив
//.reduce() - зачем нуден второй параметр = начальное значение акумулятора
//.sort() = сортирует и перебирает, изменяет и возвращает коллекцию (мутирующий метод)

//Грязные и чистые функции

const getSum = (a, b) => a + b;
getSum(1, 3);

//грязная функция
//меняет и мутирует массив оригинал. обращается к глобальной переменной
const numbers1 = [1, 2, 3, 4, 5];

const pushNumbers = (...args) => {
  numbers1.push(...args);
};
pushNumbers(9, 6, 8);
pushNumbers(9, 6, 8);

console.log(numbers1);

//чистая функция
//не меняет и не мутирует массив оригинал.  обращается к параметрам функции
const numbers2 = [1, 2, 3, 4, 56];

const pushNumbersClear = (array, ...args) => {
  const copidArr = array.slice();
  copidArr.push(...args);
  return copidArr;
};

const changedNumbers = pushNumbersClear(numbers2, 2, 3, '0');

console.log('numbers :', numbers2);
console.log('copy of numbers: ', changedNumbers);

console.log(pushNumbersClear(numbers2, 2, 3));
console.log(numbers2);

//
const numbers3 = [1, 2, 3, 4];

// const doubleMulti = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };
const doubleMulti = arr => {
  // const copiedArr = [...arr]
  // for (let i = 0; i < arr.length; i += 1) {
  //   copiedArr[i] *= 2;
  // }
  // return copiedArr;
  //или
  const copiedArr = [];
  for (let elem of arr) {
    copiedArr.push(elem * 2);
  }
  return copiedArr;
};

console.log(numbers3);
console.log(doubleMulti(numbers3));

//.map(elem, idx, array)

const num = [1, 2, 3, 4];
num.forEach((num, idx, arr) => {
  return console.log(idx, num, arr);
});

const newArr = num.map(elem => elem * 2);
console.log(newArr);
console.log(num);

//пeреписать цикл через тар

const wordArr = ['Есть', 'жизнь', 'на', 'Марсе'];

const getElementsLength = function (arrOfStr) {
  const wordsLengthArr = [];
  for (const str of arrOfStr) {
    wordsLengthArr.push(str.length);
  }
  return wordsLengthArr;
};
//или

const getWordLength = arrOfStr => arrOfStr.map(word => word.length);

console.log(wordArr);
console.log(getElementsLength(wordArr));
console.log(getWordLength(wordArr));

//Создание массива значений Фаренгейта из массива значений Цельсия
//для перевод из цельсия в фаренгейт нужна формула F = C * 1.8 +32

const celsius = [-15, -5, 0, 10, 16, 20, 30];

const farengeit = arr => arr.map(t => t * 1.8 + 32);

console.log(farengeit(celsius));

//пусть функция getModel возвращает массив моделей(поле model) всех автомобилей

const carsModel = [
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
];

//пусть функция makeCarsWithDiscount возвращает новый массив обьектов с измененным свойством price
//в зависимости от переданной сидки
const getModel = carsArray => carsArray.map(({ model }) => model);

console.log(getModel(carsModel));

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(auto => ({ ...auto, price: auto.price - auto.price * discount }));

console.log(carsModel);
console.log(makeCarsWithDiscount(carsModel, 0.2));

/*Метод filter*/

//массив.filter(element, index, array)=>{тело колбэк фн}
//не мутирует возвращает новый массив
//если условие возвращает true элемент записывается в новый массив
//ели false то пропускаеться

//отфильтруйте массив, что бы остались только четные

const numbers4 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers4.filter(element => element % 2 === 0);

console.log(evenNumbers);

//отфильтруйте массив,оставив в нем только положительные числа:

const numbers5 = [-2, 5, 6, -5, -10, 45, 8, 9, 7, -6];

const positiveNumbers = numbers5.filter(number => number >= 0);

console.log(positiveNumbers);

//отфильтруйте массив heroes по свойству обьекта franchise

const heroes = [
  { name: 'Batman', franchise: 'DC' },
  { name: 'Batman', franchise: 'DC' },
  { name: 'Batman', franchise: 'DC' },
  { name: 'Batman', franchise: 'DC' },
];

// const dcHeroes = heroes.filter(hero => hero.franchise === 'DC');
const dcHeroes = heroes.filter(({ franchise }) => franchise === 'DC');

console.log(dcHeroes);

//Пусть функция filterByPrise возвращает массив автомобилей цена которых
//меньше чм значение параметра threshold
//показать два примера с деструктуризации

const cars1 = [
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
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
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 20000,
    onSale: true,
  },
  {
    make: 'Honda',
    model: '4CR-V',
    type: 'ttt',
    amount: 13,
    price: 30000,
    onSale: false,
  },
];

const filterByPrise = (carsArray, threshold) =>
  carsArray.filter(({ price }) => price < threshold);

// const filterByPrise = cars1.filter(() => { })

console.log(filterByPrise(cars1, 30000));

//пусть функция getCarsWithDiscount возвращает массив автомобилей свойства onSale которых true

// const getCarsWithDiscount = carsArray =>
//   carsArray.filter(({ onSale }) => onSale === true);//передача аргументов в момент вызова функции
const getCarsWithDiscount = cars1.filter(({ onSale }) => onSale); //без передачи аргументов

// console.log(getCarsWithDiscount(cars1));
console.log(getCarsWithDiscount);
console.log(cars1);

//Пусть функция getCarWithType возвращает массив автомобилей тип которых совпадает со значением type

const getCarWithType = (carsArray, type) =>
  carsArray.filter(auto => auto.type === type && auto.onSale);

// console.log(...cars1);

console.log(getCarWithType(cars1, 'suv'));
console.log(getCarWithType(cars1, 'ttt'));

//уставить только уникальные числа
const numbers6 = [1, 2, 3, 3, 2, 1, 4, 5, 6, 4];

const filteredNumbers = numbers6.filter(
  (num, idx, arr) => arr.indexOf(num) === idx
);
console.log(filteredNumbers);

/*Метод sort()*/

//сортировка чисел и строк по умолчанию. метод мутирующий

const numbersArr = [30, 94, 60, 97, 5];
const sortedNumbers = [...numbersArr].sort();
console.log(numbersArr);
console.log(sortedNumbers);

const words = ['Gavin', 'Edgar', 'Edith'];
const sortedWords = [...words].sort();
console.log(words);
console.log(sortedWords);

//Сортировка чисел и строк по условию

const num2 = [30, 94, 60, 97, 5];
const sortedNum = [...num2].sort((a, b) => a - b);

console.log(num2);
console.log(sortedNum);

const words1 = ['Gavin', 'Edgar', 'Edith'];
const sortedWords1 = [...words1].sort((a, b) => a.localeCompare(b));

console.log(sortedWords1);

//пусть функция sortByAscendingScore возвращает новый массив автомобилей отсортированных
//по возрастанию значения свойств amount

const sortByAscendingScore = carsArr =>
  carsArr
    .slice() //делаем копию массива
    .sort((a, b) => a.amount - b.amount);

console.log(sortByAscendingScore(cars1));

//пусть функция sortByDescendingPrice возвращает новый массив авто отсортированных по убыванию значения свойств price

const sortByDescendingPrice = carsArr =>
  [...carsArr].sort((a, b) => a.price - b.price);
console.log(sortByDescendingPrice(cars1));

//пусть функция sortByModel возвращает новый массив авто  отсортированных по названию моделей
//в алфавитном и обратном порядке в зависимости от значения параметра order

const sortByModel = (carsArr, order) => {
  return [...carsArr].sort((a, b) => {
    if (order === 'asc') {
      return a.model.localeCompare(b.model);
    }
    return b.model.localeCompare(a.model);
  });
};

console.log(sortByModel(cars1, 'asc'));
console.log(sortByModel(cars1, 'desc'));

/*метод reduce()*/

// массив.reduce((previousValue, element, index, array) => {тело функции}, initialValue)
//возвращает какое то новое значение или или новую сущность(число, массив, обьект)

//посчитать сумму массива чисел. Показать каждую итерацию

const num3 = [1, 2, 3, 4, 5];

num3.reduce((acc, elem, idx, arr) => {
  console.log(acc);
  console.log(idx);
  console.log(elem);
}, 0);

const totalSum = num3.reduce((acc, elem) => {
  return acc + elem;
}, 0);

console.log(totalSum);

//пусть функция getTotalAmount возвращает общее количество автомобилей

const getTotalAmount = carsArr =>
  carsArr.reduce((acc, elem) => acc + elem.amount, 0);

console.log(getTotalAmount(cars1));
