import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import myMiddleware from './middleware/myMiddleware';
import logger from 'redux-logger';

import {composeWithDevTools} from 'redux-devtools-extension'


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,myMiddleware)));


export default store;