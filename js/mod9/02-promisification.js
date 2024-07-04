/**
 * Промисификация:
 * - Проблема доступа к результату промиса с колбэком
 * - Функция которая возвращает промис
 */

const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    setTimeout(() => {
      if (passed) {
        resolve(`вот ваше блюдо ${dish}`);
      } else {
        reject('извините закончились ингредиенты');
      }
      return 5;
    }, DELAY);
  });
};

const p = makeOrder('пирожок');
// makeOrder('пирожок').then(x=> {console.log(x)})
p.then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}

/**
 * Промисификация синхронных функций
 * - Promise.resolve()
 * - Promise.reject()
 */

const order = dish => {
  return Promise.resolve(`вот ваше блюдо ${dish}`);
};

order('пироженое').then(onMakeOrderSuccess).catch(onMakeOrderError);

/**
 * Покемоны с https://pokeapi.co/
 */

const fetchPokemonById = (id, onSuccess, onError) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
  // .then(pokemon => {
  //   console.log(pokemon);
  //   onSuccess(pokemon);
  // })
  // .catch(error => {
  //   console.log(error);
  //   onError(error);
  // });
};

fetchPokemonById(5).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(10, onFetchSuccess, onFetchError);

function onFetchSuccess(pokemon) {
  console.log(pokemon);
}

function onFetchError(error) {
  console.log(error);
}
/**
 * 
 * @returns 
 */
const makePromise = () => {
  return new Promise((resolve, reject) => {
    resolve('r');
  });
};

makePromise().then(result => console.log(result));
