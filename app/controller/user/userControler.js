
const userDatabase = require('../../model/user/userDataBase');

// Crear usuário

const createNewUser = async ( req, res)=>{

    const data = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };

    try {
        
        const isUser = await userDatabase.searchUser(data);
        if (isUser) {
            throw new Error('Usuário já Cadastrado')            
        }

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

// Login

const loginUSer = async (req, res)=>{

    const data = {
        email: req.body.email,
        senha: req.body.senha
    }

    try {
        const result = await userDatabase.loginUser(data);
        if(!result){
            throw new Error("Usuário e / ou senha incorretos ")
        }

        return res.status(200).send({
            sucess: true,
            ... result
        })
    } catch (error) {
        return res.status(404).send({
            sucess: false,
            error: error.message
        })
    }
}



module.exports = {
    createNewUser,
    loginUSer
}