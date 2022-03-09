const express = require('express');
const app = express();

app.use(express.json());


//Array for Get Method
const movies = 
[{
    id:1,
    title:'Superman'},
{
    id:2,
    title: 'Iron Man'},
{
    id:3,
    title: 'Batman'},
{
    id:4,
    title: 'Hulk'},
{

    id:5,
    title: 'Wonder Woman'}];



//add movies
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
}); 



//get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
})

//get all movies by id
app.get('/api/movies/:id', (req, res) => 
{
    const movie =  movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not listed.');
    res.send(movie);
})



//Express Web Server
app.get('/', (req, res) => {
    res.send('My New App!')
})


//Simulating a Simple API
app.get('/api/heroes', (req, res) => {
    res.send(['Superman', 'Iron Man', 'Batman', 'Hulk', 'Ant Man']);
})


//Single Params
app.get('/api/heroes/:id', (req, res) => {
    res.send(req.params.id);
})


//Multi Params
//app.get('/api/heroes/:id/:publisher', (req, res) => {
//    res.send(req.params.id);
//})

//Query Params
app.get('/api/heroes/:id/:publisher', (req, res) => {
    res.send([req.params.id, req.query]);
})


app.listen(3900, () => console.log('Listening on port 3900'));