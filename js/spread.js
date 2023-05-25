//Операция spread (распыление)
// Array.prototype.concat() и аналогов через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// let numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

// numbers = [1, 2, 3].concat([4, 3, 5]);
// //или
// numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9]];

// console.log(numbers);

//Поиск самой маленькой или большой температуры
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(1, 2, 3));
// console.log(Math.max(1, 2, 3));
// console.log(Math.max(temps));
// Math.min(18, 14, 12, 21, 17, 29, 24);
// console.log(Math.min(...temps));
// console.log(Math.max(...temps));

// // const a = [1, 2, 3];
// // const b = [a] //ссылка на массив a
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [].concat(a);
//или
// const b = [...a];
// // console.log(a);
// // console.log(b);
// // console.log(b===a);
// console.log('a: ', a);
// console.log('b: ', b);

// //при распылении сложных типов делаются не копии а кладется ссылка на элементы
// console.log(a[0] === b[0]); //ссылки на нулевые объекты между собой равны
// console.log(a === b); //два разных массива

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

//Сшиваем несколько массивов в один через concat() и spread

const lastWeekTeams = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTeams.concat(currentTemps, nextWeekTemps)
//или
const allTemps = [...lastWeekTeams, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

//Распыление обьекта
// Object.prototype.assign() и spread

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
//облскул
// const c = Object.assign({}, a, b);

const c = {
  ...a,
  ...b,
};
console.log(c);
