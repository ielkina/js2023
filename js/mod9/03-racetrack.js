const horses = [
  'Beauty', // Black Beauty
  'Big Red',
  'Big Red', // Man O' War
  'Flicka',
  'Hidalgo',
  'Lord of the Rings',
  'Seabiscuit',
  'Secretariat',
  'Shadowfax',
  'Silver',
  'Spirit',
  'Stallion of the Cimarron',
  'The Admiral', // War Admiral
  'The Biscuit',
  'Trigger',
  `The Lone Ranger's Horse`,
];

let raceCounter = 0

const refs = {
  btnButton: document.querySelector('.js-start-race'),
  jsProgress: document.querySelector('.js-progress'),
  jsWinner: document.querySelector('.js-winner'),
  jsResultTable: document.querySelector('.js-result-table > tbody'),
};

refs.btnButton.addEventListener('click', () => {
  onStart();
});

function onStart() {
  raceCounter +=1
  const promises = horses.map(run);
  updateWinner('');
  updateProgress('Заезд начался, ставки не принимаются');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    const second = time / 1000;
    updateWinner(`🎉 Победил ${horse}, финишировал за ${second} секунды времени`);
    updateResultTb({ horse, second, raceCounter});
  });
}

function waitForAll(args) {
  Promise.all(args).then(() => {
    updateProgress(`Заезд закончен, ставки принимаются`);
  });
}

function updateWinner(message) {
  refs.jsWinner.textContent = message;
}

function updateProgress(message) {
  refs.jsProgress.textContent = message;
}

function updateResultTb({ horse, second, raceCounter}) {
  const tr = /*html*/ `
  <tr>
    <td>${raceCounter}</td>
    <td>${horse}</td>
    <td>${second}</td>
  </tr>
 `;
  refs.jsResultTable.insertAdjacentHTML('beforeend', tr);
}

// console.log('%c Заезд начался, ставки не принимаются', 'color: brown; font-size: 14px;');

// const promises = horses.map(horse => run(horse));
//или
// const promises = horses.map(run);
//массив промисов
// console.log(promises);

// Promise.race([]) для ожидания первого выполненного промиса

// Promise.race(promises).then(({ horse, time }) => {
//   const second = time / 1000;
//   console.log(`%c Победил ${horse}, финишировал за ${second} секунд времени`, 'color: yellow;');
// });

// Promise.all([]) для ожидания всех промисов

// Promise.all(promises).then(() => {
//   console.log(`%c Заезд закончен, ставки принимаются`, 'color: blue;');
// });

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}
// run('')
//   .then(x => console.log(x))
//   .catch(e => console.log(e));
