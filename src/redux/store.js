import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import myMiddleware from './middleware/myMiddleware';


const store = createStore(rootReducer,applyMiddleware(myMiddleware));


export default store;