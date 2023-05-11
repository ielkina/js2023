

































///////////////////////////////////////////////////***** */
//массив
const clients = ['mango', 'poly', 'ajax']
console.dir(clients);
//доступ к элементам в массиве
console.log(clients[1]);
//переопределение
clients[3] = 'mango';
console.log(clients);
//длинна массива
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex);
console.log(clients[lastElementIndex]);
//итерация по массиву (перебор)
for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}
//цикл for  .... of
// for (const variable of iterable){
//   //тело цикла
// }
//variable - переменная которая будет хранить значение элемента на каждой итерации
//iterable - колекция которая имеет перечислимые элементы, например массив

for (const client of clients) {
  console.log(client);
}
const string = 'javascript'
for (const character of string) {
  console.log(character);
}

//операторы break и continue
const clientNameFind = 'poly'
let message;

for (const client of clients) {
  //на каждой итерации будем проверять совпадает ли элемент массива 
  //с именами клиента. Если совпадает то мы записываем в message сообщение
  //об успехе и делаем break что бы искать дальше
  if (client === clientNameFind) {
    message = 'Клиент с таким именем есть в базе данных!'
    break
  }
  //если они не совпадают то запишем в message сообщение об отсутствии имени
  message = 'Клиент с таким именами нету в базе данных!'
}
console.log(message);

const numbers = [1, 2, 18, 4, 5, 29, 7, 8, 34, 10]
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue
  }
  console.log(`${numbers[i]} число больше  чем  : ${threshold}`);
}

//присвоение по ссылке и по значению
// let a = 5;
// //присвоение по значению, в памяти будет созданна еще
// //одна ячейка в которую будет скопированно значение 5 
// let b = a;
// console.log(a);
// console.log(b);
// //изменим значение а
// a= 10;
// console.log(a);
// console.log(b);


const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
console.log(b); // ["Mango", "Poly"]

// Результат повторяется
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

//методы массивов
//Методы split() и join()
//превращает строку в массив, «разбив» её по разделителю delimiter
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message2 = "JavaScript это интересно";
console.log(message2.split(" ")); // ["JavaScript", "это", "интересно"]

//Метод indexOf()
//возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет
const names = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(names.indexOf("Poly")); // 2
console.log(names.indexOf("Monkong")); // -1

//Метод includes()
//проверяет есть ли в массиве элемент со значением value и возвращает true или false
const clients2 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients2.includes("Poly")); // true
console.log(clients2.includes("Monkong")); // false

//Проверка множественных условий с includes()
// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("It is a red fruit!");
// }
// const fruit = "apple";

// if (
//   fruit === "apple" ||
//   fruit === "strawberry" ||
//   fruit === "cherry" ||
//   fruit === "cranberries"
// ) {
//   console.log("It is a red fruit!");
// }

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

//Методы push() и pop()
//Добавляют или удаляют крайние элементы массива. Работают только с крайним левым и крайним правым элементом 
//Метод push() добавляет один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. Возвращает длину массива после добавления элементов.

const numbers3 = [];

numbers3.push(1);
console.log(numbers3); // [1]

numbers3.push(2);
console.log(numbers3); // [1, 2]

numbers3.push(3);
console.log(numbers3); // [1, 2, 3]

numbers3.push(4);
console.log(numbers3); // [1, 2, 3, 4]

numbers3.push(5);
console.log(numbers3); // [1, 2, 3, 4, 5]


//Метод pop() удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод возвращает undefined.


const numbers4 = [1, 2, 3, 4, 5];

console.log(numbers4.pop()); //  5
console.log(numbers4); // [1, 2, 3, 4]

console.log(numbers4.pop()); //  4
console.log(numbers4); // [1, 2, 3]

console.log(numbers4.pop()); //  3
console.log(numbers4); // [1, 2]

console.log(numbers4.pop()); //  2
console.log(numbers4); // [1]

console.log(numbers4.pop()); //  1
console.log(numbers4); // []


//Метод slice()
//slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

const clients5 = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients5.slice(1, 3)); // ["Ajax", "Poly"]
//Если begin и end не указаны, будет создана полная копия исходного массива.
console.log(clients5.slice()); //["Mango", Ajax", "Poly", "Kiwi"]
//Если не указан end, копирование будет от start и до конца исходного массива.
console.log(clients5.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients5.slice(2)); // ["Poly", "Kiwi"]
//Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов
console.log(clients5.slice(-2)); // ["Poly", "Kiwi"]

//Метод splice()
//если исходный массив нужно изменить. Удаляет, добавляет и заменяет элементы в произвольном месте массива.
//Удаление
//Чтобы удалить элементы в массиве, передаются два аргумента.
//splice(position, num)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
//Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы. Например, у нас есть массив оценок, который содержит пять чисел от 1 до 5.

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]

// Добавление
// Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.
//splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
// Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, "yellow", "pink");
console.log(colors);//["red", "yellow", "pink", "green", "blue"]


//Замена
//Замена это операция добавления в которой удаляются элементы в месте добавления новых
//splice(position, num, new_element_1, new_element_2, ...)
// position - указывает позицию (индекс) первого элемента для удаления
// num - определяет количество удаляемых элементов
// Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.

const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]


//Метод concat()
//Объединяет два или более массива в один.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]