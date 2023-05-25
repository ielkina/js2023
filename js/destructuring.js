//Деструктуризация объекта
//-значение по умолчанию
//-имя переменной отличное от имени свойства

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   time: 5,
// };
//плохой вариант решения
// console.log(playlist.name, playlist.rating, playlist.tracks);
//имя локальной переменной в скобках должно совпадать со свойствам в объекте
// const { name, tracks, author = 'me', time = 6 } = playlist; //синтаксис Деструктуризация объекта
// const { trackCount: numberOFTracks = 0 } = playlist; //

// console.log(name, tracks);
// tracks.push('sldjfh');
// console.log(author);
// console.log(numberOFTracks);

//Глубокая Деструктуризация

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rlos, Jamaica',
//   avatar: 'http://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes }, //глубокая Деструктуризация
// } = profile;
// // const { likes, followers, views } = stats; //глубокая Деструктуризация
// console.log(name, tag, location, avatar, followers, views, likes);

// console.log(restProps);
// console.log(profile);

//Деструктуризация массивов
const rgb = [255, 100, 80];

const [a, b, c] = rgb;
//если нужно пропустить свойство
const [red, , blue] = rgb;

// console.log(a, b, c);
// console.log(red, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors); //возвращает массив массивов
// console.log(Math.max(...ratings));

// for (const entry of entries) {
//   // console.log(entry);
//   //или
//   const [name, rating] = entry;
//   // const name = entry[0];
//   // const rating = entry[1];
//   console.log(name, rating);
// }
// //или
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

//Операция rest (сбор)
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rlos, Jamaica',
//   avatar: 'http://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const restProps = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };
//или
// const { name, tag, location, ...restProps} = profile;

// console.log(name, tag, location);
// console.log(restProps);

// console.log(profile);

//Паттерн "Объект настроек"
// - Деструктуризация параметра-объекта в подписи функция
// - rest при деструктуризации в подписи
const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rlos, Jamaica',
  avatar: 'http://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const showProfileInfo = function (userProfile) {
  const {
    name,
    tag,
    location,
    // avatar,
    // stats: { followers, views, likes },
    ...restProps
  } = userProfile;
  // console.log(name, tag);
  console.log(restProps);
};
//или
// const showProfileInfo = function ({ name, tag }) {
//   console.log(name, tag);
// };

showProfileInfo(profile);
