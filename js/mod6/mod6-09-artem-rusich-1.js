// https://github.com/ArtemRysich/Group_77/blob/main/Lesson_11/script.js
import cars from '../data/cardsExport.js';
// const title = document.querySelector("h1");//поиск элемента по тегу
const title = document.querySelector('.js-title'); //поиск элемента по классу
// const title = document.querySelector("#title");// поиск элемента по id
//если мы работаем с html элементом мы выводим его через консоль дир
//html делят всегда на два типа
//тип коммуникации(input, form) и текстовый(h1..., li, p, a и т.д.)
// Метод innerText позволяет получить CSS, а textContent — нет.
title.textContent = 'Hello JS'; //меняем текст заголовка
console.dir(title.textContent);
console.dir(title.dataset.goods);
// ClassList
title.classList.add('title-color'); //добавляем класс
title.classList.remove('title-color'); //удаляем класс
title.classList.toggle('title-color'); //если класса нет добавит
title.classList.toggle('title-color'); //если класс есть удалит
//меняем стили заголовка, инлайново добавлять стили плохая практика
title.style.fontSize = '40px';
title.style.fontFamily = 'Bebas Neue, sans-serif';
title.style.color = '#00ffff';
//dataset
console.dir(title.dataset.goods);
//прячем html элемент, вернет true или false
//ели есть атрибут удаляет если нет добавляет
// title.hidden = false;
// title.hidden = 'false';
// title.hidden = true;
// title.hidden = false;
console.log(`title.hidden`, title.hidden); //false
//получаем атрибуты элемента
console.dir(title.getAttribute('hidden'));
console.dir(title.getAttribute('data-id'));
console.dir(title.getAttribute('data-goods'));
//добавляем (меняем) атрибуты элемента, но не удаляет
title.setAttribute('hidden', 'true');
//удаляем атрибуты элемента
title.removeAttribute('hidden');
//системные атрибут имеют свои поведение и свойства(зарезервированные), data-attributes атрибуты в которые можно добавить(разбудить, выбрать из предложенных) какую то информацию дальше
console.dirxml(title);
console.dir(title);
/**
 * Что храниться в свойстве dataset? - Data attributes
 */
const list = document.querySelector('.js-list');
console.dir(list);
console.dir(list.children); //HTML коллекция, перебирающие методы массивов не работают
console.log([...list.children]); //через spred возвращаем массив

//создаем пункт списка
const li = document.createElement('li');
//добавляем его в список
li.textContent = list.children.length + 1;
//добавляем элемент в разметку
list.append(li);
//добавляем класс к элементу
li.classList.add('title-color');
//добавляем атрибут к элементу
li.dataset.id = '12234';
//создаем элементы
const div = document.createElement('div');
const h2 = document.createElement('h2');
//добавляем текст в элемент
h2.textContent = 'Hello';
//добавляем в разметку элементы
li.append(div);
div.append(h2);
console.log(li);

//создаем элемент с помощью шаблонных строк. популярный способ
const li1 = `
<li class="title-color" data-id='123'>${list.children.length + 1}
  <div>
    <h2>Hello</h2>
    <h2>${h2.textContent}</h2>
  </div>
</li>`;
//добавляем в разметку
list.insertAdjacentHTML('beforeend', li1);
console.log(list);

//статический
const listStatic = document.querySelectorAll('li'); //возвращает массив с доступными методами для массива
//динамический (живой)
const listDynamics = document.getElementsByTagName('li'); //возвращает коллекцию

// const list = document.querySelector(".js-list");
const li2 = document.createElement('li'); //6
li2.textContent = list.children.length + 1;
list.append(li2);
const li3 = document.createElement('li'); //7
li3.textContent = list.children.length + 1;
list.append(li3);
console.log(list);

// const listStatic = document.querySelectorAll('li');//возвращает массив с доступными методами для массива
// //динамический (живой)
// const listDynamics = document.getElementsByTagName('li');//возвращает коллекцию

console.log('listStatic', listStatic); //querySelectorAll показывает только те элементы на момент когда был вызван, т.е элементы созданные после команды querySelectorAll не покажет
console.log('listDynamics', listDynamics); //getElementsByTagName показывает все элементы, как до вызова так и после, данные всегда будут актуальны
console.log('listDynamics', [...listDynamics]); //вернет просто массив с доступными методами для массива, так же и здесь покажет все элементы

// Перерва до 21.10

//создаем список с карточками товаров
const container = document.querySelector('.js-container');
console.log(`container`, container);

//первый пример плохой пример так делать не надо

// cars.forEach(({ id, model, type, price, img }) => {
//   const markup = `
//   <li data-id="${id}">
//     <img src="${img}" alt="${model}" class="img" ">
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Ціна - ${price}</p>
//   </li>
//   `;
//   container.insertAdjacentHTML('beforeend', markup);
//   //с таким подходом полностью перерисовывается страница
//   //такое поведение очень нагружает браузер, перерисовывает разметку, использует ненужный трафик и т.д. происходит постоянная реиндексация страницы
//   //такое поведение называется reflow, и будет вызываться каждый каз как только будет добавляться элемент
//   //поэтому этот способ добавлять элементы (карточки) в список плохой
// });
// console.dir(container);

/*оптимизация такого примера*/

const markup = cars
  .map(
    ({ id = 'none', model, type, price, img }) =>
      //id будет приходить не со всех элементов поэтому по дефолту можно поставить 'none', у того кого будет он добавиться у того кого нет будет 'none'
      //дата атрибут все добавляется на общего родителя карточки (li), это в дальнейшем поможет идентифицировать поведение пользователя
      `<li data-id="${id}">
        <img src="${img}" alt="${model}" class="img" ">
        <h2>Марка - ${model}</h2>
        <h3>Модель - ${type}</h3>
        <p>Ціна - ${price}</p>
      </li>`
  )
  .join('');
console.dir(markup);
//в таком варианте reflow будет происходить 1 раз, только после того как добавились все элементы, это очень влияет на производительность и снимает нагрузку с функционала, так как страница не будет перерисовываться. Этот подход лучше.
container.insertAdjacentHTML('beforeend', markup);
console.log(markup);
console.log(container);

const containerAfter = document.querySelector('.js-container');
//не очень хороший вариант, операция добавление как и операция удаление делает прямое изменение в доме в таком случае было сделано 30 перерендер что ведет к нагрузке дома
[...containerAfter.children].forEach(item => {
  //перебираем массив элементов
  if (item.dataset.id == 'none') { //делаем проверку на соответствие необходимых условий
    item.remove(); //удаляем элемент
    // если необходимо удалить элемент по какому то конкретному условию используем метод remove
  }
});
//если необходимо удалить все используем innerHTML
// containerAfter.innerHTML = '';
console.dir(container);


//находим элемент разметки по id
const message = document.querySelector("#message");
//получаем текст элемента
console.log(message.value); // Default textarea message
console.log(message);

//===================================================

const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // http://127.0.0.1:3000/about /-подтягивает наш url

const link = document.querySelector('.link')
console.log(link.href);

//===================================================

const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src =
  'https://images.pexels.com/photos/15920141/pexels-photo-15920141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


const dishes = document.querySelectorAll(".dishes > li");

dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});
//У конспекті "data-атрибути" в прикладі чому ".dishes менше li"(".dishes > li"), чому не дорівнює або просто ".dishes" без "li"?

const dishes1 = document.querySelectorAll(".dishes > li");
dishes1.forEach((dish) => {
  console.log(dish);
});

// const list = document.querySelector('.js-list')
console.dir(list);
console.dir(list.firstChild.textContent = "hello");
console.dir(list.firstElementChild);
