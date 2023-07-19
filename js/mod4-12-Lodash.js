//isEmpty()

console.log(_.isEmpty({}));
console.log(_.isEmpty({ a: 1 }));

//get()

const user = {
  name: 'mango',
  age: 18,
  location: {
    coords: [1, 2],
    city: 'NY',
  },
};

console.log(_.get(user, 'location.city'));

console.log(user.location.city);

//проверка на свойства
if (user && user.location && user.location.city) {
  console.log(user.location.city);
}
//или
console.log(user?.location?.city);

//union()

console.log(_.union([1, 2, 3], [3, 4, 5]));

//range()

console.log(_.range(1, 6, 2)); //start, end, step

//sortBy

var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.table(_.sortBy(users, user => user.user));
console.log(_.sortBy(users, ['user', 'age']));

//sum() sumBy()

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

//uniq() uniqBy()
//sortedUniq() SortedUniqBy()

//random()

//min() max()
//minBy() maxBy()

console.log(Math.min(...[1, 2, 3, 4, 5]));
console.log(_.minBy(players, player => player.timePlayed));

//camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase(),

