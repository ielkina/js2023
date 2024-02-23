console.log(`cards`);
//Работаем с коллекцией карточек в trello
//Метод splice()
//Удалить
//Добавить
//Обновить

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

console.table(cards);

//Удалить (по индексу), метод indexOf()
const cardToRemove = 'Карточка-3'
//метод indexOf находит индекс элемента в массиве, если такого элемента нет он вернет значение -1
const index = cards.indexOf(cardToRemove)
console.log(index);
//удаляем элемент по найденному индексу из массива
cards.splice(index, 1)
console.table(cards);

//Добавить (по индексу)

const cardToInsert = 'Карточка-6';
const index1 = 3;
cards.splice(index1, 0, cardToInsert);
// 0 - означает что при выполнение кода не будет удаляться элемент из массива
//добавление в конец массива элемента
cards.push(cardToInsert)
console.table(cards);
cards.splice(3, 0, 5, 10, 20);
//в массив с индекса 3,ничего не удаляя(0),  вставь 3 элемента(5,10,20)

//удаление с заменой 
cards.splice(1, 1, 5);
//на 1 индексе, удали 1 элемент(1), и вместо нее поставь 5

//Обновление (по индексу)
const cardToUpdate = 'Карточка-4';
//Находим индекс элемента
const index2 = cards.indexOf(cardToUpdate);
console.log(index);
//заменяем найденный элемент по индексу на новый элемент
cards.splice(index, 1, `Обновленная ${cardToUpdate}`);
console.table(cards);