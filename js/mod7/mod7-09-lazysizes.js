console.log('mod7-06-lazysizes');

/**
 * Библиотека lazysizes
 * - feature detection
 * - Нативная поддержка если браузер поддерживает такую загрузку не нужно подключать библеотеку
 * если не поддерживает тогда подключить библиотеку
 */

if ('loading' in HTMLImageElement.prototype) {
  //feature detection выявление возможностей браузера
  console.log('Если браузер Поддерживает ленивки(loading)');
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src; //динамически добавляем атрибут src
  });
} else {
  console.log('Если браузер Не поддерживает ленивки добавляем в разметку cdn подключения скрипта ленивой загрузки');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

// console.log(lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true }); //один раз
});

function onImageLoaded(event) {
  console.log('Картинка загрузилась');
  console.log(event.target);
  event.target.classList.add('appear');
}

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}
