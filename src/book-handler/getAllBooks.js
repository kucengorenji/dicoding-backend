const books = require('../books');

const getAllBooks = (request, h) => {
  const { name, reading, finished } = request.query;

  if (!name && !reading && !finished) {
    const response = h.response({
      status: 'success',
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const bookNameFilter = books.filter((n) => {
    const nameRegex = new RegExp(name, 'gi');
    return nameRegex.test(n.name);
  });

  if (name) {
    const response = h.response({
      status: 'success',
      data: {
        books: bookNameFilter.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  const isRead = books.filter((n) => n.reading === true);
  const isNotRead = books.filter((n) => n.reading === false);

  if (reading) {
    const response = h.response({
      status: 'success',
      data: {
        books: reading
          ? isRead.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            }))
          : isNotRead.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
      },
    });
    response.code(200);
    return response;
  }

  const isFinished = books.filter((n) => n.finished === true);
  const isNotFinished = books.filter((n) => n.finished === false);

  if (finished) {
    const response = h.response({
      status: 'success',
      data: {
        books: finished
          ? isFinished.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            }))
          : isNotFinished.map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publishers,
            })),
      },
    });
    response.code(200);
    return response;
  }
};

module.exports = { getAllBooks };
