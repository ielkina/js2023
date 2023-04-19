console.log('comparison-operators');

//Операторы сравнения
console.log(15 < 3);//false
console.log(15 <= 3);//false
console.log(15 > 3);//false
console.log(15 >= 3);//false
const x = 5 > 10;
console.log(x);

//Приведение (преобразование) типов к числу
console.log('10' > 5);//операнд справа или с лево приводится к числу
console.log(Number('10'));
console.log(Number(true));//в численном преобразование true приводится к 1
console.log(true > 5);

//Операторы равенства (== и ===) и неравенства (!= и !==)
//! Всегда используем строгое равенство (===) и неравенство (!==)
// = - оператор присваивания
//== - оператор сравнения
//=== - оператор строгого сравнения
// !== - оператор неравенства

// const isEqual = 5 == 5;
// const isEqual ='5' === 5;//false
const isEqual =5 === 5;//true
console.log(isEqual);
