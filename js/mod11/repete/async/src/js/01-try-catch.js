console.log('text');
/**
 * Обработка ошибок с try...catch
 *  - Синтаксис
 *  - Какие ошибки ловит
 *    - ошибка парсинга (parsing error)
 *    - ошибка выполнения (runtime errors)
 *  - Ловит только ошибки в асинхронном коде
 *    - Как словить ошибку
 *  - Обьект ошибки
 *    - name
 *    - message
 *    - stack
 *  - Блок catch без обьекта ошибки
 */
//Синтаксис
try {
  console.log('До ошибки');
  myVar;
  console.log('После ошибки');
} catch (error) {
  console.dir(error);
  console.log(error.message);
  console.log(error.stack);
  console.log('ошибка');
}

console.log('лог после кода');

//Асинхронные функции

setTimeout(() => {
  try {
    console.log('до ошибка');
    myVar;
    console.log('после ошибка ');
  } catch (error) {
    console.log('ошибка');
  }
}, 100);

// fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html#hoisting
