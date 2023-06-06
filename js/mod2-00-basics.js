//Знакомство с массивами 
// - Объявление
// - Индексация 
// -Длина
// - индекс последнего эдемента
// - Переопределение
// 'Mango', 'Kiwi', 'Poly', 'Ajax'

const friends = ['Margo', 'Pit', 'Mango', 'Kiwi', 'Poly', 'Ajax'];
console.log(friends.length);//длинна массива
console.table(friends);//вывод в консоль индекса и значения
const lastIndex = friends.length - 1;//индекс последнего элемента массива
console.log(lastIndex);
// console.log(friends.length - 1);
// console.log(friends[5]);//элемент массива
// friends[1] = 'Gary';//изменение элемента массива
// console.table(friends);
// console.count(friends)
// console.countReset(friends);
// console.debug(friends)
// console.dir(friends)
// console.dirxml(friends)
// console.error(friends)
// console.group(friends)
// console.groupCollapsed(friends)
// console.warn(friends)
// console.timeStamp(friends)



// Передача по ссылке и по значению
// - Примитивы и сложные типы
// - Ссылочные равенства(referential equality)
// let a = 10;
// let b = a;
// console.log(a);//10
// console.log(b);//10
// a = 20;
// console.log(a);//20
// console.log(b);//10

// const c = [1, 2, 3];
// const d = c;
// console.log('a', c);
// console.log('b', d);

// c[0] = 500;
// console.log(c);
// console.log(d);
// console.log(c === d);//ссылки на один и тот же массив
// console.log([1, 2, 3] === [1, 2, 3]);//два разных массива

//Перебор (итерация) массива



// - for - если нужен индекс или нужно изменить элементы массива
//- for....of - если индекс не нужен и в массиве ничего менять не нужно

//const friends = ;

// console.log(friends);
// for (let i = 0; i <= lastIndex; i += 1) {
//   // console.log(i);
//   // console.log(friends[i]);//обращение к каждому элементу  массива
//   // friends[i] += '-1'
// }
// console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`
}
//используют в случае получения доступа к индексу или изменения элементов массива

console.table(friends);

for(const friend of friends){
  //friend - локальная переменная
  console.log(friend);
}

//используют если не нужен индекс или вам не нужен изменять элемент массива

//Примеры

