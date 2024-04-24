console.log('mod7-06-practice');

const btnEl = document.querySelector('.buttons');
const itemEl = document.querySelector('item');
const fieldEl = document.querySelector('.field');

const maxHeight = fieldEl.clientHeight;
const maxWidth = fieldEl.clientWidth;

const step = 10;
const position = {
  top: 0,
  left: 0,
};

btnEl.addEventListener('click', buttonsHanbler);

function buttonsHanbler(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const action = event.target.dataset.action;
  switch (action) {
    case 'up':
      if (position.top - step >= 0) {
        position.top -= step;
        itemEl.style.top = position.top + 'px';
        fieldEl.classList.remove('error');
      } else {
        fieldEl.classList.add('error');
      }
      break;
    case 'down':
      if (position.top + step < maxHeight) {
        position.top += stop;
        itemEl.style.top = position.top + 'px';
        fieldEl.classList.remove('error');
      } else {
        fieldEl.classList.add('error');
      }
      break;
    case 'left':
      if (position.left - step >= 0) {
        position.left -= step;
        itemEl.style.left = position.left + 'px';
        fieldEl.classList.remove('error');
      } else {
        fieldEl.classList.add('error');
      }
      break;
    case 'right':
      if (position.left + step < maxWidth) {
        position.left += step;
        itemEl.style.left = position.left + 'px';
        fieldEl.classList.remove('error');
      } else {
        fieldEl.classList.add('error');
      }
      break;
  }
}
/******************************* */
const refs = {
  firstName: document.querySelector('[data-type="firstName"]'),
  lastName: document.querySelector('[data-type="lastName"'),
  formEl: document.querySelector('.form'),
  listEl: document.querySelector('.list__name'),
};

const { firstName, formEl, lastName, listEl } = refs;

formEl.addEventListener('click', handleButtonClick); //вешаем слушатель события на блок-родитель

//добавляем функцию слушателя событий с проверками что должно происходить при совершении действия в данном случае клика
function handleButtonClick(event) {
  if (event.target.dataset.action === 'add') {
    createListItem(); //добавление элемента списка при клике
  }
  if (event.target.dataset.action === 'delete') {
    event.target.parentElement.remove(); //удаление элемента списка при клике на кнопку удаления
  }
}
//функция добавления и удаления элемента списка
function createListItem() {
  const first = firstName.value;
  const last = lastName.value;
  let fullName = '';
  if (!first && !last) {
    fullName = 'Anonymous' + Math.floor(Math.random() * 100);
  } else {
    fullName = `${first} ${last}`;
  }
  listEl.insertAdjacentHTML(
    //генерируем элемент списка
    'beforeend',
    /*html*/ `
  <li>${fullName}
    <button class= "delete" data-action="delete" type="button">X</button>
  </li>
`
  );
  //очищаем форму
  firstName.value = '';
  lastName.value = '';
  console.log(fullName);
}
