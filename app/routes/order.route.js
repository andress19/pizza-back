var express = require("express");
var orderController = require("../controllers/order.controller");
var router = express.Router();

router.route("/")
.get(orderController.get)
.post(orderController.post);

module.exports = router;