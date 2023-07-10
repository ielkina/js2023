// const film = {
//   title: 'Duna',
//   description: 'lorem ipsum...',
//   rating: 8.0,
//   actors: ['Olga'],
//   isForAdult: false,
// };

// console.log(film);

//Доступ к свойствам
//добавление и изменение свойств

// console.log(film.title);
// console.log(film['title']);
// const key = 'desc' + 'ription';
// const keyy = 'actors';
// console.log(film[key]);
// console.log(film[keyy]);

// film.cost = 15;
// film['cost1'] = 20;
// console.log(film);

//короткая запись свойства

const email = 'klliu@gmail.com';
const username = 'alex';

const signupData = {
  username,
  email,
  age: 15,
};
console.log(signupData);

//присвоение по ссылке

const obj = {
  a: 1,
  b: 2,
};

const obj2 = obj;
obj2.c = 5;
console.log(obj2);
const copy = Object.assign({ a: 4 }, obj, { 0: 6 });
console.log(copy);

//все в этом мире объект

const arr = [1, 2, 3];
// const obj3 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

arr.test = 'test';
console.log(arr);

//примитивные типы данных

const number = 1;

const str = 'house';
const str2 = String('house');
console.log(String);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));

//методы объектов

const film = {
  title: 'Duna',
  description: 'lorem ipsum...',
  rating: 8.0,
  actors: ['Olga'],
  isForAdult: false,
  adult: false,
  //метод изменения названия
  changeTitle: function (newTitle) {
    // film.title = newTitle;
    //This ссылка на ключ данный обьект
    this.title = newTitle;
  },
  addActor(newActor) {
    this.actors.push(newActor);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  isAdult() {
    //   if (this.adult) console.log('Фильм для взрослых');
    //   console.log('Фильм для всех');
    this.adult
      ? console.log('Фильм для всех')
      : console.log('Фильм для взрослых');
  },
};

const filmJoker = {
  title: 'Joker',
  rating: 9,
  actors: [],
  adult: true,
};

//изменение другого обьекта методом другого
filmJoker.changeTitle = film.changeTitle;
filmJoker.changeTitle('titanic');
filmJoker.addActor = film.addActor;
filmJoker.addActor('di');
filmJoker.addActor('olga');
filmJoker.isAdult = film.isAdult;
filmJoker.isAdult();
console.log(filmJoker.title); //title:'titanic'
console.log(filmJoker.actors); //title:'titanic'

//изменение свойства в обьекте с помощью метода
console.log(film.title);
film.changeTitle('Titanic');
console.log(film.title);
film.changeTitle('Iron man');
console.log(film.title);
film.addActor('Di');
console.log(film.actors);

film.isAdult();

//итерация объекта

const salaries = {
  John: 100,
  Ann: 150,
  Pete: 120,
};

//через for...in
let total = 0;
for (const key in salaries) {
  total += salaries[key];
}
console.log(total);

let total2 = 0;
const keys = Object.keys(salaries);
console.log(keys);

for (const key of keys) {
  total2 += salaries[key];
}
console.log(total2);

let total3 = 0;
const values = Object.values(salaries);

console.log(values);

for (const salary of values) {
  total3 += salary;
}

console.log(total3);

console.log(Object.entries(salaries));

const obj5 = {
  a: 1,
  b: 2,
};
const objCreate = Object.create(obj5);
console.log(objCreate);
objCreate.c = 3;
console.log(objCreate);

console.log(objCreate.a);

const object = {
  name: 'ira',
  age: 35,
  toLower: function () {},
};

const object2 = Object.create(object);
object2.city = 'Odesa';

for (const key in object2) {
  console.log(key);
}

console.log(object2);

console.log(object2.age);
//
const objA = {
  a: 1,
  b: 2,
};
const objB = Object.create(objA);
objB.c = 3;

for (const key in objB) {
  if (objB.hasOwnProperty(key)) {
    console.log(key);
  }
}

console.log(objB.hasOwnProperty('a'));
console.log(objB.hasOwnProperty('c'));

const keysA = Object.keys(objB);

console.log(keysA);

//напишите функцию которая возвращает массив со всеми названиями фильмов
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'lorem...',
    rating: 10,
    actors: ['Olga', 'Ivan', 'Ira'],
    adult: true,
  },
  {
    id: 2,
    title: 'Joker',
    description: 'lorem...',
    rating: 10,
    actors: ['Olga', 'Ivan', 'Ira'],
    adult: false,
  },
  {
    id: 3,
    title: 'Titanic',
    description: 'lorem...',
    rating: 10,
    actors: ['Olga', 'Ivan', 'Ira'],
    adult: true,
  },
];

function getAllTitlesOfFilms(films) {
  const titles = [];
  for (let filmObj of films) {
    titles.push(filmObj.title);
  }
  return titles;
}

console.log(getAllTitlesOfFilms(filmoteka));

//напишите функцию которая ищет фильм по названию
//если не находит возвращайте "Такой фильм не найден"
//если находит возвращает обьект фильма

function findFilmByName(films, filmTitle) {
  for (const filmObj of films) {
    if (filmObj.title === filmTitle) {
      return filmObj;
    }
  }
  return 'Такой фильм не найден';
}

console.log(findFilmByName(filmoteka, 'Duna'));
console.log(findFilmByName(filmoteka, 'Saw'));

//напишите функцию которая возвращает масив всех взрослых фильмов

function getAdultFilms(films) {
  const adult = [];
  for (let filmObj of films) {
    if (filmObj.adult) {
      adult.push(filmObj);
    }
  }
  return adult;
}

console.log(getAdultFilms(filmoteka));

//напиши функцию которая возвращает массив всех фильмов без взрослого ограничения

function getNotAdultFilms(films) {
  const notAdult = [];
  for (let filmObj of films) {
    if (!filmObj.adult) {
      notAdult.push(filmObj);
    }
  }
  return notAdult;
}

console.log(getNotAdultFilms(filmoteka));

//практика
const hogwarts = {
  gryffindor: [
    {
      name: 'Harry',
      points: 15,
    },
    {
      name: 'Hermiona',
      points: 20,
    },
    {
      name: 'Ron',
      points: 14,
    },
  ],
  sliserin: [
    {
      name: 'Draco',
      points: 20,
    },
    {
      name: 'Goyl',
      points: 5,
    },
    {
      name: 'Crabbe',
      points: 5,
    },
  ],
  getTotalPoints(faculty) {
    // if (!faculty) {
    //   console.log('Wrong');
    //   return;
    // }
    if (this.hasOwnProperty(faculty)) {
      let result = 0;
      for (const student of this[faculty]) {
        result += student.points;
      }
      console.log(`Faculty ${faculty} has ${result} points`);
    } else {
      console.log('Wrong');
    }
  },
};

hogwarts.getTotalPoints('sliserin');

//

const workers = [
  {
    name: 'Alex',
    salary: 3500,
    month: 12,
  },
  {
    name: 'Nick',
    salary: 2500,
    month: 9,
  },
  {
    name: 'Anna',
    salary: 3000,
    month: 36,
  },
];

function getTotalWorkerSalary(workers, name) {
  for (const worker of workers) {
    if (worker.name === name) {
      return console.log(
        `Работник ${name} заработал ${worker.salary * worker.month}`
      );
    }
  }
  console.log(`Работник с именем ${name} не найден`);
}

getTotalWorkerSalary(workers, 'Alex1');

function getAllSalary(array) {
  let total = 0;
  for (const worker of array) {
    total += worker.salary * worker.month;
  }
  console.log(total);
}

getAllSalary(workers);

//

const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter', ''], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet', ''], age: 26 },
  { name: 'Alice', books: ['War and peace', ' Romeo and Juliet', ''], age: 0 },
  {
    name: 'Oleksiy',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
    age: 26,
  },
];

function getAverageAge(array) {
  let totalAge = 0;
  let result = 0;
  for (const friends of array) {
    if (friends.hasOwnProperty('age')) {
      totalAge += friends.age;
      result += 1;
      console.log(result);
    }
  }
  return console.log(Math.round(totalAge / result));
}

getAverageAge(friends);

function getUserWithBook(friends, bookName) {
  const arr = [];

  for (const friend of friends) {
    if (friend.books.includes(bookName)) arr.push(friend.name);
  }

  if (!arr.length) return console.log(`Такой книги нет в библиотеки`);

  return console.log(
    `Такая книга есть у следующих пользователей: ${arr.join(', ')}`
  );
}

getUserWithBook(friends, 'Bible');

//

function countLetters(word) {
  const obj = {};
  for (const item of word) {
    if (obj.hasOwnProperty(item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  return obj;
}

console.log(countLetters('hello'));

//mod 3 lection 2
//spread
const array = [1, 2, 3, 4];
// const newArray = array.concat()
//или
// const newArray = [...array]
// console.log(newArray);
// console.log(array === newArray);

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// const allNumbers = numbers1.concat(numbers2)
//или
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);

const numbers = [-100, 5, 100, 1000];
console.log(Math.max(...numbers));

const user = {
  firstName: 'Jonathan',
  lastName: 'Barnett',
  age: 30,
  someArr: [1, 2, 3, {}],
};

// const newUser = Object.assign({}, user);
// console.log(newUser);
// const newUser = { ...user, age: 50 };
// console.log(newUser);
// console.log(newUser === user);

//

const newUser = { ...user };

console.log(newUser);

console.log(user.someArr === newUser.someArr);
//
function sum() {
  let total = 0;
  for (const number of arguments) {
    console.log(number);
    total += number;
  }
  return total;
}

console.log(sum(1000, 200, 300));

function sum(...numbers) {
  let total = 0;
  console.log(numbers);
  console.log(arguments);
  for (const item of numbers) {
    total += item;
  }
  return total;
}

console.log(sum(100, 200, 300));

//диструктуризация
const user2 = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
  hobbies: [],
  occupation: 'pianist',
};

// let { firstName, lastName, age } = user2;
// age = 25
// const { firstName, lastName, age, ...otherProps } = user2;

// console.log(firstName, age, otherProps);

//Задача

const user3 = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
  hobbies: [],
  occupation: 'pianist',
};

const { firstName, age: userAge = 25 } = user3; //age присваиваем переменную

console.log(firstName, userAge);
