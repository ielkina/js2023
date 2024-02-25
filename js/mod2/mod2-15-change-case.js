//Напиши функцию changeCase(string) которая заменяет регистр
//каждого символа в строке на противоположный
//Например,если строка "JavaScript", то на выходе быть строка "jAVAsCRIPT"

const string = "JavaScript";
const letters = string.split('');
let invertedString = '';

for (const letter of letters) {
  const isEqual = letter === letter.toLowerCase();
  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log('invertedString: ', invertedString);

//Вариант решения

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
    }
    return invertedString;

};

console.log(changeCase('SDFasdfSAfSdf'));
console.log(changeCase('asdFdad'));
console.log(changeCase('ewrERW4ewwWER'));
console.log(changeCase('aPPle'));


