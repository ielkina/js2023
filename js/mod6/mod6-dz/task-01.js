// Напиши скрипт, який:

//todo Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

//todo Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

//todo Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

//todo В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// Получаем ссылку на список категорий
const categoriesList = document.getElementById('categories');
// Получаем все элементы li внутри списка
const categoryItems = categoriesList.querySelectorAll('li.item');
// Выводим количество категорий
console.log(`Number of categories: ${categoryItems.length}`);

// Итерируемся по каждому элементу li
categoryItems.forEach(categoryItem => {
  // Получаем заголовок категории (тег h2)
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  // Получаем все элементы li внутри текущей категории
  const elements = categoryItem.querySelectorAll('ul > li');
  // Выводим информацию о текущей категории
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elements.length}`);
});


// const categories = document.querySelectorAll("li.item");
// function numberOfCategories() {
//   const categoryCount = categories.length;
//   console.log(`Number of categories: ${categoryCount}`);
// }
// numberOfCategories();
// categories.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryElements = category.querySelectorAll("li").length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// });


const list = document.querySelector('#categories');
[...list.children].forEach(item=>{
  console.log(item.firstElementChild);
  console.log(item.firstElementChild);
})