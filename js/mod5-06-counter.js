//https://pawelgrzybek.github.io/siema/
//плагин который жестко привязывается к интерфейсу

//конструктор
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  this._step = step; //_step - приватное свойство
  this._rootSelector = rootSelector;
  this._value = initialValue;
  this._refs = this._getRef(rootSelector);//передаем в конструктор, вызываем, и получаем ссылку в метод ссылок
  this.onUpdate = onUpdate;
  this._bindEvents();
  this.updateValueUI();
};

//
CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

//получаем ссылки на элементы
CounterPlugin.prototype._getRef = function (rootSelector) {
  const refs = {};//создаем элемент 
  refs.container = document.querySelector(rootSelector);//получаем все ссылки из элемента
  // console.log(`container`, refs.container)
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  // console.log(` refs.incrementBtn`,  refs.incrementBtn)
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  // console.log(`refs.decrementBtn`, refs.decrementBtn)
  refs.value = refs.container.querySelector('[data-value]');
  // console.log(` refs.value`,  refs.value)
  return refs;//и возвращаем их
};

//добавляем событие на элементы 
CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype.bindEvent -> this', this);
    this.increment();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype.bindEvent -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};
//добавляем изменение значения при исполнение события
CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
  this.onUpdate();
};

//первая кнопка
new CounterPlugin({
  rootSelector: '#counter-1',
  step: 1,
  initialValue: 0,
  onUpdate: () => console.log('Это мой кастомный callback для onUpdate'),
});
//вторая кнопка
new CounterPlugin({
  rootSelector: '#counter-2',
  step: 10,
  onUpdate: () => console.log('Это мой кастомный callback для onUpdate'),
});
