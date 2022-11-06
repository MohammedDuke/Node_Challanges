const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Title Name"],
  },
  isbn: {
    type: Number,
  },
  pageCount: {
    type: Number,
    required: [true, "Please Provide Page Count"],
  },
  Description: {
    type: String,
    required: [true, "Please Provide Book Description"],
  },
  thumbnailUrl: {
    type: String,
    required: [true, "Please Privide Book ThumbnailURL"],
  },
  status: {
    type: String,
    required: [true, "Please Provide Status"],
  },
  authors: {
    type: Array,
    required: [true, "Please Provide Authors"],
  },
  categories: {
    type: Array,
    required: [true, "Please Provide Categories"],
  },
});

module.exports = mongoose.model("Book", Book);
