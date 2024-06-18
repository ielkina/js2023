
import throttle from 'lodash.throttle';
console.log(' text');
import '../css/style.css';

const STORAGE_KEY = 'feedback-smg';



const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};


refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
populateMessageOutput();

/**
 *Останавливаем поведение по умолчанию
 *Убираем сообщение из хранилища
 *Очищаем форму
 */

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Отправить форму');
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Получаем значение поля
 * Сохраняем его в хранилище
 */

function onTextareaInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

/**
 * Получаем значение из хранилища
 * Если там что-то было. Обновляем DOM
 */

function populateMessageOutput() {
  const saveMessage = localStorage.getItem(STORAGE_KEY)
  if(saveMessage){
    console.log(saveMessage);
    refs.textarea.value = saveMessage
  }
}


//сделать так что б сохраняло не только сообщение но и имя все в одном объекте
//делегирование событий
const formData = {}
refs.feedbackForm.addEventListener('input', e=> {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value

  // console.log(formData);
  console.log(JSON.stringify(formData));//сохраняем все в одном обьекте

})