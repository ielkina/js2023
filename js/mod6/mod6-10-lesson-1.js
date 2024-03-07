console.log('mod6-10-lesson-1.js');
import pictures from '../data/picturesExport.js';

//объект document и window
console.log(document);
console.log(window);
//Дедовские методы поиска элементов (getElementByID...)

const el = document.getElementById('title');
console.log(el);

//Современные методы поиска элементов (querySelector, All)

const listLinkEl = [...document.querySelectorAll('.list__link')];

console.log(listLinkEl);

const paragraphEl = document.querySelectorAll('.description'); //возвращает псевдо массив в котором некоторые методы не работают
// const paragraphEl = [...document.querySelectorAll('.description')];//возвращает массив где эти методы есть

paragraphEl.forEach(elem => (elem.style.backgroundColor = 'red'));
console.log(paragraphEl);

//Навигация по DOM дереву (children...)
const listEl = document.querySelector('.list');
console.log(listEl.previousElementSibling);
console.log(listEl.children[0]);
console.log(listEl.childNodes); //псевдомассив

//доступ к контексту второго элемента т.е <li>listEl.children[1].firstChild <a></a></li>
console.log(listEl.children[0].firstChild);
console.log(
  (listEl.childNodes[0].textContent = 'текст пункта списка до линка')
);
console.log(
  (listEl.childNodes[2].textContent = 'текст пункта списка после линка')
);
//доступ к элементу второго элемента в списке <li><a>listEl.children[1].firstElementChild</a></li>
console.log(listEl.children[0].firstElementChild);
console.log((listEl.children[0].firstElementChild.textContent = 'линк пункта'));
console.log(listEl.childElementCount); //количество элементов списка

console.dir(listEl.children[0]);

const listItems = document.querySelectorAll('li');

console.log(listItems[0].children);

const listEls = [...document.querySelectorAll('li.list__item > ul')];
console.log(listEls);

//свойства элементов
//Атрибуты как свойства обьектов
const imgEl = document.querySelector('.js-img');
//проверка на наличие атрибутов
console.log(imgEl.hasAttribute('alt')); //true
console.log(imgEl.getAttribute('alt'));
console.log(imgEl.setAttribute('alt', 'dog'));
console.log(imgEl.removeAttribute('alt'));
console.log(imgEl.attributes);
imgEl.alt = 'dog';
console.log(imgEl.classList.contains('some-img')); //true
//добавляем класс
console.log(imgEl.classList.add('husky'));
console.log(imgEl.classList.remove('husky'));
//переключатель класса (если есть удалит если нет добавит)
console.log(imgEl.classList.toggle('some-img'));
console.log(imgEl.classList.toggle('some-img'));
//заменить класс
// console.log(imgEl.classList.replace('some-img', 'some-god-img'));
console.log(imgEl);
//Сделать так что б кнопка с классом js-swap изменяла картинку

//находим элимент по тегу
// const btnEl = [...document.getElementsByTagName('button')]
// //находим элемент по класу
// const swapBtnEl = document.querySelector('.js-swap-image-btn')
// const imageEl = swapBtnEl.previousElementSibling;

// swapBtnEl.addEventListener('click', () => {
//   imageEl.src = 'https://images.pexels.com/photos/3715594/pexels-photo-3715594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// })

// console.log(imageEl);
// console.log(swapBtnEl);
// console.log(btnEl);

const swapBtnEls = document.querySelectorAll('.js-swap-image-btn');
console.log(swapBtnEls);
const imageEl = document.querySelector('.js-img');

swapBtnEls.forEach(el => {
  el.addEventListener('click', () => {
    imageEl.src =
      'https://images.pexels.com/photos/3715594/pexels-photo-3715594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  });
});

/**обьект  style, cssText*/
const sectionTitleEl = document.querySelector('.js-sec-title');
console.log(sectionTitleEl);
sectionTitleEl.textContent = 'Собачки';
sectionTitleEl.style.color = 'blue';
sectionTitleEl.style.backgroundColor = 'yellow';

const modalOpenBtnEl = document.querySelector('.js-modal-btn');
const backdropEl = document.querySelector('.js-backdrop');
const modalImgEl = document.querySelectorAll('modal');

modalOpenBtnEl.addEventListener('click', () => {
  backdropEl.classList.add('is-backdrop-open');
});

/**методы обьекта classList (add, remove, toggle, container) */

/*Создание и вставка элемента*/

// <li class="gallery-item">
//   <a href="#">
//     <img class="dog" src="https://web-dev-goit.s3.eu-north-1.amazonaws.com/app/uploads/2022/08/25111450/adanylko.jpg" alt="dog">
//   </a>
// </li>

// // Создание li
const listItemEl = document.createElement('li');
listItemEl.classList.add('gallery-item');
listItemEl.style.listStyleType = 'none'; //убираем маркер

//Создание a
const listLinkElt = document.createElement('a');
listLinkElt.setAttribute('href', '#');
//или
// listLinkElt.href = '#'
listItemEl.append(listLinkElt);
console.log(listItemEl);

//Создание img
const listImgElt = document.createElement('img');
listImgElt.src =
  'https://web-dev-goit.s3.eu-north-1.amazonaws.com/app/uploads/2022/08/25111450/adanylko.jpg';
listImgElt.alt = 'mentor';
listLinkElt.append(listImgElt);
//append - вставляет в конец
//prepend - вставляет в начало

//Вставка элемента
const listElt = document.querySelector('.js-gallery');
listElt.append(listItemEl);

// оптимизация
// через деструктуризацию но так никто не делает
// const [listItemEl, listLinkElt, listImgElt] = [
//   document.createElement('li'),
//   document.createElement('a'),
//   document.createElement('img'),
// ]

/**Создание и вставка элементов без разметки */
//ищем список
const galleryListEl = document.querySelector('.js-gallery');
//функция для создания makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt }) => {
  //создаем элементы
  const listItemEl = document.createElement('li');
  const listLinkElt = document.createElement('a');
  const listImgElt = document.createElement('img');
  //добавляем классы
  listItemEl.classList.add('gallery-item');
  listImgElt.classList.add('gallery-img');
  //корректируем стили списка
  listItemEl.style.listStyleType = 'none';
  // listImgElt.style.margin = '10px'
  //добавляем атрибуты
  listLinkEl.href = '#';
  listImgElt.src = url;
  listImgElt.alt = alt;
  listImgElt.width = width;
  listImgElt.height = height;
  //вставляем в элемент
  listItemEl.append(listLinkElt);
  listLinkElt.append(listImgElt);
  //возвращаем собранный элемент
  return listItemEl;
};

//перебор коллекции карточек через map
// const galleryCards = pictures.map(elm =>
//   makeGalleryCard(elm)
// )
//или
const galleryCards = pictures.map(makeGalleryCard);
//вставка коллекции карточек на страницу
galleryListEl.append(...galleryCards);

console.log(galleryListEl);

/*Создание галериеи по разметке*/

const gallListEl = document.querySelector('.js-gallery-two')
const mainTitleEl = document.querySelector('.js-main-title-two');


console.log(mainTitleEl);
mainTitleEl.textContent = 'Хасятки '; //изменяет только текст
mainTitleEl.innerHTML = 'Хасятки 1';
mainTitleEl.innerHTML = `<a>Хасятки 2</a>`; //полностью перезаписал предыдущий текст в заголовке
mainTitleEl.innerHTML += `<p>Хасятки 3</p>`; //добавляет и перезаписывает предыдущий текст в заголовке
mainTitleEl.innerHTML = `<p>Хасятки 4</p>`; //полностью перезаписал предыдущий текст и теги в заголовке
mainTitleEl.innerHTML = `Хасятки`; //полностью перезаписал предыдущий текст и теги в заголовке

//удалить элемент
// mainTitleEl.remove()

const makeGalleryCards = ({ width, height, url, alt }) =>
  `
  <li class="gallery-item">
    <a href="#">
      <img class="dog" src= "${url}" alt= "${alt}" width = "${width}" height = "${height}" >
    </a>
  </li>`;

//создание массива строк с элементами

const gallCards = pictures.map(makeGalleryCards)
  .join('')
// gallListEl.innerHTML = gallCards// с помощью этого метода полностью переписывается разметка что не есть хорошо

//не перезаписывает а вставляет уже к существующим
// gallListEl.insertAdjacentHTML('beforebegin', gallCards)//перед элементом список
// gallListEl.insertAdjacentHTML('beforeend', gallCards)//добавляет в конец списка
// gallListEl.insertAdjacentHTML('afterbegin', gallCards)//добавляет в начало списка
gallListEl.insertAdjacentHTML('afterend', gallCards)//после элемента список

console.log(gallCards);

//дата атрибуты используются тогда когда нас интересует получение какие то значение из html в js

const listItemElsId = document.querySelectorAll('li')//возвращает псевдомассив
//дата атрибуты используются только для js (в написание кода js видит и понимает какой из дата написан в html)
listItemElsId.forEach((listItem, isValid, index) => {
  // // listItem.textContent = listItem.dataset.index
  // listItem.dataset.isValid = isValid
  const color = listItem.dataset.backgroundColor
  listItem.dataset.index = index
  listItem.style.backgroundColor = color
  // console.log(listItem.dataset);
})

console.dir(listItemElsId)

// console.dir(document.body.children); //покажет все теги на станице

// console.dir(document.body.childNodes)//покажет все теги и классы на станице
// console.dir(document.documentElement)//покажет все теги и классы на станице
// console.dir(document.title)//найдет элемент с тегом h1
// console.dir(document.links)//вернет HTML  коллекцию ссылок
