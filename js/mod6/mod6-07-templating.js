console.log('mod6-07-templating');
/**
 * Методы работы с разметкой
 * 
 * Свойства innerHTML
 * чтение
 * запись
 */
//получаем ссылку на заголовок
const titleEl = document.querySelector('.title')
console.log(`titleEl`, titleEl)
console.log(titleEl.textContent) //вернет весь текстовый контент внутри тега
console.log(titleEl.innerHTML); //вернет с вложенными элементами

const ulEl = document.querySelector('.site-nav')
console.log(ulEl.innerHTML) //вернет без учета тега ul

titleEl.innerHTML = 'sdjfdjsg' //перезаписал все внутренности в этом теге
console.log(`titleEl`, titleEl)
//перезаписали вложенность на ссылку в момент парсинга браузера  (парсинг загрузка разметки а потом подгрузка остальных функционалов старници)
titleEl.innerHTML = `<a class="link" href="/index.html">Это ссылка</a>`;
//+ очень просто очистить контент тега
// titleEl.innerHTML = ''//пустой тег заголовка
//использовать его только в том случаи если его надо очистить
//или записать туда что то не изменяя старое
// titleEl.innerHTML += `<a class="link" href="/index.html">Это ссылка</a>`;
//так никогда не делать потому что inner сначало очищает потом добавляет в имеющейся разметке - это очень влияет на производительность браузера (трафик и все такое, скаченная информация)
//добавлять что то новое к существующему через иннер нельзя

//для того что бы удалить полностью или заменить полностью
/**
 * Вставка разметки с userAdjacentHTML()
 * что бы добавить что новое вставляет только строки
 * appendChild вставляет дом узлы(элементы)
 */
//перед началом
titleEl.insertAdjacentHTML('beforebegin', '<p class="beforebegin">До заголовка, открывающимся тегом h1'); //вставляем тег р перед тегом h1
titleEl.insertAdjacentHTML('afterend', '<div class="afterend">После закрывающегося тега h1') //вставляем тег div после тега h1
titleEl.insertAdjacentHTML('afterbegin', '<div class="afterbegin">Первая строка после открытого тега заголовка') //вставляет в тег h1 сразу после открытия тега
titleEl.insertAdjacentHTML(
  'afterbegin',
  '<div class="afterbegin">Еще одна строка'
); //вставляет в тег h1 сразу после открытия тега, будет подставлять на первое место сдвигая тем самым предыдущую операцию на второе