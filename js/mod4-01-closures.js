//Функция результатом своей работы может возвращать другую функцию

//Возвращаем функцию во время вызова будет иметь доступ
//ко всем локальным переменным (области видимости)
//родительской функции (той из которой ее вернули)
//Это называется "Замыканием"

const fnA = function (parameter) {
  const innerVariable = 'Значение внутренней переменной функции fnA';
  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log('Это вызов функции innerFunction');
  };
  return innerFunction;
};

// const fnB = fnA(555);
// fnB();
// console.log(fnB);

//Поваренок

// const makeDish = function (chiefName, dish) {
//   console.log(`${chiefName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

const makeChief = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };
  return makeDish;
};

const mango = makeChief('Mango');
// console.log(mango);
const poly = makeChief('Poly');

mango('котлеты');
mango('пирожок');
poly('котлеты');
poly('пирожок');

/*Округлятор*/

const floatingPoint = 3.456789;
// const comeInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

function rounder(places) {
  return function (num) {
    return Number(num.toFixed(places));
  };
}

const rounder0 = rounder(0);
const rounder2 = rounder(2);
const rounder3 = rounder(3);

rounder0(floatingPoint);
rounder2(floatingPoint);
rounder3(floatingPoint);

console.log(rounder0(floatingPoint));
console.log(rounder2(floatingPoint));
console.log(rounder3(floatingPoint));

/*приветные данные и функции - скрытые реализации, интерфейс*/

const salaryManagerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;
  // const changeBy = function (amount) {
  //   salary += amount;
  // };
  return {
    raise(amount) {
      // changeBy(amount);
      salary += amount
    },
    lower(amount) {
      // changeBy(amount);
      salary -= amount
    },
    current() {
      return `Такая зарплата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('mango', 5000)
console.log(salaryManager.salary);
console.log(salaryManager.current());
salaryManager.lower(1000)
console.log(salaryManager.current());

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
