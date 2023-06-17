//Операция spread (распыление)
// Array.prototype.concat() и аналогов через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]); //сшитые массивов
// console.log(numbers);

// let number = [0, 5, 10, ...[1, 2, 3], 4, 5]; //(распыление) создание массива объединив массивы

// numbers = [1, 2, 3].concat([4, 3, 5]);
// //или
// numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9]];

// console.log(numbers);

// //Поиск самой маленькой или большой температуры
// const temps = [18, 14, 12, 21, ...[1, 2, 3], 17, 29, 24, ...[59, 100]];
// // const temps = [18, 14, 12, 21, [1, 2, 3], 17, 29, 24, [59, 100]]; //так не правильно будет NaN
// // // console.log(Math.min(1, 2, 3));
// // // console.log(Math.max(1, 2, 3));
// // console.log(Math.max(temps));//не правильно
// console.log(Math.min(...temps)); //под капотом Math.min(18, 14, 12, 21, 17, 29, 24);
// console.log(Math.max(...temps));

// ************************************************************************************
// const a = [1, 2, 3];
// const b = a; //ссылка на массив
// console.log(a === b);//true один и тот же массив

// const a = [1, 2, 3];
// const b = [...a]; //ссылка на массив a который распаковался(скопированы) в массив b
// console.log(a === b);//false

// console.log(a);
// console.log(b);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = a;
// console.log(a === b);//true ссылка на массив

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [].concat(a);
// console.log(a === b);//false два разных массива

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];
// console.log(a === b); //false два разных массива, в a и b лежит ссылка на один и тот же массив
// console.log(a[0] === b[0]);//true ссылка на один и тот же массив
// console.log('a: ', a);
// console.log('b: ', b);

// //при распылении сложных типов делаются не копии а кладется ссылка на элементы
// console.log(a[0] === b[0]); //ссылки на нулевые объекты между собой равны, ссылки в массивах равны
// console.log(a === b); //два разных массива, массивы не равны

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

// *******************************************************************************************
//Сшиваем несколько массивов в один через concat() и spread(...переменная)

// const lastWeekTeams = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];
// // const allTemps = lastWeekTeams.concat(currentTemps, nextWeekTemps)
// //или
// const allTemps = [...lastWeekTeams, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//Распыление обьекта Object.prototype.assign() и spread

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const c = { x: 3, z: 0 };
//облскул
// const c = Object.assign({}, a, b);

//при распылении массивов порядок распыления важен
//в обьекте значение свойства конечного
//1
const d = {
  ...a,
  ...b,
  x: 20,
  ...c,
  x: 10,
};
//2
// const c = {
//   ...b,
//   ...a,
// };
console.log(d); // 1 - {x:0, y:2, z:3} // 2 - {x:1, y:3, z:2}

const defaultSettings = {
  theme: 'light',
  hideSidebar: false,
  showNotification: true,
};

const userSettings = {
  theme: 'dark',
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

