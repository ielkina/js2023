console.log('mod6-19-lessons-2');
/**
* Основы событий. Создание и удаление слушателей. Обьект события */
const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-img');
const removeBtnEl = document.querySelector('.js-img');

// swapBtnEl.addEventListener('click', () => {
//   console.log('hi');
// });
// swapBtnEl.removeEventListener('click', () => {
//   console.log('hi');
// }); //слушатель не был удален так как эти ссылки на две разные функции
// console.log((() => {}) === (() => {})); //false

/** */

const consoleLog = () => {
  console.log('hi');
};

// swapBtnEl.addEventListener('click', consoleLog);
// swapBtnEl.removeEventListener('click', consoleLog);
//ссылки на функцию одинаковы поэтому слушатель удалиться

//меняем картинку
const handleSwapBtnClick = () => {
  imgEl.scr = 'https://picsum.photos/200/300';
  imgEl.alt = 'Котик';
};

swapBtnEl.addEventListener('click', handleSwapBtnClick);
//пишем функцию инлайново как она будет использоваться 1 раз, убираем слушателя событий
removeBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', handleSwapBtnClick);
});

removeBtnEl.onclick = handleSwapBtnClick;

/**
* Именование колбэков
* - handle*: handleSubjectEvent - приставка handle(обработать) хорошая практика
* - *Handle: subjectEventHandler
* - on*    : onSubjectEvent
*/

/**
* Подии элементов формы. focus blur change input submit
*/
const formInputEl = document.querySelector('.js-username-input'),
  formEl = document.querySelector('.js-form'),
  formTextareaEl = document.querySelector('.js-textarea'),
  submitBtnEl = document.querySelector('.js-form-submit'),
  formCheckboxEl = document.querySelector('.js-police-checkbox'),
  userNameOutputEl = document.querySelector('.js-username-output');


formInputEl.addEventListener('blur', event => {
  console.log(event);
  event.target.style.outline = 'none';
});

formInputEl.addEventListener('input', event => {
  console.log(event);
  userNameOutputEl.textContent = event.target.value;
});

formInputEl.addEventListener('change', event => {
  console.log(event);
  userNameOutputEl.textContent = event.target.value;
});
//убираем disabled с кнопки при условии если заполнено поле инпут и чекбокс
formCheckboxEl.addEventListener('change', event => {
  console.log(event);
  if (event.target.checked && formInputEl.value) {
    submitBtnEl.disabled = false
    return
  }
  //в других случаях кнопка остается disabled
  submitBtnEl.disabled = true;
});

formEl.addEventListener('submit', event => {
  //убираем дефолтное поведение элементов браузера
  event.preventDefault();
  //очищаем span
  userNameOutputEl.textContent = ''
  //очищаем форму
  event.target.reset();
  //делаем кнопку снова disable
  submitBtnEl.disabled = true;
  console.log(formInputEl.value);
})



//рефакторинг

const formInputsEls = {
  username: document.querySelector('.js-username-input'),
  submitBtn: document.querySelector('button[type="submit"]'),
  checkbox: document.querySelector('.js-checkbox'),
}
const { username, submitBtn, checkbox } = formInputsEls;

username.addEventListener('focus', event => {
  console.log(event.target);
  event.target.style.outline = '5px solid teal';
});

