const { BadRequestError, NotFound } = require("../errors");
const Book = require("../models/Book");
const { StatusCodes } = require("http-status-codes");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(StatusCodes.OK).json({ books, count: books.length });
};

const getSingleBook = async (req, res) => {
  const { id: bookID } = req.params;

  const book = await Book.findOne({ _id: bookID });
  if (!book) {
    throw new BadRequestError(`There no Book With this ${id}`);
  }
  res.status(200).json({ book });
};

const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findByIdAndUpdate({ _id: bookID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!book) {
    throw new BadRequestError(`No Book with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

const deleteBook = async (req, res) => {
  const { id: bookID } = req.params;

  const book = await Book.findByIdAndRemove({ _id: bookID });
  if (!book) {
    throw new BadRequestError(`There no Book With this ${bookID}`);
  }
  res.status(200).json({ book });
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
