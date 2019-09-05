import {
    START_LOADING,
    STOP_LOADING,
    NO_INTERNET,
    THERE_INTERNET
} from './actionTypes';

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const noInternet = () => {
    return {
        type: NO_INTERNET
    }
}

export const thereInternet = () => {
    return {
        type: THERE_INTERNET
    }
}