var express = require("express");
var checkoutController = require("../controllers/checkout.controller");
var router = express.Router();

router.route("/")
.post(checkoutController.post);

module.exports = router;