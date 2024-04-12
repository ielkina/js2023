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

const container = document.querySelector(".js-content");
let player = '✖'
let markup = "";
for (let i = 0; i < 9; i += 1) {
  markup += /*html*/ `<div class="item js-item"></div>`;
}
container.innerHTML = markup;
container.addEventListener('click', onClick);

function onClick(e) {
  const onClickItem = e.target.classList.contains('js-item')
  if(!onClickItem){
    return;
  }
  console.log(e.currentTarget);
  console.log(e.target);
  e.target.textContent = player;
  player = player ==="✖" ? "⭕" : "✖";
}
//35.22