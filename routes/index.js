const express = require("express");
const router = express.Router();
const categoyRoutes = require("./category.routes");
const productRoutes = require("./product.routes");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "This is base route for ecomm bed v1 route",
  });
});

router.use("/category", categoyRoutes);
router.use("/product", productRoutes);

module.exports = router;
