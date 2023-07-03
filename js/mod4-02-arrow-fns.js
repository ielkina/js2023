/*Стрелочные функции 
объявление
явный и не явный возврат
аргументы
неявный возврат обьекта*/

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };
// const addArrow = (a, b, c) => {
//    console.log(a, b, c);
//    return a + b + c;
// };
// const addArrow1 = a => {
//    console.log(a);
//    return a;
// };
// const addArrow0 = (...args) => {
//    console.log(args);
//    return;
// };

// //

// console.log(add(5, 10, 12));
// console.log(addArrow(5, 10, 12));
// console.log(addArrow1(5));

// console.log(addArrow0(5));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA);

// const onGetPositionSuccess = position => {
//   console.log(position);
// };
// const onGetPositionError = error => {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
//   //или
//   // function (position) {
//   //   console.log(position);
//   // },
//   // function (error) {
//   //   console.log(error);
//   // }
// );

/*filter*/

const filter = function (array, callback) {
  const filteredArray = [];
  for (const item of array) {
    const passed = callback(item);
    if (passed) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

// const callback1 =  value => value >= 3;
// const callback2 =  value => value <= 3;
// const getFruitsQuantity =  fruits=> fruits.quantity >= 120;

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
console.log(r1);
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], value => value <= 3);
console.log(r2);

const fruits = [
  { name: '🍎', quantity: 200, isFresh: true },
  { name: '🍍', quantity: 150, isFresh: false },
  { name: '🍌', quantity: 100, isFresh: true },
];

const r3 = filter(fruits, fruits => fruits.quantity >= 120);
console.log(r3);
