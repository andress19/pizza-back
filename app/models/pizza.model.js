var mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
//schema
var pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [Schema.Types.Mixed],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
    required: true,
  },
  sliceQuantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("pizza", pizzaSchema);