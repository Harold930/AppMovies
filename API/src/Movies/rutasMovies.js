const express = require('express');
const servicioMovies = require('./servicioMovies.js');
const router = express.Router();

router.get('/movies/lastest', async (req,res) => {
    try {
        const lastestMovies = await servicioMovies.getLastestMovies();
        res.json(lastestMovies);
    } catch (error) {
        res.status(404);
    }
});

router.get('/movie/:id', async (req,res) => {
    const id = parseInt(req.params.id);
    try {
        const detailMovie = await servicioMovies.getDetail(id);
        res.json(detailMovie);
    } catch (error) {
        res.status(404);
    }
});

router.get('/movies/popular', async (req,res) => {
    try {
        const popularMovies = await servicioMovies.getPopular();
        res.json(popularMovies);
    } catch (error) {
        res.status(404);
    }
});

router.get('/movies/top-rated', async (req,res) => {
    try {
        const popularMovies = await servicioMovies.getPopular();
        res.json(popularMovies);
    } catch (error) {
        res.status(404);
    }
});

router.get('/movies', async (req,res) => {
    const name = req.query.name;
    console.log(name);
    try {
        const moviesByName = await servicioMovies.getMoviesByName(name);
        res.json(moviesByName);
    } catch (error) {
        res.status(404);
    }
});



module.exports = router;