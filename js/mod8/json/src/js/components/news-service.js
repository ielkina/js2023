const API_KEY = '627b604816e34667a27a3ddb897812f2';
//настройки доступа API запроса (ключ)
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

const config = {
  lang: 'en',
  limit: 5,
  options: {
    headers: {
      Authorization: API_KEY,
    },
  },
};

const { lang, limit, options } = config;

const BASE_URL = `https://newsapi.org/v2/`;

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    console.log(this);
    //pageSize=5 количество статей по запросу api
    //todo - страница и кол на странице
    // // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=${lang}&pageSize=${size}&page=${page}`;
    // const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=${limit}&page=${this.page}`;
    const url = `${BASE_URL}everything?q=${this.searchQuery}&pageSize=${limit}&page=${this.page}`;

    //промис
    return (
      fetch(url, options)
        .then(response => response.json())
        // .then(data => {
        //   console.log(data);
        //   this.incrementPage();
        //   return data.articles;
        // });
        //деструктуризация data
        .then(({ articles }) => {
          console.log(articles);
          this.incrementPage();
          return articles;
        })
    );
  }
  //Контроль кол. страницы
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  //Проверка запроса 
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
