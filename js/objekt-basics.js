//Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
// - Литерал объекта
// - Свойства, ключи(имя) и значение
// - Как отличить объект от области видимости

const play = {
  name: [1, 2, 3],
  b: 5,
  c: 10, //имена ключей уникальные
  c: 20,
};

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);
// console.log(play);

// //литерал объекта
// //1
// const x = {};
// //2
// console.log({});
// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 };
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });
// //3
// const fn2 = function () {
//   const x = {};
//   // return x
//   //или
//   return { a: 5 };
// };
// console.log(fn2());

// Доступ к свойству
// - obj.key
// - obj['key']
// - отсутствующие свойства
const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};
//синтаксис
console.log(playlist.name);

//добавление элементов в объект
playlist.key = 'добавленный элемент';

//Перезаписывание свойств в объекте
playlist.rating = 10;

console.log(playlist);

const propertyName = 'tracks'; //ключ, свойство всегда строка

// console.log(playlist['tracks']);
// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

//Короткая запись свойства

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  //если имя ключа будет совпадать с название переменной ее можно записать в объект где ее имя переменной будет использоваться как ключ а значение как свойство.
  username,
  email,
};

//console.log(signupData);

//Вычисляем свойства

//<input name="color" value ="tomato"

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

//console.log(colorPickerData);

//Ссылочный тип {} === {}

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a); //ссылка
console.log({ a: 1 } === { a: 1 }); //два разных объекта

//Массивы и функции это объекты

// const c = [1, 2, 3]
// c.hello = 0

// console.log(c);

const fn = function () {
  console.log('hello');
};

fn.hello = ':)';

console.dir(fn.hello);

//
const d = [1, 2, 3];

d.push(4);

console.log(d);
