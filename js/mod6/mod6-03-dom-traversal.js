console.log('mod06-03-dom-traversal');
/**
 * Свойства навигации по ДОМ-узлам (взять список)
 * https://fecore.net.ua.siteindices.com/
 */

// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).

//предки родители потомки дети соседи

const navEl = document.querySelector('.site-nav');
console.log(navEl);

//
// const firstNavItem = navEl.querySelector('.site-nav__item')
//тоже самое
const firstNavItem = navEl.firstElementChild;

console.log(firstNavItem);
console.log(navEl.children[1]);//доступ ко второму элемента списка