console.log('mod6-00-query-selectors');
  /**
 * document.querySelector(selector) и document.querySelectorAll(selector)
 * selector - любая валидный CSS-селектор
 * Что возвращают?
 */

  //Код выполняется после того как построено дом дерево

console.log(document);  //описание нашего документа
console.dir(document);
console.log(window);  //описание окна браузера

  //пишем с приставками что б потом не запутаться с классами документа html
  // const navEl // элемент элемента
  // const navRef // элемент ссылка

  // querySelector это метод выбора элемента  на обьекте документа, возвращает один элемент первый
  //'li' тег html документа
  //'.li' селектор css документа или класса в html документе
  //'#li' селектор id элемента
  //если ничего не найдено вернется null

const magicBtn     = document.querySelector('.js-magic-btn');       //кнопка
const navEl        = document.querySelector('.site-nav');           //вернет первый найдены элемент (список)
const navItems     = document.querySelectorAll('.site-nav__item');  //найти все элементы списка
const navItem      = navEl.querySelector('.site-nav__item');        //вернет первый найденный элемент списка
const navIteSecond = navItems[1];                                   //вернет второй найденный элемент списка
console.log(navEl);

  //поиск элементов по клику кнопки (рендер)
magicBtn.addEventListener('click', () => {
  console.log(navItems);
  console.log(navItem);
  console.log(navIteSecond);
});

  /**
 * Document.querySelector и Element.querySelector
 */
