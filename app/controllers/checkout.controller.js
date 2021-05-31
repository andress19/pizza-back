Checkout = require("../models/checkout.model");

exports.post = async function (req, res) {
  const checkout = req.body;
  if (!checkout) {
    res.status(400).json({ status: 400, message: "No body content" });
    return;
  }
  if (!checkout.items) {
    res.status(400).json({ status: 400, message: "Items must be present" });
    return;
  }
  if (!checkout.total) {
    res.status(400).json({ status: 400, message: "Total must be present" });
    return;
  }
  if (!checkout.mail) {
    res.status(400).json({ status: 400, message: "Mail must be present" });

    return;
  }
  if (!checkout.address) {
    res.status(400).json({ status: 400, message: "Address must be present" });
    return;
  }
  if (!checkout.phone) {
    res.status(400).json({ status: 400, message: "Phone must be present" });
    return;
  }
  if (!checkout.customer) {
    res.status(400).json({ status: 400, message: "Customer must be present" });
    return;
  }
  try {
    await Checkout.create(checkout);
    res.json({
      status: "success",
      message: "Checkout created successfully",
      checkout,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error,
    });
  }
};
