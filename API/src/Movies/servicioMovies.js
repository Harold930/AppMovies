
const dalMovies = require('./dalMovies.js')();

const servicioMovies = {

    getLastestMovies: async () => {
        const response = await dalMovies.getLastestMovies();
        const data = [];

        response.data.results.forEach(movie => {
            data.push({
                poster: movie.poster_path
            });
        });

        return data;
    },
    getDetail: async (id) => {
        const response = await dalMovies.getDetail(id);
        const data = {};

        data.name = response.data.original_title;
        data.genres = response.data.genres.map( el => el.name);
        data.poster = response.data.poster_path;
        data.summary = response.data.overview;

       return data;
    },
    getPopular: async () => {
        const response = await dalMovies.getPopular();
        const data = [];

         response.data.results.forEach(movie => {
             data.push({
                 poster: movie.poster_path
             });
         });

        return data;
    },
    getPopular: async () => {
        const response = await dalMovies.getTopRated();
        const data = [];

         response.data.results.forEach(movie => {
             data.push({
                 poster: movie.poster_path
             });
         });

        return data;
    },
    getMoviesByName: async (name) => {
        const response = await dalMovies.getLastestMovies();

        

    }
}

module.exports = servicioMovies;