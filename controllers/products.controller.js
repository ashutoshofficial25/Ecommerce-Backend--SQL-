const db = require("../models");
const productModel = db.product;
const commonController = require("./commonController");

const getAllProducts = commonController.findAll(productModel);

const getAllProductById = commonController.findOne(productModel);

const createProduct = commonController.createOne(productModel);

const updateProduct = commonController.updateName(productModel);

const deleteProduct = commonController.deleteOne(productModel);

// const getAllProductById = async (req, res) => {
//   const productId = req.params.productId;

//   if (!productId) return new errorHandler("Invalid ID", 404);

//   let product = await productModel.findOne({
//     where: {
//       id: productId,
//     },
//   });
//   if (!product) return new errorHandler("No Document found with that Id", 404);
//   res.status(200).json({
//     status: "success",
//     data: product,
//   });
// };

// const createProduct = async (req, res) => {
//   const { name, price, categoryId } = req.body;

//   try {
//     const product = await productModel.create({ name, price, categoryId });

//     res.status(201).json({
//       status: "success",
//       message: "Categody Added",
//       data: product,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "Error",
//       message: "Something went wrong",
//       data: error,
//     });
//   }
// };

// const updateProduct = async (req, res) => {
//   let productId = req.params.productId;
//   if (!productId) {
//     return res.status(404).json({
//       status: "Error",
//       message: "Id in not valid",
//       data: null,
//     });
//   }
//   try {
//     let updatedProduct = await productModel.update(
//       { name: req.body.name },
//       {
//         where: {
//           id: productId,
//         },
//       }
//     );
//     res.status(200).json({
//       status: "Success",
//       message: "Product updated",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     return error;
//   }
// };

// const deleteProduct = async (req, res) => {
//   const productId = req.params.productId;
//   if (!productId) {
//     res.status(404).json({
//       status: "Error",
//       message: "Id in not valid",
//       data: null,
//     });
//   }

//   const deleteProduct = await productModel.destroy({
//     where: {
//       id: productId,
//     },
//   });

//   res.status(200).json({
//     status: "Success",
//     message: "Product deleted",
//     data: deleteProduct,
//   });
// };
module.exports = {
  getAllProducts,
  getAllProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
