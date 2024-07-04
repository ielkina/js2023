/**
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

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
    console.log(`✅ ${result}`);
  },
  error => {
    console.log(`❌ ${error}`);
  }
);

function onFulfilled(result) {
  console.log(result);
}

function onRejected(error) {
  console.log(error);
}

promise.then(onFulfilled, onRejected);

/**
 * Цепочка промисов (chaining)
 */

promise
  .then(onFulfilled) //выполнится если хорошо 
  .then(result => {
    console.log(result);
    return 1;
  })
  .then(
    x => {
      console.log(x);
      throw new Error('ошибка во втором then');
      return 2;
    },
    error => console.log(error)
  )
  .then(
    y => {
      console.log(y);
      return 3;
    },
    error => console.log(error)
  )
  /**
   * Promise.prototype.catch(error)
   */
  .catch(error => console.log(error)) //ели плохо 
  /**
   * Promise.prototype.finally()
   */
  .finally(() => console.log('я буду выполнен в любом случае'));//в любом случае
