//Lodash библиотека установка CDN - https://www.jsdelivr.com/package/npm/lodash
//Lodash библиотека документация- https://lodash.com/docs/4.17.15#get

//Некоторые методы из библиотеки

/*isEmpty()*/
console.dir(_);
console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

/*get()*/
//глубокий доступ к свойствам обьекта
const user = {
  name: 'mango',
  age: 18,
  location: {
    coords: [1, 2],
    city: 'NY',
  },
};

console.log(_.get(user, 'location.city')); //ссылка на обьект (user), путь(location.city), [дефолтное value] - не обязательный параметр, который может не передаваться
//поиск в глубину обьекта идет последовательно
//тоже самое что и консоль 17 строки, но в отличии от обычного доступа к свойствам обьекта - _.get(Lodash) не выдаст ошибку при отсутствии тех или иных свойств, т.к под капотом в библиотеке прописаны множество проверок на всяческие ошибки доступа
console.log(user.location.city);

console.log(user.location.street);
//проверка на свойства в обычном синтаксисе доступа к свойствам
// if (user && user.location && user.location.street) {
//   console.log(user.location.street);
// }
//код не выполнится и не выдаст при этом ошибку
//а выполнится если при всех тре выражениях будет true
//или новый синтаксис
console.log(user?.location?.street); //? - не обязательное свойство, если его нет дальше не ищи

/*union()*/
//создает новый массив из нескольких только из уникальных элементов

console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

/*range()*/
//создает массив с заданных параметров
console.log(_.range(10, 50, 10)); //start, end, step

/*sortBy*/
//сортирует по возрастанию
//коллекция, колбэк функция
var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.table(_.sortBy(users, user => user.user));
console.log(_.sortBy(users, ['user', 'age']));

/*sum()- для массива,  sumBy() - для массива обьектов*/

console.log(_.sum([5, 10, 15, 20, 25]));

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
console.log(_.sumBy(players, player => player.timePlayed));

/*uniq() uniqBy()*/

console.log(_.uniq([2, 1, 2]))
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));

/*sortedUniq() SortedUniqBy()*/

/*random()*/

/*min() max()*/
/*minBy() maxBy()*/

console.log(Math.min(...[1, 2, 3, 4, 5]));
console.log(_.minBy(players, player => player.timePlayed));

/*camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()*/
