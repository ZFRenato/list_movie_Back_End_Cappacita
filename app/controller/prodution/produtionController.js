const tmdb = require('../../api/tmdb');


// Metodo Retorna Produção ao se passar (type = tv ou movie, id da produção)

const getprodution = async (req, res)=>{
    const data = {
        type: req.body.type,
        id: req.body.id
    };

    try {
        const result = await tmdb.getProdution({...data})


        return res.status(200).send({
            sucess: true,
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
        type: req.body.type,
        genre: req.body.genre
    }

    try {
        const result = await tmdb.getProdutionsGen({...data})
        let totalResults = result.total_results
        
        if(!totalResults){
            throw new Error("Não há Produções com esses Parametros")
        }       

        return res.status(200).send({
            sucess: true,
            list: result
        })
        
    } catch (error) {
        return res.status(404).send({
            sucess: false,
            error: error.message
        })
    }
}


module.exports = {
    getProdutionList,
    getprodution
}