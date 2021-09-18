const express = require('express');
const produtionController = require('../../controller/prodution/produtionController');


const produtionRoutes = express.Router()

produtionRoutes.get('/', produtionController.getprodution);
produtionRoutes.get('/list', produtionController.getProdutionList);
produtionRoutes.get('/mylist',produtionController.getProdutionMyList)
produtionRoutes.post('/mylist', produtionController.addProdutionMyList);
produtionRoutes.delete('/mylist', produtionController.removeProdutionMyList)


module.exports = {
    produtionRoutes
}