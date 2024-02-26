//[P]Массивы

//индексация массива начинается с 0
const array = [1, 2, 3, 4, 5, 6]
console.log(array);
console.log(typeof array);//проверка на тип данных
console.log(Array.isArray(array));//возвращает буль в зависимости с каким типом данных работаем
const first = array[0];//обращение к элементу массива
console.log(first);
const last = array[-1]
console.log(last);//undefined
const last1 = array[array.length - 1]//последний элемент массива
console.log(last1);
console.log(array.length); //длинна массива

//перебор массива
for (let i = 0; i < array.length; i += 1) {
    const item = array[i]
    //перебор массива
    if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j += 1) {//перебор вложенного массива
            console.log(item[j]);
        }
        continue
    }
    console.log(array[i]);
}

const array1 = [1, 'hello', null, [1, 2, 3]]; //[]-литерал массива

//если необходим перебор массива без изменений
for (let item of array1) {
    if (typeof item === 'string') {
        item = false;
    }
}
console.log('for of', array1);

//если необходим доступ до элементов(индекса) массива
for (let i = 0; i < array1.length; i += 1) {
    if (typeof array1[i] === 'string') {
        array1[i] = false;
    }
}
console.log('for', array1);

const array2 = [1, 'hello', null, true, [1, 2, 3]]; //[]-литерал массива

let i = 0;

while (i < array2.length) {
    console.log(array2[i]);
    if (typeof array2[i] === 'string') {
        array2[i] = false;
    }
    i += 1;
}
console.log(array2);

const array3 = [1, 'hello', null, true, [1, 2, 3]]; //[]-литерал массива

let value = 1; //1 ячейка памяти
let test = value //2 ячейка памяти которая ссылается на 1
value += 10 //изменение первой ячейки памяти
console.log('value', value);
console.log('test', test)

//в примитивных типах создается ячейка памяти
// 1 = 1
// 2 = 1
// 1 +=10=11
let a = 1
let b = a
console.log(value === test);//false

//в сложных типах данных создается ссылка на ячейку памяти
const array4 = [1, 2, 3];
const copy = array4;
array4.push(4, 5);
copy.push(6, 7);
console.log(array4);
console.log(copy);
console.log(copy === array4); //true

//в примитивах сравниваются по значению
console.log(1 === 1);//true
console.log('a' === 'a');//true
//в сложных типах сравниваются по ссылке
console.log([1, 2] === [1, 2]);//false два разных массива, записаны в разных ячейка поэтому это два разных массива

//мутабельные типы данных

//примитив не является мутабельным типом данных
//все примитивные типы данных имеют присвоение по значению
let num = 1;
num += 15;
console.log(num); //не мутабельный тип данных

//сложный тип данных является мутабельным
let array5 = [1, 2];
//не переназначая переменную мы можем внести в нее изменение
array5.push('a');//мутировали значение
array5 = 'string'//перезаписывание значения (изменение массива)
// array5.pop();
// array5.length = 0; //сокращение массива до 0(очистка массива)
// array5.length = 10; //добавление
console.log(array5);

// *****************************************************************************
//             0    1       2      3        4
const array6 = [1, 'Hello', null, true, [1, 2, 3]];
//             1    2       3      4        5
console.log(typeof array6);
console.log(Array.isArray(array6));
Array.isArray(array6) //- повертає true/false в залежності від того чи ми працюємо з масивом чи ні
console.log(array6[3]);
const first1 = array6[0];
console.log(first1);
const last2 = array6[array6.length - 1];
console.log(array6.length);
console.log(last2);

for (let i = 0; i < array6.length; i += 1) {
    const item = array6[i];
    if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j += 1) {
            console.log(item[j]);
        }
        continue;
    }
    console.log(array6[i]);
}

const array7 = [1, 'Hello', null, true, [1, 2, 3]];

for (let item of array7) {
    console.log(item);
    if (typeof item === 'string') {
        item = false
    }
}
console.log('for of', array7);

for (let i = 0; i < array7.length; i += 1) {
    if (typeof array7[i] === 'string') {
        array7[i] = false;
    }
}
console.log('for', array7);

const array8 = [1, 'Hello', null, true, [1, 2, 3]];

let ite = 0;
while (ite < array8.length) {
    console.log(ite);
    if (typeof array8[ite] === 'string') {
        array8[ite] = false;
    }
    ite += 1;
}

console.log(array8);

let value1 = 20;
let test1 = value1;
value1 = 'hello';

console.log('value', value1);
console.log('test', test1);

const array9 = [1, 2, 3, 4, 5];
const copy1 = array9;
array9.push(6, 7);
copy1.push(8, 9)
console.log(array9 === copy1);//true
console.log(array9);// [1, 2, 3, 4, 5,6,7,8,9]
console.log(copy1);

console.log(1 === 1);//true
console.log('hello' === 'hello');//true
console.log([1, 2, 3] === [1, 2, 3]);//false

let number = 1;
number += 15;
console.log(number);//16

let array10 = [1, 2, 3];
array10 = 'string';
// array10.push(4)
// array10.pop();
// array10.length = 10;
console.log(array10);

// Перерва до 21.00

//split в массив
//join в строку
//revers переворачивает строку
const str = 'Hello world I`m learning JS';
const arr = str.split('-');//'-' - строку превращает полностью в элемент массива
const arr1 = str.split(' ');
console.log(arr1);
const result = arr1.reverse().join(' ')

//чейнинг
const result1 = str.split(' ').reverse().join(' ')
console.log(str);
console.log(arr);
console.log(result1);

//indexOf - индекс искомого элемента массива
//includes - проверяет наличие искомого элемента в массиве и возвращает буль
const arr2 = ['hello', 'world'];
const idx = arr2.indexOf('hello');//если возвращается -1 значит искомый элемент не найдено

if (arr2.indexOf('world') === -1) {
    console.log("NO");
} else {
    console.log('yes');
}
console.log(idx);//0
console.log(arr2.includes('hello'));//true

if (arr2.includes('world')) {
    console.log('YES');
} else {
    console.log('NO');
}
//      3           4
const arr3 = ['hello', 'world'];
// push pop --добавляют или удаляют с конца массива
arr3.push(1, 'a', [1, 2])
arr3.pop() //удаляет последний элемент в массиве
arr3.pop(3)
arr3.pop()
console.log(arr3);

// shift unshift -- добавляют или удаляют с начала массива
//      0   1      2
arr3.unshift(1, 'a', [1, 2]); //добавляет
arr3.shift();//удаляет
arr3.shift();
arr3.shift();
console.log(arr3);

// slice -- может добавить удалить заменить элемент массива и возвращает копию
const result2 = arr3.slice(1, 3); //(индексы от и до)
console.log('result', result2);
console.log('arr', arr3);

const arr4 = ['hello', 'world', 'js'];
// splice -- не мутирует массив заменяет на копию массива
arr4.splice(1, 1, 'from', 'react', 'node')
arr4.splice(2, 1)
console.log(arr4);
const idx1 = arr4.indexOf('world');
const result3 = arr4.splice(idx1, 1, 'from')
console.log(arr4);
console.log('result', result3);

// concat - сшивает массивы
const arr5 = [1, 2, 3];
const arr6 = [4, 5];
const arr7 = [6, 7];
const result4 = arr7.concat(arr5, arr6)
console.log(arr5);
console.log(result4);

// -----------------------------------//

//[P]Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.

const genres = ['Jazz', 'Blues'];
genres.push('Рок-н-рол');
console.log(genres[0]);
console.log(genres.shift());
genres.unshift('Country', 'Reggae')
console.log(genres);
console.log(genres[genres.length - 1]);//последний элемент массива
const genres1 = ['Jazz', 'Blues'];
genres1.splice(genres1.length - 2, 0, 'Рок-н-рол');
console.log(genres1.splice(0, 1, 'Country', 'Reggae'));
console.log(genres1);

// Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

const values = '10 20';
const arr8 = values.split(' ');
const first2 = Number(arr8[0]);
const last4 = Number(arr8[arr8.length - 1]);
const result5 = first2 * last4;
const result6 = Number(arr8[0]) * Number(arr8[arr8.length - 1]);
console.log(result6);

// Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i += 1) {
    console.log(`${i + 1} - ${fruits[i]}`);
}

for (let i = 0, n = 1; i < fruits.length, n <= fruits.length; i += 1, n += 1) {
    //n(number) - переменная нумерации
    console.log(`${n} - ${fruits[i]}`);
}

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

let names = 'Jacob,William,Solomon,Artem,Iryna';
let phones = '89001234567,89001112233,890055566377, 5464,546654,4646';
names = names.split(',');
phones = phones.split(',');
for (let i = 0; i < names.length, i < phones.length; i += 1) {
    console.log(`${names[i]} - ${phones[i]}`);
}

// Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

const string = 'Welcome to the future';

const arr9 = string.split(' ');
arr9.pop()
arr9.shift()
const result7 = arr9.join(' ')
console.log(arr9);

const result8 = string.split(' ').slice(1, -1).join(' ');
console.log(result7);
console.log(result8);

const arr10 = string.split(' ');
const test4 = arr10.push('1234')
console.log(test4);
console.log(arr10);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

const string1 = 'Welcome to the future';
//приводим строку в массив чтоб использовать на нем метод reverse а потом уже для сшивания в строку используем на нем метод  join
const result9 = string.split('').reverse().join('');
const result10 = string.split('').reverse().join('');
//если нужно поменять слова в обратном порядке то в методах split и join ставим разделительный знак пробел
//если нужно поменять буквы то пустота
console.log(result10);

// Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
langs.sort((a, b) => a.localeCompare(b));
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
console.log(langs);

// нажаль наш варіант був не вірний 😥😥😥

for (let i = 0; i < langs.length; i += 1) {
    if (langs[0] > langs[i]) {
        const result = langs.splice(i, 1)[0];
        langs.unshift(result)
    }
}
console.log(langs);

// Вірні варіанти
// 1 метод бульбашка
// https://www.youtube.com/watch?v=-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21

for (let i = 0; i < langs.length; i++) {
    for (let j = 0; j < langs.length; j++) {
        if (langs[j] > langs[j + 1]) {
            const item = langs[j];
            langs[j] = langs[j + 1];
            langs[j + 1] = item;
        }
    }
}
console.log(langs);

// Сучасний варіант
langs.sort((a, b) => a.localeCompare(b))
console.log(langs);

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

const numbers = [94, 2, 17, 94, 1, 23, 37];
let min = numbers[0]; // undefined
for (const value of numbers) {
    if (value < min) {
        min = value;
    }
}
console.log(min); // 1

const arr11 = [1, 2, 3] + [4, 5];
console.log(arr11);

let x = 7;
let y = null;
let p = 9;

console.log(p || x && y);