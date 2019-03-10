import { combineReducers } from 'redux';
import userReducer from './userReducer';
import destinationsReducer from './destinationsReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  destinationsState: destinationsReducer,
});

export default rootReducer;
