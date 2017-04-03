import { combineReducers } from 'redux';
import userState from './reducer_user_state';

const rootReducer = combineReducers({ userState });

export default rootReducer;