console.log('test');

/**
 * Создание
 * Unix время
 * Методы
 * Разница времени
 * Date.now()
 */

const date = new Date();

console.log(date);
console.log(date.getTime()); //мсекунды от точки отсчета unix времени
console.log(date.getMonth());
console.log(date.getDay());

// 1 января 1970 00:00 - точка отсчета unix времени

const date1 = new Date().getTime();//создает обьект

const date3 = Date.now() //метод не создает обьект

console.log('date1', date1);

setTimeout(() => {
  const date2 = Date.now();
  console.log('date1', date1);
  console.log('date2', date2);
  console.log(date2 - date3);
}, 3000);

