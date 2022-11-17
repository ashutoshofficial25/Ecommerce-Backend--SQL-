const productModel = require("../models/productModel");

const getAllProducts = (req, res) => {};

const getAllProductById = (req, res) => {};
const createProduct = async (req, res) => {
  const { name, price, categoryId } = req.body;

  try {
    const product = await productModel.create({ name, price, categoryId });

    res.status(201).json({
      status: "success",
      message: "Categody Added",
      data: product,
    });
  } catch (error) {}
};

module.exports = { getAllProducts, getAllProductById, createProduct };
