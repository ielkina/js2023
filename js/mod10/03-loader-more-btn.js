// import * as refs from "./03-loader-more-btn.html";
// import articlesTpi from './templates/articles.hbs';

// // //** Подключение шаблонизатора */
// import data from './templates/data.hbs';
 
// let template = Handlebars.compile(data);
 
// export default data({
//  data: 'Handlebars',
// });


//*

// var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
// // execute the compiled template and print the output to the console
// console.log(template({ doesWhat: "rocks!" }));
// //*

//import './css/style.css';
import NewsApiService from './components/news-service.js';

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
// import articlesapi from './templates/articles';

//находим элементы с которыми будем взаимодействовать
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector(`[data-action="load-more"]`),

  // formGroup: document.querySelector('.form-group mx-sm-3 mb-2'),
  // srOnly: document.querySelector('.sr-only'),
  // btnSubmit: document.querySelector('button[type=""submit""]'),
  // btnButton: document.querySelector('button[type=""button""]'),
  // spinnerBorder: document.querySelector('.spinner-border spiner-border-sm spinner is-hidden'),
  // label: document.querySelector('.label'),
};

const newApiService = new NewsApiService();

//добавляем на этот элемент событие
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  newApiService.query = e.currentTarget.elements.query.value;
  newApiService.resetPage();
  newApiService
    .fetchArticles()
    .then(articles => console.log(articles))
    // .finally(
    //   () =>
    //     //в любом случае
    //     newApiService.query.reset() //очисти форму
    // );
}

// function formReset(){
//   const form = 
// };

function onLoadMore() {
  newApiService.fetchArticles().then(articles => console.log(articles));
}


//54.31