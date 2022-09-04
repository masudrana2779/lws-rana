import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import myMiddleware from './middleware/myMiddleware';
import logger from 'redux-logger';


const store = createStore(rootReducer,applyMiddleware(logger,myMiddleware));


export default store;