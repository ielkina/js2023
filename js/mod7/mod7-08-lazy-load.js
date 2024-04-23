console.log('mod7-06-lazy-load');

/**  Ленивая загрузка изображений (концепция)
 * - Нативная поддержка
 * - Событие выгрузки изображения
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// console.log(lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true }); //один раз
});

function onImageLoaded(event) {
  console.log('Картинка загрузилась');
  console.log(event.target);
  event.target.classList.add('appear');
}
//* 56,14
