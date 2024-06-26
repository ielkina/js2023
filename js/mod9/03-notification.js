// const alerts = document.getElementsByClassName('alert success js-alert');
// const alert = document.querySelector('.alert success js-alert');
// const texts = document.querySelectorAll('#text');
// const alerts = document.getElementsByClassName('alert');
// const ps = document.getElementsByTagName('p');
// const text = document.querySelector('p#text');

console.log('test');

/**
 * Показывает и скрывает добавляет/удаляет класс js-visible
 * Скрываем через определенное время
 * Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000; //ms
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', noNotificationClick);

showNotification();

/**
 * Функция
 */

function noNotificationClick() {
  hideNotification();
  clearInterval(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('js-visible');
  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('js-visible');
}
