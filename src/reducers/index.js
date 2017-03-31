import { combineReducers } from 'redux';
import userItems from './reducer_user_items';
import userState from './reducer_user_state';

const rootReducer = combineReducers({ userItems, userState });

export default rootReducer;