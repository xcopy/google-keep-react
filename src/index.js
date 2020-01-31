import React from 'react';
import {render} from 'react-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app';
import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
