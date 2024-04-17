/** @format */
console.log('mod7-05-lesson1');
// currentTarget  ссылается на тот элемент на котором висит событие
// target на элемент где словили событие
const sectionRefs = {
  div: document.querySelector('.div'),
  section: document.querySelector('.section'),
  text: document.querySelector('.text'),
};
const { div, section, text } = sectionRefs;
// зануривание>клик(инициализация елемента на котором произошло событие)>всплытие
section.addEventListener('click', event => {
  console.group('section listener');
  console.log('target', event.target); // по чем кликнули
  console.log('currentTarget', event.currentTarget); // где отловили
  console.groupEnd();
});
// включение слушателя на capture(только на ныряние). Сначала всегда отработает функция на зануривание(capture)
section.addEventListener(
  'click',
  event => {
    console.group('section listener capture');
    console.log('target capture', event.target); // по чем кликнули
    console.log('currentTarget capture', event.currentTarget); // где отловили
    console.groupEnd();
  },
  {
    capture: true,
  }
);
div.addEventListener('click', event => {
  console.group('div listener');
  console.log('target capture', event.target); // по чем кликнули
  console.log('currentTarget capture', event.currentTarget); // где отловили
  console.groupEnd();
});
div.addEventListener(
  'click',
  event => {
    console.group('div listener capture');
    console.log('target capture', event.target); // по чем кликнули
    console.log('currentTarget capture', event.currentTarget); // где отловили
    console.groupEnd();
  },
  {
    capture: true,
  }
);
text.addEventListener('click', event => {
  console.group('text listener');
  console.log('target capture', event.target); // по чем кликнули
  console.log('currentTarget capture', event.currentTarget); // где отловили
  console.groupEnd();
});
text.addEventListener(
  'click',
  event => {
    console.group('text listener capture');
    console.log('target capture', event.target); // по чем кликнули
    console.log('currentTarget capture', event.currentTarget); // где отловили
    console.groupEnd();
  },
  {
    capture: true,
  }
);

// * 1.05
// Делегирование - на одном общем элементе вешание обработчика событий
const calendarRefs = {
  calendar: document.querySelector('.calendar'),
  table: document.querySelector('.calendar__table'),
  thead: document.querySelector('thead'),
  tr: document.querySelector('tr'),
  th: document.querySelector('th'),
  tbody: document.querySelector('tbody'),
  td: document.querySelector('td'),
};
const { calendar, table, thead, tr, th, tbody, td } = calendarRefs;
let prevTdEl = null;
const handelCalendarClick = event => {
  const target = event.target;
  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }
  if (target === prevTdEl) {
    target.classList.toggle('active');
    console.log(target);
    return;
  }
  if (prevTdEl) {
    prevTdEl.classList.remove('active');
  }
  target.classList.add('active'); // ?
  prevTdEl = target;
  console.log(prevTdEl);
  console.log(event);
};
table.addEventListener('click', handelCalendarClick);

//? Колор палитра
const colorElsRefs = {
  container: document.querySelector('.container'),
  pallet: document.querySelector('.js-pallet'),
  palletItem: document.querySelectorAll('.js-pallet > li'), // All возвращает псевдомассив
  palletItemColor: document.querySelector('.pallet__item-color'),
};

const { pallet, palletItem } = colorElsRefs;

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};
const paintElements = () => {
  palletItem.forEach(element => {
    const color = randomColor();
    element.style.backgroundColor = color;
    element.dataset.color = color;
  });
};
const handlePaletteClick = event => {
  if (event.target.nodeName !== 'LI') {
    return;
  }
  console.log(event);
  console.log(event.target);
  console.log(event.target.dataset);
  const currentColor = event.target.dataset.color;
  event.target.firstElementChild.textContent = currentColor;
};

pallet.addEventListener('click', handlePaletteClick);
paintElements();

const messageElsRefs = {
  // container: document.querySelector('.container'),
  // btnButton: document.querySelector('button'),
  // h3: document.querySelector('h3'),
  // message: document.querySelector('.message'),
  messagesWrapper: document.querySelector('.js-messages-wrapper'),
  // p: document.querySelector('p'),
  // message: document.querySelector('.message'),
  // message__closeBtn: document.querySelector('.message__close-btn'),
  // // messagesWrapper: document.querySelector('.messages-wrapper'),
};

const { messagesWrapper } = messageElsRefs;

const handleMessagesClick = event => {
  if (!event.target.classList.contains('message__close-btn')) {
    return;
  }
  console.log(event.target);
  const messageEl = event.target.closest('.message');
  console.log(messageEl);
  console.log(event.currentTarget);
  messageEl.remove();
};
messagesWrapper.addEventListener('click', handleMessagesClick);

//modal

const modalRefs = {
  container: document.querySelector('.container'),
  jsModalOpen: document.querySelector('.js-modal-open'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  closeBtn: document.querySelector('.close-btn'),
};

const { jsModalOpen, backdrop, modal, closeBtn } = modalRefs;

const handleModalClick = event => {
  if (!event.target.classList.contains('.js-modal-open')) {
    return;
  }
  console.log(event);
};
//42.59
