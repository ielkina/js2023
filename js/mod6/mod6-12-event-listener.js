console.log('mod6-12-event-listener.js');
/**
 * События
 * - Создание и удаление слушателей
 * - Именование колбэков для слушателей
 * -handle*  : namdleEvent или handleSubjectEvent
 * - *Handler: eventHandler или subjectEventhandler
 * - on*     : onEvent или onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

// console.dir(document.body);
// console.dir(document.body.children); //покажет все теги на станице
// console.dir(document.body.children); //покажет все теги на станице
// console.dir(document.body.childNodes)//покажет все теги и классы на станице
// console.dir(document.documentElement)//покажет все теги и классы на станице
// console.dir(document.title)//найдет элемент с тегом h1
// console.dir(document.links)//вернет HTML  коллекцию ссылок

const allButtons = document.querySelectorAll('button'); //получить все элементы кнопок на странице
console.dir(allButtons);

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListener = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetButtonClick);

/*наименование функций событий*/

//d на звании функции необходимо указывать - названиеСобытие(handleClick) или названиеКонстантаСобытие(handleTargetButtonClick)
//обработать событие
function handleTargetButtonClick() {
  console.log('клик');
}
//обработчик события
function targetButtonClickHandler() {
  console.log('клик');
}
function onTargetButtonClick() {
  console.log('клик');
}

// Ссылочная идентичность колбеков

function onTargetBtnClick() {
  console.log('Слухач події був викликаний! Клик');
}

addListenerBtn.addEventListener('click', () => {
  console.log('Вешаем слушатель события');
  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListener.addEventListener('click', () => {
  console.log('Отмена слушателя события');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});
