const db = require("../models");

const checkUserExist = async(req, res, next) => {
  const user = await db.user.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (user) {
    return res.status(404).json({
      messsage: "username not available!",
    });
  }

  next();
};

module.exports({
  checkUserExist,
});
