/*Конспект*/

//⁡⁣⁢⁣Контекст выполнения функции⁡
//Петя бежит быстро, потому что он (this) пытается поймать поезд.

const petya = {
  username: 'Petya',
  showName() {
    console.log(this.username);
  },
};
petya.showName();

const bookShelf = {
  authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};
console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли"]
bookShelf.addAuthor('Ли Танит');
console.log(bookShelf.getAuthors()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]

// Методы getAuthors и addAuthor это функции (методы объекта), которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

/*⁡⁣⁢⁣Правила определения this⁡*/

//Необходимо усвоить всего одно правило для определения this - значение контекста внутри функции (не стрелочной) определятся не в момент ее создания, а в момент вызова. То есть значение this определяется тем, как вызывается функция, а не где она была объявлена.

/*this в глобальной области видимости*/

//В глобальной области видимости, если скрипт выполняется не в строгом режиме, this ссылается на объект window. В строгом режиме значение this, в глобальной области видимости, будет undefined.

function foo() {
  console.log(this);
}
foo(); // window без "use strict" и undefined с "use strict"

/*this в методе объекта*/

//Если функция была вызвана как метод объекта, то контекст будет ссылаться на объект, частью которого является метод.

const petya1 = {
  username: 'Petya',
  showThis() {
    console.log(this);
  },
  showName() {
    console.log(this.username);
  },
};
petya1.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
petya1.showName(); // 'Petya'

function showThis() {
  console.log('this in showThis: ', this);
}
// Вызываем в глобальном контексте
showThis(); // this in showThis: Window
const user = {
  username: 'Mango',
};
// Записываем ссылку на функцию в свойство объекта
// Обратите внимание, что это не вызов - нет ()
user.showContext = showThis;
// Вызываем функцию в контексте объекта
// this будет указывать на текущий объект, в контексте
// которого осуществляется вызов, а не на глобальный объект.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

/*this в callback-функциях*/

//При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

const customer = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// Решение этой проблемы рассматривается в секции про метод bind() и методы объекта.

/*this в стрелочных функциях*/

//Стрелочные функции не имеют своего this. В отличии от обычных функций, изменить значение this внутри стрелки после её объявления нельзя.

//Стрелочные функции также игнорируют наличие строгого режима. Если стрелка запомнила глобальный контекст, то this в ней будет содержать ссылку на window независимо от того, выполняется скрипт в строгом режиме или нет.

const showThis1 = () => {
  console.log('this in showThis: ', this); // this in showThis: window
};
showThis1();
const user1 = {
  username: 'Apple',
};
user1.showContext = showThis1;
user1.showContext(); // this in showThis: window

const hotel = {
  username: 'Resort hotel',
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления,
      // из родительской области видимости
      console.log('this in foo: ', this);
      // this in foo: {username: 'Resort hotel', showThis: ƒ}
    };

    foo();
    console.log('this in showThis: ', this);
    // this in showThis: {username: 'Resort hotel',showThis: ƒ}
  },
};

hotel.showThis();

/*⁡⁣⁢⁣Методы функций⁡*/

//Бывают ситуации когда функцию нужно вызвать в контексте какого-то объекта, при этом функция не является его методом. Для этого у функций есть методы call, apply и bind.

/*Метод call()*/

//⁡⁢⁣⁣foo.call(obj, arg1, arg2, ...)⁡
//Метод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т. д.

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}
const mango = {
  username: 'Манго',
};
const poly = {
  username: 'Поли',
};

greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

/*Метод apply*/

//Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

// ⁡⁢⁣⁣foo.call(obj, arg1, arg2, ...)⁡
// ⁡⁢⁣⁣foo.apply(obj, [arg1, arg2, ...])⁡

//Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д.

function greetGuest1(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}
const mango1 = {
  username: 'Манго',
};
const poly1 = {
  username: 'Поли',
};
greetGuest1.apply(mango1, ['С приездом']); // Добро пожаловать, Манго.
greetGuest1.apply(poly1, ['Добро пожаловать']); // С приездом, Поли.

/*⁡⁣⁢⁣Метод bind()⁡*/

//Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// ⁡⁢⁣⁣foo.bind(obj, arg1, arg2, ...)⁡

//Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, arg2 и т. д. Получается копия функции которую можно передать куда угодно и вызвать когда угодно.

function greet(clientName) {
  console.log(`${clientName}, добро пожаловать в «${this.service}».`);
  return;
}
const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."
const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

/*bind() и методы объекта*/

//При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

const customer1 = {
  firstName: 'Jacob',
  lastName: 'Mercer',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer1.getFullName); // Будет ошибка(undefined) при вызове функции

// В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// ❌ Было
// makeMessage(customer1.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
makeMessage(customer1.getFullName.bind(customer1)); // Обрабатываем заявку от Jacob Mercer.

/*⁡⁣⁢⁣Объектно-ориентированное программирование⁡ (ООП)*/

// Процедурное программирование - набор не связанных явно функций и переменных для хранения и обработки информации. Этот подход прост и прямолинеен и подходит для задач где нет тесно связанных сущностей (данных и функций для их обработки).

// Объектно-ориентированное программирование (ООП) - методология, основанная на представлении программы в виде совокупности объектов, каждый из которых содержит данные (свойства) и методы для взаимодействия с ними.

const baseSalary = 30000;
const overtime = 10;
const rate = 20;
const getWage = (baseSalary, overtime, rate) => baseSalary + overtime * rate;

console.log(getWage(baseSalary, overtime, rate));

// Используем ООП, собрав данные в объект employee.

const employee = {
  baseSalary: 40000,
  overtime: 10,
  rate: 20,
  getWage() {
    console.log(this.baseSalary + this.overtime * this.rate);
    return;
  },
};
employee.getWage();

//Идеологически, ООП - это подход к программированию как к моделированию, решающий основную задачу - структурирование информации с точки зрения управляемости, что существенно улучшает контроль процесса моделирования.

/*⁡⁣⁢⁣Сущности ООП⁡*/
//Класс
//Класс - способ описания сущности, определяющий состояние и поведение, зависящее от этого состояния, а также правила для взаимодействия с данной сущностью (контракт).
//В нашем случае, класс описывает сущность – автомобиль. Свойствами класса будут двигатель, колеса, фары и т. д. Методами класса будут открыть дверь, завести двигатель, увеличить скорость и т. п.
//Экземпляр
//Экземпляр (объект) - это отдельный представитель класса, имеющий конкретное состояние и поведение, полностью определяемое классом. Это то, что создано по чертежу, то есть по описанию из класса.
//Говоря простым языком, объект имеет конкретные значения свойств и методы, работающие с этими свойствами на основе правил, заданных в классе. В данном примере, если класс - это некоторый абстрактный автомобиль на чертеже, то объект - это конкретный автомобиль, стоящий у нас под окнами.
//Интерфейс
//Интерфейс - это набор свойств и методов класса, доступных для использования при работе с экземпляром.
//По сути, интерфейс описывает класс, чётко определяя все возможные действия над ним. Хороший пример интерфейса - приборная панель автомобиля, которая позволяет вызвать такие методы как увеличение скорости, торможение, поворот, переключение передач, включение фар и т. п.

/*Прототипное наследование*/

//Прототип объекта
//Метод Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj.
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // { name: 'Манго', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.name); // 'Манго'
console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.legs); // 4

//То есть прототип - это резервное хранилище свойств и методов объекта,

/*Метод hasOwnProperty()*/

//После того как мы узнали о том, как происходит поиск свойств объекта, должно стать понятно, почему цикл for...in не делает различия между свойствами объекта и его прототипа.

const animal1 = { eats: true };
const dog1 = Object.create(animal1);
dog1.barks = true;

for (const key in dog1) {
  console.log(key); // barks, eats
}

//Именно поэтому мы используем метод obj.hasOwnProperty(prop), который возвращает true, если свойство prop принадлежит самому объекту obj, а не его прототипу, иначе false.

const animal2 = {
  eats: true,
};
const dog2 = Object.create(animal2);
dog2.barks = true;

for (const key in dog2) {
  if (!dog2.hasOwnProperty(key)) continue;
  console.log(key); // barks
}

//Метод Object.keys(obj) вернет массив только собственных ключей объекта obj, поэтому на практике используют именно его, а не for...in.

const animal3 = {
  eats: true,
};
const dog3 = Object.create(animal3);
dog3.barks = true;
const dogKeys = Object.keys(dog3);
console.log(dogKeys); // ['barks']

/*Классы*/

//Объявление класса

// Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями и методами для взаимодействия с ними. Всё это нужно сделать динамически, во время выполнения программы. Для этого используют классы - специальный синтаксис объявления функции для создания объектов.

//Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - его тело. Классы принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

class User {
  // Тело класса
}

const mango2 = new User();
console.log(mango2); // {}

const poly2 = new User();
console.log(poly2); // {}

//Как строить класс, зависит от того, что вам нужно. В нашем случае, класс представляет собой пользователя, поэтому мы добавим туда поля для имени и почты.

//Конструктор класса

//Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.

class User1 {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}
const mango3 = new User1('Манго', 'mango@mail.com');
console.log(mango3); // { name: 'Манго', email: 'mango@mail.com' }

const poly3 = new User1('Поли', 'poly@mail.com');
console.log(poly3); // { name: 'Поли', email: 'poly@mail.com' }

// Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть this внутри конструктора будет ссылаться на новоизданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

// Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.

/*Объект параметров*/

// Класс может принимать большое количество входных данных для свойств будущего объекта. Поэтому к ним также можно применить паттерн «Объект параметров, передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

class User2 {
  // Деструктурируем объект
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}
const mango4 = new User2({
  name: 'Манго',
  email: 'mango@mail.com',
});
console.log(mango4); // { name: "Манго", email: "mango@mail.com" }

const poly4 = new User2({
  name: 'Поли',
  email: 'poly@mail.com',
});
console.log(poly4); // { name: "Поли", email: "poly@mail.com" }

/*Методы класса*/

// Для работы со свойствами будущего экземпляра используются методы класса - функции которые будут доступны экземпляру в его прототипе.

class User3 {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  // Метод getEmail
  getEmail() {
    return this.email;
  }
  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

/*Приватные свойства*/

// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.

// Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инициализации в конструкторе - обязательно.

class User4 {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango5 = new User4({
  name: "Манго",
  email: "mango@mail.com",
});
mango5.changeEmail("mango@supermail.com");
console.log(mango5.getEmail()); // mango@supermail.com
// console.log(mango5.#email); // Будет ошибка, это приватное свойство

/*Геттеры и сеттеры*/

// Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.

// Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.

class User5 {
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
  // Геттер email
  get email() {
    return this.#email;
  }
  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

//Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение. Геттер и сеттер идут в паре и должны называться одинаково.

const mango6 = new User5({ name: "Манго", email: "mango@mail.com" });
console.log(mango6.email); // mango@mail.com
mango6.email = "mango@supermail.com";
console.log(mango6.email); // mango@supermail.com

// При обращении к mango.email вызывается геттер get email() {...} и выполняется его код. При попытке записи mango.email = "mango@supermail.com" вызывается сеттер set email(newEmail) {...} и строка "mango@supermail.com" будет значением параметра newEmail.

// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Ошибка! Почта не может быть пустой строкой!");
//     return;
//   }

//   this.#email = newEmail;
// }

/*Статические свойства*/

// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

// Добавим классу пользователя приватное свойство role - его роль, определяющую набор прав, например администратор, редактор, просто пользователь и т п. Возможные роли пользователей будем хранить как статическое свойство Roles - объект со свойствами.

// Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

class User6 {
  // Объявление и инициализация статического свойства
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };
  #email;
  #role;
  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }
  get role() {
    return this.#role;
  }
  set role(newRole) {
    this.#role = newRole;
  }
}

const mango7 = new User6({
  email: "mango@mail.com",
  role: User6.Roles.ADMIN,
});

console.log(mango7.Roles); // undefined
console.log(User6.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango7.role); // "admin"
mango7.role = User6.Roles.EDITOR;
console.log(mango7.role); // "editor"

// Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя свойства должно начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

/*Статические методы*/

// В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того что значением будет метод.

class User7 {
  static #takenEmails = [];
  static isEmailTaken(email) {
    return User7.#takenEmails.includes(email);
  }
  #email;
  constructor({ email }) {
    this.#email = email;
    User7.#takenEmails.push(email);
  }
}
const mango8 = new User7({ email: "mango@mail.com" });

console.log(User7.isEmailTaken("poly@mail.com"));//false
console.log(User7.isEmailTaken("mango@mail.com"));//true

// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

/*Наследование классов*/

// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя).

// class Child extends Parent {
//   // ...
// }

// В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.

// Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

// Например, в приложении есть пользователи разных ролей - администратор, писатель статей, контент менеджер и т. п. У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

// Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, и при необходимости изменить например название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

// Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, после чего сделать классы для каждого типа пользователя которые наследуют этот набор от класса User. При необходимости изменить что-то общее, достаточно будет поменять только код класса User.

class User8 {
  #email;
  constructor(email) {
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User8 {
  // Тело класса ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

// Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. Важно помнить что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

/*Конструктор дочернего класса*/

// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего класса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

class User9 {
  #email;
  constructor(email) {
    this.#email = email;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor1 extends User9 {
  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}
const editor1 = new ContentEditor1({ email: "mango@mail.com", posts: [] });
console.log(editor1); // { email: 'mango@mail.com', posts: [] }
console.log(editor1.email); // 'mango@mail.com'

/*Методы дочернего класса*/

// В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

class ContentEditor2 extends User9 {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor2 = new ContentEditor2({ email: "mango@mail.com", posts: [] });
console.log(editor2); // { email: 'mango@mail.com', posts: [] }
console.log(editor2.email); // 'mango@mail.com'
editor2.addPost("post-1");
console.log(editor2.posts); // ['post-1']
