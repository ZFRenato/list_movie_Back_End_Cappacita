const { connectionDataBase } = require('../database/connection');

// INSERIR NOVA PRODUÇÃO EM MINHA LISTA DE FAVORISTOS

async function insertProdutionMyList(data){

    const myList = {
        id_user: data.idUser,
        id_tmdb: data.idTmdb,
        type: data.type
    };
    
    try {
        const result = await connectionDataBase('my_list').insert(myList);
        return true
    } catch (error) {
        console.log(`INSERT NEW PRODUTION IN MYLIST FALHOU Error: ${error.message}`);
        return false        
    }

}

// DELETAR PRODUÇÃO DE MINHA LISTA DE FAVORITOS

async function deleteProdutionMyList(data){

    const myList = {
        id_user: data.idUser,
        id_tmdb: data.idTmdb,
        type: data.type
    };
    
    try {
        const result = await connectionDataBase('my_list').where(myList).del();
        return true
    } catch (error) {
        console.log(`INSERT NEW PRODUTION IN MYLIST FALHOU Error: ${error.message}`);
        return false        
    }

}

// SELECT PRODUÇÕES EM MINHA LISTA DE FAVORITOS

async function selectProdutionMyList(data){

    const idUser = {
        id_user: data.idUser
    };
    
    try {
        const result = await connectionDataBase('my_list').where(idUser).select('type', 'id_tmdb');

        return result[0] ? result : false;       

    } catch (error) {
        console.log(`SELECT IN MYLIST FALHOU Error: ${error.message}`);
        return false        
    }

}

module.exports = {
    insertProdutionMyList,
    deleteProdutionMyList,
    selectProdutionMyList
}



