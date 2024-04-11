console.log('mod7-00-bubbling.js');

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

const { parent, child, innerChild } = refs;

parent.addEventListener('click', onParentClick);
child.addEventListener('click', onChildClick);
innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(event) {
  console.log('onParentClick');
  console.log('onParentClick - > event.target', event.target);
  console.log('onParentClick - > event.currentTarget', event.currentTarget);
}
function onChildClick(event) {
  console.log('onChildClick');
  console.log('onChildClick - > event.target', event.target);
  console.log('onChildClick - > event.currentTarget', event.currentTarget);
}
function onInnerChildClick(event) {
  console.log('onInnerChildClick');
  console.log('onInnerChildClick - > event.target', event.target);
  console.log('onInnerChildClick - > event.currentTarget', event.currentTarget);
}
