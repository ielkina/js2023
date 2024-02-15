//old school синтаксиса класса
const Car = function ({ brand, model, price } = {}) {
  //конструктор
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

/*Классы*/

class Car1 {
  // порядок важен - сначала статические ➡ конструктор ➡ методы
  // статическое свойство начинаются со слова static и в конце ;
  static description = 'Класс описывающий автомобиль';
  //статический метод
  static logInfo(carObj) {
    console.log('Car.logInfo  -> carObj', carObj);
  }
  //приватное свойство пишется через #,из вне их нельзя но можно использовать в методах класса(стр54)
  //приватные свойства идут на экземпляр, статические на конструкцию
  //приватное свойство бывает не у экземпляра а у класса (в конструкторе его не прописывают)
  //его никак не причитать и не записать из вне, оно доступно только в методах класса
  #test = 'test';
  //синтаксис публичного свойства
  //все что объявляем публичным свойством идет на экземпляр
  mySuperPublicField = 555;
  //конструктор
  constructor({ brand, model, price } = {}) {
    console.log('Выполняется constructor');
    console.log(this);
    this._brand = brand;
    this._model = model;
    this._price = price;
    //тоже самое что и код выше
    this.mySuperPublicField = 555;
  }

  //метод класса

  //публичный метод хранится не на прототипе а в экземпляре, так лучше не делать
  changePrice(newPrice) {
    this.price = newPrice;
    console.log(this.#test);//доступ к значению приватного свойства 
  }

  updateModel = newModel => {
    this.model = newModel;
  };

  // getter получит
  getModel() {
    return this.model;
  }
  // setter изменение
  setModel(newModel) {
    this.model = newModel;
  }

  //вместо этих двух свойств можно сделать гетеры и сетеры

  //гетер или сетер не могут называться также как и свойство c которое они работают
  //поэтому в конструкторе лучше писать свойство чез нижнее подчеркивание иначе будет ошибка
  //get set (функции) попадают на каждый экземпляр
  // getter получит
  get model() {
    return this._model
  }
  // setter изменение
  set model(newModel) {
    return this._model = newModel
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }
}
console.dir(Car1);

console.log(Car1.description);

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
//прототип класса
console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
//экземпляр класса
console.log(carInstance);
//метод класса
Car1.logInfo(carInstance);
//приватное свойство класса
// console.log(carInstance.#test)//SyntaxError
// console.log(carInstance.test)//undefined

//доступ к значению приватного свойства
carInstance.changePrice(2000)


//изменение с помощью методов класса
carInstance.changePrice(2000);
console.log(carInstance.price);
carInstance.updateModel('BMW')
console.log(carInstance.model);
console.log(carInstance.getModel());
carInstance.setModel('Q4')
console.log(carInstance.getModel())
carInstance.setModel('Q5');
console.log(carInstance.model);


//изменение с помощью геттеров и сетеров 
carInstance.model = 'Q4'; //запись значения setter
console.log(carInstance.model); //получение значение getter
console.log(carInstance.price)
carInstance.price = 600000
console.log(carInstance.price)
console.log('carInstance', carInstance);





