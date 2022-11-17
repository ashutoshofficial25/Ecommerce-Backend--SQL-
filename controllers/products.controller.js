const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    let products = await productModel.findAll();
    res.status(201).json({
      status: "success",
      message: "All products",
      total: products.length,
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Something went wrong",
      data: error,
    });
  }
};

const getAllProductById = async (req, res) => {
  const productId = req.params.productId;
  if (productId) {
    let product = await productModel.findAll({
      where: {
        id: productId,
      },
    });

    if (product.length > 0) {
      res.status(201).json({
        status: "success",
        message: "success",
        data: product,
      });
    } else {
      res.status(404).json({
        status: "Error",
        message: "Unavailable",
        data: null,
      });
    }
  } else {
    res.status(404).json({
      status: "Error",
      message: "Invlid categoryId",
      data: null,
    });
  }
};

const createProduct = async (req, res) => {
  const { name, price, categoryId } = req.body;

  try {
    const product = await productModel.create({ name, price, categoryId });

    res.status(201).json({
      status: "success",
      message: "Categody Added",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Something went wrong",
      data: error,
    });
  }
};

const updateProduct = async (req, res) => {
  let productId = req.params.Id;
  if (!productId) {
    return res.status(404).json({
      status: "Error",
      message: "Id in not valid",
      data: null,
    });
  }
  try {
    let updatedProduct = await productModel.update();
  } catch (error) {}
};
module.exports = { getAllProducts, getAllProductById, createProduct };
