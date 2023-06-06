console.log(`smales number`);
//Напиши скрипт поиска самого маленького числа в массиве
//при условии что числа уникальные (не повторяются)

const numbers = [51,18,13,24,7,85,19]
//первый элемент массива
let smallestNumber = numbers[0];
// console.log(smallestNumber);
for(const number of numbers){
  console.log(number);
  //если последующий элемент массива меньше первого 
  //перезаписываем его в переменную number
  if (number < smallestNumber){
    smallestNumber = number;
  }

}
console.log('smallestNumber : ', smallestNumber);