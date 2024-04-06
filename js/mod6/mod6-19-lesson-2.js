// no-mdn
// import * as style from '/style.css';
console.log('mod6-19-lessons-2');
/**
 * Основы событий. Создание и удаление слушателей. Обьект события
 */

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
    submitBtnEl.disabled = false;
    return;
  }
  //в других случаях кнопка остается disabled
  submitBtnEl.disabled = true;
});

formEl.addEventListener('submit', event => {
  //убираем дефолтное поведение элементов браузера
  event.preventDefault();
  console.dir(event.target.elements.userName.value);
  //очищаем span
  userNameOutputEl.textContent = '';
  //очищаем форму
  event.target.reset();
  //делаем кнопку снова disable
  submitBtnEl.disabled = true;
  // console.log(formInputEl.value);
});

//рефакторинг

const formInputsEls = {
  username: document.querySelector('.js-username-input'),
  submitBtn: document.querySelector('button[type="submit"]'),
  checkbox: document.querySelector('.js-checkbox'),
};
const { username, submitBtn, checkbox } = formInputsEls;

username.addEventListener('focus', event => {
  console.log(event.target);
  event.target.style.outline = '5px solid teal';
});

// СОБЫТИЕ клавиатуры keypress keydown, keyup

const outputEl = document.querySelector('.js-output');
document.addEventListener('keyup', event => {
  // console.log(event);
  // outputEl.insertAdjacentHTML('beforeend', `code: ${event.code} <br> key: ${event.key} <br> <hr>`);
  // outputEl.insertAdjacentHTML('beforeend', console.log(`code: ${event.code}`));
  // outputEl.insertAdjacentHTML('beforeend', console.log(`key: ${event.key}`));
  console.log(`code: ${event.code}`);
  console.log(`key: ${event.key}`);
});

document.addEventListener('keydown', event => {
  event.preventDefault();
  //кроссбраузерность
  if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
    console.log('Ctrl + S');
  }
});

// modal = document.querySelector();

const modalRefs = {
  backdropEl: document.querySelector('.backdrop'),
  openModalBtnEl: document.querySelector('.js-modal-open'),
  jsModalClose: document.querySelector('.js-modal-close'),
};
const { openModalBtnEl, backdropEl, jsModalClose } = modalRefs;

const handleOpenModal = () => {
  backdropEl.classList.add('is-open');
  console.log(backdropEl);
};

const handleCloseModel = () => {
  backdropEl.classList.remove('is-open');
  console.log(backdropEl);
  document.removeEventListener('keydown', handleKeyPress);
};

const handleKeyPress = event => {
  if (event.code !== 'Escape' && event.code !== 'Enter') {
    return;
  }
  handleCloseModel();
  backdropEl.classList.remove('is-open');
};
document.addEventListener('keydown', handleKeyPress);
openModalBtnEl.addEventListener('click', handleOpenModal);
jsModalClose.addEventListener('click', handleCloseModel);
//2.50

const btnEls = document.querySelectorAll('.btn');

const handleToggleModal = event => {
  console.log(123);
  backdropEl.classList.toggle('is-open');
  if (event.target.classList.contains('js-modal-open')) {
    document.addEventListener('keydown', handleKeyPress);
  } else {
    document.removeEventListener('keydown', handleKeyPress);
  }
};

//вешаем событие на каждый элемент кнопки
btnEls.forEach(btnEl => {
  btnEl.addEventListener('click', handleToggleModal);
});

//accordion

const accordionRefs = {
  openPanelBtnEls: document.querySelectorAll('.js-accordion-btn'),
  // accordion: document.querySelector('.accordion'),
  // accordionList: document.querySelector('.accordion-list'),
  // accordionListItem: document.querySelector('.accordion-list-item'),
  // accordionBtn: document.querySelector('.accordion-btn'),
  // accordionPanel: document.querySelector('.accordion-panel'),
  // btn: document.querySelector('button'),
  // p: document.querySelector('p'),
};

const {
  openPanelBtnEls,
  accordion,
  accordionBtn,
  accordionList,
  accordionListItem,
  accordionPanel,
  btn,
  p,
} = accordionRefs;

console.log(openPanelBtnEls);

const handleOpenPanel = event => {
  const targetEl = event.target;//находим елемент
  const currentPanel = targetEl.nextElementSibling; //находим сестринский елемент
  currentPanel.classList.toggle('active');//добавляем на сестринский элемент клас 
  // console.log(event.target);
};

//плохой метод потому как через этот метод навешивается слишком много слушателей и перегружает браузер
//через метод переберем все элементы кнопок и повесим обработчик события
openPanelBtnEls.forEach(btn => {
  btn.addEventListener('click', handleOpenPanel);
});


//! метод поиска от дочернего элемента родительского 
const childEl = document.querySelector('.js-child-el');
const parentEl =  childEl.closest('.accordion');
console.log(parentEl);

document.querySelector()
