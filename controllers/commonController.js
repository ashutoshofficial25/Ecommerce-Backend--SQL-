const errorHandler = require("../middlewares/errorHandler");

const findAll = (Model) => {
  return async (req, res, next) => {
    try {
      let doc = await Model.findAll();

      res.status(201).json({
        Status: "Success",
        total: doc.length,
        data: doc,
      });
    } catch (error) {
      return error;
    }
  };
};

const findOne = (Model) => {
  return async (req, res, next) => {
    try {
      const doc = await Model.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!doc) return new errorHandler("No document found with this Id");

      res.status(200).json({
        Status: "Success",
        data: doc,
      });
    } catch (error) {
      return error;
    }
  };
};

const createOne = (Model) => {
  return async (req, res, next) => {
    const data = req.body;
    try {
      const doc = await Model.create(data);

      res.status(201).json({
        Status: "Success",
        total: doc.length,
        data: doc,
      });
    } catch (error) {}
  };
};

const updateName = (Model) => {
  return async (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    try {
      const doc = await Model.update(
        { name: data.name },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(201).json({
        Status: "Success",
        message: "Updated",
        data: doc,
      });
    } catch (error) {
      return error;
    }
  };
};

const deleteOne = (Model) => {
  return async (req, res, next) => {
    const id = req.params.id;
    try {
      await Model.destroy({
        where: {
          id: id,
        },
      });
      res.status(201).json({
        Status: "Success",
        message: "Deleted successfully",
      });
    } catch (error) {
      return error;
    }
  };
};

module.exports = { findAll, findOne, deleteOne, createOne, updateName };
