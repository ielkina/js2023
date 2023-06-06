//Напиши функцию findLogin(allLogin, login)
//для поиска логина
//Если логина нет, вывести сообщение `Пользователь [логин] не найден`
//Если нашли логин, вывести сообщение `Пользователь [логин] найден`

const logins = ['avocado', 'kiwi', 'apple', 'ajax'];
// const logonToFind = '';

// const message = logins.includes(logonToFind)
// ? `Пользователь ${logonToFind} найден`
// : `Пользователь ${logonToFind} не найден`

// console.log(message);

//первый вариант
// const findLogin = function (allLogins, logonToFind) {

//   // let message = `Пользователь ${logonToFind} не найден`;
//   for (const login of allLogins) {
//     if (login === logonToFind) {
//       //1
//       //message = `Пользователь ${logonToFind} найден`
//       //return message
//       //или
//       //Если совпадение будет найдено return прервет выполнение функции и вернет результат
//       //2
//       return `Пользователь ${logonToFind} найден`
//     }
//   }
//   //1
//   // return message;
//   //или
//   //Если совпадений не будет найдено return прервет выполнение функции с сообщением "не найден"
//   //2
//   return `Пользователь ${logonToFind} не найден`;
// };

//Второй вариант
const findLogin = function (logins, logonToFind) {
  //переменная logins в параметрах функции и глобальная переменная logins с массивом это две разные функции.
  //задавать в параметры такие переменные не считается ошибкой

  // const message = logins.includes(logonToFind)
  //   ? `Пользователь ${logonToFind} найден`
  //   : `Пользователь ${logonToFind} не найден`
  //   return message;
  //или
  return logins.includes(logonToFind)
    ? `Пользователь ${logonToFind} найден`
    : `Пользователь ${logonToFind} не найден`;
  // false ? 1 : 2//венет 2
  // true ? 1 : 2//вернет 1
};

console.log(findLogin(logins, 'avocado'));
console.log(findLogin(logins, 'kiwi'));
console.log(findLogin(logins, 'apple'));
console.log(findLogin(logins, 'ajax'));
console.log(findLogin(logins, '24'));

//При написании функции не надо передавать в аргументы глобальных переменных
//В функцию стоит передавать аргументы из вне
//Например
// const findLogin = function(allLogins, logonToFind){
// console.log(allLogins, logonToFind);
// }
// findLogin('sdf', 'df')
