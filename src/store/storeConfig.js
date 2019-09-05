import {
    combineReducers,
    createStore,
    compose, applyMiddleware
} from 'redux';
import thunk from "redux-thunk";

import moviesReducer from './reducers/movies';
import uiReducer from './reducers/ui'

const rootReducer = combineReducers({
    movies: moviesReducer,
    ui: uiReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const storeConfig = () => createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


export default storeConfig;

