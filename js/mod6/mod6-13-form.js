// // console.log('mod6-13-form.js');
// console.dir(document.body);
// console.dir(document.body.children); //покажет все элементы/теги на станице
// console.dir(document.body.childNodes)//покажет все теги и классы на станице
// console.dir(document.title)//найдет первый элемент с тегом h1(текст)
// console.dir(document.links)//вернет HTML коллекцию ссылок
// console.dir(document.getElementsByTagName('p'))//вернет HTML коллекцию р по тегу
// console.dir(document.getElementsByClassName('list__link'))//вернет HTML коллекцию ссылок по классу
// console.dir(document.querySelectorAll('button')); //получить все элементы кнопок на странице

/**
 * - Событие submit
 * - Действие браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/ru/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit1);

function onFormSubmit(event) {
  event.preventDefault(); //при отправке не перезагружает страницу
  // console.dir(event.currentTarget);//ссылается на тот элемент который прослушивает это событие
  // console.dir(event.currentTarget.elements.subscription.value);//ссылается на тот элемент который прослушивает это событие
  // // console.log(' отправка формы');
  const formElements = event.currentTarget.elements;
  console.dir(formElements);

  // const mail = formElements.email//ссылки на элементы
  // const password = formElements.password//ссылки на элементы
  // console.dir(mail.value)//значение элемента
  // console.dir(password.value)//значение элемента

  const email = formElements.email.value;
  const password = formElements.password.value;
  const subscription = formElements.subscription.value;
  // console.log(`email: ${email}, password: ${password}`)
  const formData = {
    email,
    password,
    subscription,
  };
  console.log(formData);
}
function onFormSubmit1(event) {
  event.preventDefault();
  //FormData собирает все значения
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    // console.log('onForm -> value', value);
    console.log(value);
    // console.log('onForm -> name', name);
    console.log(name);
  });
}
