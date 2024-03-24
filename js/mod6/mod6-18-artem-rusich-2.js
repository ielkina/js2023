// import  from "../";
import cars from '../data/cardsExport.js';
console.log('mod6 rusich lesson 2');
// const btnEl = document.querySelector('.js-click');
// const container = document.querySelector('.js-container');

// let step = 0;

// //плохая практика писать фн инлайново слушателе событий, нужно писать как колбэк
// btnEl.addEventListener('click', onClick); //добавляем слушатель событий на кнопку
// container.addEventListener('click', onClick); //добавляем слушатель событий на на див

// function onClick(event) {
//   step += 5;
//   container.style.marginLeft = `${step}px`; //при клике добавляем инлайн стиль
//   container.style.marginTop = `${step}px`; //при клике добавляем инлайн стиль
//   console.log(event); //получаем обьект параметров ивента
//   console.log(event.currentTarget); //тот элемент на который добавили слушатель событий
//   console.log(event.target); //сам элемент
// }

// //убираем ненужный текст
// const titleEl = document.querySelector('.js-title-1');
// const maxLength = 13;
// const totalLength = maxLength + 3;
// titleEl.addEventListener('click', onClick);

// function onClick(event) {
//   const title = event.currentTarget;
//   const str = title.textContent.slice(0, maxLength);
//   if (title.textContent.length > totalLength) {
//     // const str = title.textContent.slice(0, 13);
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute('data-title', remainder); //прячем лишний текст в атрибут
//     title.textContent = str + '...'; //убираем лишний текст
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = str + remainder;
//   }
//   // console.log(remainder);
//   // console.log(event.currentTarget);
// }

//масштабирование слушателя
//убираем ненужный текст
const titleEl2 = document.querySelector('.js-title2');
const titleEl3 = document.querySelector('.js-title3');
const titleEl4 = document.querySelector('.js-title4');

titleEl2.addEventListener('click', onClick);
titleEl3.addEventListener('click', onClick);
titleEl4.addEventListener('click', onClick);

const maxLength = 13;
const totalLength = maxLength + 3;

//при маштабировании слушателя лучше лучше не пользоваться внешними const
//event & currentTarget использоваться в функции
function onClick(event) {
  const title = event.currentTarget;
  const str = title.textContent.slice(0, maxLength);
  if (title.textContent.length > totalLength) {
    // const str = title.textContent.slice(0, 13);
    const remainder = title.textContent.slice(maxLength);
    title.setAttribute('data-title', remainder); //прячем лишний текст в атрибут
    title.textContent = str + '...'; //убираем лишний текст
  } else {
    const remainder = title.dataset.title;
    title.textContent = str + remainder;
  }
  // console.log(remainder);
  // console.log(event.currentTarget);
}

// const userNameInputEl = document.querySelector('.js-input-js');
// //срабатывает каждый раз когда что то вводим в текстовое поле
// // userNameInputEl.addEventListener('input', onInput)//срабатывает каждый раз, данные
// userNameInputEl.addEventListener('change', onInput); //срабатывает при утрате фокуса, данные

// function onInput(event) {
//   // console.log(event);//InputEvent
//   // console.log(event.currentTarget);//Input Element
//   // console.dir(event.currentTarget);//Input обьект
//   console.dir(event.currentTarget.value); //введеные данные
// }

const formEl = document.querySelector('.js-form-js');
formEl.addEventListener('submit', onSubmit);
console.dir(formEl.elements);
const { userName, userEmail } = formEl.elements;
console.dir(userEmail);
console.dir(userName);

function onSubmit(event) {
  // console.dir(event);
  event.preventDefault(); //убираем базовые настройки.
  // у submit есть базовая настройка перезагрузки страницы
  // при submit есть процесс перезагрузки страницы убирает все дефолтные поведение
  // сбрасываем базовые настройки form, a, link, формы
  // console.log(event.currentTarget);
  const { userName, userEmail, userPhone, password } =
    event.currentTarget.elements;
  // console.dir(event.currentTarget);
  // console.dir(userEmail.value);
  // console.dir(userName.value);
  // console.dir(userPhone.value);
  // console.log('password', password.value);
  // console.log(userName.value);

  //отправляем данные на бэкэнд
  const data = {
    email: userEmail.value,
    name: userName.value,
  };
  console.log(data);
}
// слушатель событий клавиатуры вешается на весь html документ
const container = document.querySelector('.js-container');

// document.addEventListener('keyup', onKeyup); //срабатывает когда клавишу отпустили
// document.addEventListener('keypress', onKeypress) //когда нажали, не понимает служебные клавиши Ctrl и т.д устаревает
document.addEventListener('keydown', onKey); //в любых других двух случаях, чаще всего применяется
//keyCode устарел не использовать
//key раскладка на клавиатуре
//code код клавиши

//добавляем класс по нажатию определенной клавиши
function onKey(event) {
  console.dir(event);
  // if (event.code === 'Escape' || event.code === 'Enter') {
  //   container.classList.toggle('tog');
  // }

  //Слушатель комбинации клавиш
  if (event.ctrlKey && event.code === 'KeyC') {
    //запрет копирования комбинациями клавишами
    event.preventDefault(); //отменяем дефолтное предназначение клавиш,
    console.dir(event);
    // alert('Копируешь?')
    return;
  }
}

function onKeypress(event) {
  console.log(event);
}
function onKeyup(event) {
  console.log(event);
}

//фильтр машин

const list = document.querySelector('.js-list-cars');
const form = document.querySelector('.js-search-form');
const favoriteList = document.querySelector('.js-favorite-list');

list.addEventListener('click', addFavoriteOnClick);
form.addEventListener('submit', onSearch);
list.insertAdjacentHTML('beforeend', createMarkup(cars));

function createMarkup(arr) {
  return arr
    .map(
      ({ id, model, type, price, img }) => `
  <li data-id="${id}">
    <img src="${img}" alt="${model} ${type}" style="display:block;width:250px">
    <div class="js-favorite">💛</div>
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price} $</p>
  </li>`
    )
    .join('');
}

function onSearch(event) {
  event.preventDefault(); //сбиваем дефолтное поведение submit
  const form = event.currentTarget;
  const { query, select } = form.elements;
  // console.dir(query.value);
  // console.dir(select.value);
  const searchCars = cars.filter(
    item =>
      //фильтруем, приводим в нижний регистр, убираем лишние пробелы в конце и начале
      item[select.value].toLowerCase() === query.value.trim().toLowerCase()
  );
  // console.log(searchCars);
  // console.dir(form.elements);
  list.innerHTML = createMarkup(searchCars);
}

function addFavoriteOnClick(event) {
  // console.log(event.currentTarget); //повесили слушателя на лист
  // console.log(event.target); //а действие произошло на картинке
  if (event.target.classList.contains('js-favorite')) {
    event.target.classList.add('js-favorite-active');
    event.target.textContent = '💚';
    //проверяем есть ли такой класс с помощью метода contains
    const { id } = event.target.closest('li').dataset;
    console.log(id);
    const { model, type } = cars.find(({ id: carId }) => carId === Number(id));
    addFavoriteCar(`${model} ${type}`);
  }
}

function addFavoriteCar(currentTarget) {
  favoriteList.insertAdjacentHTML('beforeend', `<li>${currentTarget}</li>`);
}
