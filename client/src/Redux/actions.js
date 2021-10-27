import axios from 'axios';

//------------------------GETS------------------------------------------------

export function getLastestMovies(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:3001/movies/lastest', {responseType:'json'});
        return dispatch({
            type: 'GET_LASTEST_MOVIES',
            payload: response.data
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/movie/${id}`, {responseType:'json'});
        console.log(response)
        return dispatch({
            type: 'GET_MOVIE_BY_ID',
            payload: response.data
        });
    }
}