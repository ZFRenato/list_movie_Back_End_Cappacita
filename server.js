const app = require('./app/app')();
const tmdb = require('./app/api/tmdb');


app.get('/prodution',async (req, res )=>{
    const params  = {
        type: req.body.type,
        id: req.body.id
    }
    res.send(await tmdb.getProdution({...params}));
})

app.get('/prodution/list', async (req, res)=>{
    const params = {
        type: req.body.type,
        genre: req.body.genre
    };

    res.send( await tmdb.getProdutionsGen({...params}))
})

app.listen(app.get('port'),()=>{
    console.log(`Server on Port: ${app.get('port')}`);
});

