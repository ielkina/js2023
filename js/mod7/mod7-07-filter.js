console.log('mod7-06-filter');

const tech = [
  { label: 'html' },
  { label: 'css' },
  { label: 'javascript' },
  { label: 'node.js' },
  { label: 'react' },
  { label: 'vue' },
  { label: 'next.js' },
  { label: 'modx' },
  { label: 'redux' },
  { label: 'react router' },
  { label: 'graphSQL' },
  { label: 'mangoDB' },
];

/**Рендерим разметку элементов списка
 * Слушаем изменения списка
 * Фильтруем данные и рендерим новые элементы
 */

const filter = document.querySelector('.filter'),
  jsList = document.querySelector('.js-list');

// filter.addEventListener('input', onFilterChange);//нагрузка на браузер так как на каждое нажатие на кньпку идет вызов что дает нагрузку на браузер
//можно оптимизировать это с помощью throttle или debounce

filter.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createItemMarkup(tech);

console.log(listItemsMarkup);

populateList(listItemsMarkup);

// jsList.innerHTML = listItemsMarkup;//innerHTML потому что внутри ul нет разметки

function createItemMarkup(items) {
  return items
    .map(
      item => `
      <li>${item.label}</li>
    `
    )
    .join('');
}

function onFilterChange(event) {
  console.log(event.target.value);
  const filter = event.target.value.toLowerCase(); //при фильтрации приводим в нижний регистр
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter)); //рисуем отфильтрованный массив данных
  console.log(filteredItems);
  const listItemsmarkupe = createItemMarkup(filteredItems);
  console.log(listItemsmarkupe);
  populateList(listItemsmarkupe);
}

function populateList(markup) {
  jsList.innerHTML = markup;
}
//34.05
