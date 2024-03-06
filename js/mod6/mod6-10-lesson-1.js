console.log('mod6-10-lesson-1.js');
//объект document и window
console.log(document);
console.log(window);
//Дедовские методы поиска элементов (getElementByID...)

const el = document.getElementById('title')
console.log(el);

//Современные методы поиска элементов (querySelector, All)

const listLinkEl = [...document.querySelectorAll('.list__link')]

console.log(listLinkEl);

const paragraphEl = document.querySelectorAll('.description'); //возвращает псевдо массив в котором некоторые методы не работают
// const paragraphEl = [...document.querySelectorAll('.description')];//возвращает массив где эти методы есть

paragraphEl.forEach(elem => (elem.style.backgroundColor = 'red'))
console.log(paragraphEl);

//Навигация по DOM дереву (children...)
const listEl = document.querySelector('.list')
console.log(listEl.previousElementSibling);
console.log(listEl.children[0]);
console.log(listEl.childNodes); //псевдомассив

//доступ к контексту второго элемента т.е <li>listEl.children[1].firstChild <a></a></li>
console.log(listEl.children[0].firstChild);
console.log(listEl.childNodes[0].textContent = 'текст пункта списка до линка');
console.log(listEl.childNodes[2].textContent = 'текст пункта списка после линка');
//доступ к элементу второго элемента в списке <li><a>listEl.children[1].firstElementChild</a></li>
console.log(listEl.children[0].firstElementChild);
console.log(listEl.children[0].firstElementChild.textContent = 'линк пункта');
console.log(listEl.childElementCount); //количество элементов списка

console.dir(listEl.children[0])

const listItems = document.querySelectorAll('li');

console.log(listItems[0].children);

const listEls = [...document.querySelectorAll('li.list__item > ul')]
console.log(listEls);


//свойства элементов
//Атрибуты как свойства обьектов
const imgEl = document.querySelector('.js-img')
//проверка на наличие атрибутов
console.log(imgEl.hasAttribute('alt')) //true
console.log(imgEl.getAttribute('alt'))
console.log(imgEl.setAttribute('alt', 'dog'))
console.log(imgEl.removeAttribute('alt'))
console.log(imgEl.attributes)
imgEl.alt = "dog";
console.log(imgEl.classList.contains('some-img')); //true
//добавляем класс
console.log(imgEl.classList.add('husky'));
console.log(imgEl.classList.remove('husky'))
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

const swapBtnEls = document.querySelectorAll('.js-swap-image-btn')
console.log(swapBtnEls);
const imageEl = document.querySelector('.js-img')

swapBtnEls.forEach(el => {
  el.addEventListener('click', () => {
    imageEl.src = "https://images.pexels.com/photos/3715594/pexels-photo-3715594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  })
})

/**обьект  style, cssText*/
const sectionTitleEl = document.querySelector('.js-sec-title')
console.log(sectionTitleEl);
sectionTitleEl.textContent = "Собачки"
sectionTitleEl.style.color = 'blue'
sectionTitleEl.style.backgroundColor = 'yellow'

const modalOpenBtnEl = document.querySelector('.js-modal-btn')
const backdropEl = document.querySelector('.js-backdrop')
const modalImgEl = document.querySelectorAll('modal')

modalOpenBtnEl.addEventListener('click', () => {
  backdropEl.classList.add('is-backdrop-open')
})

/**методы обьекта classList (add, remove, toggle, container) */