//Array for Get Method
const express = require('express');
const app = express();

const movies = [
  {
    id: 1,
    title: 'Superman',
  },
  {
    id: 2,
    title: 'Thor',
  },
  {
    id: 3,
    title: 'Iron Man',
  },
];

//get all movies
app.get('/api/movies', (req, res) => {
  res.send(movies);
});
//get movie by id
app.get('/api/movies/:type', (req, res) => {
  res.send(movies);
});

app.get('/api/movies/:type', (req, res) => {
  const movie = movies.find((h) => h.id === parseInt(req.params.id));
  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

app.listen(4000, () => console.log('Listening on Port 4000'));
