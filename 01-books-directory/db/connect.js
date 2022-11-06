const mongoose = require("mongoose");
const uri =
  "ur uri in mongoose";

const connectDB = () => {
  return mongoose.connect(uri);
};

module.exports = connectDB;
