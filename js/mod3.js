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
  const notAdult = [];

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
  const notAdult = []
  for (let filmObj of films) {
    if (!filmObj.adult) {
      notAdult.push(filmObj)
    }
  }
  return notAdult;
}

console.log(getNotAdultFilms(filmoteka));
