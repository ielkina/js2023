/*- Стрелочные функции 
- объявление
- явный и не явный возврат
- аргументы
- неявный возврат обьекта*/

const add = function (a, b, c) {
  console.log(a, b, c);
  return a + b + c;
};

console.log(add(5, 10, 12));

//стрелочная фн
//правила синтаксиса
//если два и больше аргумента () обязательны
//если параметр только один то скобки не обязательны
//если параметров вообще нет тогда обязательны пустые скобки
//если у стрелочной функции должно быть тело (return, if и т.д)-это явный возврат(где явно указывается return)
//если в синтаксисе стрелочной функции есть возможность упустить return то это  - не явный возврат

//явный возврат
const addArrow = (a, b, c) => {
  return a + b + c;
};
console.log(addArrow(5, 10, 12));

const addArrow0 = a => {
  return a;
};
console.log(addArrow0(0));

//не явный возврат
const addArrow1 = (a, b, c) => a + b + c;
console.log(addArrow1(1, 2, 3));

//arguments нет локальной переменной у стрелочной функции
const add0 = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};
console.log(add0(5, 10, 12));

const addArrow2 = (...args) => {
  console.log(args);
  // return;
};
console.log(addArrow2(50));

/***************************************************** */

const fn = function () {
  return {
    a: 5,
  };
};
console.log(fn());

const arrowFn = () => {
  return {
    arrowFn: 5,
  };
};
console.log(arrowFn());

//в стрелочных функциях при неявном возврате обьекта фигурные скобки не воспринимаются как возвратом тела обьекта, а воспринимаются как возвратом тела функции

const arrowFnA = () => {
  arrowFnA: 10;
};
console.log(arrowFnA()); //undefined

//для того чтобы из стрелочной функции вернут обьект с неявным возвратом нужно обьект обернуть в круглые скобки и тогда он вернется как обьект
const arrowFnB = () => ({ arrowFnB: 10 });
console.log(arrowFnB());

/************************************************************ */

// const onGetPositionSuccess = position => {
//   console.log(position);
// };
// const onGetPositionError = error => {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   // onGetPositionSuccess,
//   // onGetPositionError
//   // // или инлайново
//   function (position) {
//     console.log(position);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

/*filter*/

const filter = function (array, callback) {
  const filteredArray = [];
  for (const item of array) {
    const passed = callback(item);
    if (passed) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

const callback1 = value => value >= 3;

const callback2 = value => value <= 3;

const getFruitsQuantity = fruits => fruits.quantity >= 120;

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], value => value <= 3);
console.log(r2);

const fruits = [
  { name: '🍎', quantity: 200, isFresh: true },
  { name: '🍍', quantity: 150, isFresh: false },
  { name: '🍌', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruits => fruits.quantity >= 120);
console.log(r3);

/*синтаксис
//Синтаксис стрелочной функции
//с параметрами
//с одним параметром
//без параметров*/

//разница  в синтаксисе
const fn1 = function (a, b) {
  return a + b;
};
const fn2 = (a, b) => {
  return a + b;
};

console.log(fn1(1, 2));
console.log(fn2(1, 2));

//если параметр один
//Убираются круглые скобки

const fn3 = message => {
  return message;
};
console.log(fn3('Hi'));

//Если параметров нет
const fn4 = () => {
  console.log('hi');
};
fn4();

//явный и неявный возврат
const add1 = function (a, b) {
  return a + b;
};

//явный(explicit) возврат (есть тело функции и return)
const add2 = (a, b) => {
  return a + b; //тело функции
};

//не явный(implicit) возврат
//ели нет в теле функции дополнительных условий выполнения функции а только return
const add3 = (a, b) => a + b;

//стрелочная
const add4 = (a, b) => a + b; //неявный возврат
const add5 = (a, b) => {
  return a + b; //тело функции
};

//явный возврат если есть тело
const acc = message => {
  return message;
};
const att = () => {
  return 'hi';
};

//Псевдомассив и arguments
// const ass = () => {
//   console.log(arguments);//arguments в стрелках не существует
// };
// ass(1, 2, 3);//error

const ass1 = (...args) => {
  //(...args) скобки обязательны
  console.log(args);
};
ass1(2, 3, 4, 5, 6, 7);

//context
//⁡⁣⁣⁢Контекст стрелки⁡
//Контекст внутри стрелки определяется местом ее объявления, а не вызова,
//и ссылается на контекст родительской функции
//у стрелки нет своего this, определяется не в момент вызова а в момент обьявления, т.е в стрелке
const showThis = () => {
  console.log('This is showThis: ', this);
};

showThis();

const user = { name: 'Mango' };
user.showContext = showThis;

user.showContext();

//Стрелка как методы обьекта
const user1 = {
  fullName: 'Mango',
  showName() {
    console.log('this: ', this);
    console.log('this.fullName: ', this.fullName);
    //вызов inner без контекста в обычной фн будет undefine (this -> inner)
    const inner = function () {
      console.log('this in inner', this);
    };
    inner();
    //а в стрелке объявленной внутри метода обьекта, который вызывается в контексте user получит контекст функции метода (this -> showName)
    const inner1 = () => {
      console.log('this in inner', this);
    };
    inner1();
  },
};
user1.showName();

//❌Никогда не используйте стрелки как методы обьекта
// const user2 = {
//   fullName: 'Mango',
//   // showName() {
//   //   console.log('this: ', this);
//   //   console.log('this.fullName: ', this.fullName);
//   // },
//   showName () => {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },//error
// };
// user2.showName();

//❌стрелка -конструктор  не может быть
const User = function (name) {
  this.name = name;
};
// const User = name => { //error
//   this.name = name
// }

console.log(new User('Mango'));

//❌стрелка как метод обьекта
const objA = {
  x: 5,
  showX() {
    console.log('this objA', this);
    console.log(this.x);
    const objB = {
      y: 10,
      showThis() {
        console.log('this showThis', this);//ссылается на обьект objB
      },
      //стрелочные функции как метод обьекта бесполезны. this в стрелке из внешней области видимости 
      //и будет ссылаться не на локальный обьект а на внешний 
      showThisArrow: () => {
        console.log('this showThisArrow', this);//ссылается обьект objA
      },
    };
    objB.showThis();
    objB.showThisArrow();
  },
};
objA.showX();

//⁢рефакторинг
//цепочка вызовов - chaining

const numbers = [1, 2, 3, 4, 5, 6];

//было
const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});
console.log(greaterThenTwo);
//стало
const greaterThenTwo1 = numbers.filter(num => num > 2);
console.log(greaterThenTwo1);

//было
const multByTwo = greaterThenTwo.map(function (num) {
  return num * 3;
});
console.log(multByTwo);
//стало
const multByTwo1 = greaterThenTwo.map(num => num * 3);
console.log(multByTwo1);

//было
const sorted = multByTwo.sort(function (a, b) {
  return a - b;
});
console.log(sorted);
//стало
const sorted1 = multByTwo.sort((a, b) => a - b);
console.log(sorted1);

//было
const rest = numbers
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (a, b) {
    return a - b;
  });
//стало
const rest1 = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

/************************************************************************ */

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.log(onlineAndSorted);

const players1 = [
  { id: 'player-1', timePlayed: 310, points: 54, name: 'Mango', online: false },
  { id: 'player-2', timePlayed: 470, points: 92, name: 'Poly', online: true },
  { id: 'player-3', timePlayed: 230, points: 48, name: 'Ajax', online: true },
  { id: 'player-4', timePlayed: 150, points: 71, name: 'Kiwi', online: false },
  { id: 'player-5', timePlayed: 80, points: 48, name: 'Chelsy', online: true },
];
//увеличить количество поинтов каждого игрока
//было
const updatedPlayers = players1.map(function (player) {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
});
console.table(updatedPlayers);
//стало
const updatedPlayers1 = players1.map(player => ({
  ...player,
  points: player.points + player.points * 0.1,
}));

console.table(updatedPlayers);

//увлечение кол-во часов игрока по id

const playerIdToUpdate = 'player-3';
//было
const updatedPlayers3 = players.map(function (player) {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }
  return player;
});
console.log(updatedPlayers);
//стало
const updatedPlayers4 = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.log(updatedPlayers);
