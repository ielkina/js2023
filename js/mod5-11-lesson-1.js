/* Контекст вызова this*/

/** This существует только внутри функции
 * На контекст не влияет то где функция была //!Обьявлена
 * На контекст влияет то где функция //! ВЫЗЫВАЕТСЯ
 */

//TODO: Рассмотрим как this ведет себя в методах

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Galyna',
//   age: 40,
//   //ссылка на метод в другом обьекте
//   showThis: user.showThis,
//   showName: user.showName,
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Рассмотрим как this ведет себя в обычных функциях (строгий, не строгий режим)

//?Function expression
// 'use strict';
// const func = function () {
//   console.log(this);
//   console.log(this.name); //утрата контекста
// };
// // //если this в функции в не строгом режиме функция вызванная без контекста(obj.fn() функция вызванная с контекстом) будет ссылаться на глобальный обьект.функция вызванная таким способом  называется утрата контекста

// const user = {
//   name: 'Mariya',
//   showName: func, //ссылка на функцию
// };
// user.showName(); //вызов функции с контекстом не в строгом режиме, в строгом режиме будет ошибка

// // fn(); //undefined вызов функции без контекста. при вызове функции без контекста, контекст теряется и выдается ошибка

//?Function declaration
//объявленная переменная с var всплывает вверху как и функция declaration
//Поведение declaration такое же самое каки у функции expression
// 'use strict';
// function func() {
//   console.log(this)

// }

// const user = {
//   name: "Vitaliy",
//   showName: func,
// }
// // func()
// user.showName()

//?Arrow function
//стрелочные функции своего контекста не имеют

// 'use strict';
//не важно в каком режиме
//всегда будет ссылаться на глобальный обьект
//стрелочная функция не принимает контекста у нее просто нет контекста

// const func = () => {
//   console.log(this);
//   console.log(this.name);
// };

//но она может взять контекст из родительской функции которые не являются стрелочными функциями
// function generalFn() {
//   const func = () => {
//     console.log(this);
//   };
//   func();
// }

// const user = {
//   name: 'Vitaliy',
//   showName: generalFn,
// };
// // func();
// generalFn();
// user.showName();

//TODO: Присвоении функции как метода обьекта

// const showThis = function () {
//   // this = user
//   console.log(`showThis`, this);
// };

// const showThisName = function () {
//   // this = user
//   console.log(`showThisName ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showThis = showThis;
// user.showThisName = showThisName;
// //тоже самое что и
// // const user = {
// //   name: 'Luis',
// //   age: 30,
// //   showThis: showThis,
// //   showThisName: showThisName,
// // };

// user.showThis();
// user.showThisName();

//TODO: Вызов метода обьекта без контекста. Передача реализации

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log(`showThis`, this);
//   },
//   showThisName() {
//     console.log(`showThisName ${this.name}`);
//   },
//   showThisAge() {
//     console.log(`showThisAge ${this.age}`);
//   },
// };
// const showThis = user.showThis;
// const showThisName = user.showThisName;
// const showThisAge = user.showThisAge;

// showThis(); //утрата контекста
// showThisName();
// showThisAge();
// user.showThis.call({})

//TODO: this в callback функциях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`showThis`, this);
//   },

//   showThisName() {
//     console.log(`showThisName ${this.name}`);
//   },
//   showThisAge() {
//     console.log(`showThisAge ${this.age}`);
//   },
// };

// // const someFunction = function (callback) {
// //   // callback()//нет контекста
// // };
// // someFunction(user.showThisName);

// const someFunction = function (callback, context) {
//   callback.call(context); //исправление утраты контекста с помощью метода call
// };

// someFunction(user.showThisName, user); // утрата контекста. передается ссылка на метод обьекта а в самом калбеке нет контекста
// //поэтому контекст теряется

//утрата контекста когда есть вложенные функции

// function func1() {
//   console.log(this);

//   //чтобы исправить утрату контекста нужно переписать на стрелочную где она будет наследовать контекст
//   //с родительской функции

//   function func2() {
//     console.log(this);
//   }
//   func2(); //нет контекста
// }

// func1(); //вложенная функция, нет контекста

//TODO: this в строчных функциях. Стрелочные функции не имеют своего this, в стрелочных всегда ссылается на родительский this

//Напишите метод changeAge который изменяет возраст пользователя через стрелочную функцию. что произойет?
//сделайте, что  все работало верно

// const user = {
//   name: 'lois',
//   age: 30,
//   changeAge: function (newAge) {
//     this.age = newAge;
//   },
// };

// user.changeAge(40)
// console.log(user);

//Каким будет результат выполнение этого кода

// let user = {
//   name: 'Джон',
//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// const goFN = user.go;

// goFN();

//Здесь функция makeUser возвращает обьект ref
//каким будет результат при обращении к свойству обьекта ref почему?

// const makeUser = function () {
//   return {
//     name: 'djon',
//     ref: this,
//   };
// };

// const user = makeUser(); //нет контекста

// console.log(user);

// console.log(user.ref.name);//

//каким будет результат

// const makeUser = function () {
//   return {
//     name: 'djon',
//     ref: this,
//   };
// };

// const user = makeUser(); //нет контекста

// console.log(user);

// console.log(user.ref().name);//

//Это ladder (лестница) - обьект, который позволяет подниматься
//вверх и спускаться
//напиши метод обьекта ladder: up - подняться на ступеньку выше, down - опуститься на ступеньку ниже,
//showStep - показать ступеньку

// const ladder = {
//   step: 0,
//   up() {
//     this.step += 1;
//   },
//   down() {
//     if (this.step === 0) {
//       return;
//     }
//     this.step -= 1;
//   },
//   showStep() {
//     console.log(`Ты на ${this.step} ступеньке`)
//   }
// };

//Теперь, елинам нужно сделать несколько последовательных вызовов,
//мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

//Измените код методов up, down  showStep таким образом, чтобы их вызов можно было сделать поцепочке, например
//так:

//переписываем так что б методы обьектов можно было вызывать по цепочке
const ladder = {
  step: 0,
  up() {
    this.step += 1;
    return this;
  },
  down() {
    if (this.step === 0) {
      return this;
    }
    this.step -= 1;
    return this;
  },
  showStep() {
    console.log(`Ты на ${this.step} ступеньке`);
    return this;
  },
};

// ladder.up().up().up().down().showStep().down().showStep();

/**Методы функции call apply */

//Функции это обьект со своими свойствами и методами

// console.log(typeof (() => { }))

// function generalFn() {
//   console.log(5 + 100);
// }
// generalFn.a = 5;
// console.log(generalFn);
// console.dir(generalFn)

// const greet = function () {
//   console.log('Hello');
// };
// greet.test = 5;
// console.dir(greet);

//call (позвать)  apply (применить)
//Вызовите функцию showFullName в контексте обьекта user двумя способами

// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}, ${num} `);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const args = user; //передается ссылка на обьект поэтому будет Undefined
// const array = [1, 2];

// showFullName.call(user, 'hello', 40);

// showFullName.apply(user, args);

// showFullName.apply(user, array);

// console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 9]));

//Вызовите функцию showFullName в контексте обьекта anotherUser

// const anotherUser = {
//   firstName: 'Ray',
//   lastName: '',
//   age: 40,
// };

//ожидание метода

// showFullName.call(anotherUser, "hi", 15)

//Наследование(одалжевание) метода

// const createCurrentDate = function () {
//   return [].join.call(arguments, '/');
// };

// console.log(createCurrentDate(2022, 8, 10));

//bind

// const showFullName = function (...args) {
//   console.log(args);
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const newShowName = showFullName.bind(user, 20,25,25);

// console.log(showFullName === newShowName) //bind всегда возвращает новую функцию

// newShowName.call({});
// newShowName();
// newShowName(10);
//bind используют тогда когда хотим привязать контекст используется единоразово и намертво привязывает контекст

//Метод обьекта в роли колбэка

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis() {
//     console.log('this', this);
//   },
//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// //1 вариант
// // const someFunction = function (callback) {
// //   callback();
// // };
// // someFunction(user.showThis.bind(user));
// //2 вариант
// //или
// const someFunction = function (callback) {
//   callback.call(this);
// };
// someFunction.call(user, user.showThis);

//Что выведет этот код?

// const f = function () {
//   console.log(this.name)
// }
// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя'
// }
// const copyFn = f.bind(user).bind(anotherUser);

// copyFn();//Вася
// //f.bind в первом вызове зафиксировал юзера Васю
// //во втором вызове бинд вернет зафиксированную

//Вызов checkPassword() в приведенном ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа
//однако его вызов приводит к ошибке. Почему?

const checkPassword = function (ok, fail) {
  const password = 'rockstar';
  //1 вариант
  // if (password === 'rockstar') {
  //   ok();
  // } else {
  //   fail();
  // }
  //2 вариант
  if (password === 'rockstar') {
    ok.call(this);
  } else {
    fail.call(this);
  }
};

const user = {
  name: 'Вася',
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to login`);
  },
};
//1 вариант
// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//2 вариант
checkPassword.call(user, user.loginOk, user.loginFail);

//напиши метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает
//и возвращает общую стоимость камней с таким именем, ценой и количеством из свойств stones

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Emerald', price: 1300, quantity: 4 },
  ],

  calcTotalPrice(stoneName) {
    //   //поиск введены данны, нормализация введеных данных, нижний регистр и лишних пробелов
    //   const stoneObj = this.stones.find(
    //     el => el.name.toLowerCase() === stoneName.trim().toLowerCase()
    //   );
    //   //проверка на наличие искомого предмета
    //   if (!stoneObj) {
    //     return `Камня ${stoneName} не найдено`;
    //   }
    //   return stoneObj.price * stoneObj.quantity;
    // },

    //деструктуризация
    const stoneObj = this.stones.find(
      el => el.name.toLowerCase() === stoneName.trim().toLowerCase()
    );
    if (!stoneObj) {
      return `Камня ${stoneName} не найдено`;
    }
    const { quantity, price } = stoneObj;
    return price * quantity;
  },
};

console.log(chopShop.calcTotalPrice('Emerald'));
//.trim() очищает строку от пробелов в конце и в начале

//Выполнить рефакторинг методов обьекта phonebook что бы код заработал
//Допишите метод getContacts - возвращает массив контактов

const phoneBook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substring(2, 9);
  },

  getDate() {
    return Date.now();
  },
  getContacts() {
    return this.contacts;
  },
};

phoneBook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});
phoneBook.add({
  name: 'Poly',
  email: 'mango@mail.com',
});

console.log(phoneBook.getContacts());

//Создать обьект калькулятор с тремя методами

//read- принимает два значения и сохраняет их как свойства обьекта
//add()- возвращает сумму этих значений
//mult - умножает сохраненное значение и возвращает результат

const calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

console.log(calculator);

calculator.read(5, 15);

console.log(calculator);

console.log(calculator.add());

console.log(calculator.mult());
