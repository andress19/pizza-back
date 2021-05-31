var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var pizzaRoutes = require("./app/routes/pizza.route");
var orderRoutes = require("./app/routes/order.route");
var checkoutRoutes = require("./app/routes/checkout.route");
require('dotenv').config({ path: 'config.env' });

var app = express();
var port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send({title: 'Pizza delivery'}));
app.use('/pizza', pizzaRoutes);
app.use('/order', orderRoutes);
app.use('/checkout', checkoutRoutes);


const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connnection successful!'));

app.listen(port, function () {
  console.log('Starting server at port: ' + port);
});