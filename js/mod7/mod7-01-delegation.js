console.log('mod7-01-delegation.js');
//*Делегирование событий
//* - общий слушатель
//* - фильтр цели клика

const container = document.querySelector('.container');

container.addEventListener('click', onClick);

function onClick(event) {
  console.log(event.target.nodeName);
  console.log(event.target.textContent);
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
}

// function onClick(event) {}

//* код добавление кнопки

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}
//25.43
