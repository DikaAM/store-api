const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/products");
require("dotenv").config();
require("express-async-errors");
const port = process.env.PORT;
const notFoundHandler = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes
app.use("/api/v1/products", routes);

//product routes
app.use(notFoundHandler);
app.use(errorHandlerMiddleware);
//connect to db and Server

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB...");
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
};

start();
