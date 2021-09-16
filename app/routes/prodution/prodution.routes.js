const express = require('express');
const produtionController = require('../../controller/prodution/produtionController');


const produtionRoutes = express.Router()

produtionRoutes.get('/', produtionController.getprodution);
produtionRoutes.get('/list', produtionController.getProdutionList);


module.exports = {
    produtionRoutes
}