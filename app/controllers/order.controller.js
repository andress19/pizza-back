Order = require("../models/order.model");

exports.get = function (req, res) {
  Order.find(function (err, mongooseRes) {
    if (err)
      return res.json({
        status: "error",
        message: mongooseRes,
      });
    if (!mongooseRes) {
      return res.status(404).json({ status: 400, message: "Orders not found" });
    }
    res.json({
      status: "success",
      message: "Got Orders Successfully!",
      data: mongooseRes,
    });
  });
};

exports.post = async function (req, res) {
  const order = req.body;
  if (!order) {
    res.status(400).json({ status: 400, message: "No body content" });
    return;
  }
  if (!order.mail) {
    res.status(400).json({ status: 400, message: "Items must be present" });
    return;
  }
  if (!order.total) {
    res.status(400).json({ status: 400, message: "Items must be present" });

    return;
  }
  try {
    await Order.create(order);
    res.json({
      status: "success",
      message: "Order created successfully",
      data: [],
      status,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: "Order created successfully",
      data: []
    });
  }
};
