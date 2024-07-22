const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Test book for post',
  author: 'Harper Lee',
  year: 1960,
  genre: 'Fiction',
  copies: 5,
  available: 3,
  isbn: '9780061120084',
};

const newBooks = [
  {
    title: '1',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    copies: 5,
    available: 3,
    isbn: '9780061120084',
  },
  {
    title: '2',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    copies: 5,
    available: 3,
    isbn: '9780061120084',
  },
];

function createNewBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options)
    .then(response => response.json())
    .then(console.log);
}

function renderBook(book) {
  console.log('новая книга добавлена в базу данных');
  console.log(book);
}

createNewBook({
  title: 'Crime and Punishment',
  author: 'Fyodor Dostoevsky',
  year: 1866,
  genre: 'Philosophical Fiction',
  copies: 3,
  available: 2,
  isbn: '9780140449136',
}).then(renderBook);

createNewBook(newBook)
  .then(renderBook)
  .catch(err => console.log(err));
