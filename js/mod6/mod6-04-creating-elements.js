console.log('mod6-04-creating-elements');
// include('js/mod6/mod6-00-query-selectors.js')
/**
 * Создание элементов
 * Вставка узлов: appendChild(element), insertBefore(element, nextSibling), append(...elements), prepend(...elements)
 */

/**
 * Создание заголовка
 */
//в html уже должно быть куда ты добавляешь заголовок
const titleEl = document.createElement('h2');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы';
console.log(titleEl);
//добавляет в конец документа (после файлов подключения скриптов) элемент
document.body.appendChild(titleEl);
console.log(document.body);

/**
 * Создаем картинку
 */

const imgEl = document.createElement('img');
imgEl.src =
  'https://images.pexels.com/photos/1264442/pexels-photo-1264442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
imgEl.alt = 'Макияж';
imgEl.style.width = '164px';
imgEl.width = 300;
console.log("imgEl.width", imgEl.width)
console.log("imgEl", imgEl)
document.body.appendChild(imgEl)
//вставляем картинку в нужное место Html документа
const heroEl = document.querySelector('.hero-img')//находим нужную область
// heroEl.appendChild(titleEl)//вставляем в нужную область заголовок
// heroEl.appendChild(imgEl)//вставляем туда картинку после заголовка
// heroEl.appendChild(titleEl).appendChild(imgEl)
//передаем одним действием столько элементов сколько хотим вставить и в таком порядке в котором хотим что б они стояли, порядок важен
heroEl.append(titleEl, imgEl)
console.log(`heroEl`, heroEl)

/**
 * Создаем и добавляем новый пункт меню
 */
//создание элементов в памяти
const navItemEl = document.createElement('li')
navItemEl.classList.add('site-nav__item')

const navLinkEl = document.createElement('a')
navLinkEl.classList.add('site-nav__link')
navLinkEl.textContent = 'Личный кабинет'
navLinkEl.href = "/profile"

console.log("navItemEl", navItemEl)
console.log("navLinkEl", navLinkEl)

//добавляем сначала в подпункт списка ссылку(а)
navItemEl.appendChild(navLinkEl)//li>a
console.log("navItemEl", navItemEl)
//находим ссылку на список
const navEl = document.querySelector('.site-nav')//ul
console.log("navEl", navEl)
//добавляем пункт списка в конец списка
navEl.appendChild(navItemEl)//ul>...li(a)
console.log("navEl", navEl)
//добавляем в начало 
navEl.insertBefore(navItemEl, null)//null поставит в конец списка
console.log(`navEl`, navEl)

navEl.insertBefore(navItemEl, navEl.firstChild)//поставит элемент в начало списка
console.log(`navEl`, navEl)

navEl.insertBefore(navItemEl, navEl.lastElementChild)//встанет перед последним

navEl.insertBefore(navItemEl, navEl.children[2])//встанет вместо третьего элемента

navEl.insertBefore(navItemEl, navEl.firstElementChild)//встанет вместо первого элемента


