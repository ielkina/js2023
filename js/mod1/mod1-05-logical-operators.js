console.log('logical-operators');

//приведение к булю на примере Boolean(value)

// в численном преобразовании null И false приводиться к нулю
console.log(Number(null));
console.log(Number(false));
console.log(Number('0'));

console.log(Boolean('0'));//не пустая строка поэтому в консоли будет true
console.log(Boolean(-5));
console.log(Boolean('xgf'));
//запомните 6 ложных значений (falsy),
//приводятся к false в логическом преобразовании:
// 1. 0,
console.log(Boolean(0));
// 2. null,
console.log(Boolean(null));
// 3. NaN,
console.log(Boolean(NaN));
// 4. undefined,
console.log(Boolean(undefined));
// 5. пустая строка "",'', ``,
console.log(Boolean(''));
// 6. или false.
console.log(false);
// Абсолютно все остальные приводят к тру

console.log();

//Логическое И (оператор &&)
//запинается на лжи
//Возвращает то, на чем запнулось или последний операнд

console.log('&&');

console.log(0 && "hello");//запинается на 0 (false) и возвращает его 
console.log(5 && 6 && 7 && 'hello');//если все условия истины возвращается значение последнего операнда 

//Логическое ИЛИ (оператор ||)
//Запинается на правде 
//Возвращает,  то на чем запнулось или последний операнд

console.log('||');
console.log(5 || 6 || 7 || 9);
console.log(false || 6);
console.log(5 || false);
console.log(null || false || NaN);//если ни одно из значений не выполняется возвращает последнее значение

//Логическое НЕ (оператор !)
//Делает инверсию правда > ложь и ложь > правда

console.log("!");

console.log(!false);//true
console.log(!0);//true
console.log(!1);//
