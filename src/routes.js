const express = require('express');
const routes = express.Router();

const DividerController = require('./controllers/DividerController')

routes.post('/divide', DividerController.divide);

module.exports = routes;