Pizza = require("../models/pizza.model");

exports.get = function (req, res) {
  Pizza.find(function (err, mongooseRes) {
    if (err)
      res.json({
        status: "error",
        message: mongooseRes,
      });
    if (!mongooseRes) {
      res.status(404).json({ status: 400, message: "Pizza not found" });
      return;
    }
    res.json({
      status: "success",
      message: "Got Pizzas Successfully!",
      data: mongooseRes,
    });
  });
};

exports.getOne = function (req, res) {
  if (!req.params.id) {
    res.status(400).json({ status: 400, message: "Pizza ID must be present" });
    return;
  }
  Pizza.findOne({ _id: req.params.id }, function (err, mongooseRes) {
    if (err)
      res.json({
        status: "error",
        message: mongooseRes,
      });
    if (!mongooseRes) {
      res.status(404).json({ status: 400, message: "Pizza not found" });
      return;
    }
    res.json({
      status: "success",
      message: "Got Pizzas Successfully!",
      data: mongooseRes,
    });
  });
};

exports.post = function (req, res) {
  const pizza = req.body;
  if (!pizza) {
    res.status(400).json({ status: 400, message: "No body content" });
    return;
  }
  if (!pizza.name) {
    res.status(400).json({ status: 400, message: "Name must be present" });
    return;
  }
  if (!pizza.ingredients) {
    res
      .status(400)
      .json({ status: 400, message: "Ingredients must be present" });
    return;
  }
  if (!pizza.price) {
    res.status(400).json({ status: 400, message: "Price must be present" });
    return;
  }
  if (!pizza.size) {
    res.status(400).json({ status: 400, message: "Size must be present" });
    return;
  }
  if (!pizza.sliceQuantity) {
    res
      .status(400)
      .json({ status: 400, message: "SliceQuantity must be present" });
    return;
  }
  if (!pizza.image) {
    res.status(400).json({ status: 400, message: "Image must be present" });
    return;
  }
  Pizza.create(pizza, function (err, mongoRes) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Pizza created successfully",
      data: mongoRes,
    });
  });
};
