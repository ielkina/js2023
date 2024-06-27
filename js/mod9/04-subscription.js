console.log('test');
//bootstrap модалка
import BSN from './node_modules/bootstrap.native';
const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 1000; //время через которое будет появляться всплывающее сообщение
const MAX_PROMPT_ATTEMPTS = 3; //количество раз
let hasSubscribed = false;
let promptCounter = 0;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('максимальное количество открытий или подписался ');
    return; //выход с условия if если было выполнено
  }
  //если выполниться условие if  код ниже выполняться не будет setTimeout();
  setTimeout(() => {
    console.log('открываем надоедалку');
    modal.show();
    promptCounter += 1; //стэк количество открытий модалки
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}

/************* */

// const PROMPT_DELAY = 1000; //время через которое будет появляться всплывающее сообщение
// const MAX_PROMPT_ATTEMPTS = 3; //количество раз

// let promptCounter = 0;
// let hasSubscribed = false; //подписка

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Останавливаем интервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишись на рассылку! - ', +Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

//1.10
