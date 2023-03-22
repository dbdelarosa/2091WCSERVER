//Array for Get Method
const express = require ('express');
const app = express();



const dishes= [{
    type: 'Sisig',
    province: 'Pampanga' ,
    price: 220
},
{
  type: 'Salpicao',
  province: 'Quezon',
  price: 180
},

{
  type: 'Bagnet',
  province: 'Ilocos' ,
  price: 370
},
];


//get all dishes
app.get('/api/dishes', (req, res) =>{
    res.send(dishes);

});
//getdishes by type


app.get('/api/dishes/:type', (req, res) =>{
  res.send(dishes);


});

app.get('/api/dishes/:type', (req, res) =>{
   
    const dish = dishes.find(h => h.id === parseInt(req.params.id));
    if(!dishes) return res.status(404).send('The food that you are looking for is not valid');
    res.send(dishes);
    
    
});



app.listen(3000, () => console.log('Listening on Port 3000'));