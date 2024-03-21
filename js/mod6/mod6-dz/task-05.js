// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const nameInputEl = document.querySelector('#name-input');
// const nameOutputEl = document.querySelector('#name-output');

// nameInputEl.addEventListener('input', () => {
//   const name = nameInputEl.value;

//   nameOutputEl.textContent = name ? name : 'Anonymous';
// });

// Отримуємо посилання на елементи DOM
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Додаємо слухача події input до поля вводу
nameInput.addEventListener('input', function () {
  // Отримуємо поточне значення поля вводу
  const inputValue = nameInput.value.trim();

  // Перевіряємо, чи поле вводу не порожнє
  if (inputValue !== '') {
    // Якщо поле не порожнє, встановлюємо його значення у вміст спана
    nameOutput.textContent = inputValue;
  } else {
    // Якщо поле порожнє, встановлюємо "Anonymous" у вміст спана
    nameOutput.textContent = 'Anonymous';
  }
});
