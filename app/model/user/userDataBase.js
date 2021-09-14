const { connectionDataBase } = require('../database/connection');


async function insertUser (data){

    const newUser = {
        nome: data.nome,
        email: data.email,
        senha: data.senha
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




module.exports = {
    insertUser
}