import { combineReducers } from 'redux';
import userItems from './reducer_user_items';

const rootReducer = combineReducers({ userItems });

export default rootReducer;