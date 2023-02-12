const express = require('express');
const productsRouter = require('./products.router');
const users = require('./users.router');
const categories = require('./users.router');

function routerApi (app){
  const router = express.Router();

  app.use('/api/v1', router)

  router.use('/products', productsRouter);
  router.use('/users', users);
  router.use('/categories', categories);


}

module.exports = routerApi;
