import { combineReducers } from 'redux';
import userReducer from './userReducer';
import destinationReducer from './destinationReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  destinationState: destinationReducer,
});

export default rootReducer;
