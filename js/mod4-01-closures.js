//Замыкание

//Функция результатом своей работы может возвращать другую функцию

//Возвращаем функцию во время вызова будет иметь доступ
//ко всем локальным переменным (области видимости)
//родительской функции (той из которой ее вернули)
//Это называется "Замыканием"
//Проще говоря если есть функция внутри функции и при возврате вложенной функции получчаем доступ ко всем локальным данным первоначальной функции

const fnParent = function (parameter) {
  const parent = 'Значение внутренней переменной функции fnParent';

  const fnChild = function () {
    console.log(parameter);
    console.log(parent);
    console.log('Это вызов функции fnChild');
  };

  return fnChild; //Возвращаемая функция будет иметь доступ ко всем локальным функциям и переменным в теле родительской
  //т.е функция innerFn видит переменные в своем теле и в переменные в теле родительской fnA
};

//Замыкаем на области видимости fnParent
const fn = fnParent(555);
fn();

console.log(fn);

//Поваренок

const makeDish = function (chiefName, dish) {
  console.log(`${chiefName} готовит ${dish}`);
};

//при вызове функции повторяется имя шефа это не удобно
makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

makeDish('Poly', 'котлеты');
makeDish('Poly', 'суп');
makeDish('Poly', 'кофе');

//корректнее написать функцию которая при вызове не будет передавать каждый раз имя повара

const makeChief = function (name) {
  // const makeDish = function (dish) {
  //   console.log(`${name} готовит ${dish}`);
  // };
  // return makeDish;
  //или другой синтаксис
  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
};
const mango = makeChief('Mango');
console.log(mango);
const poly = makeChief('Poly');
const katya = makeChief('Катя');

mango('котлеты');
mango('пирожок');
poly('котлеты');
poly('пирожок');
katya('суп');

/*Округлятор*/

const floatingPoint = 3.456789;

//синтаксис округление

const comeInt = Math.round(floatingPoint);
console.log(comeInt); //3
const withDecimals = Number(floatingPoint.toFixed(2));
console.log(withDecimals); //3.46

//синтаксис округленияс помощью функции

const round = function (number, places) {
  return Number(number.toFixed(places));
};
console.log(round(floatingPoint, 2));
console.log(round(floatingPoint, 3));

//синтаксис округления с помощью замыкающей функции

function rounder(places) {
  return function (num) {
    return Number(num.toFixed(places));
  };
}

const rounder0 = rounder(0);
const rounder2 = rounder(2);
const rounder3 = rounder(3);

rounder0(floatingPoint);
console.log(rounder0(floatingPoint));

rounder2(floatingPoint);
console.log(rounder2(floatingPoint));

rounder3(floatingPoint);
console.log(rounder3(floatingPoint));

/*приватные данные и функции - скрытые реализации, интерфейс*/

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;
  // const changeBy = function (amount) {
  //   salary += amount;
  // };
  return {
    raise(amount) {
      // changeBy(amount);
      //  salary += amount;
      //зная методы мы можем изменить данные но в рамках допустимых действий метода
      if (amount > 1000) {
        return 'Ты офигел?';
      }
      salary += amount;
    },
    lower(amount) {
      // changeBy(amount);
      salary -= amount;
      return `Зарплата снижена на ${amount}`
    },
    current() {
      return `Зарплата ${employeeName} - ${salary}`;
    },
  };
};

//salaryManager обьект return функции salaryManagerFactory
const salaryManager = salaryManagerFactory('mango', 5000);
//на прямую поменять данные в обьекте нельзя только через методы

console.log(salaryManager.salary);
console.log(salaryManager.current());
console.log(salaryManager.raise(5000));
console.log(salaryManager.lower(1000));
console.log(salaryManager.current());
console.dir(salaryManager.raise);

const myLibFactory = function () {
  let value = 0;
  const add = function (num) {
    value += num;
  };

  return {
    add: add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();
console.log(myLib);

console.log(myLib.getValue());
myLib.add(10);
console.log(myLib.getValue());


