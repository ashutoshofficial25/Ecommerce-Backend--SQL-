const jwt = require("jsonwebtoken");
const { constants } = require("../config/constants");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).json({
      message: "Unautorized user",
    });
  }

  jwt.verify(token, constants.SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "Unauthorized user",
      });
    }
    req.userId = decoded.id;
  });
  next();
};

module.exports = { verifyToken };
