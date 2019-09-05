import { GET_MOVIES } from './actionTypes';
import {
    startLoading,
    stopLoading,
    noInternet,
    thereInternet
} from './index'

export const getMovies = () => {
    return dispatch => {
        dispatch(thereInternet());
        dispatch(startLoading());
        fetch("https://animation-movies-fb.firebaseio.com/movies.json")
            .then(res => res.json())
            .then(parsedRes => {
                const movies = [];
                for (const key in parsedRes) {
                    movies.push({
                        ...parsedRes[key],
                        key: key
                    })
                };
                dispatch(setMovies(movies));
                dispatch(stopLoading());
                dispatch(thereInternet());
            })
            .catch(err => {
                console.log(err);
                dispatch(noInternet());
            });
    }
}

export const setMovies = (movies) => {
    return {
        type: GET_MOVIES,
        movies: movies
    }
}