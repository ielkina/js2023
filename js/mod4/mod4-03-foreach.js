/*Array.prototype.forEach(callback(currentValue, index, array) thisArg)
-поэлементно перебирает оригинальный массив
-Ничего не возвращает
- Заменяет классический for, если не нужно прерывать цикл*/
//для собеседования у forEach есть два аргумента - callback и обьект в контексте которого будет вызываться этот callback

const numbers = [{ 1: 1 }, 5, 10, 15, 20, 25];

numbers.forEach(
  //в параметры перебирающей функции можно передать три значения(number, index, array)
  //number - если значение примитив то будет оригинальное значение если сложное значение (массив или обьект) то ссылка
  function (number, index, array) {
    console.log('number', number);
    console.log('index', index);
    console.log(this);
  },
  {
    a: 10,
    b: 20,
  }
);


