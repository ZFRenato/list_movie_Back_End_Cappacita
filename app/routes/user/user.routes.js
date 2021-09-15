const express = require('express');
const userController = require('../../controller/user/userControler');

const userRoutes = express.Router();

userRoutes.post('/create', userController.createNewUser );
userRoutes.post('/login', userController.loginUSer);

module.exports = {
    userRoutes
}