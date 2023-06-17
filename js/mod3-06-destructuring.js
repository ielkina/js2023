//Деструктуризация объекта - распаковка
//-значение по умолчанию
//-имя переменной отличное от имени свойства

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   time: 5,
// };

// //плохой вариант решения
// // console.log(
// //   playlist.name,
// //   playlist.rating,
// //   playlist.tracks
// // );

// //имя локальной переменной в скобках должно совпадать со свойствам в объекте
// const {
//   name,
//   rating,
//   tracks,
//   author = 'me',
//   time = 6,
//   trackCount: numberOFTracks = 6, //в лок переменную numberOFTracks возьми значение trackCount
// } = playlist; //синтаксис операции Деструктуризация(распаковка) объекта

// // const { } = playlist;
// // const { trackCount: numberOFTracks = 0 } = playlist;

// console.log(name, tracks);
// tracks.push('трек-4');
// console.log(tracks);

// console.log(playlist.author);

// console.log(author);

// console.log(numberOFTracks);

// //в объекты свойства не пишет а читает
// console.log(playlist);

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
//   stats, //глубокая Деструктуризация
// } = profile;
// const {
// likes,
// followers,
// views
// } = stats; //глубокая Деструктуризация

// //синтаксис объединение двух деструктуризация (аналогичная)
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { likes, followers, views }, //глубокая Деструктуризация
// } = profile;
// //глубокая Деструктуризация
// console.log(name, tag, location, avatar, followers, views, likes);

// console.log(restProps);
// console.log(profile);

// // //Деструктуризация массивов
// const rgb = [255, 100, 80];

// //деструктуризация массива по порядку a=[0] b=[1] c=[2]
// const [a, b, c] = rgb;
// //если нужно пропустить свойство ( ,) сколько надо пропустить столько запятых
// const [red, , blue] = rgb;

// console.log(a, b, c);
// console.log(red, blue);

//ищем самый высокий рейтинг
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };
// const ratings = Object.values(authors); //возвращает массив массивов
// console.log(Math.max(...ratings));

// const keys = Object.keys(authors);
// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }
// console.log(Math.max(...keys));

// const entries = Object.entries(authors);
// for (const entry of entries) {
//   // console.log(entry);
//   //или
//   const [name, rating] = entry;
//   //тоже самое
//   // const name = entry[0];
//   // const rating = entry[1];
//   console.log(name, rating);
// }
// //или
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

// //Операция rest (сбор)
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

// // const restProps = {
// //   avatar: profile.avatar,
// //   stats: profile.stats,
// // };
// // или
// //rest всегда в конце
// const { name, tag, location, ...restProps} = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

//Паттерн "Объект настроек"
// - Деструктуризация параметра-объекта в подписи функция
// - rest при деструктуризация в подписи
//синтаксис
// const fn = function (params) {};
// fn({
//   age: 10,
//   friends: 5,
//   game: {},
// });

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

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     // avatar,
//     // stats: { followers, views, likes },
//     ...restProps
//   } = userProfile;
//   // console.log(name, tag);
//   console.log(restProps);
// };
// //или
const showProfileInfo = function ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  console.log(name, tag);
};

showProfileInfo(profile);
