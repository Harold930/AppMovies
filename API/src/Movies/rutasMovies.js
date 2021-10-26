const express = require('express');
const servicioMovies = require('./servicioMovies.js');
const router = express.Router();

router.get('/lastestMovies', async (req,res) => {
    try {
        const lastestMovies = await servicioMovies.getLastestMovies();
        res.json(lastestMovies);
    } catch (error) {
        res.status(404);
    }
});

router.get('/movie/:id', async (req,res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    try {
        const detailMovie = await servicioMovies.getDetail(id);
    console.log(detailMovie,'<<<---soy de talle en la parte de las rutasasss');
        res.json(detailMovie.data);
    } catch (error) {
        res.status(404);
    }
});



module.exports = router;