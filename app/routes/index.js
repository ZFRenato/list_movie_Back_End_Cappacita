const express = require('express');
const { userRoutes } = require('./user/user.routes');
const { produtionRoutes } = require('./prodution/prodution.routes');

const routes = express.Router();

routes.use('/user', userRoutes);
routes.use('/prodution', produtionRoutes);

module.exports = { routes };