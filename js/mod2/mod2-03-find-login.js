console.log(`find login`);
//[P]Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение 'Пользователь [Логин] не найден'
// - Ели нашли логин, вывести сообщение 'Пользователь [логин] найден'
//- Сначала через for
//- Потом через for ... of
//- Логика break
// - Метод includes() с тернарным оператором

const logins = ['dfkjhg', 'lsjfh', 'fgh', 'khg', 'slsgh']
const loginToFind = 'fgh';
let message = `Пользователь ${loginToFind} не найден`;

//[x]первый вариант решения итерация

for (let i = 0; i < logins.length; i += 1) {
  const login = logins[i]
  console.log('Login : ', login);
  console.log(`${login} === ${loginToFind}: `, login === loginToFind);

  if (login === loginToFind) {
    console.log(`Ура равны!!!`);
    message = `Пользователь ${loginToFind} найден`
    break
  }
}
console.log(message);

//[x]второй вариант решения  for...of

for (const login of logins) {
  console.log('Login : ', login);
  console.log(`${login} === ${loginToFind}: `, login === loginToFind);

  if (login === loginToFind) {
    console.log(`Ура равны!!!`);
    message = `Пользователь ${loginToFind} найден`
    break
  }
}
console.log(message);

//[x]третий вариант решения includes()

console.log(logins.includes('fgh')); //true
message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
  : `Пользователь ${loginToFind} не найден`;
console.log(message);