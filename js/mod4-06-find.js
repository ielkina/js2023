/*Array.prototype.find()
- Поэлементно Перебирает оригинальный массив
- возвращает первый элемент удовлетворяющий условию undefined
*/

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 100);

console.log(number);

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

//ищем игрока по id

const playerIdToFind = 'player-1';

const playerWithId = players.find(player => player.id === playerIdToFind);

console.log(playerWithId);

const findPlayerById = (allPlayers, playerId) => {
  return allPlayers.find(({ id }) => id === playerId);
};
//или
// const findPlayerById = (allPlayers, playerId) => allPlayers.find(({ id }) => id === playerId);

console.log(findPlayerById(players, 'player-1'));

//ищем игрока по имени

const playerNameToFind = 'Poly';

// const playerWithName = players.find(player => player.name === playerNameToFind)
const playerWithName = players.find(({ name }) => name === playerNameToFind); //деструктуризация
console.log(playerWithName);



const findNamePlayer = (allPlayers, playerName) => {
  return allPlayers.find(({ name }) => name === playerName);
};

console.log(findNamePlayer(players, 'Poly'));



