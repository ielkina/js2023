console.log(`transform`);

//Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
//Элементов может быть произвольное количество
//Пусть элементы массива в строке будут разделены запятой
//Сначала через for
//Потом через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
// //первый вариант решения
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// //отрезаем последнюю запятую методом slice
// string = string.slice(0, -1);

// console.log(string);

//второй вариант решения
//методом join сшивает элементы массива, в скобках вставляем разделительный знак
const string = friends.join(',')

console.log(string);


//Должно получиться 'Mango,Poly,Kiwi,Ajax'