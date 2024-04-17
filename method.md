# <u>Числа</u>

**_Number.parseInt()_** - <u>парсит из строки целое число.</u>

```console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("QWERTY")); // NaN
```

---

**_Number.parseFloat()_** - <u>парсит из строки дробное число.</u>

```console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("QWERTY")); // NaN
```

---

**_Number.isNaN(val)_** - <u>Проверка на число</u>

```const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("QWERTY"); // NaN
console.log(Number.isNaN(invalidNumber)); // true
```

---

**_toFixed(value)_** - <u>сложении не целых чисел</u>

```
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41
```

---

**_Math.ceil(num)_** - <u>возвращает наименьшее целое число, большее, либо равное указанному числу.</u>

```
console.log(Math.ceil(1.2)); // 2
```

---

**_Math.max(num1, num2, ...)_** - <u>возвращает наибольшее число из набора</u>

```
console.log(Math.max(20, 10, 50, 40)); // 50
```

---

**_Math.min(num1, num2, ...)_** - <u>наименьшее число из набора</u>

```
console.log(Math.min(20, 10, 50, 40)); // 10
```

---

**_Math.pow(base, exponent)_** - <u>возведение в степень</u>

```
console.log(Math.pow(2, 4)); // 16
```

---

**_Math.random()_** - <u>возвращает псевдослучайное число в диапазоне [0, 1)</u>

```
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
```

---

**_Math.abs()_** - <u>возвращает модуль числа, то есть из отрицательного числа делает положительное.</u>

```
console.log(Math.abs(-3));//3

console.log(Math.abs(3));//3
```

---

<span style="color:green"> Этот текст голубой.</span>

# <u>Строки</u>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Computer+science+student)](https://git.io/typing-svg)

**_length_** - <u>Длинна строки</u>

```
const message = "Welcome to Bahamas!";
console.log(message.length); // 19
```

---

**_toLowerCase(), toUpperCase()_** - <u>Возвращают новую строку в соответствующем регистре, не изменяя оригинальную
строку.</u>

```
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
```

---

**_indexOf()_** - <u>Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не
найдено.</u>

```
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1
```

---

**_includes()_** - <u>Проверяет входит ли подстрока в строку, возвращает буль</u>

```
const productName = "Ремонтный дроид";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроид")); // true
console.log(productName.includes("Дроид")); // false
console.log(productName.includes("Ремонтный")); // true
console.log(productName.includes("ремонтный")); // false
```

---

**_endsWith()_** - <u>Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках,
возвращая буль</u>

```
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false
```

---

**_replace() и replaceAll()_** - <u>Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll)
подстроки заменены на указанное значение.</u>

```
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
```

---

**_slice()_** - <u>делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку,
не изменяя оригинал.</u>

```
const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
```

---

**_replace()_** - <u>универсальный метод поиска-и-замены</u> variable.replace('что заменяем', 'на что заменяем')

```
// заменить тире двоеточием
alert('12-34-56'.replace("-", ":")) // 12:34-56
// заменить все тире двоеточием
alert( '12-34-56'.replace( /-/g, ":" ))  // 12:34:56

// поменять местами имя и фамилию
let str = "John Smith";
alert(str.replace(/(\w+) (\w+)/i, '$2, $1')) // Smith, John

let str = "html and css";
let result = str.replace(/html|css/gi, str => str.toUpperCase());
alert(result); // HTML and CSS
```

---

# <u>Массивы</u>

---

**_split(delimiter)_** - <u>превращает строку в массив, «разбив» её по разделителю delimiter</u>

```
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]
```

---

**_join(delimiter)_** - <u>соединяет элементы массива в строку delimiter</u>

```
const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"
```

---

**_indexOf(value)_** - <u>возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число
-1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.</u>

```
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
```

---

**_includes(value)_** - <u>проверяет есть ли в массиве элемент со значением value и возвращает true или false Область
применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция
(индекс).</u>

```
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}
```

---

**_push()_** - <u>добавляет один или несколько элементов в конец массива, без необходимости указывать индексы
добавляемых элементов. Возвращает длину массива после добавления элементов.</u>

```
const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]
```

---

**_pop()_** - <u>удаляет последний элемент из конца массива и возвращает удаленный элемент. Если массив пустой, метод
возвращает undefined.</u>

```
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []
```

---

**_slice(begin, end)_** - <u>возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия
делается от begin и до, но не включая, end - индексы элементов исходного массива.</u>

```
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
```

<u>Если begin и end не указаны, будет создана полная копия исходного массива.</u>

```
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
```

<u>Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов</u>

```
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]
```

---

**_splice()_** - <u>Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы.</u>

```
const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]
```

<u>Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом
второй аргумент должен быть равен нулю.</u>

```
const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
```

<u>Для замены необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не
совпадать.</u>

```
const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
```

---

<h1 style="color: #8829e0">concat()</h1> - <u>Объединяет два или более массива в один. Он не изменяет
массив на котором вызывается, а возвращает новый. Порядок аргументов метода
влияет на порядок элементов нового массива.</u>

```
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]
```

---

# <u>Объекты</u>

Object.entries Object.keys Object.value
