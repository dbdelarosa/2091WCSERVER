const express = require ('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('My New App');
});

//simple API
app.get('/api/heroes', (req, res) =>{
    res.send(['Superman','Iron Man','Batman', 'Spiderman', 'Hulk']);
});

//Single Parameter
app.get('/api/heroes/:id', (req, res) =>{
    res.send(req.params.id);

});
//multi parameters
app.get('/api/heroes/:title/:publisher', (req, res) =>{
    res.send([req.params]);

});

//Query Parameters
app.get('/api/heroes/:title/:publisher', (req, res) =>{
    res.send([req.params, req.query]);
});




app.listen(3000, () => console.log('Listening on Port 3000'));