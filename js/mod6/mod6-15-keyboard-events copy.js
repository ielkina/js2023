console.log('mod6-15-keyboard-events');
// console.dir(document.body);
// console.dir(document.body.children); //покажет все элементы/теги на станице
// console.dir(document.body.childNodes)//покажет все теги и классы на станице
// console.dir(document.title)//найдет первый элемент с тегом h1(текст)
// console.dir(document.links)//вернет HTML коллекцию ссылок
// console.dir(document.getElementsByTagName('p'))//вернет HTML коллекцию р по тегу
// console.dir(document.getElementsByClassName('list__link'))//вернет HTML коллекцию ссылок по классу
// console.dir(document.querySelectorAll('button')); //получить все элементы кнопок на странице

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeypress)//реагирует на нажатие всех клавиш
// window.addEventListener('keyup', onKeypress)//реагирует на нажатие всех клавиш
window.addEventListener('keypress', onKeypress)//реагирует на нажатие только тех клавиш которые генерирует какой то символ

// const input     = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button>span');
// const license   = document.querySelector('.js-license');
// const btn       = document.querySelector('.js-button');

refs.clearBtn.addEventListener('click', onClearOutput)


//code:KeyT t - в английской раскладке нажатая клавиша key:е - нажатая клавиша рус раскладки (значение)  
function onKeypress(event) {
  // console.log(event);
  // console.log("event.code: ", event.code);
  // console.log("event.key: ", event.key);
  // refs.output.textContent += event.code;//получение кода клавиши 
  refs.output.textContent += event.key;//получение значение клавиши 
}
function onClearOutput() {
  refs.output.textContent = "";
}




