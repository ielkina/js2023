//GitHub Lesson 9
//https://github.com/ArtemRysich/Group_77/commit/a16076eeed4077e5189cde1da2d6e018f22d1668
//1 категория функция
//fn declaration
function fn() { }
//fn expression
const fn1 = function () { };

//2 категория
// arrow fn
const fn2 = () => { };

//в строгом режиме this undefined
//в обычном режиме this ссылается на  window (глобальный контекст)
//this - это возможность обращать(ссылаться) к чему нибудь универсально
//подключение js файла в html документе через type="module" автоматически включает строгий режим

// 'use strict';

function fn3() {
  console.log(this);//undefined
}
fn3();//  в 'use strict' будет undefined, в обычном режиме THIS ссылается window , 

const fn4 = function () {
  console.log(this);//undefined
};
fn4();//  в 'use strict' будет undefined, в обычном режиме THIS ссылается window , 

const arrow = () => {
  console.log(this);//undefined
};
arrow();//  в 'use strict' будет undefined, в обычном режиме THIS ссылается window ,

//this может присутствовать только в функциях
//правила определения this - ТОТ КТО НАС ВЫЗВАЛ (В КОНТЕКСТЕ ЧЕГО БУДЕТ ВЫЗВАНА THIS)

/*Вызов this в контексте */

const objA = {
  name: 'User name',
  nickName() {
    console.log(this);//this ссылает на обьект
  },
};
objA.nickName();//this вызвана в контексте обьекта objA

const objC = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    nickName() {
      console.log(this);
    },
  },
};
objC.skills.nickName(); //this вызвана в контексте objC свойства skills

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
objD.skills.someValue.nickName(); //this вызвана в контексте objD свойства skills, свойства somValue

const objDa = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      nickName: () => {
        console.log(this);
      },
    },
  },
};
objDa.skills.someValue.nickName();

const objB = {
  name: 'User name',
  nickName: () => { //arrow всегда считывает с window(глобальный контекст) в обычном режиме
    console.log(this);//undefined в строгом режиме 
  },
};
objB.nickName();//у arrow не имеет значение кто ее вызвал она берет свой контекст у родителя

const objE = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo() {
        console.log('foo', this);
        const nickName = () => {
          console.log('nickName', this);
        };
        nickName();
      },
    },
  },
};
//foo(parent) - declaretion, arrow(child) забирает родительский тип функции
objE.skills.someValue.foo();//fn стрелка перешла в declaretion 

const objF = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,

      foo: () => {
        console.log('foo', this);//undefined
        const nickName = () => {
          console.log('nickName', this);//undefined
        };
        nickName();
      },

    },
  },
};
//foo(parent) arrow ссылается на глобальный обьект, nickName(child) - берет родительский, 
objF.skills.someValue.foo();


const objG = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo() {
        console.log('foo', this);//undefined
        function nickName() {
          console.log('nickName', this);//undefined
        }
        nickName();//this без контекст
      },
    },
  },
};
//foo(parent) - declaretion, nickName(child) - direction ссылается на собственный обьект 
objG.skills.someValue.foo();

const objGa = {
  name: 'User name',
  skills: {
    mySkill: 'html',
    someValue: {
      value: 10,
      foo: () => {
        console.log('foo', this);//undefined
        function nickName() {
          console.log('nickName', this);//undefined
        }
        nickName();//this вызвано без контекста
      },
    },
  },
};
//foo(parent) - declaretion, nickName(child) - direction ссылается на собственный обьект 
objGa.skills.someValue.foo();

//Шаги
//1. Определяем тип функции
//2. Declaration - кто нас вызвал
//2.1 Вызвал обьект
//2.1.1 - this === обьект
//2.2 - никто не вызвал
//2.2.1 - undefined
//2.2.2 - window
//3. Arrow - В рамках чего была создана
//3.1 - Написание в рамках функции то принимает ее контекст
//3.1.2 - Возвращаемся в определения типа функции
//3.2 - Любой другой случай ВСЕГДА Window

const objH = {
  age: 22,
  myAge() {
    console.log(this);
  },
};
objH.myAge();//objH (parent) обьект, myAge(child) - fn declaretion ссылается на родителя 

const objI = {
  age: 22,
  myAge: () => {
    console.log(this);//undefined
    const test = () => {
      console.log(this);
      test();
    };
  },
};
objI.myAge();

const objIa = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
      test();
    };
  },
};
objIa.myAge();

// 'use strict'

const objJ = {
  age: 22,
  myAge() {
    function test() {
      console.log(this);//undefined
    }
    test();//нет контекста
  },
};
objJ.myAge();

const objK = {
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
objK.skills.foo()//обьект skills

/* ссылки*/

const objL = {
  age: 22,
  myAge() {
    const test = () => {
      console.log(this);
    };
    test();
  },
};

const objM = {
  age: 12,
  someFunction: objL.myAge,
};
objM.someFunction();//objM



/********************* */


const objN = {
  age: 22,
  myAge() {
    const test = () => {
      // console.log('objN');
      // console.log('myAge', this);
      console.log(this);
    };
    test();
  },
};

const objO = {
  age: 12,
  someFunction: objN.myAge,//ссылка на myAge
};

const objP = {
  age: 13,
  someCrazy: objO.someFunction,//ссылка на someFunction
};

objP.someCrazy();

/************************************* */

const objQ = {
  name: 'A',
  foo: () => {
    //arrow
    console.log(this);
  },
};
objQ.foo();

// const win = {};
// function foo() {
//   const a = this.test;
// }
// foo();

/******** Методы */
// call
// apply
// bind

const objAA = {
  name: 'objAA',
  myAge(...args) {
    //old school
    console.log(this, ...args);
    // return 'Some value';
  },
};

objAA.myAge(22, 44);

const objBA = {
  name: 'objBA',
  myAge: objAA.myAge,
};

const objCA = {
  name: 'objCA',
  myAge: objAA.myAge,
};
//методы вызываются  функцию здесь и сейчас
//call подмена контекста 
objAA.myAge.call(objBA, 1, 2);
objAA.myAge.call(objCA, 10, 20);
const str = objAA.myAge.call(objCA, 10, 20)
console.log(str);
//apply похож на call но есть различие в синтаксисе
//в apply доступны только два параметра -> обьект и массив параметров
objAA.myAge.apply(objBA, [1, 2]);
objAA.myAge.apply(objCA, [3, 4]);


// const str1 = objAA.myAge.call(objCA, 10, 20, 30, 40);
const fromBackEnd = [10, 20, 30, 40, 50];
console.log(objAA.myAge.apply(objCA, fromBackEnd))
//можно всегда использовать call но массив надо распылять
const str1 = objAA.myAge.call(objCA, ...fromBackEnd, 2);
console.log(str1);

//bind
//bind копирует функцию и подвязывает контекст функции в копии навсегда

const objAAA = {
  name: 'objAAA',
  myAge(...params) {
    console.log(arguments);
    console.log(this, ...params);
    return 'Some value';
  },
};

const objBAA = {
  name: 'objBAA',
};

const objCAA = {
  name: 'objCAA',
};

const result = objAAA.myAge.bind(objBAA, 10, 20, 30);
const result2 = objAAA.myAge.bind(objCAA, 40, 50, 60);

objAAA.myAge();
//если нам надо изменять параметры не в коем случаи нельзя это делать через метод bind, мы не сможем изменить предыдущие параметры
result(999, 888);
result(111, 222, 333, 444);
result2(999, 888);
result2(111, 222, 333, 444);

result();
result2();

//Поэтому если нам необходимо каждый раз изменять какие то новые аргументы и приходили новые параметры мы используем это все за рамками bind
//привязали контекст bind 
const result3 = objAAA.myAge.bind(objAAA)
//вызываем и передаем отдельно без bind
result3(1, 2, 3, 4, 5)

result3();


//перерыв

// Example 1 - Ювелирная мастерская
// Напишите метод calcTotalPrice(stoneName), который принимает название  камня и  рассчитывает и возвращает общую стоимость камней с таким названием ценой и количеством со свойством stones.

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
//передали контекст метода обьекта chopShop
console.log(chopShop.calcTotalPrice.call(shop2, 'Щебінь'));//5200

// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      //если мы указываем метод без контекста (generateId()) обьекта это означает что контекст метода мы ищем в глобальной области видимости
      //если нам нужен метод обьекта нам необходимо указать контекст какого обьекта this.generateId() - это означает что мы передаем контекст локально т.е контекст обьекта phonebook
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);//пушим новые данные в свойства contacts обьекта phonebook
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
    //ищем наше свойство a в обьекте, при отсутствии такового с помощью = присваиваем объекту свойство a 
    this.a = a;

    //??(оператор нулевого сравнения) оператор присваивает дефолтное значение = 0
    //схожий с оператором \\ (или) только возвращает только два значение null или undefined
    this.b = b ?? 0;
  },
  add() {
    // return this.a + this.b;//
    return (this.a ?? 0) + (this.b ?? 0);
    //0 (заглушка) дефолтное значение, ??(оператор нулевого сравнения) - если null или undefined он вернет дефолтное значение 0
  },
  mult() {
    return (this.a ?? 1) * (this.b ?? 1);//1 дефолтное значение т.к. на 0 нельзя умножать
  },
};
//до момента вызова значит undefined
calculator.read(2, 3);
console.log(calculator);
console.log(calculator.add());//2+3=5
console.log(calculator.mult());//2*3=6
console.log(calculator);

const calculator2 = {};

//до момента вызова значит undefined
calculator.read.call(calculator2, 2, 4)
// после вызова покажут новый обьект
console.log(calculator2);
console.log(calculator.add.call(calculator2));//2+4=6
console.log(calculator.mult.call(calculator2));//2*4=6