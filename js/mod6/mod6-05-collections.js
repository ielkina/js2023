console.log('mod6-05-collections');

/**
 * Создаем и добавляем коллекцию
 */

const colorPickerOptions = [
  { label: 'red', color: '#ff0000' },
  { label: 'green', color: '#008000' },
  { label: 'blue', color: '#1115eb' },
  { label: 'grey', color: '#808080' },
  { label: 'pink', color: '#ffc0cb' },
  { label: 'indigo', color: '#4b0082' },
];
// const option = colorPickerOptions[0];
// const btnEl = document.createElement('button')
// btnEl.type = 'button'
// btnEl.textContent = option.label;
// btnEl.style.backgroundColor = option.color
// btnEl.style.width = 40;
// console.log(btnEl);
//old school метод
// const colorPickerContainer = document.querySelector('.js-color-picker')
// const elements = []
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   console.log(colorPickerOptions[i]);
//   const option = colorPickerOptions[i]
//   const btnEl = document.createElement('button')
//   btnEl.type = 'button'
//   btnEl.textContent = option.label;
//   btnEl.style.backgroundColor = option.color//динамический цвет вешаем инлайново
//   //добавить класс со стилями
//   btnEl.classList.add('js-actions__option')
//   // btnEl.style.width = '40px';
//   console.log(btnEl);
//   elements.push(btnEl)
// }
// console.log(elements);
// colorPickerContainer.append(...elements)

//по новому методу

// const colorPickerContainerEl = document.querySelector('.js-color-picker')
// const elements = colorPickerOptions.map(option => {
//   const btnEl = document.createElement('button')
//   btnEl.type = 'button'
//   btnEl.classList.add('js-actions__option')
//   btnEl.textContent = option.label;
//   btnEl.style.backgroundColor = option.color//динамический цвет вешаем инлайново
//   return btnEl
// })
// console.log(elements[0]);
// console.log(elements);
// colorPickerContainerEl.append(...elements)

/**
 * Пишем функцию для создания  разметки корпикера
 */
const colorPickerContainerEl = document.querySelector('.js-color-picker')

const makeColorPickerOptions = (options) => {
  return options.map(option => {
    const btnEl = document.createElement('button')
    btnEl.type = 'button'
    btnEl.classList.add('js-actions__option')
    btnEl.textContent = option.label;
    btnEl.style.backgroundColor = option.color//динамический цвет вешаем инлайново
    return btnEl
  })
}

const elements = makeColorPickerOptions(colorPickerOptions)
colorPickerContainerEl.append(...elements)
console.log(elements[0]);