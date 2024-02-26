//[P]Задание 1
// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив ["premium", "promoted", "top"].

const apartment = {
  tags: ['premium', 'promoted', 'top'],
  price: 2153,
  rating: 4,
  descr: 'Spacious apartment in the city center',
  imgUrl: 'https://via.placeholder.com/640x480',
};

//[P]Задание 2
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:
// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".

const apartment1 = {
  tags: ['premium', 'promoted', 'top'],
  price: 2153,
  rating: 4,
  descr: 'Spacious apartment in the city center',
  imgUrl: 'https://via.placeholder.com/640x480',
  owner: {
    email: 'henry.carter@aptmail.com',
    phone: '982-126-1588',
    name: 'Henry',
  },
};

//[P]Задача 3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartment2 = {
  tags: ['premium', 'promoted', 'top'],
  price: 2153,
  rating: 4,
  descr: 'Spacious apartment in the city center',
  imgUrl: 'https://via.placeholder.com/640x480',
  owner: {
    email: 'henry.carter@aptmail.com',
    phone: '982-126-1588',
    name: 'Henry',
  },
};
const aptRating = apartment2.rating;
const aptDescr = apartment2.descr;
const aptPrice = apartment2.price;
const aptTags = apartment2.tags;

console.log(apartment2.rating);
console.log(apartment2.descr);
console.log(apartment2.price);
console.log(apartment2.tags);

//[P]Задача 4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

const apartment3 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const ownerName = apartment3.owner.name;
const ownerPhone = apartment3.owner.phone;
const ownerEmail = apartment3.owner.email;
const numberOfTags = apartment3.tags.length;
const firstTag = apartment3.tags[0];
const lastTag = apartment3.tags[2];

console.log(lastTag);

//[P]Задача 5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

const apartment4 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

const aptRating1 = apartment4['rating'];
const aptDescr1 = apartment4['descr'];
const aptPrice1 = apartment4['price'];
const aptTags1 = apartment4['tags'];

//[P]Задача 6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".

const apartment5 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment5.price = 5000;
apartment5.rating = 4.7;
apartment5.owner.name = "Henry Sibola";
apartment5.tags.push("trusted")

//[P]Задача 7
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".

const apartment6 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment6.area = 60;
apartment6.rooms = 3;
apartment6.location = { country: 'Jamaica', city: 'Kingston' };

console.log(apartment6);

//[P]Задача 8
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product);

//[P]Задача 9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
};
console.log(credentials.password);

//[P]Задача 10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

const apartment7 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment7) {
  keys.push(key)
  values.push(apartment7[key])
}

//[P]Задача 11
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
const advert = {
  service: 'apt',
};
const apartment8 = Object.create(advert);
apartment8.descr = 'Spacious apartment in the city center';
apartment8.rating = 4;
apartment8.price = 2153;

for (const key in apartment8) {
  if (apartment8.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment8[key]);
    console.log(apartment8[key]);
  }
}

//[P]Задача 12
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      propCount += 1;
    }
  }
  return propCount;
}
countProps({});
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//[P]Задача 13
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartment9 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
// const values = [];
// Change code below this line
const keys1 = Object.keys(apartment9);
for (const key of keys1) {
  values.push(apartment9[key])
}

//[P]Задача 14
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

function countProps1(object) {
  // Change code below this line
  let propCount = 0;
  object = Object.keys(object);

  for (const key of object) {
    propCount += 1;
  }

  return propCount;
  // Change code above this line
}

countProps1({});
countProps1({ name: 'Mango', age: 2 });
countProps1({ mail: 'poly@mail.com', isOnline: true, score: 500 });

//[P]Задача 15
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

const apartment10 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys3 = Object.keys(apartment10);
const values3 = Object.values(apartment10);

//[P]Задача 16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries)
  for (const value of values) {
    totalSalary += value
  }
  return console.log(totalSalary);;
}

countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
countTotalSalary({});

//[P]Задача 17
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(rgbColors);

//[P]Задача 18
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  //поиск продукта
  for (const item of products)
    //если нашло возвращает цену этого продукта
    if (item.name === productName)
      return item.price;
  return null;
}

getProductPrice('Radar');
console.log(getProductPrice('Radar'));

//[P]Задача 19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

const products1 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  //пустой массив
  let arr = [];
  //ищем продукт
  for (const product of products1) {
    for (const obj in product) {
      //ищем значение продукта
      if (obj === propName) {
        //пушем в пустой массив который должен вернуться с нужным значением
        arr.push(product[obj]);
      }
    }
  }
  //возвращаем массив
  return arr;
}
getAllPropValues('name');

//[P]Задача 20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products2 = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  //поиск продукта
  //если нашло возвращает цену этого продукта
  for (const item of products2)
    if (item.name === productName) return item.price * item.quantity;
  return 0;
}

calculateTotalPrice('Blaster');
console.log(calculateTotalPrice('Radar'));

//[P]Задача 21
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const yesterday1 = highTemperatures.yesterday;
const today1 = highTemperatures.today;
const tomorrow1 = highTemperatures.tomorrow;

const meanTemperature = (yesterday1 + today1 + tomorrow1) / 3;
console.log(meanTemperature);

//[P]Задача 22
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures1 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday2,
  today2,
  tomorrow2,
  //Добавление нового элемента сщ значением в объект
  icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures1;

// Change code above this line
const meanTemperature1 = (yesterday + today + tomorrow) / 3;

console.log(icon);
console.log(highTemperatures1.icon);

//[P]Задача 23
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures2 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// highTemperatures.icon = '';
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
} = highTemperatures;
// Change code above this line
const meanTemperature2 = (highYesterday + highToday + highTomorrow) / 3;

console.log(highTemperatures2);
console.log(highIcon);

//[P]Задача 24
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

const colors1 = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors1 = ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'];
const rgbColors1 = ['244,67,54', '33,150,243', '76,175,80', '255,235,59'];

for (const { hexColors1, rgbColors1 } of colors1) {
}

console.log(hexColors1);
console.log(rgbColors1);

//[P]Задача 25
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: { high: highToday1, low: lowToday, icon: todayIcon },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow1,
    icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  },
} = forecast;

console.log(highToday1, lowToday);
console.log(todayIcon);
console.log(lowTomorrow);
console.log(tomorrowIcon);

//[P]Задача 26
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh }, //1
    tomorrow: { low: tomorrowLow, high: tomorrowHigh }, //1
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);

//[P]Задача 27
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

const scores = [89, 64, 42, 17, 93, 51, 26];
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore);
console.log(worstScore);

//[P]Задача 28
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore1 = Math.max(...allScores);
const worstScore1 = Math.min(...allScores);

console.log(bestScore1);
console.log(worstScore1);
console.log(allScores);

//[P]Задача 29
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings.theme);
console.log(finalSettings.public);
console.log(finalSettings.withPassword);
console.log(finalSettings.minNumberOfQuestions);
console.log(finalSettings.timePerQuestion);

//[P]Задача 30
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  let obj = { ...{ category, priority, completed }, ...data };
  return obj;
}
makeTask({});
console.log(
  makeTask({
    text: 'Take out the trash',
    category: 'Homemade',
    priority: 'Low',
  })
);

//[P]Задача 31
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
function add(...args) {
  // Change code above this line
  let total = 0;
  for (const item of args) {
    total += item;
  }
  return total;
}
add(15, 27);

//[P]Задача 32
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

function addOverNum(firstElem, ...otherArgs) {
  let total = 0;

  for (const arg of otherArgs) {
    if (firstElem < otherArgs) total += arg;
  }
  return total;
}

addOverNum(50, 15, 27);

//[P]Задача 33
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

function findMatches(arr, ...otherArgs) {
  const matches = [];
  for (const number of arr) {
    console.log(number);
    if (otherArgs.includes(number)) {
      matches.push(number);
    }
  }
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

//[P]Задача 34
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  }
};
bookShelf.getBooks();
bookShelf.addBook('Haze');
bookShelf.removeBook('Red sunset');
bookShelf.updateBook('Sands of dune', 'Dune');

//[P]Задача 35
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

const bookShelf1 = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};
bookShelf1.updateBook('Haze', 'Dungeon chronicles')

console.log(bookShelf1);

//[P]Задача 36
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

const atTheOldToad = {
  potions: [],
};

//[P]Задача 37
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

const atTheOldToad1 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions
  }
};
atTheOldToad1.getPotions();

//[P]Задача 38
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

const atTheOldToad2 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    return this.potions.push(potionName);
  },
};

atTheOldToad2.addPotion('Invisibility')
console.log(atTheOldToad2);

//[P]Задача 39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad3 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i]) {
        this.potions.splice(i, 1);
      }
    }
  },
};
atTheOldToad3.removePotion('Dragon breath');
console.log(atTheOldToad3);

//[P]Задача 40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

const atTheOldToad4 = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName);
  },
};

atTheOldToad4.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad4);

//[P]Задача 41
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

const atTheOldToad5 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    // const newPotion = {
    //   ...newPotion,
    // };
    // this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }

  },
  updatePotionName(oldName, newName) {
    let result = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        result = `Found ${oldName} change to ${newName}`;
      }
    }
    return console.log(result);
  },
  // Change code above this line
};

atTheOldToad5.getPotions();

atTheOldToad5.addPotion({ name: 'Invisibility', price: 620 });

atTheOldToad5.removePotion('Dragon breath');

console.log(atTheOldToad5);

const atTheOldToad6 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    const newProduct = {
      ...newPotion,
    };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    let result = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        result = `Found ${oldName} change to ${newName}`;
      }
    }
    return console.log(result);
  },
};

atTheOldToad6.getPotions();
atTheOldToad6.addPotion({ name: 'Invisibility', price: 620 });
atTheOldToad6.removePotion('Dragon breath');
atTheOldToad6.updatePotionName('Dragon breath', 'Polymorth');
atTheOldToad6.updatePotionName('Stone skin', 'Invulnerability potion');

console.log(atTheOldToad6.potions);
