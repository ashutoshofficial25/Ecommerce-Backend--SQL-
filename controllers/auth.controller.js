const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.singup = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!user) {
    return res.status(204).json({
      status: "error",
      message: "username already exists!",
    });
  }

  const newUser = User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 12),
  });

  res.status(201).json({
    message: "succedd",
  });
};
