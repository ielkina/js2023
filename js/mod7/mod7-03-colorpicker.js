console.log('mod7-03-colorpicker.js');

const colors = [
  { hex: '#ff0000', rgb: '255, 0, 0' },
  { hex: '#00ff00', rgb: '0, 255, 0' },
  { hex: '#0000ff', rgb: '0, 0, 255' },
];

const colorPickerRefs = {
  palette: document.querySelector('.js-palette'),
  colorCard: document.querySelector('.color-card'),
  colorSwatch: document.querySelector('.color-swatch'),
  colorMeta: document.querySelector('.color-meta'),
  p: document.querySelector('p'),
};

const { palette, colorCard, colorMeta, colorSwatch, p } = colorPickerRefs;

console.log(createColorCardsMarkup(colors));

const cardsMarkup = createColorCardsMarkup(colors);

palette.insertAdjacentHTML('beforeend', cardsMarkup);
palette.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
      <div class="color-swatch" 
        data-hex="${hex}" 
        data-rgb="${rgb}" 
        style="background-color: ${hex}; width: 100px; height: 50px;">
      </div>
      <div class="color-meta">
        <p>HEX:${hex}</p>
        <p>RGB:${rgb}</p>
      </div>
    </div>`;
    })
    .join('');
  // console.log(markup[0]);
}

function onPaletteContainerClick(e) {
  const isColorSwatchEl = e.target.classList.contains('color-swatch');
  if (!isColorSwatchEl) {
    return;
  }
  console.log(e.target);
}
