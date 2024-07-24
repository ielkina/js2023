//Переписываем функции запроса бэкэнда на async
const BASE_URL = 'http://localhost:3000';

const bookNew = {
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
// D:\OSPanel\domains\js2023\js\mod11\repete\json-server\src\js\c-post.js

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();

  return newBook;
  // return await response.json();
}

//обработка ошибок try обрабатывается в том месте где вызывается функция запроса а не в самой  функции запроса
async function addBookAndUpdate(book) {
  try {
    const createBook = await addBook(book);
    console.log(createBook);
  } catch (error) {
    console.log(error);
  }
}

//then/catch для отлова ошибок выполняется вне не асинхронной функции
//async/await не используются вне функции, если это не обходимо при вызове добавляется then и там можно использовать async/await
addBookAndUpdate(bookNew);

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books/`);
  const books = await response.json();
  return books;
}

async function fetchBooksById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const booksId = await response.json();
  return booksId;
}

async function removeBookById(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(url, options);

  const book = await response.json();

  return book;
  // return await fetch(url, options);
}

async function updateBookById(patch, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patch),
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const updateBook = await response.json();
  return updateBook;
}
