/**
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// console.log(`✔ ${result}`);
// console.log(`❌ ${error}`);

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;
  setTimeout(() => {
    if (canFulfill) {
      resolve(`Промис выполняется успешно, с результатом (исполнен, fulfilled)`);
    }
    reject(`Промис выполнялся с ошибкой (отклонён, rejected)`);
  }, 1000);
});

promise.then(
  result => {
    console.log(result);
  },
  error => {
    console.log(error);
  }
);

/**
 * Цепочка промисов (chaining)
 */

/**
 * Promise.prototype.catch(error)
 */

/**
 * Promise.prototype.finally()
 */
