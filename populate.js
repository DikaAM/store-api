const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("express-async-errors");
const Product = require("./models/Product");

require("dotenv").config();
const jsonProduct = require("./products.json");

const port = process.env.PORT;

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB...");
  await Product.deleteMany();
  console.log("Succsess delete data from database");
  await Product.create(jsonProduct);
  console.log("Succsess add data to database");
  process.exit(0);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
};

start();
