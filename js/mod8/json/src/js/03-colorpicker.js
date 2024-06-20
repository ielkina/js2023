console.log('03-colorpicker.js');

//шаблонизация
//===============================

// `<div>{{name}}</div>`;
// const template = SuperTemplatingEngine.compile(`<div>{{name}}</div>`);

// template({
//   name: 'Mango'
// }); //`<div>{{name}}</div>`

// function template(data) {
//   return `
//     <div>${data.name}</div>
//   `;
// }
/**************************************************************** */
import colorCardTpl from '../templates/color-card.hbs';
import colorCards from "../templates/color-cards.hbs";
import colors from './colors.json';
import '../css/reset.css';
import '../css/style.css';

//Синтаксис Без работы плагина шаблонизатор для парсел
{
  // const colorPickerRefs = {
  //   palette: document.querySelector(".js-palette"),
  //   colorCard: document.querySelector(".color-card"),
  //   colorSwatch: document.querySelector(".color-swatch"),
  //   colorMeta: document.querySelector(".color-meta"),
  //   p: document.querySelector("p"),
  // };
  // const { palette, colorCard, colorMeta, colorSwatch, p } = colorPickerRefs;
  // console.log(createColorCardsMarkup(colors));
  // const cardsMarkup = createColorCardsMarkup(colors);
  // palette.insertAdjacentHTML("beforeend", cardsMarkup);
  // palette.addEventListener("click", onPaletteContainerClick);
  // function createColorCardsMarkup(colors) {
  //   return colors
  //     .map(({ hex, rgb, name }) => {
  //       return `
  //     <div class="color-card">
  //       <div class="color-swatch"
  //         data-hex="${hex}"
  //         data-rgb="${rgb}"
  //         style="background-color: ${hex}; width: 100px; height: 50px;">
  //       </div>
  //       <div class="color-meta">
  //         <p>NAME:${name}</p>
  //         <p>HEX:${hex}</p>
  //         <p>RGB:${rgb}</p>
  //       </div>
  //     </div>`;
  //     })
  //     .join("");
  //   // console.log(markup[0]);
  // }
  // function onPaletteContainerClick(e) {
  //   const isColorSwatchEl = e.target.classList.contains("color-swatch");
  //   if (!isColorSwatchEl) {
  //     //проверка на какой элемент кликнули
  //     return;
  //   }
  //   const swatchEl = e.target;
  //   // const parentColorCard = swatchEl.parentNode;
  //   const parentColorCard = swatchEl.closest(".color-card"); //closest из вложенности до родительского элемента ищет ближайший элемент с классом .color-card
  //   removeActiveCardClass();
  //   addActiveCardClass(parentColorCard);
  //   setBodyBgColor(swatchEl.dataset.hex);
  // }
  // function setBodyBgColor(color) {
  //   document.body.style.backgroundColor = color;
  // }
  // function removeActiveCardClass() {
  //   const currentActiveCard = document.querySelector(".color-card.is-active");
  //   if (currentActiveCard) {
  //     currentActiveCard.classList.remove("is-active");
  //   }
  // }
  // function addActiveCardClass(card) {
  //   // parentColorCard.classList.add("is-active");
  //   // console.log(parentColorCard);
  //   // console.log(e.target.dataset.hex);
  //   // document.body.style.backgroundColor = swatchEl.dataset.hex;
  //   card.classList.add("is-active");
  // }
}

//Переписанный код с помощью плагина шаблонизатора для парсел

//синтаксис передачи массива обьектов #each


// console.log(colorCardTpl(colors[0]));//работа плагина parcel-plugin-handlebars-precompile

const colorPickerRefs = {
  palette: document.querySelector('.js-palette'),
  colorCard: document.querySelector('.color-card'),
  colorSwatch: document.querySelector('.color-swatch'),
  colorMeta: document.querySelector('.color-meta'),
  p: document.querySelector('p'),
};

const { palette, colorCard, colorMeta, colorSwatch, p } = colorPickerRefs;

console.log(createColorCardsMarkup(colors));
const cardsMarkup = createColorCardsMarkup(colors);

palette.insertAdjacentHTML('beforeend', cardsMarkup);
palette.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  // return colors.map(color => colorCardTpl(color)).join(''); //?????????????? Создание экземпляра карточки шаблонизатором
  //передача шаблона одной карточки
  // return colors.map(colorCardTpl).join(''); //?????????????? Создание экземпляра карточки шаблонизатором
  return colorCards(colors) //this

}
function onPaletteContainerClick(e) {
  const isColorSwatchEl = e.target.classList.contains('color-swatch');
  if (!isColorSwatchEl) {
    //проверка на какой элемент кликнули
    return;
  }
  const swatchEl = e.target;
  // const parentColorCard = swatchEl.parentNode;
  const parentColorCard = swatchEl.closest('.color-card'); //closest из вложенности до родительского элемента ищет ближайший элемент с классом .color-card
  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}
function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}
function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}
function addActiveCardClass(card) {
  // parentColorCard.classList.add("is-active");
  // console.log(parentColorCard);
  // console.log(e.target.dataset.hex);
  // document.body.style.backgroundColor = swatchEl.dataset.hex;
  card.classList.add('is-active');
}

//1,02