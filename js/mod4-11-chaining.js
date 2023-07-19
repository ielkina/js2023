/*
- Цепочка вызовов - chaining
*/

const numbers = [2, 10, 15, 20, 25];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });
const greaterThenTwo = numbers.filter(num => num > 2);

console.log(greaterThenTwo);
//
// const multByThree = greaterThenTwo.map(function (num) {
//   return num * 3;
// });
const multByThree = greaterThenTwo.map(num => num * 3);

console.log(multByThree);
//
// const sorted = multByThree.sort(function (a, b) {
//   return a - b;
// });
const sorted = multByThree.sort((a, b) => b - a);
console.log(sorted);
//
const chaining = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => b - a);

console.log(chaining);
console.log(numbers);

//Сортируем тех кто онлайн по рангу
//сначала фильтруем
//потом сортируем

const players = [
  {
    id: 'player-1',
    tag: 'Mango',
    timePlayed: 310,
    points: 54,
    online: false,
    rank: 800,
  },
  {
    id: 'player-2',
    tag: 'Poly',
    timePlayed: 470,
    points: 92,
    online: true,
    rank: 800,
  },
  {
    id: 'player-3',
    tag: 'Kiwi',
    timePlayed: 230,
    points: 48,
    online: true,
    rank: 600,
  },
  {
    id: 'player-4',
    tag: 'Ajax',
    timePlayed: 150,
    points: 71,
    online: false,
    rank: 800,
  },
  {
    id: 'player-5',
    tag: 'Chelsy',
    timePlayed: 80,
    points: 48,
    online: true,
    rank: 700,
  },
];

const onlineAndSorted = players
  .filter(player => player.online)
  .sort((a, b) => b.rank - a.rank);
console.table(onlineAndSorted);

//Chaining в методах обьекта как jquery

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;
    return this
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    return this
  },
};


element.toggleHovered().changeClass('open')
console.log(element);