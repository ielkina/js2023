/**
 * - HTTP запросы в браузере
 * Fetch API
 * Вкладка Network
 * HTTP методы
 * Заголовки
 * MIME-типы
 * Параметры запроса
 * - Документация REST API
 * Обработка 404 fetch
 * Аутентификация
 * Библиотека-обертки
 * https://pokeapi.co/
 */

import pokemonCardTpl from './templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearching);

function onSearching(e) {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const searchQuery = form.elements.query.value;
  //   API.fetchPokemonById(searchQuery)
  //     .then(renderPokemonCard) //положительное выполнение запроса
  //     .catch(onFetchError)
  //     .finally(
  //       () =>
  //         //в любом случае
  //         form.reset() //очисти форму
  //     );
}

// const getPokemonId =
// fetch('https://pokeapi.co/api/v2/pokemon/2') //по умолчанию fetch делает запрос get
//   .then(response => {
//     return response.json(); //распарсить ответ
//   })
//   .then(
//     // pokemon => {
//     //если ответ пришел сделай эти действия
//     // console.log(pokemon);
//     // const markup = pokemonCardTpl(pokemon);
//     // console.log(markup);
//     // jsCardContainer.innerHTML = markup;
//     // }

//     renderPokemonCard
//   )
//   .catch(error => {
//     //если с ошибкой
//     console.log(error);
//   });

// console.log(getPokemonId);
function fetchPokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url) //по умолчанию fetch делает запрос get
    .then(response => {
      // console.log(response);
      return response.json(); //распарсить ответ
    });
  //   // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //по умолчанию fetch делает запрос get
  //   //   .then(response => {
  //   //     return response.json(); //распарсить ответ
  //   //   })
  //   //   .then(
  //   //     // pokemon => {
  //   //     //если ответ пришел сделай эти действия
  //   //     // console.log(pokemon);
  //   //     // const markup = pokemonCardTpl(pokemon);
  //   //     // console.log(markup);
  //   //     // jsCardContainer.innerHTML = markup;
  //   //     // }

  //   //     renderPokemonCard //передаем ссылку на функцию, вызовется тогда когда будет в этом необходимо
  //   //     // renderPokemonCard() //вызываем функцию
  //   //   )
  //   //   .catch(error => {
  //   //     //если с ошибкой
  //   //     console.log(error);
  //   //   });
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  console.log(pokemon);
  refs.jsCardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('упс');
}

//=============================

// pokemon?limit=100000&offset=0. - параметры запроса (query string)
// mySite.com/api/pokemon? имя=значение&имя=значение - дополнительные настройки запроса
const limit = 50;

//различные варианты api запросов

//! apiKey - обязателен при некоторых запросах, он дается при регистрации

fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
  .then(r => r.json())
  .then(console.log);

fetch(`https://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=36°57'01.3,30°57'49.1`)
  .then(r => r.json())
  .then(console.log);

const url = `https://https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY`;
const options = {
  headers: {
    'X-Api-Key': 'apiKey',
  },
};

fetch(url, options) //запрос новостей но новостям биткоина
  .then(r => r.json())
  .then(console.log);
