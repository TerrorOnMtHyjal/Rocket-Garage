import { combineReducers } from 'redux';
import appState from './reducer_app_state';
import storeState from './reducer_stores_state';

const rootReducer = combineReducers({ appState});

export default rootReducer;