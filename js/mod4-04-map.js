/*Array.prototype.map()
- Поэлементно Перебирает оригинальный массив
- Не изменяет оригинальный массив
- Возвращает оригинальный массив
*/

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(function (number) {
  console.log(number);
  return number * 2;
});

console.log(numbers === numbers.map);

console.log('numbers', numbers);
console.log('doubledNums', doubledNums);

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

//Получает массив имен всех игроков
const playerNames = players.map(player => {
  console.log(player);
  return player.name;
});
console.log('playerNames', playerNames);

//Получаем id всех пользователей
const playerId = players.map(player => player.id);

console.log('playerId', playerId);

//увеличиваем кол-во поинтов каждого игрока на 10 %

const updatePlayers = players.map(player => {
  return {
    ...player,
    // points: player.points + player.points * 0.1, //1.)(48 * 0.1) 2.) + 48 = 52.8
    //или
    // points: player.points * 1.1,//(110%)
    points: Number((player.points * 1.1).toFixed(3)),
    //переводим в число и оставляем два числа после точки
  };
});

console.table(updatePlayers);

//увеличиваем кол-во часов игрока по id

const playerIdToUpdate = 'player-1';

const updatedPlayer = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 5000 }
    : player
);

console.table(updatedPlayer);

//увеличиваем кол-во часов игроков

const updatePlayersId = players.map(player => {
  return {
    ...player,
    timePlayed: player.timePlayed + 50,
  };
});

console.table(updatePlayersId);

//


