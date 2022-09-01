import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dyanamicCounterReducer from "./dyanamicCounter/dyanamicCcounterReducer";

const  rootReducer = combineReducers({
    counter: counterReducer,
    dyanamicCounter: dyanamicCounterReducer, 
});

export default rootReducer