// 'https://restcountries.com/v3.1/name/'

//! Лише в випадку коли з даними працюємо в середині функції и не важно что то возвращать
// async function getCapital() {
//   //await работают в паре с async
//   //async может работать без await
//   try {
//     //try catch используют при асинхронны операция или когда не можеш гарантировать положительный отклик базы
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const resp = await fetch(`${URL}Ukraine`);
//     console.log(resp);
//     console.log('end');
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// }
// getCapital();
// //если необходим ответ на запрос - them, catch, finlay

//! В випадку коли з даними працюємо за межами функції
// async function getCapital() {
//   const URL = 'https://restcountries.com/v3.1/name/';
//   const resp = await fetch(`${URL}Ukraine`);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp.json();
// }
// getCapital()
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

/****** */
async function fnName() {} //деклорейшн
const arrow = async() => {}; //arrow
const exp = async function() {}; //expression

const user = {
  async getFoo() {},
  getInfo: async function() {},
  getTest: async() => {},
};

//------------------------------------------------------//

// async function getCapital() {
//   const URL = 'https://restcountries.com/v3.1/name/';
//   const arr = ['Ukraine', 'France', 'Germany'];

//   const responses = arr.map(async ctr => {
//     //массив запросов
//     const resp = await fetch(`${URL}${ctr}`);
//     if (!resp.ok) {
//       throw new Error('Not found');
//       Promise.reject('Not found');
//     }
//     return resp.json();
//   });

//   const prom = await Promise.allSettled(responses);
//   return prom;
// }

// getCapital()
//   .then(data => {
//     const res = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value[0]);
//     const rej = data.filter(({ status }) => status === 'rejected');
//   })
//   .catch(e => console.log(e));

//-------------------------------------------------------------------//

const searchForm = document.querySelector('.js-search');
const addCountry = document.querySelector('.js-add');
const list = document.querySelector('.js-list');
const formContainer = document.querySelector('.js-form-container');
const markup = '<input type="text" name="country">';

addCountry.addEventListener('click', handlerAddInput);
searchForm.addEventListener('submit', handlerForm);

function handlerAddInput() {
  formContainer.insertAdjacentHTML('beforeend', markup);
}

function handlerForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const array = data
    .getAll('country') //получаем все элементы по атрибуту name
    .filter(item => item) //отфильтровываем пустые элементы в массиве запросов, возвращаем эл в том случае если он есть
    .map(item => item.trim()); //убираем лишние пробелы в запросах
  getCountry(array)
    .then(async resp => {
      const capitals = resp.map(({ capital }) => capital[0]);
      const weatherService = await getWeather(capitals);
      list.innerHTML = createMarkup(weatherService);
    })
    .catch(e => console.log(e))
    .finally(() => {
      formContainer.innerHTML = markup;
      searchForm.reset(); //очищаем форму
    });
}

async function getCountry(array) {
  const responses = array.map(async item => {
    const responds = await fetch(`https://restcountries.com/v3.1/name/${item}`);
    if (!responds.ok) {
      throw new Error();
    }
    return await responds.json();
  });

  const data = await Promise.allSettled(responses);
  const countryObj = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value[0]);

  console.log(countryObj);
  return countryObj;
}

async function getWeather(arr) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'ce2cb9b2a3da414bb5b172546231704';

  const resps = arr.map(async city => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: 'uk',
    });

    const resp = await fetch(`${BASE_URL}/current.json?${params}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(resps);
  const objs = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value);

  return objs;
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        current: {
          temp_c,
          condition: { text, icon },
        },
        location: { country, name },
      }) =>
      `<li>
          <div>
            <h2>${country}</h2>
            <h3>${name}</h3>
          </div>
          <img src="${icon}" alt="${text}">
          <p>${text}</p>
          <p>${temp_c}</p>
        </li>`
    )
    .join('');
}

//----------------------------------------------//
// function handlerAddInput() {
//   formContainer.insertAdjacentHTML('beforeend', markup);
// }

// function handlerForm(evt) {
//   evt.preventDefault();
//   const data = new FormData(evt.currentTarget);
//   const arr = data
//     .getAll('country')
//     .filter(item => item)
//     .map(item => item.trim());
//   getCountries(arr)
//     .then(async resp => {
//       const capitals = resp.map(({ capital }) => capital[0]);
//       const weatherService = await getWeather(capitals);
//       list.innerHTML = createMarkup(weatherService);
//     })
//     .catch(e => console.log(e))
//     .finally(() => {
//       formContainer.innerHTML = markup;
//       searchForm.reset();
//     });
// }

// async function getCountries(arr) {
//   const resps = arr.map(async item => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
//     if (!resp.ok) {
//       throw new Error();
//     }

//     return resp.json();
//   });

//   const data = await Promise.allSettled(resps);
//   const countryObj = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value[0]);

//   return countryObj;
// }

// async function getWeather(arr) {
//   const BASE_URL = 'http://api.weatherapi.com/v1';
//   const API_KEY = 'ce2cb9b2a3da414bb5b172546231704';

//   const resps = arr.map(async city => {
//     const params = new URLSearchParams({
//       key: API_KEY,
//       q: city,
//       lang: 'uk',
//     });

//     const resp = await fetch(`${BASE_URL}/current.json?${params}`);

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   });

//   const data = await Promise.allSettled(resps);
//   const objs = data.filter(({ status }) => status === 'fulfilled').map(({ value }) => value);

//   return objs;
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         current: {
//           temp_c,
//           condition: { text, icon },
//         },
//         location: { country, name },
//       }) =>
//         `<li>
//     <div>
//         <h2>${country}</h2>
//         <h3>${name}</h3>
//     </div>
//     <img src="${icon}" alt="${text}">
//     <p>${text}</p>
//     <p>${temp_c}</p>
// </li>`
//     )
//     .join('');
// }