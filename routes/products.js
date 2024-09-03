const mongoose = require("mongoose");
const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductsStatic,
} = require("../controllers/products");
const router = require("express").Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/static").get(getAllProductsStatic);
router
  .route("/:id")
  .get(getOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
