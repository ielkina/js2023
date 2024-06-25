console.log('test');

/**
 * Планировщик
 * Метод window.setTimeout(callback, delay, args)
 */

const logMessage = () => {
  console.log('1 лог при вызове callback-функции через 3 секунды');
};

console.log('2 До вызова setTimeout');

//планировщик
setTimeout(
  x => {
    console.log('3 Внутри callback для setTimeout');
    console.log(x);
  },
  2000,
  5
);
//x = 5 - аргумент

console.log('4 После вызова setTimeout');

//синхронный
for (let index = 0; index < 10; index++) {
  console.log(index);
  //синхронный код в приоритете
}

console.log('5 после вызова for');

/**
 * Очистка таймаут  с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}

//? Даже если у отложенной колбэк функции будет нулевая задержка выполнения кода
//? Она будет ставиться в Web Apis(планировщик)
//? в приоритете будет всегда синхронные функции
//? а асинхронные будут выполнены после, так как она будет ждать выполнения синхронного кода
//? в планировщики

console.log('До вызова setTimeout');

setTimeout(() => {
  console.log('Вызов setTimeout');
}, 0);

console.log('После вызова setTimeout');

//! До вызова setTimeout
//! После вызова setTimeout
//! ВЫзов  setTimeout
