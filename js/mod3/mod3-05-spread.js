//[P]Операция spread (распыление)
// Array.prototype.concat() и аналогов через spread

const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]); //сшитые массивов
console.log(numbers);
let number = [0, 5, 10, ...[1, 2, 3], 4, 5]; //(распыление) создание массива объединив массивы
console.log(number);
const numbers1 = [1, 2, 3].concat([4, 3, 5]);
console.log(numbers1);
//или
const numbers2 = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9]];
console.log(numbers2);

//Поиск самой маленькой или большой температуры
const temps = [18, 14, 12, 21, ...[1, 2, 3], 17, 29, 24, ...[59, 100]];
const temps1 = [18, 14, 12, 21, [1, 2, 3], 17, 29, 24, [59, 100]]; //так не правильно будет NaN
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
console.log(Math.max(temps));//не правильно
console.log(Math.min(...temps)); //под капотом Math.min(18, 14, 12, 21, 17, 29, 24);
console.log(Math.max(...temps));

/*****************************************************************/
const a = [1, 2, 3];
const b = a; //ссылка на массив
console.log(a === b);//true один и тот же массив

const c = [1, 2, 3];
const d = [...c]; //ссылка на массив a который распаковался(скопированы) в массив b
console.log(c === d);//false

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const e = [{ x: 1 }, { y: 2 }, { z: 3 }];
const f = e;
console.log(e === f);//true ссылка на массив

const j = [{ x: 1 }, { y: 2 }, { z: 3 }];
const h = [].concat(j);
console.log(j === h);//false два разных массива

const x = [{ x: 1 }, { y: 2 }, { z: 3 }];
const y = [...x];
console.log(x === y); //false два разных массива, в a и b лежит ссылка на один и тот же массив
console.log(x[0] === y[0]);//true ссылка на один и тот же массив
console.log('x: ', x);
console.log('y: ', y);

//при распылении сложных типов делаются не копии а кладется ссылка на элементы
console.log(x[0] === y[0]); //ссылки на нулевые объекты между собой равны, ссылки в массивах равны
console.log(x === y); //два разных массива, массивы не равны

x[0].x = 1000;

console.log('x: ', x);
console.log('y: ', y);

/***************************************************************/

//Сшиваем несколько массивов в один через concat() и spread(...переменная)

const lastWeekTeams = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];
const allTemps = lastWeekTeams.concat(currentTemps, nextWeekTemps)
console.log(allTemps);
//или
const allTemps1 = [...lastWeekTeams, ...currentTemps, ...nextWeekTemps];
console.log(allTemps1);

//Распыление обьекта Object.prototype.assign() и spread

const t = { x: 1, y: 2 };
const s = { x: 0, z: 3 };
const w = { x: 3, z: 0 };
// облскул
const w1 = Object.assign({}, t, s);

//при распылении массивов порядок распыления важен
//в обьекте значение свойства конечного

//1
const q = {
  ...t,
  ...s,
  x: 20,
  ...w,
  x: 10,
};
console.log(q);

//2
const u = {
  ...t,
  ...s,
};
console.log(u); // 1 - {x:0, y:2, z:3} // 2 - {x:1, y:3, z:2}

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