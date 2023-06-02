// console.log(Boolean('false'));
//или инверсия
// console.log(!!"false");//двойная инверсия
// console.log(!"false");//обычная инверсия

//# var где бы мы не написали код var будет подниматься на верх. не будет  считаться ошибкой
// console.log(a);
// var a = 10;

//# будет считаться ошибкой, можно менять значение.
// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);
// let b;
// console.log(b);
// b = 30;
// console.log(a, b);

//# нельзя менять значение объявляется один раз.
//const

//типы данных
//примитивные типы данных, все являются имутабельные типы т.е их можно только переназначить и не меняют свой тип но меняет свое значение в середине
//Number
//string
//Boolean
//Undefined
//null - пустота, ничего

// let a = 10;
// // a = a + 2;
// //или
// // a = 12;
// a += 2;
// console.log(a);

//Математические операторы

//Вывести на экран общее количество фруктов. Разницу яблок винограда

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes; //подставляем значение переменных т.е 47 + 135

// console.log(total); //182

// // const diff = grapes - apples;
// // console.log(diff);
// const diff = apples - grapes;

// console.log(-diff);

//комбинированные операторы
//Замена выражений переназначения комбинированными оператором +=

// let students = 100
// // students = students + 50; //150
// //или
// students += 50;//150 короткий вариант students + 50
// console.log(students);

//приоритет операторов
//разбери приоритет операторов в инструкции присваивания значения переменной result

// const result = 108 + 223 - 2 * 5;
// const a = 2 * 5;
// const b = 108 + 223;
// const c = b - a;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(result);

//класс Math
//напиши скрипт, который выводит в консоль отдельные округленные вниз/вверх и т.д
//значение переменной value. Используй метод Math.floor(), Math.ceil(), Math.round().
//Проверь что будет в консолеи при значениях 27,3 27,9

// let value = 27.3;
// // value = 27.5;
// value = 27.999;
// value = 7.008;
// console.log(Math.abs(-6)); //возвращает положительное число
// console.log(Math.abs(6)); //возвращает положительное число
// console.log(Math.floor(value)); //округление числа до целого в меньшую сторону
// console.log(Math.ceil(value)); //округление числа до целого в большую сторону
// console.log(Math.round(value)); //округление числа по математическим правилам
// console.log(Math.PI);

//Шаблонные рядки
//Сложи предложение с помощью шаблонных строк A has B bots in stock, где А, В - переменные вставлены в строку
//строка всегда доминирующий тип данных при конкатенации, при остальных операторах будет number

// const a = 10 + '10';
// const b = 10 - '10';
// const c = 10 * '10';

// console.log(a, b, c); //a-string 1010, b-number,c-number
// console.log(typeof 10 + '10'); //number

// const companyName = 'Cyberdyne System';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} boots in stock`;

// console.log(message);
// console.log(typeof message);

//Методы строк и чейнинг
//Напиши скрипт, который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в килограммах на квадрат высоты человека человека в метрах.
//Вес и высота сохраняются в переменные weight и height, но никак не числа, а в виде строки (специально для задачи ). Не целые числа будут заданы в виде 24,7 или 24,7, то есть как разделителем дробной части может быть точка

//заменить разделительный знак на очку
//Привести к числу
//Вычислить индекс массы(возвести в степень)
// let weight = '88,3';
// let height = '1.75';
// // weight = weight.replace(',', '.')//заменяет данные("что заменяем", "на что заменяем")
// // height = height.replace(',', '.')
// // weight = Number(weight);
// // height = Number(height);
// // weight = Number(weight.replace(',', '.'));

// // height = Number(height);
// // height = +height;
// // const bmi = weight / Math.pow(+height, 2);
// // const bmi = weight / Math.pow(Number(height), 2);
// // const bmi = Number(weight.replace(',', '.')) / Math.pow(Number(height), 2);
// // const bmi = Number(weight.replace(',', '.')) / Number(height) ** 2;
// const bmi = Number(
//   (Number(weight.replace(',', '.')) / Number(height) ** 2).toFixed(1)
// );

// // console.log(bmi.toFixed(1)); //28.8
// console.log(bmi); //28.8
// console.log(typeof bmi); //28.8

//Операторы сравнения и приведение типов
//Каким будет результат выражения
// console.log(5 > 4); //true два числа
// console.log(10 >= '7'); //true  приведение типов
// console.log('2' > '12');//true  две строки 2 > 1, 32> 31 берет по unicode
// console.log('4' == 4);//true  приведение до типов данных
// console.log('6' === 6);//false строгое сравнение разные типы данных
// console.log('false' === false);//false разные типы данных
//true = 1
//false = 0
// console.log(1 == true); //true 1 целое число
// console.log(1 === true); //false разные типы данных число и boolean
// console.log('0'==false);//true
// console.log('0' === false);//false разные типы данных
// console.log('Papaya' < 'papaya'); //true посимвольно "Р" сравниваем с "р" unicode
// console.log('Papaya' === 'papaya');//false 50===70 сравнение по unicode
// console.log(undefined == null);//
// console.log(undefined === null);

//Логические операторы
//&& если в двух вариантов будет true вернет значение, если false вернет false
//возвращает первый false или последний true
// console.log(true && 3); //3 запинается на true
// console.log(false && 3); //false
// console.log(true && 4 && 'kiwi'); //kiwi возвращает последний true
// console.log(true && 0 && 'kiwi'); //0 возвращает false

//|| - возвращает первое значение которое приводит к true или последний false
// console.log(true || 3); //true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); //true
// console.log(null || 2 || undefined); //2
// //&& возвращает null(0) который не может быть больше нуля
// console.log((1 && null && 2) > 0); //false false > 0
// console.log((1 && null && 2) >= 0); //true

// console.log(null || (2 && 3) || 4); //3
//null - false
//2&&3 - 3 - && возвращает true или последний false если нет true
//4 - true
//||-возвращает первый тру или последний false если в выражении нет true

//Значение по умолчанию и оператор нулевого слияния (??)
// const incomingValue = 5;
// const result = incomingValue + Number('klhgl')
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value);

//|| или он работает на 6 значение которые возвращают false
//?? он работает на два значение null и undefined
// const incomingValue = 5;
// let test;
// console.log(test);
// test = 0;
// const value = test ?? 'some value';
// console.log(value);


