/*Стрелочные функции 
объявление
явный и не явный возврат
аргументы
неявный возврат обьекта*/

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };
// const addArrow = (a, b, c) => {
//    console.log(a, b, c);
//    return a + b + c;
// };
// const addArrow1 = a => {
//    console.log(a);
//    return a;
// };
// const addArrow0 = (...args) => {
//    console.log(args);
//    return;
// };

// //

// console.log(add(5, 10, 12));
// console.log(addArrow(5, 10, 12));
// console.log(addArrow1(5));

// console.log(addArrow0(5));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA);

// const onGetPositionSuccess = position => {
//   console.log(position);
// };
// const onGetPositionError = error => {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
//   //или
//   // function (position) {
//   //   console.log(position);
//   // },
//   // function (error) {
//   //   console.log(error);
//   // }
// );

/*filter*/

const filter = function (array, callback) {
  const filteredArray = [];
  for (const item of array) {
    const passed = callback(item);
    if (passed) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

// const callback1 =  value => value >= 3;
// const callback2 =  value => value <= 3;
// const getFruitsQuantity =  fruits=> fruits.quantity >= 120;

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], value => value <= 3);
console.log(r2);

const fruits = [
  { name: '🍎', quantity: 200, isFresh: true },
  { name: '🍍', quantity: 150, isFresh: false },
  { name: '🍌', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruits => fruits.quantity >= 120);
console.log(r3);

//синтаксис
//Синтаксис стрелочной функции
//с параметрами
//с одним параметром
//без параметров

//явный и неявный возврат
// const add = function (a, b) {
//   return a + b;
// };

//стрелочная
const add = (a, b) => a + b; //неявный возврат
const abb = (a, b) => {
  return a + b;
};
//явный возврат если есть тело
const acc = message => {
  return message;
};
const att = () => {
  return 'hi';
};

console.log(abb(1, 2));
console.log(acc('hi'));
console.log(att());

//Псевдомассив и arguments

const ass = (...args) => {
  console.log(args);
};
ass(2, 3, 4, 5, 6, 7);

//context

//⁡⁣⁣⁢Контекст стрелки⁡

//Контекст внутри стрелки определяется местом ее объявления, а не вызова,
//и ссылается на контекст родительской функции

// const showThis = () => {
//   console.log('This is showThis: ', this);

// }

// showThis();

// const user = { name: 'Mango' }
// user.showContext = showThis;

// user.showContext();

//Стрелка как методы обьекта

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//     const inner = () => {
//       console.log('this in inner', this);
//     };
//     inner();
//   },
// };
// user.showName();

const user = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);
  },
};

user.showName();

//стрелка -конструктор  не может быть

// const User = name => {
//   this.name = name
// }

// console.log(new User('Mango'));

//стрелка как метод обьекта

const objA = {
  x: 5,
  showX() {
    console.log('this objA', this);
    console.log(this.x);
    const objB = {
      y: 10,
      showThis: () => {
        //стрелочные функции как метод обьекта безполезны
        console.log('this objB', this);
      },
    };
    objB.showThis();
  },
};
objA.showX();

// ⁡⁣⁣⁢рефакторинг

//цепочка вызовов - chaining

const numbers = [1, 2, 3, 4, 5, 6];
//было
// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });
//рефакторинг стало
const greaterThenTwo = numbers.filter(num => num > 2);
console.log(greaterThenTwo);

//было
// const multByTwo = greaterThenTwo.map(function (num) {
//   return num * 3;
// });
//стало
const multByTwo = greaterThenTwo.map(num => num * 3);
console.log(multByTwo);

//было
// const sorted = multByTwo.sort(function (a, b) {
//   return a - b;
// });
//стало
const sorted = multByTwo.sort((a, b) => a - b);
console.log(sorted);

//было
// const rest = numbers
//   .filter(function (num) {
//     return num > 2;
//   })
//   .map(function (num) {
//     return num * 3;
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });
//стало
const rest = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);
console.log(sorted);

//

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(player => player.isOnline)
//   .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);

const players = [
  { id: 'player-1', timePlayed: 310, points: 54, name: 'Mango', online: false },
  { id: 'player-2', timePlayed: 470, points: 92, name: 'Poly', online: true },
  { id: 'player-3', timePlayed: 230, points: 48, name: 'Ajax', online: true },
  { id: 'player-4', timePlayed: 150, points: 71, name: 'Kiwi', online: false },
  { id: 'player-5', timePlayed: 80, points: 48, name: 'Chelsy', online: true },
];
//увеличить количество поинтов каждого игрока
//было
// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

//стало
// const updatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

// console.table(updatedPlayers);

//увлечение кол-во часов игрока по id

const playerIdToUpdate = 'player-3';
//было
// const updatedPlayers = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     return {
// ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
//   return player;
// });
//стало
const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.log(updatedPlayers);
