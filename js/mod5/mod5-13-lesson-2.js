/** Цепочка прототипов
 * Object.create()
 * obj.hasOwnProperty()
 */

//https://learn.jevascript.ru/article/native-prototypes/native-prototypes-classes.svg

/**
 * Собственные свойства обьекта и не собственные свойства
 */

const user = {
  firstName: 'Issac',
  age: 40,
};

const user1 = Object.create(user);
user1.firstName = 'Louis';
user1.lastName = 'Miller';
user1.age = 50;

const user2 = Object.create(user1);
user2.firstName = 'Jordan';

console.log('User: ', user);
console.log('user1: ', user1);
console.log('user2: ', user2);

const str = new String('hi');
console.log(str);

/**
 * Проверка собственных свойств obj.hasOwnProperty()
 */

console.log(user.hasOwnProperty('name')); //собственное свойство
console.log(user1.hasOwnProperty('age'));
console.log(user2.hasOwnProperty('age'));

/**
 * цикл for...in, перебирает все свойства, и собственные и не собственные
 */

for (const prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(prop);
    console.log(user[prop]);
  }
}

const keys = Object.keys(user);
console.log(keys); //вернулось собственное свойство обьекта

/**
 * Класс - шаблон по которому будут созданы однотипные объекты
 * Экземпляр - это обьект созданный по классу
 * Интерфейс - набор доступных методов и свойств
 */

//Функция конструктор

//[P] Создаем человека по  образу

function User(params) {
  //конструктор, под капотом return уже есть поэтому использовать не надо
  //явного объявления тоже нет необходимости использовать

  const { firstName, lastName, age, hairColor, eyesColor, gender } = params;

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.legs = 2;
  this.hands = 2;
  this.eyes = 2;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  this.gender = gender;

  //плохая практика так как передается в инстанс
  //хорошая практика добавлять из вне 
  // this.changeHairColor = function changeHairColor(newColor) {
  //   this.hairColor = newColor;
  // };
  // [[Prototype]]--->User.prototype
}

User.prototype.changeHairColor = function (newColor) {
  this.hairColor = newColor;
};
User.prototype.getFullName = function () {
  return `${this.firstName}  ${this.lastName}`;
};

console.dir(User);

const user3 = new User({
  firstName: 'Jeff',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
  lastName: 'Tucker',
  gender: 'male',
});
console.log(user3);

const user4 = new User({
  firstName: 'Jean',
  lastName: 'Smith',
  age: 40,
  hairColor: 'Pink',
  eyesColor: 'blue',
  gender: 'female',
});

/**
 * Классы: обьявление, конструктор, методы
 * Приватные свойства и методы
 * Статические свойства и методы
 * Геттеры и Сеттеры
 */

class User1 {
  // #userEmail
  static test = 5;
  constructor(params) {
    const { firstName, lastName, age, hairColor, eyesColor, gender, email } =
      params;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    // this.#userEmail = email
  }
  //все методы класса идут на прототипы
  changeHairColor(newColor) {
    this.hairColor = newColor;
  }
}

class User2 {
  //ели какие то свойства в обьекте не изменяются
  //то их лучше описывать вне конструктора
  //и this в таком случае не нужен
  legs = 2;
  hands = 2;
  eyes = 2;
  //приватное свойство
  #userEmail;
  //статическое свойство
  static status = 'Admin';
  constructor(params) {
    //в конструкторе описываются динамичные свойства,
    //т.е. если какие то свойства обьекта будут приходить из вне
    //их нужно вводить в конструктор
    const { firstName, lastName, age, hairColor, eyesColor, gender, email } =
      params;
    //публичные свойства 
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#userEmail = email;
    // this.status = User1.status;
  }
  //методы класса записываются после конструктора
  // changeHairColor(newColor) {
  //   this.hairColor = newColor;
  // }
  //стрелочная функция при таком синтаксисе контекст не теряется 
  changeHairColor = newColor => {
    this.hairColor = newColor;
  };
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get email() {
    return this.#userEmail;
  }
  set email(newEmail) {
    this.#userEmail = newEmail;
  }
}
const user5 = new User1({
  firstName: 'Jean',
  lastName: 'Smith',
  age: 40,
  hairColor: 'Pink',
  eyesColor: 'blue',
  gender: 'female',
  email: 'mail@mail.com',
});

user5.changeHairColor('Black');
user5.email = 5000;

console.log('User5', user5);
console.log(User1.status)

/**
 * Наследование с extends и super
 */

//родительский класс
class parentUser {
  //приватные свойства они должны прописываться обязательно вне конструктора
  //к приватным свойствам из вне обратиться нельзя только внутри класса
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

const user6 = new parentUser({
  firstName: 'Mable',
  lastName: 'Cohen',
  age: 30,
  login: 'testLogin',
  email: 'email@email.com',
});
//к приватным свойствам из вне обратиться нельзя только внутри класса
// console.log(parentUser.#login)//SyntaxError

console.log('user6', user6);
console.log(user6.getFullName());

//чаилд класс наследуемый родительский extends - наследуемый
class Manager extends parentUser {
  constructor({ numberOfSales, ...otherProps } = {}) {
    //super ссылка на родительский класс
    //при использовании конструктора в наследуемом классе
    //нужно использовать супер
    //т.е супер передает все свойства конструктора родителя
    //в скобках указывается деструктуризация свойств родительского конструктора
    super(otherProps);//это ссылка на конструктор родительского класса
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

console.log('manager', manager);

class Developer extends parentUser {
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