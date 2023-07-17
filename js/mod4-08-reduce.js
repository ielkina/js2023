/*Array.prototype.reduce()
- Поэлементно Перебирает оригинальный массив
- Возвращает что угодно
- Заменяет все на свете,но использовать нужно с умом
*/

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);
const total = numbers.reduce((acc, number) => acc + number, 0); //0-acc начальное значение

console.log(total);

//acc = 0 => number = 5 => return 0+5
//acc = 5 => number = 10 => return 5+10
//acc = 15 => number = 15 => return 15+15
//acc = 30 => number = 20=> return 30+20
//acc = 50 => number = 25 => return 50+25

//считаем общую зарплату

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce(
  (acc, number) => acc + number,
  0
);

console.log(totalSalary);

//Считаем общее количество часов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const totalTime = players.reduce((acc, player) => acc + player.timePlayed, 0);
const totalTime = players.reduce((acc, { timePlayed }) => acc + timePlayed, 0);

console.log(totalTime);

//считаем общую сумму корзины

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce((total, item) => {
//   return total + item.price * item.quantity;
// }, 0);
const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);

console.log(totalAmount);

//Собираем все теги из твитов

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['js', 'nodejs'] },
  { id: '002', likes: 17, tags: ['js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['js', 'nodejs'] },
  { id: '004', likes: 5, tags: ['js', 'nodejs'] },
];

const allTags = tweets.reduce((tags, tweet) => {
  // tags.push(...tweet.tags);
  // return tags;
  return [...tags, ...tweet.tags];
}, []);

console.log(allTags);

//ведем статистику тегов

// const tagsStatus = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

const tagsStatus = allTags.reduce((acc, tag) => {
  // if (acc[tag]) {
  //   return {
  //     ...acc,
  //     [tag]: acc.tag + 1,
  //   };
  // }

  // return {
  //   ...acc,
  //   [tag]: 1,
  // };
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(tagsStatus);
