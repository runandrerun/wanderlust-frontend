import { combineReducers } from 'redux';
import userReducer from './userReducer';
import destinationReducer from './dogReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  destinationState: destinationReducer,
});

export default rootReducer;
