console.log('mod7 lesson two');

const randomColor = () => '#' + (Math.random().toString(16) + '000000').substring(2, 8).toLocaleLowerCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const handleDocumentScroll = () => {
  console.log(window.scrollY);
};

// document.addEventListener('scroll', handleDocumentScroll);

document.addEventListener('scroll', _.throttle(handleDocumentScroll, 500));

/******** */
// 1,13

const countries = [
  {
    name: 'Ukraine',
    capital: 'Kiev',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    population: '41 342 465',
    area: '603.628',
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    population: '41 342 465',
    area: '603.628',
  },
];

const searchInput = document.querySelector('.search-input');
const outputError = document.querySelector('.output-error');
const countryCard = document.querySelector('.country-card');

const createCountryCard = ({ name, capital, population, area } = {}) => {
  return `
    <li class="country-card__item">
      <strong>Страна:</strong>${name}
    </li>
    <li class="country-card__item">
      <strong>Столица:</strong>${capital}
    </li>
    <li class="country-card__item">
      <strong>Население:</strong>${population}
    </li>
    <li class="country-card__item">
      <strong>Площадь:</strong>${area}км<sup>2</sup>
    </li>
  `;
};
// 1.15

const handleSearchCountry = ({ target }) => {
  const searchQuery = target.value.trim();
  // console.count('input event', searchQuery);
  // console.log(searchQuery);
  if (!searchQuery) {
    outputError.textContent = '';
    countryCard.innerHTML = '';
    return;
  }
  const findCountry = countries.find(element => element.name.toLowerCase() === searchQuery.toLowerCase());
  // console.log(findCountry);
  if (!findCountry) {
    countryCard.innerHTML = '';
    outputError.textContent = `Такой страны ${searchQuery} не найдено`;
    return;
  }
  outputError.textContent = '';
  countryCard.innerHTML = createCountryCard(findCountry);
};

searchInput.addEventListener('input', _.debounce(handleSearchCountry, 700));

const refsGallery = {
  gallery: document.querySelector('.gallery'),
  bannerImg: document.querySelector('.banner__img'),
  galleryImgs: document.querySelectorAll('.gallery__img'),
};

const { gallery, bannerImg, galleryImgs } = refsGallery;
// 3.09

const handleImageClick = event => {
  event.preventDefault(); //убираем дефолтное поведение
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return; //проверяем на каком элементе был клик
  }
  // console.dir(target);
  const { bannerUrl } = target.dataset; //подставляем в src картинки банера ссылку с data-banner src большой картинки
  bannerImg.src = bannerUrl;
};

galleryImgs.forEach(picture => {
  //добавляем класс, для  плавной загрузки картинке
  picture.addEventListener(
    'load',
    ({ target }) => {
      target.classList.add('appear');
    },
    { once: true }
  );
});

gallery.addEventListener('click', handleImageClick);
//2.50

{
  /* <script
  src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
  integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>; */
}

const addSrcAttToImg = () => {
  const imageEls = document.querySelectorAll('img');
  imageEls.forEach(element => {
    element.src = element.dataset.src;
  });
};

const createLazySizeScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.setAttribute(
    'integrity',
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
  );
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('referrerpolicy', 'no-referrer');
  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading поддерживается');
  addSrcAttToImg();
} else {
  console.log('Атрибут loading не поддерживается');
  document.body.append(createLazySizeScript());
}
