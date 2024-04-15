/** @format */
console.log('mod7-05-lesson1');
// currentTarget  ссылается на тот элемент на котором висит событие
// target на элемент где словили событие
const sectionRefs = {
	div: document.querySelector('.div'),
	section: document.querySelector('.section'),
	text: document.querySelector('.text')
};
const {div, section, text} = sectionRefs;
// зануривание>клик(инициализация елемента на котором произошло событие)>всплытие
section.addEventListener('click', event => {
	console.group('section listener');
	console.log('target', event.target); // по чем кликнули
	console.log('currentTarget', event.currentTarget); // где отловили
	console.groupEnd();
});
// включение слушателя на capture(только на ныряние). Сначала всегда отработает функция на зануривание(capture)
section.addEventListener('click', event => {
	console.group('section listener capture');
	console.log('target capture', event.target); // по чем кликнули
	console.log('currentTarget capture', event.currentTarget); // где отловили
	console.groupEnd();
}, {capture: true});
div.addEventListener('click', event => {
	console.group('div listener');
	console.log('target capture', event.target); // по чем кликнули
	console.log('currentTarget capture', event.currentTarget); // где отловили
	console.groupEnd();
});
div.addEventListener('click', event => {
	console.group('div listener capture');
	console.log('target capture', event.target); // по чем кликнули
	console.log('currentTarget capture', event.currentTarget); // где отловили
	console.groupEnd();
}, {capture: true});
text.addEventListener('click', event => {
	console.group('text listener');
	console.log('target capture', event.target); // по чем кликнули
	console.log('currentTarget capture', event.currentTarget); // где отловили
	console.groupEnd();
});
text.addEventListener('click', event => {
	console.group('text listener capture');
	console.log('target capture', event.target); // по чем кликнули
	console.log('currentTarget capture', event.currentTarget); // где отловили
	console.groupEnd();
}, {capture: true});

// * 1.05
