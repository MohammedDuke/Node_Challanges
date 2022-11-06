const express = require("express");
const route = express.Router();

const {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

route.route("/").post(addBook).get(getAllBooks);
route.route("/:id").get(getSingleBook).delete(deleteBook).patch(updateBook);

module.exports = route;
