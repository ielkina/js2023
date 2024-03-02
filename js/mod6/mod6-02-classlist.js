console.log('mod6-02-classlist.js');

/**
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старый класс, новый класс)
 * - contains(класс)
 */

const magicBtn = document.querySelector('.js-magic-btn');

const navEl = document.querySelector('.site-nav');

console.log(navEl.classList);

navEl.classList.add('super-cool'); //добавление класса в выбранный элемент

// добавление нового класса по клику кнопки
magicBtn.addEventListener('click', () => {
  navEl.classList.add('super-cool', 'fine');
  console.log(navEl);
});

// удаляем класс
magicBtn.addEventListener('click', () => {
  navEl.classList.remove('fine');
  console.log(navEl);
});

//удалить класс
//не селектор а 'класс' писать без точки иначе не удалиться
navEl.classList.remove('site-nav');

//toggle
//если есть класс удалит, если нет добавит
magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('site-nav');
});

//замена на новый класс
navEl.classList.replace('super-cool', 'qwerty');
console.log(navEl);

//проверка активных классов
console.log(navEl.classList.contains('super-cool'));

//поиск элемента с нужных линком
const currentPAgeUrl = '/portfolio';
const linkEl = document.querySelector(`.site-nav__link[href="${currentPAgeUrl}"]`);
console.log(linkEl);

linkEl.classList.add('site-nav__link--current')