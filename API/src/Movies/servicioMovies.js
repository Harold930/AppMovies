
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
    }
    ,
    getDetail: async (id) => {
        const response = await dalMovies.getDetail(id);
        // console.log(response);
       return response;
    }
}

module.exports = servicioMovies;