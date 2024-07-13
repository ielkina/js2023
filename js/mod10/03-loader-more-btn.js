/**
 * Пагинация запросов
 * у разных сервисов разные параметры(опции) запросов 
 //todo - страница и кол на странице 
 * Загружаем статьи
 * Загружаем статьи при нажатии на кнопку Загрузить еще
 * Обновляем страницу в параметрах запроса
 * Рисуем статьи
 * Сброс значения при поиске по новому критерию
 */

// https://newsapi.org/
// 627b604816e34667a27a3ddb897812f2

// import artictestapi from './templates/articles';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  // main: document.querySelector('main'),
  // formGroup: document.querySelector('.form-group mx-sm-3 mb-2'),
  // srOnly: document.querySelector('.sr-only'),
  // btnSubmit: document.querySelector('button[type=""submit""]'),
  // btnButton: document.querySelector('button[type=""button""]'),
  // spinnerBorder: document.querySelector('.spinner-border spiner-border-sm spinner is-hidden'),
  // label: document.querySelector('.label'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  // const API_KEY = '627b604816e34667a27a3ddb897812f2';

  //pageSize=5 количество статей по запросу api

  const config = {
    lang: 'en',
    size: 10,
    page: 1,
  };

  const { lang, size, page } = config;
  //todo - страница и кол на странице
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=${lang}&pageSize=${size}&page=${page}`;

  const options = {
    headers: {
      Authorization: '627b604816e34667a27a3ddb897812f2',
    },
  };

  fetch(url, options)
    .then(p => p.json())
    .then(console.log);
}
//23.45