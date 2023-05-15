//Псевдомассив arguments и Array.from и ...

// const fn = function () {
//   console.log(arguments);

//   //первый метод
//   const args = Array.from(arguments)

//   // for (const arg of arguments) {
//   //   console.log(arg);
//   // }

// };

// fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7);


//Второй метод решения
//передача двух аргументов в функцию
const fn = function (a, b, ...args) {
  //rest(args)- ставится в самом конце 
  console.log(`${a} ${b}`);
  console.log(args);
}

fn('hello', 1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(1, 2, 3, 4, 5, 6, 7);

//Напиши функцию add для сложения произвольного количества аргументов(чисел)
//Операция ... (rest)
console.log('Задача вторая');

const add = function (...args) {
  console.log(args);
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

console.log('Задача третья');

//Напиши функцию filterNumber(array[, number1, ...]) которая:
//- первым аргументов принимает массив чисел
//- после первого аргумента может быть произвольное количество других аргументов которые будут числами.
//- Функция должно вернуть новый массив, в котором будут только те аргументы, начиная со второго
//для которых есть аналог в оригинальном массиве.

const filterNumbers = function (array, ...args) {
  // console.log('array: ', array);
  // console.log('args: ', args);

  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);
      // console.log(`В обоих вариантах есть элемент ${element}`);
    }
  }
  // console.log(uniqueElements);
  return uniqueElements;
};

filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8);
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
filterNumbers([10, 15, 25, 30], 23, 30, 18, 15);
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64);
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));