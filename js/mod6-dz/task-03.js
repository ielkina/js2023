const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryList = document.querySelector(".gallery");

const makeGalleryCard = (imageInfo) => {
  const { url, alt } = imageInfo;

  return `<li class='gallery-item'><img src='${url}' alt='${alt}'></li>`;
};

const galleryCardsArr = images.map((imageInfo) => {
  return makeGalleryCard(imageInfo);
});

galleryList.insertAdjacentHTML("afterbegin", galleryCardsArr.join(""));

/////--------------------------------------------------------------------------

// Получаем ссылку на список ul.gallery
// const galleryList = document.querySelector('.gallery');

// Создаем фрагмент документа для эффективного добавления элементов
const fragment = document.createDocumentFragment();

// Итерируемся по массиву images
images.forEach(image => {
  // Создаем новый элемент li
  const listItem = document.createElement('li');

  // Используем шаблонную строку для создания элемента img внутри li
  listItem.insertAdjacentHTML(
    'afterbegin',
    `<img src="${image.url}" alt="${image.alt}">`
  );

  // Добавляем элемент li в фрагмент
  fragment.appendChild(listItem);
});

// Вставляем весь фрагмент за одну операцию в список ul.gallery
galleryList.appendChild(fragment);

//------------------------------------------------------------------------

// Отримуємо посилання на список ul.gallery
const imagesList = document.querySelector('.gallery');

// Створюємо HTML-розмітку для кожного зображення та додаємо її до списку
const galleryItemsHTML = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`).join('');

// Додаємо всі елементи галереї до DOM за одну операцію
imagesList.insertAdjacentHTML('beforeend', galleryItemsHTML);
