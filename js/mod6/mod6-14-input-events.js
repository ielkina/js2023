console.log('mod6-14-input-events.js');
// console.dir(document.body);
// console.dir(document.body.children); //покажет все элементы/теги на станице
// console.dir(document.body.childNodes)//покажет все теги и классы на станице
// console.dir(document.title)//найдет первый элемент с тегом h1(текст)
// console.dir(document.links)//вернет HTML коллекцию ссылок
// console.dir(document.getElementsByTagName('p'))//вернет HTML коллекцию р по тегу
// console.dir(document.getElementsByClassName('list__link'))//вернет HTML коллекцию ссылок по классу
// console.dir(document.querySelectorAll('button')); //получить все элементы кнопок на странице
/**
 * Паттерн "Обькта ссылок"
 *
 * События
 * - focus и blur выделение текстового поля input
 * - input и change
 * - Чекбоксы и свойства checked
  С текстом мы используем событие input 
  С инпутами и радиобаттами мы используем событие change

*/
const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// const input     = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button>span');
// const license   = document.querySelector('.js-license');
// const btn       = document.querySelector('.js-button');

// refs.input.addEventListener('focus', onInputFocus)
// refs.input.addEventListener('blur', onInputBlur)
// refs.input.addEventListener('change', onInputChange)
// refs.input.addEventListener('input', onInputChange)

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onInputFocus() {
  console.log('Инпут получил фокус - событие focus');
}
function onInputBlur() {
  console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
  // console.log(event);//консолет введенные данные при  изменения фокуса
  console.log(event.currentTarget.value); //консолет введенные данные при  изменения фокуса
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log('✔');
  console.log(event.currentTarget);//ссылка на чекбокс
  console.log(event.currentTarget.checked);//ссылка на чекбокс
  refs.btn.disabled = !event.currentTarget.checked;//кнопка выключена когда не чекнут чекбокс
}
