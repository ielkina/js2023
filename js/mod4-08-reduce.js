/*Array.prototype.reduce()
- Поэлементно Перебирает оригинальный массив
- Возвращает что угодно
- Заменяет все на свете,но использовать нужно с умом
*/
//швейцарский нож по работе скоблениями
//первым аргументом передаем функцию которая будет вызываться как обычно для каждого элемента
//0 начальное значение аккумулятора

const numbers = [5, 10, 15, 20, 25];
//0-acc начальное значение
const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0); //0 начальное значение аккумулятора
console.log(total);
//или без return
const total1 = numbers.reduce((acc, number) => acc + number, 0);
console.log(total1);

//алгоритм работы reduce
//acc = 0 => number = 5 => return 0+5
//acc = 5 => number = 10 => return 5+10
//acc = 15 => number = 15 => return 15+15
//acc = 30 => number = 20=> return 30+20
//acc = 50 => number = 25 => return 50+25

/*считаем общую зарплату*/

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce(
  (total, number) => total + number,
  0
);
console.log(totalSalary);

/*Считаем общее количество часов*/

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTime = players.reduce(
  (total, player) => total + player.timePlayed,
  0
);
console.log(totalTime);
//деструктуризация
const totalTime1 = players.reduce(
  (total, { timePlayed }) => total + timePlayed,
  0
);
console.log(totalTime1);

/*считаем общую сумму корзины*/

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
//без return
const totalAmount1 = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(totalAmount1);
//деструктуризация
const totalAmount2 = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.log(totalAmount2);

/*Собираем все теги из твитов*/

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'nodejs'] },
  { id: '002', likes: 17, tags: ['js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['js', 'css'] },
  { id: '004', likes: 5, tags: ['js', 'nodejs'] },
];

const allTags = tweets.reduce((acc, tweet) => {
  // tags.push(...tweet.tags);//мутация
  // return tags;
  //линтеры не любят когда ты изменяешь или мутируешь параметры фн
  //поэтому на каждой итерации нужно вернуть новый массив
  //куда распылить старый акк и потом распылить туда теги
  //та же самая реализация функции
  return [...acc, ...tweet.tags];
}, []);
console.log(allTags);
//синтаксис без  слова return (декларативный код)
const allTags1 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.table(allTags1);

/*ведем статистику тегов*/
//логика
//если свойство с ключом tag есть увеличить его значение на 1
//если свойство нет с таким ключом tag сделать и записать 1

const tagsStatus = allTags.reduce((acc, tag) => {
  //матированный синтаксис
  //если свойство с ключом tag есть увеличить его значение на 1
  if (acc[tag]) {
    acc[tag] += 1;
    return acc;
  }
  //если свойство нет с таким ключом tag сделать и записать 1
  acc[tag] = 1;
  return acc;
}, {});
console.log(tagsStatus);

//синтаксис для линтера (иммутабельно)
//линтеры не любят когда по ссылке мы изменяем параметры
const tagsStatus1 = allTags.reduce((acc, tag) => {
  if (acc[tag]) {
    return {
      ...acc, //создаем новый обьект
      [tag]: acc[tag] + 1, //распыляем туда значение старого обьекта с измененными данными
    };
  }
  acc[tag] = 1;
  return {
    ...acc,
    [tag]: 1,
  };
}, {});
console.log(tagsStatus1);

//синтаксис тернарника
const tagsStatus2 = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
console.log(tagsStatus2);

//синтаксис без слова return
const tagsStatus3 = allTags.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log(tagsStatus3);
