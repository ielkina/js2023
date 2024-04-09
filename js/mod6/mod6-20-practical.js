console.log('mod6-20-practical');

const formEls = {
  formSubmit: document.getElementById('form-submit'),
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  btnFormSubmit: document.querySelector('button#submit-btn'),
};

const { btnFormSubmit, password, email, name, formSubmit } = formEls;

formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.elements.email.value);
  const {
    name: { value: nameValue },
    email: { value: emailValue },
    password: { value: passwordValue },
  } = event.target.elements;
  console.log(nameValue, emailValue, passwordValue);
  event.target.reset(); //очищаем форму после отправки
});

//создаем инпут и спан при введение текста

const inputEl = document.querySelector('.input');
const textEl = document.querySelector('.span');

const handleInput = event => {
  if (event.target.value === 'stop') {
    event.target.removeEventListener('input', handleInput);
    textEl.textContent = 'Error';
    return;
  }
  textEl.textContent = event.target.value;
};

inputEl.addEventListener('input', handleInput);

const moveBtn = document.querySelector('.move-btn'),
  movingBox = document.querySelector('.moving-box');

// let position = 0;
// let direction = '+';
// const step = 30;

// const handleClickOnMoveBtn = event => {
//   if (document.body.clientWidth <= position + step + 50) {
//     direction = '-';
//   }
//   if (position - step <= 0) {
//     direction = '+';
//   }
//   position = direction === '+' ? position + step : position - step;
//   movingBox.style.marginLeft = `${position}px`;
//   return;
// };
// moveBtn.addEventListener('click', handleClickOnMoveBtn);
// movingBox.addEventListener('mouseover', handleClickOnMoveBtn);

let position = { top: 0, left: 0 };
const STEP = 10;
//передвижение объекта с помощью клавиш
const handleMoveBal = event => {
  if (event.code === 'ArrowDown') {
    position.top += STEP;
    movingBox.style.top = position.top + 'px';
  }
  if (event.code === 'ArrowUp') {
    position.top -= STEP;
    movingBox.style.top = position.top + 'px';
  }
  if (event.code === 'ArrowLeft') {
    position.left -= STEP;
    movingBox.style.left = position.left + 'px';
  }
  if (event.code === 'ArrowRight') {
    position.left += STEP;
    movingBox.style.left = position.left + 'px';
  }
};

document.addEventListener('keydown', handleMoveBal);
