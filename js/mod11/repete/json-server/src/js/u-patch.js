const BASE_URL = 'http://localhost:3000';

const patchBook = {
  title: 'method PATCH',
};
const putBook = {
  title: 'method PUT',
};

function updateBookById(patch, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patch),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(response => response.json())
    .then(console.log);
}
function renderBook(book) {
  console.log(book);
  console.log('апдейт успешен');
}

updateBookById(patchBook, 1).then(renderBook(patchBook));
