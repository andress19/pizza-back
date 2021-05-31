var express = require("express");
var pizzaController = require("../controllers/pizza.controller");
var router = express.Router();

router.route("/")
.get(pizzaController.get)
.post(pizzaController.post);

router.route("/:id")
.get(pizzaController.getOne);

module.exports = router;
