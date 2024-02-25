/************      Прототипы     **************** */

const array = [1, 2, 3];
console.log(array);
//в консоли браузера мы увидим что у массива есть прототип массива у которого в свою очередь есть прототип обьекта
//Прототипное наследование работает с верху вниз, но снизу вверх не работает
//Первое что найдет то и будет приоритетом
//Если не найдено сделает шаг вниз

/******************************************************* */
const user = {
  name: 'test user a',
  age: 18,

  sayHello() {
    console.log(`sayHello ${this.name}`);
  },

  showAge() {
    console.log(`showAge ${this.age}`);
  },
};

//создаем новые объекты с прототипным наследованием обьекта user

//1

const user1 = Object.create(user);
user1.name = 'user 1';
user1.sayHello();
user1.showAge();
console.log(user1);

//2

const user2 = Object.create(user);
user2.name = 'user 2';
user2.age = 20;
user2.showAge();
user2.sayHello();
console.log(user2);

//3

const user3 = {
  name: 'User 3',
  age: 50,
  sayHi() {
    console.log('say Hi', this.name);
  },
}

const admin = Object.create(user3);
admin.age = 19;
admin.name = 'Nick'
admin.showAge = function () {
  console.log('show Age', this.name, this.age);
};
admin.sayHi()
admin.showAge()

const practiceOwner = Object.create(admin);
practiceOwner.name = 'Owner';
practiceOwner.showAge()
practiceOwner.sayHi()
console.log(practiceOwner);

/*******   Классы  ********* */

class User {
  //статические методы, статические свойства не идут на наш экземпляр класса они остаются только в самом классе
  //пишется перед конструктором со слова static
  static counter = 0;
  static addUser() {
    // мы можем обратиться как до статического свойства через this или и до класса User
    // User.counter += 1;
    //или
    this.counter += 1;
    // console.log(`Number of users ${(this.counter += 1)}`);
    //или
    console.log(`Number of users ${(User.counter += 1 - 1)}`);
  }
  // приватное свойство они доступны для работы только в середине, из вне их вызвать нельзя
  // объявление приватного свойство, также дублируется в конструкторе
  #location;
  // при создании конструктора мы можем передавать дефолтные значения
  // constructor(name, email, age = 18) {
  // если мы не знаем и не хотим контролировать порядок передаваемых значений делаем обьект параметров при создании new а в конструкторе класса при инициализации делаем деструктуризацию 
  // при передаче не существующих аргументов в параметрах подставляются дефолтные значения, так же мы можем передавать патерн обьект параметров
  constructor({ name, email, age = 18, location = 'World', password } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;

    // в середине конструктора мы не можем обратиться к статическому методу(свойству) через this что бы вызвать этот метод потому что this ссылается на будущий экземпляр класса поэтому обращаемся через User(класс)
    // this.addUser() = addUser();//❌

    User.addUser();
  }
  sayHello() {
    // все методы которые будут в классе идут на прототип
    console.log('say Hello', this.name);
  }

  // приватный метод может быть как вспомогательный при работе с классами
  // приватный метод работает только внутри класса

  #getEmail() {
    console.log(this.email);
  }

  // get и set работает в паре
  // get b set должны иметь одинаковое название но различное с названием свойства
  // пара get и set работают с одним свойством одновременно к примеру с #location
  get locale() {
    // get не принимает ни одного параметра никогда он только возвращает
    // верни значение мне данного ключа
    return this.#location;
  }

  set locale(city) {
    //у сеттера обязательно должен быть хотя бы один параметр
    //сетер измени мне значение данного ключа
    this.#location = city

    //вызов приватный методов
    this.#getEmail();

    /* const value = prompt('Enter password');
     if (value === this.password) {
       this.#location = city;
       console.log(this.#location);
       alert(this.#location)
     } else {
       confirm('Не правильный пароль. Попробуешь снова?')
       console.log('Хацкер? 😱 В доступе отказано');
     }*/
  }
}

/*создание нового экземпляра класса на основе User*/

// const test = new User('test', 'test@mail.net');
// //если мы не знаем и не хотим контролировать порядок передаваемых значений делаем обьект параметров при создании new а в конструкторе класса при инициализации делаем деструктуризацию  
// test.sayHello();
// console.log(test)//age 18 подставилось дефолтное значение

const test1 = new User({ name: 'test1', email: 'test1@gmail.net', age: 90 });
test1.sayHello();
// приватный метод не доступный в глобальной видимости
// test1.#getEmail();//❌
console.log(test1);//location: 'World' подставилось дефолтное значение
//создание метода на обьекте и он не попадет в прототип то есть он останеться собственным методом того обьекта который его создал и не забываем правила прототипы работают сверху вниз  а не наоборот
//добавление нового метода в new обьект которые добавляет новое свойство в обьект
test1.addHobby = function (args) {
  this.hobby = args
}
test1.addHobby('dog')
//добавление свойства в обьект
test1.hobby = 'dog'
console.log(test1.email);
// console.log(test1.#location);//SyntaxError, Private
//как достучаться до приватных свойства
//этого можно добиться через доступ к  метода get родительского класса 

//обращаемся к приватному свойству через метод get location 
console.log(test1.locale)//получаем дефолтное значение World
console.log(test1);


//свойства собственные а методы идут на прототип и остаються в классе
//свойства будут записываться в обьект как собственные 
const test2 = new User({
  name: 'test2',
  email: 'test2@mail.net',
  location: 'Lviv',
  password: 'Asbv178456',
  //при создании нового обьекта на основе класса оно не будет присвоено потому как в конструкторе класса не описано свойство 
  newValue: true,
});

test2.sayHello();
//переназначаем приватное свойство с помощью метода set location 
test2.locale = 'Dnipro';
console.log(test2);
//обращаемся к статическому методу класса
console.log(test2.constructor.counter)

/************* Насладоване ************* */

class Avatar extends User {
  //extends могут иметь свой конструктор с собственными свойствами
  constructor({ name, email, location, password, age, damage }) {
    // super (зарезервированное название вызова родительского конструктора). связывает конструктор с родительским конструктором
    super({
      name,
      email,
      location,
      password,
      age,
    });
    //собственное свойство класса
    this.damage = damage;
  }
  attack() {
    console.log(`${this.name} Attack with damage ${this.damage}`);
  }
}

const test3 = new Avatar({
  name: 'test3',
  email: 'test2@mail.net',
  location: 'Lviv',
  password: 'Asbv178456',
  newValue: true,
  damage: 200,
});

console.log(test3.constructor.counter)
test3.attack();

class Zombi extends User {
  // сокращенная форма записи конструктора экземпляра
  constructor({ poison, ...args }) {
    super({ ...args });
    this.poison = poison;
  }

  toBite() {
    console.log(`${this.name} Bite with ${this.poison}`);
  }
}

const test4 = new Zombi({
  name: 'test 4',
  poison: 500,
})
test4.toBite()

//создание нового экземпляра на основе Zombie
class Dog extends Zombi {
  constructor(...args) {
    super({ ...args });
  }
}
const test5 = new Dog({})

console.log(test5);


// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

class Blogger {
  constructor({ name, age, numberOfPosts, topics, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }
  getInfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }
  updatePostCount(value) {
    this.numberOfPosts += value;
  }
  getEmail() {
    return this.email
  }
}

const mango = new Blogger({
  name: 'Mango',
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango);
console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User Mango is 24 years old and has 25 posts
console.log(mango.getEmail());

const poly = new Blogger({
  name: 'Poly',
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User Poly is 19 years old and has 21 posts

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

//Оператор ~ (Bitwise NOT) Заменяет биты операнда на противоположные.
console.log(~1);//-2

//~15	= -16. двоичное описание - 	~``00000000...``00001111 = ``1111``1111``...``11110000

//~0 = -1
//~-1= 0
//~1 = -2

// -(x + 1)

//ели у элемента индекс 0 if его не пропустит
// 0 => false
// -(-1 + 1) => -0 => false

//indexOf возвращается в -1 и превращается в true
// -1 => true
// -(0 + 1) => -1 => true

//!! приведение к Boolean
//!! тоже самое что и выражение Boolean(0)
console.log(Boolean(0));//false
console.log(!0); //Boolean(0) true
console.log(!!0); //Boolean(0) false
console.log(!!!0); //Boolean(0) true


class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      return;
    }
    console.log('Такий товар вже є');
  }
  removeItem(item) {
    const idx = this.items.indexOf(item);
    // if (this.items.includes(item)) {
    //тоже самое что и 
    if (!!~idx) {
      //!!~idx - конвертирует удобное значение для indexOf
      //!! - сразу приведение к boolean
      //то что было 0 станет -1, а то что было -1 конвертирует до 0
      this.items.splice(idx, 1);//1 -количество элементов которые нужно удалить
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍉', '🍇', '🍑', '🍒']);
const items = storage.getItems();
console.table(items);

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

class User1 {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    //если login будет не приватный то будет переполнен call stack
    //потому что при вызове set при проверке параметра он не переназначается а обращается вновь к get и  set, что приводит к переполнению
    return this.#login;
    //если у нас свойство приватное то модно использовать идентичные названия
    //если нет то нельзя использовать идентичные названия
  }
  set login(newLogin) {
    if (this.#login !== newLogin) {
      this.#login = newLogin;
    }
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    if (this.#email !== newEmail) {
      this.#email = newEmail;
    }
  }
}

const mango1 = new User1({
  login: 'Mango',
  email: 'mango@dog.woof',
});
const poly1 = new User1({
  login: 'Poly',
  email: 'poly@mail.com',
});

// mongo1.login = 'a';
console.log(mango1.login); // Mango
mango1.login = 'Mangrove';
console.log(mango1.login); // Mangrove

console.log(poly1.login); // Poly
poly1.login = 'Pollucite';
console.log(poly1.login); // Pollucite



// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updateNote(text, newPriority).

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };
  constructor(note) {
    this.items = note;
  }

  addNote(note) {
    const inArr = this.items.some(({ text }) => text === note.text);
    if (!inArr) {
      this.items.push(note);
    }
  }
  removeNote(text) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    if (!!~idx) {
      //idx !== -1  idx > -1
      this.items.splice(idx, 1);
    }
  }
  updateNote(text, newPriority) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    if (!!~idx) {
      //idx !== -1  idx > -1
      this.items[idx].priority = newPriority;
    }
  }
}

const myNotes = new Notes([]);
myNotes.addNote({
  text: 'Моя перша замітка',
  priority: Notes.Priority.LOW,
});
myNotes.addNote({
  text: ['Моя друга замітка'],
  priority: Notes.Priority.LOW,
});
myNotes.addNote({
  text: 'Моя третя замітка',
  priority: Notes.Priority.LOW,
});
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя четверта замітка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя перша замітка');
console.log(myNotes.items);

myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
console.log(myNotes.items);

// Самостійне опрацювання
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

class Toggle {
  constructor({ isOpen = false} = {}) {
    this.isOpen = isOpen
  }
  toggle() {
    return this.isOpen
  }
}
const firstToggle = new Toggle({ isOpen: true });

console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');

/************************************************ */
// const str = 'Hello world'
// console.dir(typeof str)

// String.prototype.sayTest = function (name) {
//   console.log(`Hello from prototype ${name}`);
// }
// str.sayTest('Artem')

// const arr = [1, 2, 3, 4, 5, 6]
// Array.prototype.customEach = function (arr) {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index]
//     console.log(element);
//   }
//   console.log('❤');
// }
// arr.customEach(arr)


