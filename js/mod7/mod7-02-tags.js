console.log('mod7-02-tags.js');

//* Делегирование
//* - один из многих
//* - несколько из многих

const ulEls = {
  tags: document.querySelector('.js-tags'),
  tagsItem: document.querySelector('.tags__item'),
  btnButton: document.querySelector('button[type="button"]'),
};

const { tags, tagsItem, btnButton } = ulEls;

console.log(tags);

let selectedTag = null;

tags.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = document.querySelector('.tags__btn--active');
//   // if (currentActiveBtn) {
//   //   currentActiveBtn.classList.remove('tags__btn--active');
//   // }
//   //* ? заменяет условие if - только при доступе к свойству
//   currentActiveBtn?.classList.remove('tags__btn--active');
//   // console.log(e.target);
//   // e.target.classList.add('tags__btn--active');
//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

const selectedTags = new Set();
function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const btn = e.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);

  // e.target.classList.toggle('tags__btn--active');
  // selectedTags.push(e.target.dataset.value);
  // console.log(selectedTags);
  // selectedTags.add(e.target.dataset.value);
  // console.log(selectedTags);
}
