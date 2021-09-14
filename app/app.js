const express = require('express');
const bodyparser = require('body-parser');
const { routes } = require('./routes/index');
const cors = require('cors');
require ('dotenv').config();


module.exports = function (){
    const app = express();
    
    app.use(cors());
    app.use(express.json());
    app.use('/api', routes);
    
    app.set('port', process.env.PORT)

    return app;
}