// //1 категория функция
// // declaration
// function foo() {}
// // expression
// const foo = function () {};

// //2 категория
// // arrow function
// const foo = () => {};

//в строгом режиме this undefined
//в обычном режиме this ссылается на  window
//подключение js файла в html документе через type="module" автоматически включает строгий режим

// 'use strict';
function foo() {
  console.log(this);
}
// foo();

const boo = function () {
  console.log(this);
};
// boo();

const arrow = () => {
  console.log(this);
};
// arrow();

//this может присутствовать только в функциях
const objA = {
  name: 'User name',
  nickName() {
    console.log(this);
  },
};
// objA.nickName();

const objB = {
  name: 'User name',
  nickName: () => {
    //arrow всегда считывает с window
    console.log(this);
  },
};

// objB.nickName();

const objC = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    nickName() {
      console.log(this);
    },
  },
};

// objC.skills.nickName();

const objD = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      nickName() {
        console.log(this);
      },
    },
  },
};

// objD.skills.someValue.nickName();

// ('use strict');
// const objE = {
//   name: 'User name',
//   skills: {
//     mySkill: 'html',
//     someValue: {
//       value: 10,
//       foo: () => {
//         console.log('foo', this);
//         const nickName = () => {
//           console.log('nickName', this);
//         };
//         nickName();
//       },
//     },
//   },
// };
const objE = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo() {
        console.log('foo', this);
        function nickName() {
          console.log('nickName', this);
        }
        nickName();
      },
    },
  },
};

// objE.skills.someValue.foo();

const objF = {
  age: 22,
  myAge() {
    console.log(this);
  },
};
// objF.myAge();

const objJ = {
  age: 22,
  myAge: () => {
    // console.log(this);
    const test = () => {
      console.log(this);
      test();
    };
  },
};
// objJ.myAge();

const objW = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
      test();
    };
  },
};
// objW.myAge();

// 'use strict'
const objR = {
  age: 22,
  myAge() {
    function test() {
      console.log(this);
    }
    test();
  },
};
// objR.myAge();

const objT = {
  age: 22,
  skills: {
    skill: ['html', 'css'],
    foo() {
      const boo = () => {
        console.log(this);
      };
      boo();
    },
  },
};
// objT.skills.foo()

// 'use strict';
const objP = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

const objO = {
  age: 12,
  someFunction: objP.myAge,
};

// objO.someFunction();

const objAE = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

const objQ = {
  age: 12,
  someFunction: objAE.myAge,
};

const objc = {
  age: 13,
  somecrazy: objQ.someFunction,
};

// objc.somecrazy();

// ('use strict');
const objAr = {
  name: 'A',
  foo: () => {
    //arrow
    console.log(this);
  },
};
// objAr.foo();

// const win = {};
// function foo() {
//   const a = this.test;
// }
// foo();

/******** Методы */
// call
// apply
// bind

('use strict');
const objAA = {
  name: 'AA',
  //   10, 20 30 40
  myAge(a, b, c, d) {
    //old school
    console.log(this, a, b, c, d);
    return 'Some value';
  },
};

objAA.myAge(22, 44);

const objBA = {
  name: 'BA',
  myAge: objAA.myAge,
};

const objCA = {
  name: 'CA',
  myAge: objAA.myAge,
};
//методы вызываются  функцию здесь и сейчас
//call
objAA.myAge.call(objBA, 1, 2);
objAA.myAge.call(objCA, 10, 20);

//apply похож на call но есть различие в синтаксисе
objAA.myAge.apply(objBA, [1, 2]); //в apply доступны только два параметра -> обьект и массив параметров
objAA.myAge.apply(objCA, [3, 4]);

const fromBackEnd = [10, 20, 30, 40, 50];
const str1 = objAA.myAge.call(objCA, 10, 20, 30, 40);

const str = objAA.myAge.call(objCA, ...fromBackEnd);
console.log(str);
objAA.myAge.apply(objCA, fromBackEnd);

//bind
//bind копирует функцию и подвязывает контекст функции в копии
const objAAA = {
  name: 'AAA',
  myAge(...params) {
    // console.log(arguments);
    console.log(this, ...params);
    return 'Some value';
  },
};

const objBAA = {
  name: 'BAA',
};

const objCAA = {
  name: 'CAA',
};

const result = objAAA.myAge.bind(objBAA);
const result2 = objAAA.myAge.bind(objCAA);

objAAA.myAge();

result(999, 888);
result(111, 222, 333, 444);
result2(111, 222, 333, 444);
result2(111, 222, 333, 444);

result();
result2();

// ПЕРЕРВА ДО 21-27

// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

const chopShop = {
  stones: [
    {
      name: 'Emerald',
      price: 1300,
      quantity: 4,
    },
    {
      name: 'Diamond',
      price: 2700,
      quantity: 3,
    },
    {
      name: 'Sapphire',
      price: 1400,
      quantity: 7,
    },
    {
      name: 'Ruby',
      price: 800,
      quantity: 2,
    },
  ],
  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(
      ({ name }) => name === stoneName
    );
    return price * quantity;
  },
};

const shop2 = {
  stones: [
    {
      name: 'Щебінь',
      price: 1300,
      quantity: 4,
    },
    {
      name: 'Пісок',
      price: 2700,
      quantity: 3,
    },
  ],
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600

console.log(chopShop.calcTotalPrice.call(shop2, 'Щебінь'));

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(), //если нам нужен метод обьекта нам необходимо указать какого обьекта
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
    return this.contacts;
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

// Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b ?? 0;//??(оператор нулевого сравнения) оператор присваивает дефолтное значение = 0
    //схожий с оператором \\ (или) только возвращает только два значение null или undefined 
  },
  add() {
    return (this.a ?? 0) + (this.b ?? 0);//0 заглушка 
  },
  mult() {
    return (this.a ?? 1) * (this.b ?? 1);
  },
};

calculator.read(2, 3);
console.log(calculator.add());
console.log(calculator.mult());
console.log(calculator);
