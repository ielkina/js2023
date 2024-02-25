// - Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
// - Литерал объекта
// - Свойства, ключи(имя) и значение
// - Как отличить объект от области видимости

//Массивы - коллекции
//Обьект - это группировка свойств какого то одного обьекта

const play = {//литерал обьекта
  name: [1, 2, 3],
  b: 5,
  c: 10, //имена ключей уникальные
  c: 20,//идущий позже ключ с одинаковым название перебивает значение предыдущего
};

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist);
console.log(play);

//1 литерал объекта может существовать с права отравно

const x = {};

//2 при передачи функции

console.log({});//присвоение

const fn1 = function (myObject) {
  myObject = { a: 1, b: 2 };
  console.log(myObject);
};
fn1({ a: 1, b: 2 });//тоже самое что fn1(={}) присвоение при передачи в функции

// 3 return справа от литерала обьекта,  тоже самое что и = {}, return = {}

const fn2 = function () {
  const x = {};
  // return x
  //или
  return { a: 5 };
};
console.log(fn2());

// Доступ к свойству

// - obj.key
// - obj['key']
// - отсутствующие свойства

const playlist1 = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

//синтаксис доступа к ключу обьекта

console.log(playlist1.name);
playlist1.key = 'добавленный элемент';//добавление элементов в объект
console.log(playlist1.key);

//Перезаписывание свойств в объекте

playlist.rating = 10;
console.log(playlist.rating);//10

//присваиваем переменной ключ как строку потому что в обьекте ключ и свойство это всегда строка

const propertyName = 'tracks'; //ключ, свойство всегда строка
console.log(playlist['tracks']);
console.log(playlist.propertyName);//не правильно переданные данные т.к в обьекте такого имени свойства нет
console.log(playlist['rating']);//ключ надо передавать как строку
console.log(playlist[propertyName]);

//Короткая запись свойства

const username = 'Mango';
const email = 'mango@mail.com';
const signupData = {
// если имя ключа будет совпадать с название переменной ее можно записать в объект где ее имя переменной будет использоваться как ключ а значение как свойство.
  username,
  email,
};
console.log(signupData);

//Вычисляем свойства
//<input name="color" value ="tomato"
const inputKey = 'color';
const inputValue = 'tomato';
const colorPickerData = {
  [inputKey]: inputValue,//переменные, их значения станут ключом и свойством
};
console.log(colorPickerData);

// Ссылочный тип {} === {}

const a = { x: 1, y: 2 };
const b = a;
console.log(b === a); //ссылка
console.log({ a: 1 } === { a: 1 }); //два разных объекта
a.hello = 100;
console.log(a);

// Доступ к ключам объекта в массиве

const ourPets = [
  {
    animalType: 'cat',
    names: ['Meowzer', 'Fluffy', 'Kit-Cat'],
    animal: {
      cat: 'cat',
      dog: 'dog',
      else: ['fish', 'bird'],
    },
  },
  {
    animalType: 'dog',
    names: ['Spot', 'Bowser', 'Frankie'],
  },
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);
console.log(ourPets[0].animal.else[0]);

// Доступ к ключам сложных объектов

const ourStorage = {
  desk: {
    drawer: 'stapler',
  },
  cabinet: {
    'top drawer': {
      folder1: 'a file',
      folder2: 'secrets',
      folder3: {
        paper1: 'my',
        paper2: 2,
      },
    },
    'bottom drawer': 'soda',
  },
};
console.log(ourStorage.cabinet['top drawer'].folder2);
console.log(ourStorage.desk.drawer);
console.log(ourStorage.cabinet['top drawer']['folder2']);
console.log(ourStorage.cabinet['top drawer'].folder3['paper2']);

// Массивы и функции это объекты

const c = [1, 2, 3]
c.hello = 0
console.log(c);

const fn = function () {
  console.log('hello');
};

fn.hello = ':)';

console.log(fn.hello);

const d = [1, 2, 3];

d.push(4);

console.log(d);
