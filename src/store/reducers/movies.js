import { GET_MOVIES, SELECT_MOVIES } from '../actions/actionTypes';

const initialState = {
    movies: [],
    selectedMovie: null,
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: actions.movies
            }
        default:
            return state;
    }
}

export default reducer;