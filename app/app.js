const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
require ('dotenv').config();


module.exports = function (){
    const app = express();
    
    app.use(cors());
    app.use(bodyparser.json());
    
    app.set('port', process.env.PORT)

    return app;
}