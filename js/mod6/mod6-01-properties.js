console.log('mod6-01-properties');
/**
 * Свойства элемента
 * Изображение
 * Текст и textContent
 */
const magicBtn = document.querySelector('.js-magic-btn'); //поиск элемента кнопка

const imageEl = document.querySelector('.hero__image'); //поиск элемента картинка
console.log(imageEl);
console.log(imageEl.src); //свойство элемента

//Меняем Текст
const heroTitle = document.querySelector('.hero__title');
console.log(heroTitle);

//смена картинки при клике на кнопку
magicBtn.addEventListener('click', () => {
  imageEl.src =
    'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; //добавление новой картинки
  // imageEl.style.width = '200px'
  imageEl.style.width = '200px';
  heroTitle.textContent = 'Я сладкий пирожок'; //меняем заголовок

});
//смена картинки при клике по картинки
imageEl.addEventListener('click', () => {
  imageEl.src =
    'https://images.pexels.com/photos/449977/pexels-photo-449977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  imageEl.alt = 'Это новая картинка'; //меняем alt у картинки
  console.log(imageEl);
  imageEl.style.width = '150px'; //изменение размера картинки
});



/**
 * Атрибуты
 * get (имя атрибута)
 * set  (имя атрибута)
 * remove (имя атрибута)
 * has (имя атрибута)
 */

console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);//прочитать атрибуты 

// imageEl.removeAttribute('src')//удалить атрибут

console.log(imageEl.hasAttribute('src'))

/**
 * Data-атрибуты
 */
//дата атрибуты используются для функционала 

const addAction = document.querySelectorAll('.js-actions button')

console.log(addAction);

const addActionAdd = addAction[0].dataset.action
console.log(addActionAdd);
console.log(addAction[0].dataset.action);

console.log(addAction[1].getAttribute('data-action'));
console.log(addAction[1].dataset.action);

console.log(addAction[2].dataset.action);

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = 'Молодец'
})