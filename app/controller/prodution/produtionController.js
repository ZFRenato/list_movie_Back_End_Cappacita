const tmdb = require('../../api/tmdb');
const produtionDatabase = require('../../model/prodution/produtionDataBase');


// Metodo Retorna Produção ao se passar (type = tv ou movie, id da produção)

const getprodution = async (req, res)=>{
    const data = {
        type: req.params.type,
        id: req.params.id
    };

    
    try {
        const result = await tmdb.getProdution({...data});        
        
        return res.status(200).send({
            sucess: true,
            type: data.type,
            list: result
        })
    } catch (error) {
        return res.status(404).send({
            sucess: false,
            error: error.message
        })        
    }
}


// Metodo Retorna Lista Produções ao se passar (type = tv ou movie, genre = id do genero) 

const getProdutionList = async (req, res)=>{
    const data = {
        type: req.params.type,
        genre: req.params.genre
    }

    try {
        const result = await tmdb.getProdutionsGen({...data})
        let totalResults = result.total_results
        
        if(!totalResults){
            throw new Error("Não há Produções com esses Parametros")
        }       

        return res.status(200).send({
            sucess: true,
            type: data.type,
            list: result
        })
        
    } catch (error) {
        return res.status(404).send({
            sucess: false,
            error: error.message
        })
    }
}

// METODO ADICIONAR PRODUÇÃO EM MINHA LISTA

const addProdutionMyList = async (req, res)=>{
    const data = {
        type: req.body.type,
        idTmdb: req.body.idTmdb,
        idUser: req.body.idUser
    }

    try {
        const result = await produtionDatabase.insertProdutionMyList({...data});
        if(!result){
            throw new Error("Falha ao inserir em lista de favoritos")
        }  
        return res.status(200).send({
            sucess: true,
            ...data
        })
    } catch (error) {
        return res.status(500).send({
            sucess: false,
            error: error.message
        })
    }
}

// METODO RETIRAR PRODUÇÃO EM MINHA LISTA DE FAVORITOS

const removeProdutionMyList = async (req, res)=>{
    const data = {
        type: req.body.type,
        idTmdb: req.body.idTmdb,
        idUser: req.body.idUser
    }

    try {
        const result = await produtionDatabase.deleteProdutionMyList({...data});
        if(!result){
            throw new Error("Falha ao remover em lista de favoritos")
        }  
        return res.status(200).send({
            sucess: true,
            ...data            
        })

    } catch (error) {
        return res.status(500).send({
            sucess: false,
            error: error.message
        })
    }
}

// METODO RETORNA LISTA DE PRODUÇÕES DE MINHA LISTA DE FAVORITOS

const getProdutionMyList = async (req, res)=>{
    const data = {
        idUser: req.params.idUser
    }

    console.log(data)

    try {
        const result = await produtionDatabase.selectProdutionMyList({...data});
        if(!result){
            throw new Error("Falha ao buscar lista de favoritos")
        }
        var myList = result.map(e=>{
             let prodution = {type: e.type, 
                             id: e.id_tmdb}
             return prodution;
         })
        
        const listProd = await tmdb.getListProdution(myList);
        
        
        return res.status(200).send({
            sucess: true,
            list: listProd            
        })

    } catch (error) {
        return res.status(500).send({
            sucess: false,
            error: error.message
        })
    }
}

module.exports = {
    getProdutionList,
    getprodution,
    addProdutionMyList,
    removeProdutionMyList,
    getProdutionMyList
}