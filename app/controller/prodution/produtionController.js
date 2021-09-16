const tmdb = require('../../api/tmdb');

const getProdutionList = async (req, res)=>{
    const data = {
        type: req.body.type,
        genre: req.body.genre
    }

    try {
        const result = await tmdb.getProdutionsGen({...data})
        let totalResults = result.total_results
        
        if(!totalResults){
            throw new Error("Não há Produtions com esses Parametros")
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
    getProdutionList
}