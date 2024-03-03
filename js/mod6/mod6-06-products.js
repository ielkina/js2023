console.log('mod6-06-products');
/******************************************************************** */
//импортируем экспортные данные
import dataProducts from '../data/productExport.js'; //обязательно добавлять расширения
console.log(dataProducts);
//работает только если в html основной документ (не из папки data(название папки может быть любое)) скрипт подключены модульно
/******************************************************************* */
/**
 * Создаем карточку продукта
 * В классе продукта может быть product--00-sale product--aat-available
 */

const product = {
  name: 'Сервоприводы',
  direction: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolorem aperiam quo dicta saepe laboriosam, natus est commodi suscipit ipsa praesentium, modi reprehenderit voluptas facilis nesciunt consequuntur distinctio, vel dolores.`,
  price: 2000,
  available: true,
  onSale: true,
};

//пример добавляемого элемента
// < article class="product" >
//   <h2 class="product__name">Название</h2>
//   <p class="product__descr">Описание</p>
//   <p class="product__price">Цена:</p>
// </article >

//создаем независимые друг от друга элементы карточки
const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement('h2');
nameEl.textContent = product.name;
nameEl.classList.add('product__name');

const descrEl = document.createElement('p');
descrEl.textContent = product.direction;
descrEl.classList.add('product__descr');

const priceEl = document.createElement('p');
priceEl.textContent = `Цена: ${product.price}`;
priceEl.classList.add('product__descr');

console.log(`productEl`, productEl);
console.log(`nameEl`, nameEl);
console.log(`descrEl`, descrEl);
console.log(`priceEl`, priceEl);

//собираем карточку из элементов
productEl.append(nameEl, descrEl, priceEl);
console.log(`productEl`, productEl);

//добавляем элемент в контейнер в разметку
const productContainer = document.querySelector('.js-product');
productContainer.append(productEl);
console.log(`productContainer`, productContainer);

/**
 * Пишем функцию для создания карточки продукта
 */

console.log(dataProducts);
//пишем функцию  которая создает 1 карточку из массива

const makeProductCard = ({ name, direction, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = direction;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price}`;
  priceEl.classList.add('product__descr');

  productEl.append(nameEl, descrEl, priceEl);
  return productEl;
};
console.log(makeProductCard(dataProducts[2]));
const elements = dataProducts.map(makeProductCard)//передаем ссылку на фн
console.log(elements);

//добавляем в html разметку
const productsContainerEl = document.querySelector('.js-product');
productsContainerEl.append(...elements)
console.log(`productsContainerEl`, productsContainerEl)

// const elements = dataProducts.map(({ name, direction, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = direction;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price}`;
//   priceEl.classList.add('product__descr');

//   productEl.append(nameEl, descrEl, priceEl);
//   return productEl;
// })
// console.log(`elements`, elements)

