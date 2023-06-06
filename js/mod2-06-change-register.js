console.log(`change register`);

//Напиши скрипт который заменяет регистр каждого символа в строке на противоположный 
//Например, если строка "JavaScript", то на выходе должен быть строка "jAVAsCRIPT"

const string = "JavaScript";
//split разбивает строку посимвольно на массив
const letters = string.split('')
let invertedString = '';
console.log(letters);

for (const letter of letters) {
  // console.log(letter);
  // //первый вариант решения
  // if (letter === letter.toLowerCase()) {
  //   // console.log(`Эта буква в нижнем регистре`, letter);
  //   invertedString += letter.toUpperCase()
  // } else {
  //   invertedString += letter.toLowerCase()
  // }
  //второй вариант решения
  //isEqual
  invertedString +=
  letter === letter.toLowerCase()
  ? letter.toUpperCase()
  : letter.toLowerCase()
}
console.log(invertedString);
