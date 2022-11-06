const mongoose = require("mongoose");
const uri =
  "mongodb+srv://fizoduke:1234@cluster0.a4jictj.mongodb.net/01-BOOK-DIRECTORY?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(uri);
};

module.exports = connectDB;
