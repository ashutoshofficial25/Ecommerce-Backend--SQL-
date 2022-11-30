const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const { constants } = require("../config/constants");
const db = require("../models");
const User = db.user;

exports.singup = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 12),
  });

  //Default assign role as USER
  if (req.body.roles) {
    let roles = await db.roles.findAll({
      where: {
        name: {
          [Sequelize.Op.or]: req.body.roles,
        },
      },
    });
    await newUser.setRoles(roles);
  } else {
    await newUser.setRoles(["user"]);
  }

  res.status(201).json({
    message: "success",
    data: newUser,
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!user)
    return res
      .status(404)
      .json({ message: "username or password not matched" });

  let matched = bcrypt.compare(password, user.password);

  if (!matched)
    return res
      .status(404)
      .json({ message: "username or password not matched" });

  //Generate token
  const token = await jwt.sign(user.id, constants.SECRET, {
    expiresIn: 86400,
  });

  let authorities = [];
  let roles = await user.getRoles();
  for (let i = 0; i < roles.length; i++) {
    authorities.push("ROLE_" + roles[i]?.name.toUpperCase());
  }

  return res.status(200).json({
    message: "login success",
    username: user.username,
    email: user.email,
    roles: authorities,
    accessToken: token,
  });
};
