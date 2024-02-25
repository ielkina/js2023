'use strict';
/* 
 * Контекст вызова this
 * This существует только внутри функции
 * На контекст не влияет то где функция была //!Обьявлена
 * На контекст влияет то где функция //! ВЫЗЫВАЕТСЯ
*/

//[P] this в методах

const user = {
  name: 'Luis',
  age: 30,
  showThis() {
    //будет ссылаться на тот обьект в котором его вызвали
    console.log(this);
  },
  showName() {
    console.log(this);
  },
};
user.showThis();
user.showName();

const anotherUser = {
  name: 'Galina',
  age: 40,
  //ссылка на метод в другом обьекте
  showThis: user.showThis,
  showName: user.showName,
};
anotherUser.showThis();
anotherUser.showName();

//[P] this в обычных функциях (строгий, не строгий режим)

/*Function expression*/

const func = function () {
  console.log(this);
  // console.log(this.name);//вызов фн без контекста, ошибка, утрата контекста 
};

func();//не строгий режим ссылается на глобальный обьект Window

func();//строгий режим undefined

func(); //undefined вызов функции без контекста. при вызове функции без контекста, контекст теряется и выдается ошибка

//если this в функции в не строгом режиме функция вызванная без контекста(obj.fn() функция вызванная с контекстом) будет ссылаться на глобальный обьект. функция вызванная таким способом  называется утрата контекста

const fn = function () {
  console.log(this);
  console.log(this.name);
};

const user1 = {
  name: 'Mariya',
  showData: fn, //ссылка на функцию
};
user1.showData(); //вызов функции с контекстом не в строгом режиме, в строгом режиме будет ошибка

// fn()//TypeError вызов без контекста, утрата контекста.

/*Function declaration*/

//объявленная переменная с var всплывает вверху как и функция declaration
//Поведение declaration такое же самое каки у функции expression

function funA() {
  console.log(this)
}

const user2 = {
  name: "Vitaliy",
  showName: funA,
}
funA()
user2.showName()

/*Arrow function*/

//стрелочные функции своего контекста не имеют

//не важно в каком режиме
//всегда будет ссылаться на глобальный обьект
//стрелочная функция не принимает контекста у нее просто нет контекста

const funB = () => {
  console.log(this);
  console.log(this.name);
};
const user3 = {
  name: 'Vitaliy',
  showName: funB,
}
funB();
user3.showName();

//на ней не работают методы call apley bind
//но она может взять контекст из родительской функции которые не являются стрелочными функциями

function generalFn() {
  const func = () => {
    console.log(this);
  };
  func();
}
const user4 = {
  name: 'Vitaliy',
  showName: generalFn,
};
// func();
generalFn();
user.showName();

//[P] Присвоении фн как метода обьекта

const showThis = function () {
  // this = user
  console.log(`showThis`, this);
};

const showThisName = function () {
  // this = user
  console.log(`showThisName ${this.name}`);
};

const user5 = {
  name: 'Luis',
  age: 30,
};

user5.showThis = showThis;
user5.showThisName = showThisName;

//тоже самое что и

// const user = {
//   name: 'Luis',
//   age: 30,
//   showThis: showThis,
//   showThisName: showThisName,
// };

user5.showThis();
user5.showThisName();

//[P] Вызов метода обьекта без контекста. Передача реализации

const user6 = {
  name: 'Luis',
  age: 30,
  showThis() {
    console.log(`showThis`, this);
  },
  showThisName() {
    console.log(`showThisName ${this.name}`);
  },
  showThisAge() {
    console.log(`showThisAge ${this.age}`);
  },
};
//контекст не передается по ссылке
const showUserThis = user6.showThis;//ссылка на методы обьекта
const showUserName = user6.showThisName;
const showThisAge = user6.showThisAge;

showUserThis(); //undefined утрата контекста, вызов без контекста
user6.showThis.call({})


//[P] this в callback функциях

const user7 = {
  name: 'Luis',
  age: 30,

  showThis() {
    console.log(`showThis`, this);
  },

  showThisName() {
    console.log(`showThisName ${this.name}`);
  },
  showThisAge() {
    console.log(`showThisAge ${this.age}`);
  },
};

const someFunction = function (callback) {
  callback()//нет контекста
};
someFunction(user7.showThis);//undefined
// утрата контекста. нет привязки к контексту. передается ссылка на метод обьекта а в самом калбеке нет контекста поэтому контекст теряется

//исправление утраты контекста с помощью метода call
const someFunction1 = function (callback, context) {
  callback.call(context);
};
someFunction1(user7.showThis, user7);

//утрата контекста когда есть вложенные функции

function func1() {
  console.log(this);

  function func2() {
    console.log(this);
  }
  func2(); //undefined нет контекста. она не берет контекст с других фн как стрелочная поэтому она его теряет.

  // чтобы исправить утрату контекста нужно переписать на стрелочную где она будет наследовать контекст с родительской функции или через call & apley
  const func3 = () => {
    console.log(this);
  }
  func3();//{}
}

func1(); //undefined - утрата контекста. у вложенной функции нет контекста

func1.call({})//{}

//[P] this в стрелочных функциях. Стрелочные функции не имеют своего this, в стрелочных всегда ссылается на родительский this

// Напишите метод changeAge который изменяет возраст пользователя через стрелочную функцию. что произойдет? сделайте, что б все работало верно

const user8 = {
  name: 'lois',
  age: 30,
  changeAge: function (newAge) {
    this.age = newAge;
  },
};

user8.changeAge(40)

console.log(user8);

//Каким будет результат выполнение этого кода

let user9 = {
  name: 'Джон',
  go() {
    console.log(this);
    console.log(this.name);
  },
};
const goFN = user9.go;

// goFN();//TypeError передача контекста по ссылке

//Здесь функция makeUser возвращает обьект ref
//каким будет результат при обращении к свойству обьекта ref почему?

const makeUser = function () {
  return {
    name: 'Dion',
    ref: this,
  };
};

const user10 = makeUser(); //нет контекста

console.log(user10);

// console.log(user10.ref.name);//undefined


//каким будет результат

const makeUser1 = function () {
  return {
    name: 'Джон',
    ref: this,
  };
};

const user11 = makeUser1(); //нет контекста
// debugger;
console.log(user11);//undefined
// console.log(user11.ref().name);//TypeError

//Это ladder (лестница) - обьект, который позволяет подниматься
//вверх и спускаться
//напиши метод обьекта ladder: up - подняться на ступеньку выше, down - опуститься на ступеньку ниже,
//showStep - показать ступеньку

const ladder = {
  step: 0,
  up() {
    this.step += 1;
  },
  down() {
    if (this.step === 0) {
      return;
    }
    this.step -= 1;
  },
  showStep() {
    console.log(`Ты на ${this.step} ступеньке`)
  }
};

//Теперь, елинам нужно сделать несколько последовательных вызовов,
//мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

//Измените код методов up, down  showStep таким образом, чтобы их вызов можно было сделать по цепочке, например
//так:
//переписываем так что б методы обьектов можно было вызывать по цепочке

const ladder1 = {
  step: 0,
  up() {
    this.step += 1;
    //что б из методов обьекта можно было сделать цепочку вызовов мы делаем return this
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

ladder1.up().up().up().down().showStep().down().showStep();

//[P] Методы функции call apply

console.log(typeof (() => { }))

//Функции это обьект со своими свойствами и методами


function generalFn() {
  console.log(5 + 100);
}
generalFn();

generalFn.a = 5;

console.log(generalFn);
console.dir(generalFn)

const greet = function () {
  console.log('Hello');
};
greet.test = 5;
console.dir(greet);

//call (позвать)  apply (применить)
//Вызовите функцию showFullName в контексте обьекта user двумя способами

const showFullName = function (message, num) {
  console.log(`${message} ${this.firstName} ${this.lastName}, ${num} `);
};

const user12 = {
  firstName: 'Ernest',
  lastName: 'Vasquez',
  age: 30,
};
showFullName.call(user12, 'hello', 40);
showFullName.apply(user12, ['hello', 40]);

const args = user12; //утрата контекста, передается ссылка на обьект поэтому будет Undefined
showFullName.apply(user12, args);

const array = ['hello', 40];//передаем ссылку на массив
showFullName.apply(user12, array);//hello Ernest Vasquez, 40

//
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 9]));

//Вызовите функцию showFullName в контексте обьекта anotherUser

const anotherUser1 = {
  firstName: 'Ray',
  lastName: '',
  age: 40,
};

//ожидание метода

showFullName.call(anotherUser1, "hi", 15)

//Наследование(одалживание) метода

const createCurrentDate = function () {
  return [].join.call(arguments, '/');
};

console.log(createCurrentDate(2022, '08', 10));

//bind

const showFullName1 = function (...args) {
  console.log(args);
  console.log(`${this.firstName} ${this.lastName}`);
};

const user13 = {
  firstName: 'Ernest',
  lastName: 'Vasquez',
  age: 30,
};
//bind используют тогда когда хотим привязать контекст, используется единоразово и намертво привязывает контекст
const newShowName = showFullName1.bind(user13, 20, 25, 25);
//bind всегда возвращает новую функцию
console.log(showFullName1 === newShowName)//false

//дальнейшие переназначение не изменят свойства обьекта так как bind привязал контекст 

newShowName.call({});
newShowName();
newShowName(10);

//[P]Метод обьекта в роли колбэка

const user14 = {
  name: 'Luis',
  age: 30,
  showThis() {
    console.log('this', this);
  },
  showName() {
    console.log(`this name is: ${this.name}`);
  },
};
//1 вариант
const someFunction2 = function (callback) {
  callback();//колбэк без контекста
};
someFunction2(user14.showThis)//undefined утрата контекста
//привязываем контекст с помощью метода bind
someFunction2(user14.showThis.bind(user14));//{}
//или 2 вариант
const someFunction3 = function (callback) {
  callback.call(this);
};
someFunction3.call(user14, user14.showThis);

//Что выведет этот код?

const f = function () {
  console.log(this.name)
}
const user15 = {
  name: 'Вася',
};

const anotherUser2 = {
  name: 'Петя'
}
const copyFn = f.bind(user15).bind(anotherUser2);//Вася Вася
//во втором вызове бинд вернет зафиксированную

// f.bind в первом вызове зафиксировал юзера Васю
copyFn();//Вася

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

const user16 = {
  name: 'Вася',
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to login`);
  },
};
//1 вариант
checkPassword(user16.loginOk.bind(user16), user16.loginFail.bind(user16));
//2 вариант
checkPassword.call(user16, user16.loginOk, user16.loginFail);

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
    //поиск введены данны, нормализация введених данных, нижний регистр и лишних пробелов
  //   const stoneObj = this.stones.find(
  //     el => el.name.toLowerCase() === stoneName.trim().
  //       toLowerCase()
  //   );
  //   // проверка на наличие искомого предмета
  //   if (!stoneObj) {
  //     return `Камня ${stoneName} не найдено`;
  //   }
  //   return stoneObj.price * stoneObj.quantity;
  // },

  //деструктуризация
    const stoneObj = this.stones.find(
      el => el.name.toLowerCase() === stoneName.trim().
        //.trim() очищает строку от пробелов в конце и в начале
        toLowerCase()
    );
    if (!stoneObj) {
      return `Камня ${stoneName} не найдено`;
    }
    const { quantity, price } = stoneObj;
    return price * quantity;
  },
};

console.log(chopShop.calcTotalPrice('Emerald'));
console.log(chopShop.calcTotalPrice('Кирпич'));


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
