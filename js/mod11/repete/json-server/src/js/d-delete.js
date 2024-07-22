const BASE_URL = 'http://localhost:3000';

function removeBookById(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(response => response.json());
}

// removeBookById("8c10")
// removeBookById('a8d6')
// removeBookById("5758")
// removeBookById(10)