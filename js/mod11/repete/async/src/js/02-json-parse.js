const validJSON = '{"name": "Манго", "age": 3}';
const invalidJSON = '{бэкенд вернул вот такое чудо}';

try {
  console.log(1);
  console.log(JSON.parse(invalidJSON));
  console.log(2);
} catch (error) {
  if (error.name = 'SyntacticsError') {
    console.log('ошибка парса json надо что то сделать');
  }
  console.log(error);
  console.log('ошибка');
}
console.log('после');
