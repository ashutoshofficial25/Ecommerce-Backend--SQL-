const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router({ mergeParams: true });

router.route("/signup").post(authController.singup);

module.exports = router;
