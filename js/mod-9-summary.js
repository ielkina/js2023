//**! Асинхронность */

// Весь код выполняется процессором вашего компьютера. Код который мы писали до сих пор был синхронным, то есть занимал процессор на все время своего выполнения. Например, скорость выполнения цикла для итерации по массиву зависит от скорости процессора.

// Есть операции которые взаимодействуют с внешним миром. Например, обмен данными с сервером по сети, что намного медленнее, чем получение их из памяти. Если такие операции обрабатываются синхронно, то процессор простаивает пока идет сетевой запрос на сервер, вместо того чтобы выполнять другой код.

// Синхронный код выполняется последовательно, каждая инструкция ожидает пока выполнится предыдущая. Когда вы вызываете функцию, которая выполняет длительное действие, это останавливает программу на всё время её выполнения. То есть в модели синхронного программирования все происходит по очереди.

// То есть в единицу времени все также может выполняться только одна операция, потому что JavaScript однопоточный. Асинхронное программирование достигается путем отложенных вызовов функций, где инициализация асинхронной операции и обработка её результата это разные действия.

// Следующий код - асинхронный. С функцией setTimeout() мы познакомимся дальше. Сейчас о ней нам нужно знать только то, что она принимает два параметра: callback-функцию, которая будет вызвана по истечении времени, которое мы передаем вторым аргументом.

// Will run first
console.log('First log');

setTimeout(() => {
  // Will run last, after 2000 milliseconds
  console.log('Second log');
}, 2000);

// Will run second
console.log('Third log');

// Функция setTimeout() отрабатывает синхронно и регистрирует отложенный вызов переданной callback-функции, которая будет вызвана асинхронно, через указанный промежуток времени.

//! Многопоточность

// Не путайте асинхронность и многопоточность (параллелизм) - это разные модели программирования. Приведем простую аналогию, которая все расставит по своим местам. Представьте, что вы шеф в ресторане и приходит заказ на кофе и тосты.

// Синхронный однопоточный подход - вы сами сначала готовите кофе, затем тосты и подаёте их, после чего убираете на кухне.
// Асинхронный однопоточный подход - вы начинаете готовить кофе и устанавливаете таймер, затем начинаете готовить тосты и так же устанавливаете таймер. Пока кофе и тосты готовятся, вы убираете на кухне. Когда таймеры срабатывают, вы снимаете с огня кофе, достаете тосты и подаёте их.
// Многопоточный подход (параллелизм) - вы нанимаете двух помошников, одного для приготовления кофе, а другого для тостов. Теперь у вас есть проблема управления помошниками (потоками), чтобы они не конфликтовали друг с другом на кухне при совместном использовании ресурсов.

// В асинхронных однопоточных процессах у вас есть график задач, где некоторые задачи зависят от результата работы других. По мере выполнения каждой задачи вызывается код для обработки её результата. Но вам нужен только один работник для выполнения всех задач, а не один работник на задачу.

//! Таймеры

// Внутренний таймер-планировщик браузера позволяет откладывать вызов функции на определенный период времени. Для этого есть тайм-ауты и интервалы, которые контролируют когда и как часто вызывается функция. Таймеры реализованы в браузере, а не встроенны в язык, и доступны на глобальном объекте window.

//! Таймаут

// Метод setTimeout() позволяет запланировать запуск функции через определённое время.

const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// callback - функция, выполнение которое необходимо запланировать.
// delay - время в миллисекундах, через которое callback-функция будет вызвана один раз.

// Дополнительные аргументы (arg1, arg2 и т. д.) будут переданы callback-функции во время вызова. Возвращает цифровой идентификатор созданного таймера, который используется для его удаления.

// https://codepen.io/goit-academy/pen/oNZPVjw

// Если нам, по какой-то причине, нужно отменить вызов функции внутри таймаута, используется метод clearTimeout(id), которая принимает идентификатор таймера и очищает (удаляет) его.

const greet = () => {
  console.log("Hello!");
};

const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);

// Поскольку мы вызвали clearTimeout(), который исполнится раньше чем будет вызвана функция greet(), таймер с timerId будет удалён и регистрация отложенного вызова greet() отменится. Поэтому в консоль ничего не выведется.

//! Интервал

// Метод setInterval() - это простой способ повторения кода снова и снова с установленным промежутком времени повторений. Синтаксис и параметры такие же как у setTimeout(). В отличие от setTimeout(), интервал запускает выполнение функции не один раз, а регулярно повторяет её через указанный промежуток времени. Остановить исполнение можно вызовом метода clearInterval(id).

const timerId = setInterval(callback, delay, arg1, arg2, ...);

// При клике на кнопку «Start» запустим интервал и будем каждую секунду выводить в консоль строку. Используем Math.random() чтобы строки были разные. По клику на кнопку «Stop» вызовем clearInterval() и передадим идентификатор интервала который надо остановить.

// https://codepen.io/goit-academy/pen/dyvqrNZ

//! Частота срабатывания счетчика

// У браузерного таймера есть минимальная возможная задержка. В современных браузерах она колеблется примерно от 0 до 4 миллисекунд. В более старых браузерах задержка может быть больше и достигать 15 миллисекунд. По стандарту, минимальная задержка составляет 4 миллисекунды, так что разницы между setTimeout(callback, 1) и setTimeout(callback, 4) нет.

// Таймер может срабатывать реже чем указано в параметре delay, потому что при слишком большой загрузке процессора некоторые запуски функций-интервалов будут пропущены. Браузеры продолжают выполнять таймауты и интервалы даже если вкладка браузера неактивна, но при этом снижают частоту срабатывания таймеров.

//! Дата и время

// Класс Date абстрагирует большую часть работы с датами напрямую. Это позволяет нам представлять моменты во времени как объекты и манипулировать ими заранее определёнными методами. Используя возможности класса Date можно создавать часы, счетчики, календари и другие интерактивные элементы интефрейса.

//!Создание даты

// Экземпляр объекта Date это объект представляющий определённый момент времени. Создание даты без аргументов, возвращает объект хранящий дату и время на момент его инициализации, то есть текущие. В строчном преобразовании объект возвращает результат вызова метода toString(), поэтому в первом логе мы получим строку, а не объект.

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

//! Unix время

// Внутренне даты представлены в миллисекундах прошедших с полночи 1 января 1970 года в часовом поясе UTC. Для компьютера это дата начала отсчета всего времени - Unix время. Поэтому при инициализации даты одним числом, оно представляет собой количество прошедших миллисекунд.

console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// Метод getTime() возвращает числовое представление даты (timestamp) - количество миллисекунд прошедших с полночи 1 января 1970 года.

const date = new Date();
console.log(date.getTime()); // 1624021654154

// Удобство этого формата заключается в том, что можно представлять точные моменты времени в виде одного числа и не беспокоиться о датах, строках и часовых поясах, так как можно получить всю необходимую информацию когда необходимо.

//! Установка даты

// При создании экземпляра класса Date, можно установить дату строкой или числами. Строка может описывать только дату или дату и время.

const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// Установка времени в виде строк внутренне вызывает метод Date.parse(), который преобразует строку в число - количество миллисекунд. Именно поэтому формат передаваемой строки очень гибкий. Например, можно не указывать ноль для дней и месяца. Рассмотрим несколько примеров, которые приведут к одинаковому результату.

new Date("2030-03-16");
new Date("2030-03");
new Date("2030");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");

// Другой способ создания новых объектов - это передать семь чисел, которые описывают год, месяц (начинается с 0), день, часы, минуты, секунды и миллисекунды. Обязательны только первые три.

const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

//! Методы

// Экземпляр класса Date имеет множество методов для чтения и записи значений даты и времени. Методы возвращают или присваивают год, месяц, день месяца или недели, час, минуту, секунду и миллисекунду для каждого экземпляра. Эти данные могут быть представлены в виде строки с учетом местного календаря или языка.

//! Геттеры

// Геттеры используются для чтения всей даты или отдельной составляющей. Возвращаемое значение зависит от текущего часового пояса установленного на вашем компьютере.

const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getDate(): ", date.getDate());

// Возвращает день недели от 0 до 6
console.log("getDay(): ", date.getDay());

// Возвращает месяц от 0 до 11
console.log("getMonth(): ", date.getMonth());

// Возвращает год из 4 цифр
console.log("getFullYear(): ", date.getFullYear());

// Возвращает час
console.log("getHours(): ", date.getHours());

// Возвращает минуты
console.log("getMinutes(): ", date.getMinutes());

// Возвращает секунды
console.log("getSeconds(): ", date.getSeconds());

// Возвращает миллисекунды
console.log("getMilliseconds(): ", date.getMilliseconds());

// Существуют эквивалентные версии этих методов, которые возвращают значения в формате UTC (Coordinated Universal Time), а не адаптированные к текущему часовому поясу пользователя.

const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

//* Сеттеры

// Все, что можно прочитать можно записать, методы для записи называются также как геттеры, но начинаются с приставки set. Также для всех методов есть их UTC эквивалент.

const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"

//! Форматирование даты

// Объект даты может быть представлен в разных строчных и числовых форматах. Для этого существует целый набор методов. Например, toString(), toDateString() и toTimeString() возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему - читаемость человеком. Метод toString() возвращает дату целиком, а toDateString() и toTimeString() - только дату и время соответственно.

const date = new Date("March 16, 2030 14:25:00");

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000

//! Промисы

// Поли обещает испечь торт на мой день рождения через две недели. Если все пойдет хорошо и она не заболеет, у меня будет торт. Если Поли будет плохо себя чувствовать, то не сможет испечь торт. В любом случае, мы все равно устроим вечеринку. Обещание - это не гарантия выполнения, мы не знаем, выполнят его или нет. В программировании также есть задачи результат которых мы узнаем только в будущем.

// Promise (обещание, промис) - объект представляющий текущее состояние асинхронной операции. Это обёртка для значения, неизвестного на момент создания промиса. Позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронной операции возвращается своего рода обещание получить результат в будущем.

// Промис может находиться в трёх состояниях:

// Ожидание (pending) - начальное состояние при создании промиса.
// Исполнено (fulfilled) - операция исполнена успешно, с каким-то результатом.
// Отклонено (rejected) - операция отклонена с ошибкой.

// При создании промис находится в ожидании (pending), после чего может завершиться успешно (fulfilled), вернув результат (значение), или с ошибкой (rejected), вернув причину. Когда промис переходит в состояние fulfilled или rejected - это навсегда.

//* ИНТЕРЕСНО
// Когда промис исполнен или отклонен, то говорят что он завершён (settled). Это просто термин описывающий то, что промис находится в любом состоянии кроме ожидания.

// Отличия промиса и callback-функции:

// Коллбэки - это функции, обещания это объекты.
// Коллбэки передаются в качестве аргументов из внешнего кода во внутренний, а обещания возвращаются из внутреннего кода во внешний.
// Коллбэки обрабатывают успешное или неуспешное завершение операции, обещания ничего не обрабатывают.
// Коллбэки могут обрабатывать несколько событий, обещания связаны только с одним событием.

//! Создание

// Промис создается как экземпляр класса Promise, который принимает функцию (executor) в качестве аргумента и сразу вызывает её, ещё до создания и возврата промиса.

const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
});

// Функция executor оповещает экземпляр (промис), когда и как операция, с которой он связан, будет завершена. В ней можно выполнять любую асинхронную операцию, по завершении которой нужно вызвать resolve() при успешном выполнении (состояние fulfilled), или reject() при ошибке (состояние rejected). Значение возвращаемое этой функции игнорируется.

// resolve(value) - функция для вызова при успешной операции. Переданный ей аргумент будет значением выполненного промиса.
// reject(error) - функция для вызвова в случае ошибки. Переданный ей аргумент будет значением отклоненного промиса.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// В переменную promise будет записан промис (объект) в состоянии pending, а через две секунды, после того как будет вызван resolve() или reject(), промис перейдет в состояние fulfilled или rejected и мы сможем его обработать.

//! Метод then()

// Код, которому надо сделать что-то асинхронно, создаёт обещание и возвращает его. Внешний код, получив обещание, навешивает на него обработчики. По завершении процесса асинхронный код переводит обещание в состояние fulfilled или rejected и автоматически вызываются обработчики во внешнем коде.

// После того как промис создан, его результат обрабатывается в callback-функциях. Код пишется так, как будто мы размышляем о том, что может произойти если промис выполнится или нет, не думая о временных рамках.

// Метод then() принимает два аргумента - callback-функции которые будут вызваны когда промис изменит своё состояние. Результат промиса, значение или ошибку, они получат как аргументы.

promise.then(onResolve, onReject)

// onResolve(value) - будет вызвана при успешном выполнении промиса и получит его результат как аргумент.
// onReject(error) - будет вызвана при выполнении промиса с ошибкой и получит её как аргумент.

// В примере, callback-функция onResolve будет вызвана через две секунды если обещание выполнится успешно, а onReject вызовется через две секунды в том случае, если обещание выполнится с ошибкой.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  value => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  error => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");

//*ИНТЕРЕСНО
// Если фукнции onResolve и onReject содержат сложную логику, их, для удобства, объявляют как внешние функции и передают в метод then() по имени.

//! Метод catch()
// На практике в методе then() обрабатывают только успешное выполнение промиса, а ошибку его выполнения в специальном методе catch() для «отлова» ошибок.

promise.catch(error => {
  // Promise rejected
});

// Коллбек-функция будет вызвана при выполнении промиса с ошибкой, и получит её как аргумент.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

//! Метод finally()

// Этот метод может быть полезен если необходимо выполнить код после того, как обещание будет разрешено (fulfilled или rejected), независимо от результата. Позволяет избежать дублирования кода в обработчиках then() и catch().

promise.finally(() => {
  // Promise fulfilled or rejected
});

// Коллбэк-функция не получит никаких аргументов, поскольку нельзя определить выполнено ли обещание или отклонено. Тут будет выполняться код, который необходимо запустить в любом случае.

// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

//! Цепочки промисов

// Метод then() результатом своего выполнения возвращает еще один промис, значением которого будет то, что вернет его callback-функция onResolve. Это позволяет строить асинхронные цепочки из промисов.

// Так как метод then() возвращает промис, до его выполнения может пройти некоторое время, поэтому оставшаяся часть цепочки будет ждать. При возникновении ошибки в любом месте цепочки, выполнение всех последующих then() отменяется, а управление передается методу catch(). Поэтому он находится в конце цепочки промисов.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task");
  });

//! Промисификация функций

// Представим что у нас есть асинхронная функция которая выполянет какую-то асинхронную операцию, например запрос на сервер. Для того чтобы обработать результат, её придётся спроектировать так, что она будет ожидать два коллбэка - для успешного запроса и для ошибки.

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess("success value");
    } else {
      onError("error");
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// Сейчас функция fetchUserFromServer() знает слишком много о том коде, который будет использовать результат её работы. Она ожидает коллбэки и отвечает за их вызов при определённых условиях. То есть, мы передаём что-то внутрь функции (коллбэки) и надеемся что оно отработает правильно - это не хорошо.

// Лучше если функция не заботится о том коде, который будет использовать её результат. Она просто выполняет какую-то операцию и возвращает результат своей работы во внешний код. Для того чтобы вернуть результат асинхронной операции, из функции необходимо вернуть промис. Промисификация - это преобразование функции с колбеками так, чтобы она не принимала коллбэки, а возвращала промис.

const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango")
  .then(user => console.log(user))
  .catch(error => console.error(error));

 //* ИНТЕРЕСНО
// Большинство современных библиотек основаны на промисах. При вызове метода для асинхронной операции его результат доступен как промис к которому можно прицепить обработчики в методах then() и catch().

//! Методы класса Promise

// Есть задачи, в которых необходимо работать с целым набором промисов. В одном случае необходимо дождаться выполнения всех сразу, и только потом обрабатывать их результат, а в другом достаточно дождаться выполнения любого, проигнорировав остальные и т. п. Именно для этих случаев у класса Promise есть статические методы для работы с одним или группой промисов.

//* Promise.all()

// Принимает массив промисов, ждет их исполнения и возвращает промис. Если все промисы выполнятся успешно, возвращаемый промис перейдет в состояние fulfilled, а его значением будет массив результатов исполнения каждого промиса. В случае когда хотя бы один из промисов будет отклонён, то возвращаемый промис перейдет в состояние rejected, а его значением будет ошибка.

Promise.all([promise1, promise2, promise3, ...])

// Напишем функцию которая принимает текст для resolve() и задержку в миллисекундах, а результатом своего выполнения возвращает промис. Затем создадим два промиса с разным временем задержки.

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));

  // Коллбэк метода then() будет вызван спустя три секунды, то есть когда выполнится промис promiseB. Промис promiseA выполнится через одну секунду и просто будет ожидать. Если какой либо из промисов будет отклонён, то будет вызван коллбэк метода catch().

  //*Promise.race()

  // Возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится самый «быстрый» из переданных промисов, со значением или причиной его отклонения.

  Promise.race([promise1, promise2, promise3, ...])

  // Когда хотя бы один промис из массива исполнится или будет отклонён, то возвращаемый промис перейдёт в состояние resolved или rejected, а все остальные будут отброшены.

  const makePromise = (text, delay) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(text), delay);
    });
  };

  const promiseA = makePromise("promiseA value", 1000);
  const promiseB = makePromise("promiseB value", 3000);

  Promise.race([promiseA, promiseB])
    .then(value => console.log(value)) // "promiseA value"
    .catch(error => console.log(error));

    // Коллбэк метода then() или catch() будет вызван спустя одну секунду, когда выполнится promiseA. Второй промис promiseB будет проигнорирован.

//! Promise.resolve() и Promise.reject()

// Статические методы для создания мгновенно выполняющихся успешно или отклонённых промисов. Работают аналогично new Promise() за исключением возможности указать задержку, но имеют более краткий синтаксис.

// Fulfilled promise
new Promise(resolve => resolve("success value")).then(value =>
  console.log(value)
);

Promise.resolve("success value").then(value => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject("error")).catch(error =>
  console.error(error)
);

Promise.reject("error").catch(error => console.error(error));

// Эти методы используются при промисификации функций, когда необходимо построить цепочку промисов и начальное значение уже есть. Выполним рефакторинг следующего кода.

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return {
      success: false,
      message: "Guest name must not be empty",
    };
  }

  return {
    success: true,
    message: `Welcome ${guestName}`,
  };
};

const result = makeGreeting("Mango");

if (result.success) {
  console.log(result.message);
} else {
  console.error(result.message);
}

// При использовании колбеков отпадает необходимость возвращать сложные объекты со статусом операции и проверять его во внешнем коде.

const makeGreeting = (guestName, onSuccess, onError) => {
  if (guestName === "" || guestName === undefined) {
    return onError("Guest name must not be empty");
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting(
  "Mango",
  greeting => console.log(greeting),
  error => console.error(error)
);

// Последним шагом будет промисификация функции makeGreeting(), для того чтобы полностью убрать её зависимость от внешнего кода.

const makeGreeting = guestName => {
  if (guestName === "" || guestName === undefined) {
    return Promise.reject("Guest name must not be empty");
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));


//! Цикл событий

//В этой секции вы найдете ссылки на дополнительные материалы о цикле событий в JavaScript - механизму исполнения синхронного и асинхронного кода.

// What the heck is the event loop anyway? | Philip Roberts (video)
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

// Jake Archibald: In The Loop (video)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf

// Tasks, microtasks, queues and schedules (article)
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
