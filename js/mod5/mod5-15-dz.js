//[P]Задание 1

//Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order('Big Mike'));
console.log(pizzaPalace.order('Viennese'));
console.log(pizzaPalace.order('Smoked'));
console.log(pizzaPalace.order('Four meats'));

//[P]Задание 2

// // Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// // После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//[P]Задание 3

// //Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog());

//[P]Задание 4

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной child.

const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = 'Jason';
child.age = 27;

console.log(parent.hasOwnProperty('surname'));

//[P]Задание 5

//Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Change code below this line

const parent1 = Object.create(ancestor);
parent1.name = 'Stacey';
parent1.surname = 'Moore';
parent1.age = 54;
console.log(parent1);



const child1 = Object.create(parent1);
child1.name = 'Jason';
child1.age = 27;
console.log(child1);
// Change code above this line

console.log(ancestor.isPrototypeOf('parent1'));

//[P]Задание 6

//Используя ключевое слово class объяви класс Car с пустым телом.

// class Car { }
// new Car()

//[P]Задание 7

// Добавь классу Car метод constructor который принимает три параметра:

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car("Audi", "Q3", 36000));

//[P]Задание 8

// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойствами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//[P]Задание 9

// Добавь классу Car два метода.

// getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   // Change code above this line
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
// }

//[P]Задание 10

// Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:

// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    if (!this.items.includes(newItem)) {
      return this.items.push(newItem);
    }
  }
  removeItem(itemToRemove) {
    const idx = this.items.indexOf(itemToRemove);
    if (this.items.includes(itemToRemove)) {
      this.items.splice(idx, 1);
    }
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//[P]Задание 11

// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  getValue(value) {
    return this.value;
  }
  padEnd(str) {
    this.value += str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."

builder.padEnd('^');
console.log(builder.getValue()); // "^.^"

builder.padStart('^');
console.log(builder.getValue()); // "^."

builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//[P]Задание 12

// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

class Car {
  // Change code below this line
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    return (this.#brand = newBrand);
  }
  // Change code above this line
}

const car = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(car.getBrand());
console.log(car.changeBrand('Nissan'));

//[P]Задание 13

//Выполни рефакторинг класса Storage, сделав свойство items приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class Storage1 {
  #items;
  // Change code below this line
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage1 = new Storage1(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage1.addItem('Droid');
console.log(storage1.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage1.removeItem('Prolonger');
console.log(storage1.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//[P]Задание 14

//Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class StringBuilder1 {
  // Change code below this line
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder1 = new StringBuilder1('.');
console.log(builder1.getValue()); // "."
builder1.padStart('^');
console.log(builder1.getValue()); // "^."
builder1.padEnd('^');
console.log(builder1.getValue()); // "^.^"
builder1.padBoth('=');
console.log(builder1.getValue()); // "=^.^="

//[P]Задание 15

//Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

class Car1 {
  // Change code below this line
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

//[P]Задание 16

//Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car2 {
  // Change code below this line
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car2({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

//[P]Задание 17

// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

class Car3 {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    return price > Car3.#MAX_PRICE
      ? 'Error! Price exceeds the maximum'
      : 'Success! Price is within acceptable limits';
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi1 = new Car3({ price: 36000 });
const bmw1 = new Car3({ price: 64000 });

console.log(Car3.checkPrice(audi1.price)); // "Success! Price is within acceptable limits"
// console.log(Car3.checkPrice(bmw1.price)); // "Error! Price exceeds the maximum"

//[P]Задание 18

// В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User

// Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

//[P]Задание 19

// Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

class User1 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin1 extends User1 {
  // Change code below this line
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Change code above this line
}

const mango = new Admin1({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

console.log(Admin1.AccessLevel.BASIC);
console.log(Admin1.AccessLevel.SUPERUSER);

//[P]Задание 20

// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class User2 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin2 extends User2 {
  // Change code below this line
  blacklistedEmails = [];

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Change code above this line
  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango1 = new Admin2({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango1.email); // "mango@mail.com"
console.log(mango1.accessLevel); // "superuser"

mango1.blacklist('poly@mail.com');
console.log(mango1.blacklistedEmails); // ["poly@mail.com"]
console.log(mango1.isBlacklisted('mango@mail.com')); // false
console.log(mango1.isBlacklisted('poly@mail.com')); // true
