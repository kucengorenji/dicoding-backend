const books = require('../books');

const getBookById = (request, h) => {
  const { id } = request.params;

  const book = books.filter((book) => book.id === id)[0];

  if (book) {
    const response = h.response({
      status: 'success',
      data: {
        book,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { getBookById };
