/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import App from './App';
import { name as appName } from './app.json';

import storeConfig from './src/store/storeConfig';

const store = storeConfig();

const RNRedux = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
