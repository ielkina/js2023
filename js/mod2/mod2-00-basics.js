/* [P]Знакомство с массивами 
 - Объявление
 - Индексация 
 - Длина
 - индекс последнего эдемента
 - Переопределение
*/

//Обьявление массива
const friends = ['Margo', 'Pit', 'Mango', 'Kiwi', 'Poly', 'Ajax'];
//длинна массива с помощью метода length
console.log(friends.length);//6
console.table(friends);//вывод в консоль индекса и значения
const lastIndex = friends.length - 1;//индекс последнего элемента массива
console.log(lastIndex);//5
//так как индексация массива начинается с 0 необходима это учитывать при определении длинны массива
console.log(friends.length - 1);//5
//вывод элемента массива в консоль [индекс элемента]
console.log(friends[5]);//элемент массива
//переопределение значения элемента массива
console.count(friends)
friends[1] = 'Gary';//изменение элемента массива
console.table(friends);
console.count(friends)
// console.countReset(friends);
// console.debug(friends)
// console.dir(friends)
// console.dirxml(friends)
// console.error(friends)
// console.group(friends)
// console.groupCollapsed(friends)
// console.warn(friends)
// console.timeStamp(friends)

//[P] Передача по ссылке и по значению
// - Примитивы и сложные типы
// - Ссылочные равенства(referential equality)

let a = 10;
let b = a;
console.log(a);//10
console.log(b);//10
a = 20;
console.log(a);//20
console.log(b);//10

const c = [1, 2, 3];
const d = c;
console.log('a', c);//[1, 2, 3]
console.log('b', d);//[1, 2, 3]

c[0] = 500;
console.log(c);//[500, 1, 2, 3]
console.log(d);//[500, 1, 2, 3]
console.log(c === d);//ссылки на один и тот же массив
console.log([1, 2, 3] === [1, 2, 3]);//два разных массива

//[P]Перебор (итерация) массива

// - for - если нужен индекс или нужно изменить элементы массива
//- for....of - если индекс не нужен и в массиве ничего менять не нужно

const friends1 = ['Margo', 'Pit', 'Mango', 'Kiwi', 'Poly', 'Ajax'];

console.log(friends1);

for (let i = 0; i <= lastIndex; i += 1) {
  console.log(i);
  console.log(friends1[i]);//обращение к каждому элементу  массива
  friends1[i] += '-1'
}
console.table(friends1);

for (let i = 0; i < friends1.length; i += 1) {
  friends1[i] += `-${i}`
}

//используют в случае получения доступа к индексу или изменения элементов массива

console.table(friends1);

for(const friend1 of friends){
  //friend - локальная переменная
  console.log(friend1);
}

//используют если не нужен индекс или вам не нужен изменять элемент массива

//Примеры