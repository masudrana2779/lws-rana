import { DDECREMENT, DINCREMENT } from "./actionType";

const initialState = {
  value: 10,
};

const dyanamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};


export default dyanamicCounterReducer