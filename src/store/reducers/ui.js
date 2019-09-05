import {
    START_LOADING,
    STOP_LOADING,
    NO_INTERNET,
    THERE_INTERNET
} from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isNoInternet: false
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case NO_INTERNET:
            return {
                ...state,
                isNoInternet: true
            }
        case THERE_INTERNET:
            return {
                ...state,
                isNoInternet: false
            }
        default:
            return state
    }
}

export default reducer;