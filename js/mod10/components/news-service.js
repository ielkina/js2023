export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    console.log(this);
    const config = {
      lang: 'en',
      limit: 5,
    };
    const { lang, limit } = config;
    //настройки доступа API запроса (ключ)
    const options = {
      headers: {
        Authorization: '627b604816e34667a27a3ddb897812f2',
      },
    };

    // const API_KEY = '627b604816e34667a27a3ddb897812f2';

    //pageSize=5 количество статей по запросу api
    //todo - страница и кол на странице
    // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=${lang}&pageSize=${size}&page=${page}`;
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=${limit}&page=${this.page}`;

    //промис
    return fetch(url, options)
      .then(p => p.json())
      .then(data => {
        console.log(data);
        this.incrementPage();
        return data.articles;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
