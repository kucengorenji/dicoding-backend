const books = require('../books');

const getAllBooks = () => ({
  status: 'success',
  data: {
    books,
  },
});

module.exports = { getAllBooks };
