
const dalMovies = require('./dalMovies.js')();

const servicioMovies = {

    getLastestMovies: async () => {
        const response = await dalMovies.getLastestMovies();
        const data = [];

        response.data.results.forEach(movie => {
            data.push({
                poster: movie.poster_path,
                id: movie.id
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
    getTopRated: async () => {
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
        const data = [];

        response.data.results.forEach( movie => {
            let title = movie.original_title.toLowerCase();
            if(title.includes(name.toLowerCase())){
                data.push({
                    poster: movie.poster_path
                });
            }
        })
        
        if(data.length === 0) return {msg: 'No hay resultados'};
        
        return data;
    }
}

module.exports = servicioMovies;