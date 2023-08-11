//old sckool
const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = 'Класс описывающий автомобиль';

Car.logInfo = function (carObj) {
  console.log('Car.logInfo  -> carObj', carObj);
};

const car = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

/**
 * Классы
 * - обьявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публичных свойств и методов классов
 * - геттеры и сеттеры
 */
//классы
class Car1 {
  //статическое свойство
  static aaa = 'aaa';
  //статический метод
  //порядок важен - сначала статические потом конструктор потом методы
  static logInfo(carObj) {
    console.log('Car.logInfo  -> carObj', carObj);
  }
  //приватное свойство пишется через #,из вне их нельзя но можно использовать в методах класса(стр54)
  //приватные свойства идут на экземпляр, статические на конструкцию
  #test = 'test';

  //синтаксис публичного свойства
  mySuperPublicField = 555;

  constructor({ brand, model, price } = {}) {
    console.log('Выполняется constructor');
    console.log(this);
    this.brand = brand;
    this._model = model;
    this._price = price;

    //тоже самое что и код выше
    this.mySuperPublicField = 555;
  }

  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  // changePrice(newPrice) {
  //   this.price = newPrice;
  //   console.log(this.#test);
  // }
  //публичный метод хранится не на прототипе а в экземпляре, так лучше не делать
  updateModel = newModel => {
    this.model = newModel;
  };

  //гетер или сетер не могут называться также как и свойство c которое они работают
  //setter
  // setModel(newModel) {
  //   this.model = newModel;
  // }

  //getter получит
  // getModel() {
  //   return this.model;
  // }

  //фн геттера
  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
}

console.dir(Car1);

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carInstance.model); //

carInstance.model = 'Q4'; //запись значения setter

console.log(carInstance.model); //получение значение getter

console.log(carInstance.price)

carInstance.price = 600000

console.log(carInstance.price)

// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);//true

// console.log('carInstance', carInstance);

// Car1.logInfo(carInstance);

// carInstance.changePrice(2000);

// console.log(carInstance.getModel());

// carInstance.setModel('Q5');
// console.log(carInstance.getModel());
