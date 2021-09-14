const express = require('express');
const userController = require('../../controller/user/userControler');

const userRoutes = express.Router();

userRoutes.post('/create', userController.createNewUser );

module.exports = {
    userRoutes
}