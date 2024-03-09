console.log('mod6-11-practice');
import users from '../data/usersExport.js';
const listEl = document.querySelector('.li-item');
const ulEl = listEl.parentNode;
const liList = [...ulEl.children];
console.log(listEl.previousElementSibling);
listEl.nextElementSibling.firstElementChild.textContent = 'fgggfgh';

//создать ul и li и добавить его в div.root (как шаблонную строчку с помощью createElement)

const rootEl = document.querySelector('.root');

function addList(el) {
  const ulEl = document.createElement('ul');
  console.log(ulEl);
  const liItemEl = document.createElement('li');
  liItemEl.textContent = 'lorem';
  ulEl.append(liItemEl);
  el.append(ulEl);
}
addList(rootEl);

function addList2(el) {
  const markup = `
  <ul>
    <li>lorem</li>
  <ul>
  `;
  el.insertAdjacentHTML('beforeend', markup);
}

addList2(rootEl);

//массив обьектов с юзерами необходимо добавить в дом список этих юзеров

const listEls = document.querySelector('.users');
//первый вариант решения
function addEls(users, listEl) {
  const liEl = users.map(({ id, first_name, last_name, email, phone }) => {
    const fullNameEl = document.createElement('p')
    const emailEl = document.createElement('p')
    const phoneEl = document.createElement('p')
    const listEl = document.createElement('li');
    listEl.setAttribute('id', id)
    fullNameEl.textContent = `${first_name} ${last_name}`
    emailEl.textContent = email
    phoneEl.textContent = phone
    listEl.append(fullNameEl, emailEl, phoneEl)
    return listEl
  });
  listEl.append(...liEl)
}
addEls(users, listEls)

//второй вариант решения инлайново инлайново
const addUsersEls = (array, listEl) => {
  // const markup = array.reduce( //reduce быстрее чем остальные методы
  //   (acc, { id, first_name, last_name, email, phone }) =>
  //     acc +
  //       `
  //       <li id=${id}>
  //         <p>${first_name} ${last_name}</p>
  //         <p>${email}</p>
  //         <p>${phone}</p>
  //       </li>
  //       `, ""
  // );
  const markup = array.map(
    ({ id, first_name, last_name, email, phone }) =>
      `<li id=${id}>
          <p>${first_name} ${last_name}</p>
          <p>${email}</p>
          <p>${phone}</p>
        </li>` ).join('');

  listEl.insertAdjacentHTML("beforeend", markup)
}
addUsersEls(users, listEls)

//написать функцию в которую будет передаваться список, в списке она будет искать лишки и удалять те лишки у которых имена совпадают

const removeEl = (ulEl, searchQuery) => {
  // const listChildren = ulEl.children;
  // const array = [...listChildren]
  // const element = array.find(item => item.firstElementChild.textContent.includes(searchQuery))
  // if (element) {
  //   element.remove()
  // }
  //деструктуризация
  const element = [...ulEl.children].find(item => item.firstElementChild.textContent.includes(searchQuery))
  if (element) {
    element.remove()
  }
}
removeEl(listEls, 'Triss')
// console.log(listEls);