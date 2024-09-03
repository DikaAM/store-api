const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  featured: { type: Boolean, default: false },
  name: { type: String, required: [true, "Please provide a name"] },
  price: { type: Number, required: [true, "Please provide a price"] },
  rating: { type: Number, default: 4.5 },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", productSchema);
