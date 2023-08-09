//плагин который жестко привязывается к интерфейсу
const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
  onUpdate = () => null,
} = {}) {
  console.log(onUpdate);
  // this._rootSelector = rootSelector;
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRef(rootSelector);
  this.onUpdate = onUpdate;
  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRef = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.value = refs.container.querySelector('[data-value]');
  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype.bindEvent -> this', this);
    this.increment();
    // this.decrement();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype.bindEvent -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
  this.onUpdate()
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
  onUpdate: () => console.log('Это мой кастомный callback для onUpdate'),
});

new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
