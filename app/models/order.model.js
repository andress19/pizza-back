var mongoose = require("mongoose");
//schema
var orderSchema = mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    default: 0,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("order", orderSchema);