/**
 * Пагинация запросов
 * у разных сервисов разные параметры(опции) запросов 
 //todo - страница и кол на странице 
 * Загружаем статьи
 * Загружаем статьи при нажатии на кнопку Загрузить еще
 * Обновляем страницу в параметрах запроса
 * Рисуем статьи
 * Сброс значения при поиске по новому критерию
 // https://newsapi.org/
 // 627b604816e34667a27a3ddb897812f2
 */

import articlesTpl from '../templates/articles.hbs';
import '../css/style.css';
import NewsApiService from './components/news-service';
import LoadMoreBtn from './components/load-more-btn';

//находим элементы с которыми будем взаимодействовать
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  //* loadMoreBtn: document.querySelector(`[data-action="load-more"]`),
};

const loadMoreBtn = new LoadMoreBtn({ selector: `[data-action="load-more"]`, hidden: true });
const newApiService = new NewsApiService();

console.log(loadMoreBtn);

//добавляем на этот элемент событие
refs.searchForm.addEventListener('submit', onSearch);
//* refs.loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore); //вешаем на экземпляр класса слушатель событий

function onSearch(e) {
  e.preventDefault();
  newApiService.query = e.currentTarget.elements.query.value;

  if (newApiService.query === '' || newApiService.query === ' ') {
    return alert('Введите корректный запрос');
  }
  loadMoreBtn.show();
  //! Похожий код выносим в отдельную функцию  fetchArticles();
  // loadMoreBtn.disable();
  newApiService.resetPage();
  clearArticlesContainer(); //очистка маркап после нового запроса
  // newApiService.fetchArticles().then(articles => console.log(articles));
  //! Похожий код выносим в отдельную функцию fetchArticles();
  // newApiService.fetchArticles().then(articles => {
  //   clearArticlesContainer(); //очистка маркап после нового запроса
  //   appendArticlesMarkup(articles);
  //   loadMoreBtn.enable();
  // });
  fetchArticles();
}

function onLoadMore() {
  //! Похожий код выносим в отдельную функцию fetchArticles();
  // loadMoreBtn.disable();
  // // newApiService.fetchArticles().then(articles => console.log(articles));
  // // newApiService.fetchArticles().then(appendArticlesMarkup);
  // newApiService.fetchArticles().then(articles => {
  //   appendArticlesMarkup(articles);
  //   loadMoreBtn.enable();
  // });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function fetchArticles() {
  loadMoreBtn.disable();
  // newApiService.fetchArticles().then(articles => console.log(articles));
  // newApiService.fetchArticles().then(appendArticlesMarkup);
  newApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}
