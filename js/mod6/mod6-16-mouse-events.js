console.log('mod6-16-mouse-event.js');
/**
 * Событие мыши 
 * - mouseenteer и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задача - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box')

boxRef.addEventListener('mouseenter', onMouseEnter);//срабатывает когда мышка заходит в границы блока класс остается пока указатель мыша находится в области элемента 
boxRef.addEventListener('mouseleave', onMouseLeave);//когда выходит из границ
boxRef.addEventListener('mouseout', onMouseLeave);
boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mousemove', onMouseMove);//движение мыши 

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}







