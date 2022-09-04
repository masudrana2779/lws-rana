import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';

// create my first middleware 
const myMiddleware = (stage) => (next) => (action) => {
console.log(`state is ${JSON.stringify(stage.getState())}`);
console.log(`action is ${JSON.stringify(action)}`)
}

const store = createStore(rootReducer,applyMiddleware(myMiddleware));


export default store;