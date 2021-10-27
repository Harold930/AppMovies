
const { Router } = require('express');
const router = Router();

const rutasMovies = require('./rutasMovies.js');

router.use('/', rutasMovies)

module.exports = router;