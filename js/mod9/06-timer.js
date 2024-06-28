console.log('timer');

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop'),
  clockface: document.querySelector('.js-clock'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }
  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  /**
   * Принимает число приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  pad(value) {
    return String(value).padStart(2, '0');
  }

  /**
   * Принимает время в милесекундах
   * Вычисляет сколько в них вмещает часов/мину/секунд
   * Возвращает обьект со свойствами hours, mins, secs
   * Адская копипаста со стека
   */
  getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (100 * 60 * 60 * 20)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
  }
}

const timer = new Timer({
  onTick: updateClockface,
});
// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();

//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = getTimeComponents(deltaTime);

//       updateClockface(time);

//       // console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// timer.start();

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/**
 * Принимает время в милесекундах
 * Вычисляет сколько в них вмещает часов/минут/секунд
 * Рисуем интерфейс
 */

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

//функция рассчитывает какое количество часов/минут/секунд в определенном количестве милесекунд (Unix)

// console.log(getTimeComponents(Date.now()));

//? Моя функция вывода времени */

//? function printCurrentTime() {
//   let currentDate = new Date(Date.now());
//   let hours = currentDate.getHours().toString().padStart(2, '0');
//   let minutes = currentDate.getMinutes().toString().padStart(2, '0');
//   let seconds = currentDate.getSeconds().toString().padStart(2, '0');
//   console.log(`${hours}:${minutes}:${seconds}`);
//? }

//? printCurrentTime();

// function printCurrentTime() {
//   let timestamp = Date.now(); // Получаем текущее время в миллисекундах
//   let currentDate = new Date(timestamp); // Создаем объект Date на основе полученного времени
//   let hours = currentDate.getHours().toString().padStart(2, '0'); // Получаем часы
//   let minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Получаем минуты
//   let seconds = currentDate.getSeconds().toString().padStart(2, '0'); // Получаем секунды
//   console.log(`${hours}:${minutes}:${seconds}`);
// }

// // Пример использования функции:
// printCurrentTime();

//2.16
