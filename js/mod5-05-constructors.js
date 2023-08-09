/**Основы ООП: класс, экземпляр(обьект), интерфейс
 *
 */

/**
 * Функции-конструкторы
 * - Именование
 * - Операторы new
 * - Свойство Function.prototype есть только у фн конструктора
 */

//Правила создания функции-конструктора
//функции конструкторы. конструктор с js называются в большой буквы

//вместо config можно использовать другое слово
// const Car = function (config = {}) {
const Car = function ({ brand, model, price } = {}) {
  // console.log(config);
  //деструктуризация config
  // const { brand, model, price } = config;
  //2. Функция вызывается в контексте созданного обьекта т.е в this записывается ссылка на него
  // console.log(this);

  // this.brand = config.brand;
  this.brand = brand;
  // this.model = config.model;
  this.model = model;
  // this.price = config.price;
  this.price = price;

  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };

  //3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype т.е Car.prototype
  // это ПРОТОТИП будущего обьекта (экземпляр)
  //4. Ссылка на обьект возвращается в место вызова new Car
};
// console.log(Car.prototype)
// console.log(Car.prototype);

//в прототипах фн конструкторах хранят методы!!!!!!!!!
Car.prototype.sayHi = function (value) {
  // console.log('Car.prototype.sayHi -> this', this);
  // console.log(`Hello ${value}`);
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

//Экземпляр
//1. Если функция вызывается через new, создается пустой обьект
const myCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 }); //new ответственен в создании нового экземпляра
//экземпляр класса Car
// console.log(myCar1);
myCar1.sayHi('"myCar1"');
myCar1.changePrice(10000);

const myCar2 = new Car({ brand: 'Audi', model: 'A6', price: 60000 });
// console.log(myCar2);
myCar2.sayHi('"myCar2"');

const myCar3 = new Car();
// console.log(myCar3);
myCar3.sayHi('"myCar3"');

/******************************************************************************************** */

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

const mango = new User({ email: 'mango@mail.com', password: 123456 });

// console.log(mango)

//Итоги
// 1. у каждого обьекта есть свойство prototype
// 2. в этом свойстве есть ссылка на его прототип т.е другой обьект
// 3. При создании литерала обьекта в свойство prototype записывается ссылка на функция.prototype

const objA = {
  x: 1,
};
// console.log(objA.__proto__ === Object.prototype)//true

//4. Функция-конструктор это просто функция
//5. Всю магию делает оператор new
//6. Если функция вызывается через new, создается пустой обьект
//7.  Функция вызывается в контексте созданного обьекта т.е в this записывается ссылка на него
//8. В свойство this.__proto__ записывается ссылка на обьект функция.prototype т.е Car.prototype это ПРОТОТИП будущего обьекта (экземпляр)
//9. Ссылка на обьект возвращается в место вызова new Функция()

/** Статические свойства и методы
 * -статические свойства и методы доступные только на самом конструкторе
 * - В статических методах не нужен this
 */
User.message =
  'Я статическое свойство, меня нет на экземплярах или в прототипе';

User.logInfo = function (obj) {
  console.log('user.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};
User.logInfo(mango);

//статический метод на нашем конструкторе который просто принимает наш обьект и логирует с него информацию



// console.log(mango);
// console.log(User)

// console.log(Math.round(5.1));
// console.log(Math.PI);
