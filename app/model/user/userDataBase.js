const { connectionDataBase } = require('../database/connection');


// INSERE NOVO USUÁRIO 

async function insertUser (data){

    const newUser = {
        ...data
    };

    try {
        
        const result = await connectionDataBase('user').insert(newUser);
        
        return {
            id: result[0]
        }
        
    } catch (error) {        
        console.log(`INSERT NEW USER FALHOU Error: ${error.message}`);
    }

}

// BUSCA USUÁRIO NO BANCO POR EMAIL, SE EXISTIR RETORNA ID, CASO CONTRÁRIO RETORNA 0

async function searchUser (data){

    const email = { email: data.email}    

    try {        
        const result = await connectionDataBase('user').where(email);

        return result.length == 0 ? 0 : result[0].id;

    } catch (error) {        
        console.log(`FALHOU erro: ${error.message}`);
    }


}


// BUSCA USUÁRIO PARA LOGIN

async function loginUser (data){

    const user = { 
        email: data.email,
        senha: data.senha
    }    

    
    try {        
        const result = await connectionDataBase('user').where(user).select('id', 'nome');
        
        return result[0] == undefined ? 0 : result[0];         

    } catch (error) {        
        console.log(`FALHOU erro: ${error.message}`);
    }


}





module.exports = {
    insertUser,
    searchUser,
    loginUser
}