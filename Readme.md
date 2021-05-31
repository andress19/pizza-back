# PizzaApi

This project was generated with [Express generator](https://expressjs.com/es/starter/generator.html) version 4.16.1.

## Development server

Run `npm install` to get all project dependencies.

Run `npm start` for a dev server. Navigate to `http://localhost:3004/`. The app will automatically reload if you change any of the source files implemented by using nodemon library (https://www.npmjs.com/package//nodemon).

## Change default configuration

Go to the config file `config.env` located at the root of the project, you can change the default port, db string connection and the environment.

## API docuemntation

There are endpoints for the following operations.

GET

- Get all pizzas (http://localhost:3004/pizza)
- Get specific pizza (http://localhost:3004/pizza/:id)
- Get all orders (http://localhost:3004/order)


POST

- Create a new pizza (http://localhost:3004/pizza) *body json pizza object needed
- Create a new order (http://localhost:3004/order) *body json order object needed
- Create a new checkout order (http://localhost:3004/checkout) *body json checkout object needed

## Further help

To get more help on the Express Generator CLI use `express -h` or go check out the [Expressr CLI README](https://github.com/expressjs/expressjs.com/README.md).
