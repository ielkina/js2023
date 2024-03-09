const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingrList = document.querySelector("#ingredients");
console.log(`ingrList`, ingrList)
const ingrArr = [];

ingredients.forEach((ingridient) => {
  const ingrItem = document.createElement("li");
  ingrItem.textContent = ingridient;
  ingrItem.classList.add("item");
  ingrArr.push(ingrItem);
});
ingrList.append(...ingrArr);
console.log(`ingrList`, ingrList)

//-----------------------------------------------------------------------
// Получаем ссылку на список ul#ingredients
const ingredientsList = document.getElementById('ingredients');
// Создаем фрагмент документа для эффективного добавления элементов
const fragment = document.createDocumentFragment();
// Итерируемся по массиву ingredients
ingredients.forEach(ingredient => {
  // Создаем новый элемент li
  const listItem = document.createElement('li');
  // Добавляем текстовый контент
  listItem.textContent = ingredient;
  // Добавляем класс 'item'
  listItem.classList.add('item');
  // Добавляем элемент li в фрагмент
  fragment.appendChild(listItem);
});

// Вставляем весь фрагмент за одну операцию в список ul#ingredients
ingredientsList.appendChild(fragment);

//-------------------------------------------------------------------
// Отримуємо посилання на список ul#ingredients
const ingredsList = document.querySelector('#ingredients');

// Створюємо елементи li для кожного інгредієнта
const ingredsItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

// Додаємо всі елементи li до списку ul#ingredients за одну операцію
ingredsList.append(...ingredsItems);

