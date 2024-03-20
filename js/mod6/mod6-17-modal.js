console.log('mod6-17-modal');
/**
 * Открыть и закрыть по кнопкеЖ onModalOpen onModalClose
 * Закрыть по клику и бекдроп: onBackDropClick
 * Закрыть по ESC: onEscapeKeypress
 *
 * В css класс sow-modal, который надо добавить на боди при открытии модалки
 */

const refs = {
  onModalOpen: document.querySelector('[data-action="open-modal"]'),
  onModalClose: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('[data-action=".js-backdrop"]'),
};

refs.onModalOpen.addEventListener('click', onOpenModal);
refs.onModalOpen.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

//открыть модальное окно по крику на кнопку onModalOpen добавляем класс show-modal

function onOpenModal() {
  window.addEventListener('keydown', onEscapeKeypress);//подписка на слушатель
  console.log(document.body.classList.add('show-modal'));
}
//закрыть модальное окно по крику на кнопку onModalOpen удаляем класс show-modal
function onCloseModal() {
  window.removeEventListener('keydown', onEscapeKeypress);//отписка от слушателя
  console.log(document.body.classList.remove('show-modal'));
}

//отслеживаем клики 
function onBackdropClick(event) {
  console.log('Клик по backdrop');
  console.log(event.currentTarget); //элемент на котором висит событие
  console.log(event.target); //то где произошло это событие
  if (event.currentTarget === event.target) {
    console.log('Кликнули именно в backdrop');
    onCloseModal(); //вызываем функцию закрытия модалки
  }
}
//Всплытие событий
//div.backdrop - ловим тут
//div.modal -
//p - срабатывает тут


//Закрытие модального окна на нажатию на клавишу ESC
//плохой вариант потому что при таком подходе перманентно вешаем прослушивателя событий даже при неактивном элементе что ведет замусориванию очередь колбеками в консоли
//поэтому лучше слушателя вешать только тогда когда модальное окно открыто а когда закрыто снимаем слушателя
// window.addEventListener('keydown', onEscapeKeypress)
function onEscapeKeypress(event) {
  console.log(event);
  const ESC_KEY_CODE = 'Escape';
  //или дополнить так 
  const isEscKey = event.code === ESC_KEY_CODE;
  //закрытие модального окна при нажатии на клавишу escape
  //всегда данные нужно брать по значению code потому как key может меняться а раскладка по коду нет.
  // if (event.code === ESC_KEY_CODE){
  //   onCloseModal();
  // }
  if (isEscKey){
    onCloseModal();
  }
}
