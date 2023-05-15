//Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
//Строка состоит только из букв и пробелов

const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(' ');
const slug = words.join('-');

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);

//первый вариант решения
// const slugify = function (string) {
//   const normalizedTitle = string.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

//   return slug
// }

//второй вариант решения
const slugify = function (string) {

  return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));