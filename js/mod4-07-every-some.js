/*Array.prototype.every()
- Поэлементно Перебирает оригинальный массив
- Возвращает true если все элементы массива удовлетворяют условия
*/

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
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline', isAllOnline);

/*Array.prototype.some()
- Поэлементно Перебирает оригинальный массив
- Возвращает true если  хотя бы один элемент массива удовлетворяет условию 
*/
const isAnyOnline = players.some(player => player.online);
console.log(isAnyOnline);

const anyHardPlayers = players.some(player => player.timePlayed > 400);
console.log(anyHardPlayers);
