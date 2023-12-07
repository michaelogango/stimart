// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer'; // create this file

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers if needed
});

export default rootReducer;
