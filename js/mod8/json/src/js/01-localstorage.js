// JSON.stringify()
// JSON.parse()

const user = {
  name: "mango",
  age: 2,
};

console.log(JSON.stringify(user));

const userData = '{"name":"mango","age":2}';

console.log(JSON.parse(userData));

console.log(localStorage);

localStorage.setItem("my-data", JSON.stringify({ name: "mango", age: 2 }));

console.log(localStorage.getItem("my-data"));

const saveData = localStorage.getItem("my-data");
console.log("saveData", saveData);

const parseData = JSON.parse(saveData);
console.log("parseData", parseData);
