// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth_slice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
