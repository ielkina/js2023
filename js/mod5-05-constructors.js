/**Основы ООП: класс, экземпляр(обьект), интерфейс
 *
 * - Функции-конструкторы
 * - Именование
 * - Операторы new
 * - Свойство Function.prototype есть только у фн конструктора
 */

// Правила создания функции-конструктора
// Стрелки не могут быть конструкторами
// Конструктор (функция) в js называются в большой буквы и она не отвечает на вопрос что сделать (существительное).
//1. Если функция вызывается через new, создается пустой обьект
//2. Функция вызывается в контексте созданного обьекта т.е в this записывается ссылка на него
//3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype т.е Car.prototype это ПРОТОТИП будущего обьекта (экземпляр)
//4. Ссылка на обьект возвращается в место вызова new Car

class Car {
  // const { brand, model, price } = config;
  constructor(config = {}) {
    // console.log(config);
    //вместо config(имя параметра) можно использовать другое слово

    //2. Функция вызывается в контексте созданного обьекта т.е в this записывается ссылка на него
    console.log(this);
    //this ссылается на контекст созданного нового пустого обьекта с помощью new

    this.brand = config.brand;
    this.model = config.model;
    this.price = config.price;
    this.changePrice = function (newPrice) {
      this.price = newPrice;
    };
    //3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype т.е Car.prototype это ПРОТОТИП будущего обьекта (экземпляр)
    //4. Ссылка на обьект возвращается в место вызова new Car
    console.log(this);
  }
}

//ДЕСТРУКТУРИЗАЦИЯ

//деструктуризация config

const Car1 = function ({ brand, model, price } = {}) {
  // или
  // const { brand, model, price } = config;
  this.brand = brand;
  this.model = model;
  this.price = price;
  // this.changePrice = function (newPrice) {
  //   this.price = newPrice;
  // };
};
console.log(Car);
console.log(Car1.prototype);

// в прототипах фн конструкторах хранят методы!!!!!!!!!

// Свойство prototype есть только у фн
//фн хранят в прототипе что б не нагружать класс конструктор
Car1.prototype.sayHi = function (value) {
  console.log('Car.prototype.sayHi -> this', this);
  console.log(':)');
  console.log(`Hello ${value}`);
};

Car1.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

//новый экземпляр
//1. Если функция вызывается через new, создается !!! пустой обьект
//new создает новый экземпляр
//экземпляр класса Car1
const myCar = new Car1({ brand: 'Audi', model: 'A6', price: 60000 });
console.log(myCar);

//экземпляр класса Car1
const myCar1 = new Car1();
console.log(myCar1);

//экземпляр класса Car1
const myCar2 = new Car1({ brand: 'BMW', model: 'Q3', price: 35000 });

myCar.sayHi('myCar');
myCar1.sayHi('myCar1');

myCar.changePrice(100000000000);
console.log(myCar);

//Итоги
// 1. у каждого обьекта есть свойство prototype
// 2. в этом свойстве есть ссылка на его прототип т.е другой обьект
// 3. При создании литерала обьекта в свойство __proto__ записывается ссылка на функция.prototype - по умолчанию

const objA = {
  x: 1,
};
console.log(objA.__proto__ === Object.prototype); //true

//4. Функция-конструктор это просто функция
//5. Всю магию делает оператор new
//6. Если функция вызывается через new, создается пустой обьект
//7. Функция вызывается в контексте созданного обьекта т.е в this записывается ссылка на него
//8. В свойство this.__proto__ записывается ссылка на обьект функция.prototype т.е Car.prototype это ПРОТОТИП будущего обьекта (экземпляр)
//9. Ссылка на обьект возвращается в место вызова new Функция()

/******************************************************************** */

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: 'mango@mail.com', password: 123456 });
console.log(mango);

mango.changeEmail('hjhk@mail.com');
console.log(mango);

/** Статические свойства и методы
 * - статические свойства и методы доступные только на самом конструкторе
 * - В статических методах не нужен this
 */

console.log(Math.round(5.1));
console.log(Math.PI);

//в конструктор мы добавляем свойство оно не будет доступно в экземплярах

//добавляем в конструктор статическое свойство
User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе';

//добавляем в конструктор свойство (метод)
User.logInfo = function (obj) {
  console.log('user.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

console.dir(User);

//статический метод на нашем конструкторе который просто принимает наш обьект и логирует с него информацию

User.logInfo(mango);
console.log(mango);