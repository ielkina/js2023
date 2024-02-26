/*Array.prototype.sort(callback(currentEl, nextEl){})
- Сортирует и ИЗМЕНЯЕТ оригинальный массив
- По умолчанию:
  - сортирует по возрастанию
  -приводит элементы к строке и сортирует по (Unicode)
*/

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
letters.sort();
console.log('letters', letters);

/*compareFunction - функция сравнения (callback)
Элементы массива сортируются в соответствии с ее возвращаемым значением
  - если compareFunction(A, B) меньше 0, сортировка поставит А перед В
  - если compareFunction(A, B) больше 0, сортировка поставит А перед В
  - если compareFunction(A, B) вернет 0, сортировка оставит А и В на неизменяемые
  по отношению друг к другу, но сортирует их по отношению ко всем другим элементам.
*/
numbers.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
//синтаксис без return
numbers.sort((curEl, nextEl) => curEl - nextEl);
console.log(numbers);

numbers.sort((curEl, nextEl) => nextEl - curEl);
console.log(numbers);

/* Как сделать копию массива что бы не  сортировать оригинальный 
- Array.prototype.slice()
- Операция spread
*/
const copy = [...numbers].sort();
const copy1 = [...numbers].sort((a, b) => b - a); //по убыванию
const copy2 = [...numbers].sort((a, b) => a - b); //по возрастанию
console.log(copy);
console.log(copy1);
console.log(copy2);

//кастомная сортировка сложных типов
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//по игровому времени
const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sortedByBestPlayers);
//синтаксис без return
const sortedByBestPlayers1 = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
console.table(sortedByBestPlayers1);

const sortedByWorstPlayers = [...players].sort((prevPlayer, nextPlayer) => {
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});
console.table(sortedByWorstPlayers);
//синтаксис без return
const sortedByWorstPlayers1 = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.table(sortedByWorstPlayers1);

const sortByName = [...players].sort((prev, next) => {
  // const result = prev.name[0] > next.name[0];
  // if (result) {
  //   return 1;
  // }
  // if (!result) {
  //   return -1;
  // }
  // //или
  const result = prev.name[0] < next.name[0];
  if (result) {
    return -1;
  }
  if (!result) {
    return 1;
  }
  return next.name[0] - prev.name[0];
});
console.table(sortByName);

//синтаксис с тернарником
const sortByName1 = [...players].sort((prev, next) => {
  const result = prev.name[0] > next.name[0];
  return !result ? result - 1 : 1;
});
console.table(sortByName1);
