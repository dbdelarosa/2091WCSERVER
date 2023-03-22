//Array for Get Method
const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },

  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

//get all dishes
app.get('/dishes', (req, res) => {
  res.json(dishes);
});
//getdishes by type

app.get('/dishes/:type', (req, res) => {
  const dish = dishes.find((d) => d.type === req.params.type);
  if (!dish) {
    res.status(404).json({ error: 'record not found' });
  } else {
    res.json(dish);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Record not found' });
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
