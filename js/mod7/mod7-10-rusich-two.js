console.log('rusich-two');
// https://bundlephobia.com/

const cats = [
  'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
  'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
  'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
  'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
  'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
  'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
  'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
  'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
  'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
  'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
  'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
  'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
];

// console.log(_.throttle); // проверка подключения метода библиотеки

const input = document.querySelector('.js-input');
// input.addEventListener('input',
// _.throttle(onSearch, 600, { // опции, почти никогда не используются
// leading: true, // функция будет вызвана до того как начнется отсчет
// trailing: true // функция будет вызвана после того как начнется отсчет
// }));

const PASSWORD_LENGTH = 7;

input.addEventListener(
  'input',
  _.debounce(onSearch, 800, {
    leading: false, // по умолчанию
    trailing: true, // функция будет вызвана после того как начнется отсчет
  })
);

// когда используем методы throttle или debonce из lodash не используем currentTarget
function onSearch(evt) {
  console.log(evt.target.value);
  if (evt.target.value.trim().length < PASSWORD_LENGTH) {
    evt.target.classList.remove('valid');
    evt.target.classList.add('invalid');
  } else {
    evt.target.classList.remove('invalid');
    evt.target.classList.add('valid');
  }
}

const list = document.querySelector('.js-list');
const markup = cats
  .map(
    cat =>
      `<li><img src="${cat}" loading="lazy" alt="cat" width="600"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum possimus blanditiis fuga harum, aut error vero fugit quas iure et reprehenderit perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum possimus blanditiis fuga harum, aut error vero fugit quas iure et reprehenderit perspiciatis</p></li>`
  )
  .join('');
list.insertAdjacentHTML('beforeend', markup);

// створиты функцию яка приймае 1 параметр масив продуктив и повертае мутованный масив
// потрибно перебраты массив и якщо вин мае обьекты в яких дублюються айди то квонтити цих элементив потрибно сплюсоваты
// а ти обекти в яких айди спивпав видалити з масиву
// (потрибно мутувати масив, створювати новий не потрибно)

// сортировка индификатор уникальный  значение сплюсовано
const products = [
  {
    id: 'sku1',
    qty: 1,
  },
  {
    id: 'sku2',
    qty: 2,
  },
  {
    id: 'sku3',
    qty: 3,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 8,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku2',
    qty: 19,
  },
  {
    id: 'sku4',
    qty: 1,
  },
  {
    id: 'sku1',
    qty: 8,
  },
];

function sortProduct(array) {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    console.log('первый for', element);
    for (let j = i + 1; j < array.length; j += 1) {
      const element = array[j];
      console.log('	второй for', element);
      if (array[i].id === array[j].id) {
        array[i].qty += array[j].qty;
        array.splice(j, 1);
        j -= 1;
      }
    }
  }
}
sortProduct(products);
console.log(products);
// sortProduct(products);
// console.log(products);
// const products = [{
//     id: 'sku1',
//     qty: 15,
// }, {
//     id: 'sku2',
//     qty: 21,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]

// 2,00

// У кожному масиві, а є унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок

// function findUniq(array) {
// for (let i = 0; i < array.length; i += 1) {
//     const result = array[i].split('').every(item => {
//       for (let j = 0; j < array.length; j += 1) {
//         if (i !== j) {
//           if (!array[j].includes(item)) {
//             return true;
//           } else {
//             return false;
//           }
//         }
//       }
//     });
//     if (result) {
//       return array[i];
//     }
// }
// }

// function findUniq(array) {
//   return array.find((current, i) =>
//     current.split('').every(item => array.every((comparison, j) => (i !== j ? !comparison.includes(item) : true)))
//   );
// }

// const findUniq = arr =>
//   arr.find((current, i) =>
//     current.split('').every(item => arr.every((comparison, j) => (i !== j ? !comparison.includes(item) : true)))
//   );

// // from GPT
// let uniqueString = null;

// for (let str of arr) {
// let isUnique = true;
// for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       isUnique = false;
//       break;
//     }
// }
// if (isUnique) {
//     uniqueString = str;
//     break;
// }
// }

// console.log(uniqueString); // "foo"
// }

console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // === 'foo'
console.log(findUniq(['fghj', 'ghfj', 'abcd', 'jhgf', 'fghj', 'fgjh', 'ghjf'])); // === 'abcd'
console.log(findUniq(['qwe', 'camp', 'acmp', 'pmac', 'camp', 'apmc', 'pmac'])); // === 'qwe'
