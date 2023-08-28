/** Цепочка прототипов
 * Object.create()
 * obj.hasOwnProperty()
 */

//https://learn.jevascript.ru/article/native-prototypes/native-prototypes-classes.svg

/**
 * Собственные свойства обьекта и не собственные свойства
 */

// const user = {
//   firstName: 'Issac',
//   age: 40,
// };

// const user2 = Object.create(user);
// user2.firstName = 'Louis';
// user2.lastName = 'Miller';

// const user3 = Object.create(user2);
// user3.firstName = 'Jordan';

// console.log('User: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

// const str = new String('hi');

// console.log(str);
/**
 * Проверка собственных свойств obj.hasOwnProperty()
 */

// console.log(user.hasOwnProperty('age')); //собственное свойство
// console.log(user2.hasOwnProperty('age'));
// console.log(user3.hasOwnProperty('age'));

/**
 * цикл for...in, перебирает все свойства, и собственные и не собственные
 */

// for (const prop in user) {
//   if (user.hasOwnProperty(prop)) {
//     console.log(prop);
//     console.log(user3[prop]);
//   }
// }

// const keys = Object.keys(user3);

// console.log(keys); //вернулось собственное свойство обьекта

/**
 * Класс - шаблон по которому будут созданы однотипные обьекты
 * Экземпляр - это обьект созданный по классу
 * Интерфейс - набор доступных методов и свойств
 */

//Функция конструктор

//TODO Создаем человека по  образу

// function User(params) {
//   //конструктор, под капотом return уже есть поэтому использовать не надо
//   //явного объявления тоже нет необходимости использовать

//   const { firstName, lastName, age, hairColor, eyesColor, gender } = params;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.legs = 2;
//   this.hands = 2;
//   this.eyes = 2;
//   this.hairColor = hairColor;
//   this.eyesColor = eyesColor;
//   this.gender = gender;

//   this.changeHairColor = function changeHairColor(newColor) {
//     this.hairColor = newColor;
//   };
//   // [[Prototype]]--->User.prototype
// }

// User.prototype.changeHairColor = function (newColor) {
//   this.hairColor = newColor;
// };
// User.prototype.getFullName = function () {
//   return `${this.firstName}  ${this.lastName}`;
// };

// // console.dir(User)

// const user4 = new User({
//   firstName: 'Jeff',
//   age: 30,
//   hairColor: 'brown',
//   eyesColor: 'brown',
//   lastName: 'Tucker',
//   gender: 'male',
// });
// console.log(user4);

// const user5 = new User({
//   firstName: 'Jean',
//   lastName: 'Smith',
//   age: 40,
//   hairColor: 'Pink',
//   eyesColor: 'blue',
//   gender: 'female',
// });

/**
 * Классы: обьявление, конструктор, методы
 * Приватные свойства и методы
 * Статические свойства и методы
 * Геттеры и Сеттеры
 */

// class User1 {
//   // #userEmail
//   static test = 5;

//   constructor(prams) {
//     const { firstName, lastName, age, hairColor, eyesColor, gender, email } = params;
//     this.firstName = firstName
//     this.lastName =lastName
//     this.age = age
//     this.legs = 2;
//     this.hands =2
//     this.eyes = 2
//     this.hairColor = hairColor
//     this.eyesColor =eyesColor
//     this.gender = gender
//     // this.#userEmail = email
//   }
//   changeHairColor(newColor) {
//     this.hairColor = newColor;
//   }
// }

// class User1 {
//   //ели какие то свойства в обьекте не изменяются
//   //то их лучше описывать вне конструктора
//   //и this в таком случае не нужен
//   legs = 2;
//   hands = 2;
//   eyes = 2;
//   //приватное свойство
//   #userEmail;
//   //статическое свойство
//   static status = 'Admin'
//   constructor(params) {
//     //в конструкторе описываются динамичные свойства,
//     //т.е. если какие то свойства обьекта будут приходить из вне
//     //их нужно вводить в конструктор
//     const { firstName, lastName, age, hairColor, eyesColor, gender, email } =
//       params;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.hairColor = hairColor;
//     this.eyesColor = eyesColor;
//     this.gender = gender;
//     this.#userEmail = email;
//     // this.status = User1.status;
//   }
//   //методы класса записываются после конструктора
//   // changeHairColor(newColor) {
//   //   this.hairColor = newColor;
//   // }
//   //стрелочная функция
//   changeHairColor = newColor => {
//     this.hairColor = newColor;
//   };

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   get email() {
//     return this.#userEmail;
//   }
//   set email(newEmail) {
//     this.#userEmail = newEmail;
//   }
// }
// const user6 = new User1({
//   firstName: 'Jean',
//   lastName: 'Smith',
//   age: 40,
//   hairColor: 'Pink',
//   eyesColor: 'blue',
//   gender: 'female',
//   email: 'mail@mail.com',
// });

// user6.changeHairColor('Black');
// user6.email = 5000;

// console.log('User6', user6);

// console.log(User1.status)

/**
 * Наследование с extends и super
 */

//родительский класс
class User {
  #login;
  #email;

  constructor({ firstName, lastName, age, login, email } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }
  //приватный метод
  #trimStr(str) {
    return str.trim();
  }
}

const user = new User({
  firstName: 'Mable',
  lastName: 'Cohen',
  age: 30,
  login: 'testLogin',
  email: 'email@email.com',
});

// console.log('user', user);

// console.log(user.getFullName());

//чаилд класс наследуемый родительский extends - наследуемый
class Manager extends User {
  constructor({ numberOfSales, ...otherProps } = {}) {
    //super ссылка на родительский класс
    //при использовании конструктора в наследуемом классе
    //нужно использовать супер
    //т.е супер передает все свойства конструктора родителя
    //в скобках указывается деструктуризация свойств родительского конструктора
    super(otherProps);

    //собственные свойства обьекта
    this.numberOfSales = numberOfSales;
  }
  doManagerWork() {
    console.log('Занимаюсь продажами');
  }
}

const manager = new Manager({
  firstName: 'Addie',
  lastName: 'Burgess',
  age: 20,
  login: 'someLogin',
  email: 'addie@mail.com',
  numberOfSales: 20,
});

// console.log('manager', manager);

class Developer extends User {
  constructor({ completedProjects, ...otherProps } = {}) {
    super(otherProps);
    this.completedProjects = completedProjects;
  }
  doDeveloperWork() {
    console.log('Пишу проект');
  }
}

const developer = new Developer({
  firstName: 'Bertha',
  lastName: 'Byrd',
  age: 20,
  login: 'someLogin',
  email: 'addie@mail.com',
  completedProjects: 20,
});
