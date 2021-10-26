const axios = require('axios');

const API_KEY = 'd1d7b33943dad638624bf92bd7d7db5b';
const API_URL = 'https://api.themoviedb.org/3/movie'

module.exports = () => ({

    getLastestMovies: async () => {
        const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}`);
        // console.log(response,'--<<<-<-<-<-<-<-<-<-')
        return response;
    }
    ,
    getDetail: async (id) => {
        const response = await axios.get(`${API_URL}/${id}?api_key=${API_KEY}`);
        // console.log(response,'<<<----soy detalle de la pelicula obtenido por ID');
        return response;
    }
    ,

});