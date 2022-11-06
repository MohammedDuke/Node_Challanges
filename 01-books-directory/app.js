const express = require("express");
require("express-async-errors");
const app = express();
const route = require("./routes/route");

// Errors Handle
const errorNotFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/err-handle");

const connectDB = require("./db/connect");
const { response } = require("express");

const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Index Page");
});

app.use("/api/v1/book", route);

app.use(errorNotFound);
app.use(errorHandleMiddleware);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is Running in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
