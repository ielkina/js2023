const counter = {
  value: 0,
  increment() {
    // console.log('increment - this', this);
    this.value += 1;
  },
  decrement() {
    // console.log('decrement - this', this);
    this.value -= 1;
  },
};

// //console.log(document)
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrementBtn)
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.textContent = 'Минуснуть'//textContent прописывает текст в выбранном элементе HTML документа

decrementBtn.addEventListener('click', function () {
  console.log('Клик на декремент');
  counter.decrement();
  console.log(counter)
  valueEl.textContent = counter.value
});

incrementBtn.addEventListener('click', function () {
  console.log('Клик на инкремент');
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});

// const decrementBtn = document
//   .querySelector('.js-decrement')
//   .addEventListener('click', function () {
//     console.log('Клик на декремент');
//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
//   });
