// https://media.licdn.com/dms/image/C5112AQEr5Pvwftcnpw/article-cover_image-shrink_600_2000/0/1538241940135?e=1687392000&v=beta&t=nBUq1TFjTuJmww0wqfhnd8A8SI_Vnq4S0F-xk2GI3YM
// https://uk.wikipedia.org/wiki/SOAP
// https://swapi.dev/
// https://swapi.dev/documentation
// https://www.weatherapi.com/

// Перерва до  21.00
const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();//убираем дефолтное поведение ивента запроса

  const { query, days } = evt.currentTarget.elements;
  console.log(days);

  getWeather(query.value, days.value)
    .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => console.log(err));

}

function getWeather(city, days) {
  //параметры запроса API
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'e156a1bd04234fa2929122749241607';
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: 'uk',
  });
  console.log(params.toString());

  return fetch(`${BASE_URL}/forecast.json?${params}`).then(resp => {
    if (!resp.ok) { //проверка на ошибку статуса запроса на бэкэнд
      throw new Error(resp.statusText);// статус ошибки с бэкэнда
    }
    return resp.json();//при успешном запросе вернут data.json данные 
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({//деструктуризация ответа с бэкэнда для формирования html док на сайте
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li>
    <img src="${icon}" alt="${text}">
    <p>${text}</p>
    <h2>${date}</h2>
    <h3>${avgtemp_c}</h3>
</li>`
    )
    .join('');
}


//49.50


