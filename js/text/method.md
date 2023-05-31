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
***toFixed(value)*** - <u>сложении не целых чисел</u>

```
console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41
```
---
***Math.floor(num)*** - <u>возвращает наибольшее целое число,меньшее, либо равное указанному</u>
```
console.log(Math.floor(1.7)); // 1
```
---

***Math.ceil(num)*** - <u>возвращает наименьшее целое число, большее, либо равное указанному числу.</u>

```
console.log(Math.ceil(1.2)); // 2
```
---

***Math.round(num)*** - <u>возвращает значение числа, округлённое до ближайшего целого</u>
```
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2
```
---

***Math.max(num1, num2, ...)*** - <u>возвращает наибольшее число из набора</u>
```
console.log(Math.max(20, 10, 50, 40)); // 50
```
---

***Math.min(num1, num2, ...)*** - <u>наименьшее число из набора</u>
```
console.log(Math.min(20, 10, 50, 40)); // 10
```
---

***Math.pow(base, exponent)*** - <u>возведение в степень</u>
```
console.log(Math.pow(2, 4)); // 16
```
---

***Math.random()*** - <u>возвращает псевдослучайное число в диапазоне [0, 1)</u>
```
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
```
---
***Math.abs()*** - <u>возвращает модуль числа, то есть из отрицательного числа делает положительное.</u>
```
console.log(Math.abs(-3));//3

console.log(Math.abs(3));//3
```
---
# <u>Строки</u>

***length*** - <u>Длинна строки</u>

```
const message = "Welcome to Bahamas!";
console.log(message.length); // 19
```
---
***toLowerCase(), toUpperCase()*** - <u>Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.</u>

```
const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
```
---
***indexOf()*** - <u>Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.</u>

```
const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1
```
---
***includes()*** - <u>Проверяет входит ли подстрока в строку, возвращает буль</u>
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
***endsWith()*** - <u>Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая буль</u>
```
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false
```
---
***replace() и replaceAll()*** - <u>Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.</u>
```
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
```
---
***slice()*** - <u>делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.</u>

```
const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
```
---
***replace()*** - <u>универсальный метод поиска-и-замены</u>
variable.replace('что заменяем', 'на что заменяем')

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
