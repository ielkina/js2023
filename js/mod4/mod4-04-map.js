/*Array.prototype.map()
- Поэлементно Перебирает оригинальный массив
- Не изменяет оригинальный массив
- Возвращает новый массив такой же длинны 
*/

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(function (number) {
  console.log(number);
  return number * 2;
});
// // или стрелочная функция
const doubledNums1 = numbers.map(number => {
  console.log(number);
  return number * 2;
});
// // или без лога
const doubledNums2 = numbers.map(number => number * 2);

console.log(numbers === numbers.map);
console.log('numbers', numbers);
console.log('doubledNums', doubledNums);

//
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

/*Получает массив имен всех игроков*/

const playerName = players.map(function (player) {
  return player.name;
});
console.log('playerName', playerName);
//стрелочная
const playerNames = players.map(player => {
  // console.log(player);
  return player.name;
});
console.log('playerNames', playerNames);
//или без лога
const playerNames1 = players.map(player => player.name);
console.log('playerNames1', playerNames1);

/*Получаем id всех пользователей*/

const playerId = players.map(player => player.id);
console.log('playerId', playerId);

/*увеличиваем кол-во поинтов каждого игрока на 10 %*/

const updatePlayers = players.map(player => {
  return {
    ...player, //1 верни мне новый обьект в который 2  распыли старый и 3 замени значение свойств
    //points: player.points + player.points * 0.1,
    //1)(48 * 0.1) = 4.8
    //2) 4.8 + 48 = 52.8
    //или points: player.points * 1.1
    //переводим в число и оставляем два числа после точки
    points: Number((player.points * 1.1).toFixed(3)), //1.1 = 110%
  };
});
//или на 10,5 % (вариант синтаксиса без return)
const updatePlayers1 = players.map(player => ({
  ...player,
  points: Number((player.points * 1.105).toFixed(3)), //1.105 = 110.5%
}));

console.table(updatePlayers);
console.table(updatePlayers1);

/*увеличиваем кол-во часов игрока по id*/

const playerIdToUpdate = 'player-1';

const updatedPlayer = players.map(player => {
  console.log(player.id);
  if (playerIdToUpdate === player.id) {
    console.log('Найденный игрок');
    return { ...player, timePlayed: player.timePlayed + 10000 };
  }
  return player;
});
//или
const updatedPlayer1 = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 5000 }
    : player
);

console.table(updatedPlayer);
console.table(updatedPlayer1);

/*увеличиваем кол-во часов игроков*/

const updatePlayersId = players.map(player => {
  return {
    ...player,
    timePlayed: player.timePlayed + 50,
  };
});
console.table(updatePlayersId);

//или без return

const updatePlayersId1 = players.map(player => ({
  ...player,
  timePlayed: player.timePlayed + 50,
}));
console.table(updatePlayersId1);
