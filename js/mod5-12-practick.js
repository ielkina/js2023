//Необходимо сделать функцию метод которая будет выводить имя и возвраст и который можно будет использовать для все обьектов

// const user1 = {
//   name: 'Dane',
//   age: 24,
//   // getNameAndAge() {
//   //   console.log(`You name ${this.name} and your age ${this.age}`);
//   // },
// };

// const user2 = {
//   name: 'Dan',
//   age: 24,
//   email: 'dan@mail.com',

// };

// // const copy = user1.getNameAndAge;
// // user1.getNameAndAge();
// // user2.getNameAndAge = copy;
// // user2.getNameAndAge();

//Необходимо сделать функцию метод которая будет имя и возраст и которую можно использовать для двух обьектов

// const user1 = {
//   name: 'Den',
//   age: 24,
//   getData: () => {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   },
// };

// const user2 = {
//   name: 'Ann',
//   age: 25,
//   email: 'ann@mail.com',
//   getData() {
//     const func = () => {
//       console.log(`Name: ${this.name}, age: ${this.age}`);
//     };
//     func();
//   },
// };

// // user1.getData()
// user2.getData();

// const user1 = {
//   name: 'Den',
//   age: 24,
//   getData() {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   },
// };

// const user2 = {
//   name: 'Ann',
//   age: 25,
//   email: 'ann@mail.com',
//   getData() {
//     const func = () => {
//       console.log(`Name: ${this.name}, age: ${this.age}`);
//     };
//     func();
//   },
// };

// user1.getData();
// const copy = user1.getData;
// user2.getData = user1.getData;
// user2.getData();

// console.log(user2.getData === copy);

// console.log(user1.getData === user2.getData);

// function getData() {
//   console.log(`Name ${this.name}, age ${this.age}`)
// }

// user1.getData = getData

// user1.getData();

/////
const user1 = {
  name: 'Den',
  age: 24,
};

const user2 = {
  name: 'Ann',
  age: 25,
  email: 'ann@mail.com',
};

function outPutInfo(city, country) {
  console.log(
    `Hello, my name is ${this.name}, my age is ${this.age}${
      this.email ? `, my email is ${this.email}` : '.'
    }`
  );
  console.log(`i'm from city ${city}, in ${country}`);
}

// outPutInfo.call(user2);
// outPutInfo.call(user1);

// outPutInfo.call(user2, `New York`, `USA`);

// outPutInfo.apply(user2, [`Kiev`, `Ukraine`]);
// const user1OutPutInfo = outPutInfo.bind(user1, 'Kiev', 'Ukraine')
// user1OutPutInfo(`New York`, `USA`);

//
const shop = {
  price: 500,
};
function countDiscount(percent) {
  console.log(this.price - (this.price * percent) / 100);

  return function (value) {
    console.log(value);
  };
}

const calcDiscount = countDiscount.bind(shop, 5);

calcDiscount();

const calcDiscount2 = countDiscount.bind(shop);

calcDiscount2(10);

countDiscount.bind(shop)(15); //привязка контекста
countDiscount.bind(shop)(15)(15); //привязка контекста

const calcDiscountWithTen = calcDiscount.bind(shop, 10);

calcDiscountWithTen();

///

const user = {
  name: 'Serhii',
  age: 18,
  printInfo() {
    console.log(`Hello, my name is ${this.name}, i'm ${this.age} old`);
  },
};

const userAnna = {
  name: 'Anna',
  age: 21,
}

user.printInfo();

function foo(value, cd) {
  console.log(value);
  cd();
}

// foo('Hello world', user.printInfo)//ошибка передача без контекста

foo('Hello world', user.printInfo.bind(user));
foo('Hello world', user.printInfo.bind(userAnna));
foo('Hello world', user.printInfo.bind({name: 'Anton', age:40}));
