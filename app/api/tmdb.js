const axios = require('axios');
require ('dotenv').config();


const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    
});

async function getProdution({type, id}){
    const prodution = await apiTmdb.get(`${type}/${id}?api_key=${process.env.API_KEY}&language=pt-BR`)
    .then(response=>{
       return response.data;
    })

    return prodution;

}

async function getProdutionsGen({type, genre}){

    
        const produtionList = await apiTmdb.get(`discover/${type}?api_key=${process.env.API_KEY}&language=pt-BR&with_genres=${genre}`)
        .then(response=>{
        return response.data;
        })
        
    
    return produtionList;
}

async function getListProdution(data){
       
    const multurl = data.map(prod=>{
        const url = ({type, id})=>{
            return apiTmdb.get(`${type}/${id}?api_key=${process.env.API_KEY}&language=pt-BR`)    
        }
        return url(prod);
    });
    var list = []
    await axios.all([...multurl]).then(axios.spread((...response)=>{
        response.map(result=>{  list.push(result.data)})
    }))

           
    return list;
}


module.exports = {
    getProdution,
    getProdutionsGen,
    getListProdution
}