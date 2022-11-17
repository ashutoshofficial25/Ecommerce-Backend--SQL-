const categoryModel = require("../models/categoryModel");

const getAllCategory = async (req, res) => {
  const categories = await categoryModel.findAll();
  res.status(200).json({
    status: "success",
    message: "All categories",
    totalCategories: categories.length,
    data: categories,
  });
};

const getCategoryById = async (req, res) => {};

const createCategory = async (req, res) => {
  const name = req.body.name;
  try {
    const category = await categoryModel.create({ name: name });

    res.status(201).json({
      status: "success",
      message: "Categody Added",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Something went wrong",
      data: null,
    });
  }
};

const updateCategory = async (req, res) => {};

const deleteCategory = async (req, res) => {};

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
