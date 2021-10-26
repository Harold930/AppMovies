const axios = require('axios');

const API_KEY = 'd1d7b33943dad638624bf92bd7d7db5b';
const API_URL = 'https://api.themoviedb.org/3/movie'

module.exports = () => ({

    getLastestMovies: async () => {
        const response = await axios.get(`${API_URL}/now_playing?api_key=${API_KEY}&page=3`);
        return response;
    },
    getDetail: async (id) => {
        const response = await axios.get(`${API_URL}/${id}?api_key=${API_KEY}`);
        return response;
    },
    getPopular: async () => {
        const response = await axios.get(`${API_URL}/popular?api_key=${API_KEY}`);
        return response;
    },
    getTopRated: async () => {
        const response = await axios.get(`${API_URL}/top_rated?api_key=${API_KEY}`);
        return response;
    }
});