var mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
//schema
var checkoutSchema = mongoose.Schema({
  items: {
    type: [Schema.Types.Mixed],
    required: true,
  },
  total: {
    type: Number,
    default: 0,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: 0,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("checkout", checkoutSchema);