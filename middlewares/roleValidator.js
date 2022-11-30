const db = require("../models");

const checkForAdmin = async (req, res, next) => {
  const userId = req.userId;
  const user = await db.user.findOne({
    where: {
      id: userId,
    },
  });
  if (!user) {
    return res.status(404).json({
      messaage: "user_not_found",
    });
  }
  return user.hasRole("Admin")
    ? next()
    : res.status(410).json({ messaage: "access_denied" });
};
