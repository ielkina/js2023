const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonById(id) {
  const url = `${BASE_URL}/pokemon/${id}`;
  return fetch(url) //по умолчанию fetch делает запрос get
    .then(response => 
      // console.log(response);
      // return response.json(); //распарсить ответ
      response.json()
    );
  // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //по умолчанию fetch делает запрос get
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

  //     renderPokemonCard //передаем ссылку на функцию, вызовется тогда когда будет в этом необходимо
  //     // renderPokemonCard() //вызываем функцию
  //   )
  //   .catch(error => {
  //     //если с ошибкой
  //     console.log(error);
  //   });
}

export default { fetchPokemonById };
