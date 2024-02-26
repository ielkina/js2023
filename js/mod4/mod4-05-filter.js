/* Array.prototype.filter()
- Поэлементно перебирает оригинальный массив
- Возвращает новый массив
- Возвращает новый массив(с элементами или пустой)
- Добавляет в возвращенный массив элементы которые удовлетворяют условию колбэк-функции
- если колбэк вернул ⁡⁣⁢⁣true⁡ элемент добавляется в возвращаемый массив
- если колбэк вернут ⁡⁣⁢⁣false⁡ элемент НЕ добавляются в возвращаемый массив
*/

const numbers = [5, 10, 15, 20, 25];
//если вернет true элемент запишется в новый массив, вернет false не запишется
const filterNumbers = numbers.filter(number => number > 15);
console.log(filterNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  {
    id: 'player-3',
    name: 'Kiwi',
    timePlayed: 230,
    points: 48,
    online: true,
  },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 92, online: true },
];
console.table(players);

//Получаем массив всех онлайн игроков

const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);
//деструктуризация
const onlinePlayers1 = players.filter(({ online }) => online);
console.table(onlinePlayers1);

//Получаем массив всех офлайн игроков

const offlinePlayers = players.filter(player => !player.online);
//или
const offlinePlayers1 = players.filter(player => player.online === false);
//деструктуризация
const offlinePlayers2 = players.filter(({ online }) => !online);

console.table(offlinePlayers);
console.table(offlinePlayers1);
console.table(offlinePlayers2);

//Получить массив хард игроков с временем больше 250

const hardTimePlayer = players.filter(player => player.timePlayed > 250);
//деструктуризация
const hardTimePlayer1 = players.filter(({ timePlayed }) => timePlayed > 250);

console.table(hardTimePlayer);
console.table(hardTimePlayer1);
