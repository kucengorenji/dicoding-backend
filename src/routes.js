const { addBook } = require('./book-handler/addBook');
const { getAllBooks } = require('./book-handler/getAllBooks');
const { getBookById } = require('./book-handler/getBookById');
const { editBookById } = require('./book-handler/editBookById');
const { deleteBookById } = require('./book-handler/deleteBookById');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

module.exports = routes;
