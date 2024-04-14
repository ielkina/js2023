import cars from "../data/cardsExport.js";

console.log("mod7-04-rusich-one.js");
//Делегирование это добавление слушателя события на общего родителя и прослушивание всего что происходит внутри контейнера
// const container = document.querySelector(".js-container");
// [...container.children].forEach((item) =>
//   item.addEventListener("click", onClick)
// );
// container.addEventListener("click", onClick);

// function onClick(e) {
//   const el = e.target.classList.contains("js-box");
//   //инверсия (!) условия позволяет не нагружать функцию
//   //т.е если обходимое условие не выполняется то действие функции сразу прекращается/выходит и условия
//   if (!el) {
//     return;
//   }
//   // console.log(e.currentTarget.dataset.color);
//   console.log(e.currentTarget);
//   console.log(e.target);
//   console.log(e.target.dataset.color);
// }

//Крестики нолики

// const container = document.querySelector(".js-content");
// let player = "✖";
// let historyX = [];
// let historyO = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class="item js-item"data-id="${i}"></div>`;
//   }
//   container.innerHTML = markup;
// }
// createMarkup();

// container.addEventListener("click", onClick);

// function onClick(e) {
//   const { target } = e;
//   if (!target.classList.contains("js-item") || target.textContent) {
//     return;
//   }
//   const id = Number(target.dataset.id);
//   let result = false;
//   if (player === "✖") {
//     historyX.push(id);
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id);
//     result = isWinner(historyO);
//   }
//   target.textContent = player;
//   const isEndGame = historyO.length + historyX.length === 9;
//   if (result) {
//     alert(`winner ${player} 😎`);
//     resetGame();
//     return;
//   } else if (isEndGame) {
//     alert(`Try again 😱`);
//     resetGame();
//     return;
//   }
//   player = player === "✖" ? "⭕" : "✖";
// }

// function isWinner(arr) {
//   return wins.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyO = [];
//   player = "✖";
// }
//1,41

// const instance = basicLightbox.create(/*html*/ `
//    <h1>Dynamic Content</h1>
//    <p>you can set the content of the lightbox with js.</p>
//   `);
// console.log(instance);
// instance.show();

const container = document.querySelector(".js-container");

const markup = cars.map(
  ({ img, model, type, id }) => `
  <li  class= "js-target js-card" data-car-id="${id}">
    <img  class= "js-target" src="${img}" alt="${model}" width="300">
    <h2 class= "js-target" >${model} ${type}</h2>
  </li>
`
);
container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onClick);

function onClick(e) {
  const { target } = e;
  // if (target.nodeName === "UL") {
  //   return
  // }
  // console.log(target);
  if (!target.classList.contains("js-target")) {
    return;
  }
  // console.log(target);
  //dataset съедает пробел и переводит в кэмэлкасе
  //?? оператор нулевого сравнения - работает только на null undefined
  const carId = target.dataset.carId ?? target.closest('.js-card').dataset.carId
  // console.log(carId);
  // console.log(e);
  const currentItem = cars.find(({ id }) => id === Number(carId));
  console.log(currentItem);
  const instance = basicLightbox.create(/*html*/`
  <div style="background-color: #fff;">
    <img loading="lazy" src="${currentItem.img}" class="image" width="300" height="" alt="${currentItem.model}">
    <h2>${currentItem.model}</h2>
    <h3>${currentItem.type}</h3>
    <p>${currentItem.price}</p>
  </div>
`)
  instance.show();
}
