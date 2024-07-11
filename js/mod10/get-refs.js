export default function getRefs() {
  const refs = {
    jsCardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.form-inline', '.search-form', '.js-search-form'),
    formGroup: document.querySelector('.form-group'),
    formControl: document.querySelector('.form-control'),
    btnButton: document.querySelector('button[type="submit"]', '.btn', '.btn-primary'),
  };
  return refs;
}
