const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router({ mergeParams: true });

router.route("/").post(authController.singup);

module.exports = router;
