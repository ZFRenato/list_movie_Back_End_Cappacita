
const userDatabase = require('../../model/user/userDataBase');

const createNewUser = async ( req, res)=>{

    try {
        const data = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        };

        const result = await userDatabase.insertUser(data);

        return res.status(201).send({
            sucess: true,
            ...result            
        });

    } catch (error) {
        return res.status(500).send({
            error: error.message
        });
    }
}



module.exports = {
    createNewUser
}