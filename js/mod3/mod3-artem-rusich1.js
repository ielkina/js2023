'use strick';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

const user = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};

console.log(user.languages.React_Native);
console.log(user.languages.html);
console.log(user.languages['React Native']);
console.log(user['languages']['React Native']);

for (const key in user) {
  console.log(user.key);
  console.log(key);
  console.log(user[key]);
}

const keys = Object.keys(user)
const values = Object.values(user)

for (const key of keys) {
  console.log(key);
  console.log(user[key]);
}

for (const value of values) {
  console.log(value);
  console.log(user[value]);
}

const test = 3;
const test2 = 45;
const value = 'start';
const value2 = 'End';
const user1 = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
  // [value + value2] : 'some value',
  result: test + test2,
};
console.log(user1.result);

user1.age = 29; //изменение свойств ключа
user1.age += 1;
user1.city = 'VN';//добавление ключа

console.log(user1);
console.log(user1.age);

delete user1.city //удаление ключа
console.log(user1);

const user2 = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};

Object.freeze(user2); //блокировка изменение обьекта
user2.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
user2.age = 100;
console.log(user2);

const user3 = {
  name: 'Artem',
  age: 28,
  languages: {
    html: false,
    css: false,
    js: true,
    'React Native': false,
  },
};
// Object.freeze(user);//этот метод не работает если в html документе js фаил подключен через type="module"
const user4 = { ...user3 };
console.log(user4);
const user5 = Object.create(user3);
//правильный синтаксис распылять старый в новый
user5.age = 33;
user5.city = "Grad"
console.log(user5);

for (const key in user3) {
  console.log(key);
  console.log(user3[key]);
  console.log('All', user3[key]);
  if (user3.hasOwnProperty(key)) {
    //аналог include
    console.log('user', user3[key]);
  } else {
    console.log('user and user2', user3[key]);
  }
}
console.log('All', user3[keys]);

//поиск ключа в объекте
const user6 = {
  score: false,
};
//поиск ключа в объекте
if (user6.hasOwnProperty('score')) {
  console.log('yes');
} else {
  console.log('no');
}

if ('score' in user6) {
  console.log('yes');
} else {
  console.log('no');
}

if (user6.score) {
  console.log('yes');
} else {
  console.log('no');
}

const user7 = {
  name: 'Artem',
  age: 28,
  languages: {
    html: true,
    css: false,
    js: true,
    ReactNative: false,
  },
  sayHello() {
    //this будет тот кто  вызвал
    console.log(`My name ${this.name}`);
    console.log(this);
  },
  iKnow() {
    const keys = Object.keys(this.languages);//ключи
    console.log(keys);
    const values = Object.values(this.languages);//значение ключей
    console.log(values);
    const entries = Object.entries(this.languages);//массивы из [[ключ: значениями]]
    console.log(entries);
    // const keys1 = Object.keys(this);
    console.log(keys);

    for (const key of keys) {
      if (typeof this[key] === 'function') {
        continue;
      } else {
        console.log(key);
      }
    }

    for (const key of keys) {
      if (this.languages[key]) {
        console.log(key);
      }
    }

    console.log(keys);

    for (const key in this.languages) {
      console.log(key);
      if (this.languages[key]) console.log(key);
    }
  },

  // деструктуризированный
  iKnow() {
    const { languages } = this;
    const keys = Object.keys(languages);
    const values = Object.values(languages);
    const entries = Object.entries(languages);
    // const keys = Object.keys(this);
    for (const key of keys) {
      if (typeof key === 'function') {
        continue;
      } else {
        console.log(key);
      }
    }
    console.log(keys);
    console.log(values);
    console.log(entries);
    for (const key of keys) {
      console.log(key);
      if (languages[key]) {
        // console.log(key);
      }
    }
    console.log(keys);

    for (const key in languages) {
      console.log(key);
      if (languages[key]) console.log(key);
    }
  },
};

const user8 = Object.create(user7);
user8.name = 'Den';

user7.sayHello();
user8.sayHello(); //this будет тот кто  вызвал

//[P]Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об 'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

const user9 = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user9.skills = {
  run: true
}
user9.mood = 'happy';
user9.hobby = 'skydiving';
user9['premium'] = false;
const key = 'premium';
user9[key] = false;
console.log(user9);
for (const key in user9) {
  console.log(user[key]);
}
const keys1 = Object.keys(user9);
for (const key of keys1) {
  console.log(user9[key]);
}
console.log(keys1);

//[P]Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

const values1 = Object.values(salaries);
for (const value of values1) {
  sum += value;
  console.log(value);
}
console.log(sum);

for (const key in salaries) {
  console.log(salaries[key]);
  sum += salaries[key];
}
console.log(sum);

//[P]Example 3 - Масив об 'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об 'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  {
    name: 'Смарагд',
    price: 1300,
    quantity: 4,
  },
  {
    name: 'Діамант',
    price: 2700,
    quantity: 3,
  },
  {
    name: 'Сапфір',
    price: 400,
    quantity: 7,
  },
  {
    name: 'Щебінь',
    price: 200,
    quantity: 2,
  },
];

function calcTotalPrice(stones, stoneName) {
  // let result;
  // for (const stone of stones) {
  //   if (stone.name === stoneName) {
  //     result = stone.price * stone.quantity;
  //     break;
  //   }
  // }
  // return `${stoneName} : ${result}`;

  for (const stone of stones) {
    if (stone.name === stoneName) {
      return `${stoneName} : ${stone.price * stone.quantity}`;
    }
  }
  return `Такого каменю немає`;
}
console.log(calcTotalPrice(stones, 'Щебінь'));

//[P]Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
Object.freeze(Transaction);
Transaction.DEPOSIT = 'asdnasjkdnjasdjn';//test
console.log(Transaction);

/* Кожна транзакція це об'єкт із властивостями: id, type та amount*/

const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [
    {
      id: 16,
      amount: 1000,
      type: 'deposit',
    },
  ],
  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: Date.now(),
      amount,
      type,
    };
  },
  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    if (amount <= 0) {
      return 'Error';
    }
    const item = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(item);
  },
  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance || amount <= 0) {
      return 'недостатньо коштів';
    }
    const item = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(item);
    this.balance -= amount;
  },
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Empty';
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};
account.deposit(1000);
account.withdraw(20);
account.getTransactionDetails(16);
account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);
console.log(account);

const arr = ['a', 'b', 'c'];
const idx = arr.indexOf('asdas');

function foo() {
  if (idx === -1) {
    console.log('немає');
    return;
  }
  arr.splice(idx, 1);
}
foo();

console.log(idx);
console.log(arr);

function countup1(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup1(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup1(5));