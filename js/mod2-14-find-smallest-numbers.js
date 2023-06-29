//Напиши функцию findSmilesNumber(numbers)  для поиска самого меньшего числа в массиве
//при условии что числа уникальные (не повторяются)

// const numbers = [51, 18, 13, 24, 7, 85, 19]
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);

//первый вариант решения
const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));
