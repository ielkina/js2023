//[P]Перебор for...in и Object.key|values|entries

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;


// метод Object.keys  возвращает массив ключей
const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}

console.log('total: ', totalFeedback);

//Object.values возвращает массив значений
const values = Object.values(feedback)
console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value
}

console.log("total: ", totalFeedback);


//возвращает массив массивов
const entries = Object.entries(feedback)

console.log(entries);



