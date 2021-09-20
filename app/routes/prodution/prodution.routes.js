const express = require('express');
const produtionController = require('../../controller/prodution/produtionController');


const produtionRoutes = express.Router()

produtionRoutes.get('/:id/:type', produtionController.getprodution);
produtionRoutes.get('/list/:type/:genre', produtionController.getProdutionList);
produtionRoutes.get('/mylist/list/:idUser',produtionController.getProdutionMyList)
produtionRoutes.post('/mylist', produtionController.addProdutionMyList);
produtionRoutes.delete('/mylist', produtionController.removeProdutionMyList)


module.exports = {
    produtionRoutes
}