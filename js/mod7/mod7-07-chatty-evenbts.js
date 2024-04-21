console.log('mod7-06-chatty-events');

//болтливые события это события которые срабатывают слишком часто
// scroll

//проблема в то что на каждое движение мышки вызывает стэк вызова функций перегружая его  и все тормозит
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCdInvocationCounter = 0;

// window.addEventListener('mousemove', onMouseMove);

//решение  с помощью lodash
//_.throttle - тормозит вызов функции, используют в болтливых событиях, вызывает функцию через установленный промежуток времени

const throttledOnMouseMove = _.throttle(onMouseMove, 500); //функция вызывается 1 раз в 500 ms

window.addEventListener('mousemove', _.throttle(onMouseMove, 500));
//или
window.addEventListener('mousemove', throttledOnMouseMove);

function onMouseMove(event) {
  mouseMoveCdInvocationCounter += 1;

  coordsOutputRef.textContent = /*html*/ `
    Ко-во вызовов onMouseMove: ${mouseMoveCdInvocationCounter},
    x: ${event.clientX},
    y: ${event.clientY}
  `;
}

//debounce - вызывает функцию через установленное время после остановки события

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

var inputCbInvocatioNCounter = 0;

// inputRef.addEventListener('input', onInputChange);
inputRef.addEventListener('input', _.debounce(onInputChange, 500));

function onInputChange(event) {
  inputCbInvocatioNCounter += 1;
  outputRef.textContent = /*html*/ `
    Кол-во вызовов oninputChange: ${inputCbInvocatioNCounter},
    Значение: ${event.target.value}
  `;
}
