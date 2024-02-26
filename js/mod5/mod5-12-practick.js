//[P]Необходимо сделать функцию метод которая будет выводить имя и возраст и который можно будет использовать для все обьектов

const user = {
  name: "Dane",
  age: 24,
  getNameAndAge() {
    console.log(`You name ${this.name} and your age ${this.age}`);
  },
};

const user1 = {
  name: "Dan",
  age: 24,
  email: "dan@mail.com",
};

const copy = user.getNameAndAge;
user.getNameAndAge();
user1.getNameAndAge = copy;
user1.getNameAndAge();

//[P]Необходимо сделать функцию метод которая будет имя и возраст и которую можно использовать для двух обьектов

const user2 = {
  name: "Den",
  age: 24,
  getData: () => {
    console.log(`Name: ${this.name}, age: ${this.age}`); //error
  },
};
//user2.getData();
//решение ошибки
//1 первый вариант
//полностью переписываем метод
const user3 = {
  name: "Ann",
  age: 25,
  email: "ann@mail.com",
  getData() {
    const func = () => {
      console.log(`Name: ${this.name}, age: ${this.age}`);
    };
    func();
  },
};
user3.getData();
//2 второй вариант
//пример переназначение с помощью ссылки на нужный метод
user2.getData = user3.getData;
user2.getData();
//пример переназначение с помощью ссылки на нужный метод
const copy1 = user2.getData;
user3.getData = user2.getData;
console.log(user2.getData === user3.getData);
console.log(user2.getData === copy1);
//третий вариант
//выносим фн expression в глобальную область видимости
function getData() {
  console.log(`Name ${this.name}, age ${this.age}`);
}
user2.getData = getData;
user2.getData();

user3.getData = getData;
user3.getData();

//expression: function(){} - функцию можно записать в любую переменную
//direction: с название function getData(params) {}



// const user4 = {
//   name: 'Den',
//   age: 24,
//   getData() {
//     console.log(`Name: ${this.name}, age: ${this.age}`);
//   },
// };

// const user5 = {
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

// const user1 = {
//   name: 'Den',
//   age: 24,
// };

// const user2 = {
//   name: 'Ann',
//   age: 25,
//   email: 'ann@mail.com',
// };

/************************************************* */
function outPutInfo(city, country) {
  console.log(
    `Hello, my name is ${this.name}, my age is ${this.age}${
      this.email ? `, my email is ${this.email}` : '.'
    }`
  );
  console.log(`i'm from city ${city}, in ${country}`);
}
outPutInfo.call(user1);
outPutInfo.call(user2);
outPutInfo.call(user2, `New York`, `USA`);
outPutInfo.apply(user2, [`Kiev`, `Ukraine`]);
const user1OutPutInfo = outPutInfo.bind(user1, 'Kiev', 'Ukraine')
user1OutPutInfo(`New York`, `USA`);

/*********************************************** */

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

/************************************************** */

const user4 = {
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

user4.printInfo();

function foo(value, cd) {
  console.log(value);
  cd();
}

// foo('Hello world', user4.printInfo)//ошибка передача без контекста
foo('Hello world', user4.printInfo.bind(user4));
foo('Hello world', user4.printInfo.bind(userAnna));
foo('Hello world', user4.printInfo.bind({name: 'Anton', age:40}));