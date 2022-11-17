const express = require("express");
const productController = require("../controllers/products.controller");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getAllProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
