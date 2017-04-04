import { combineReducers } from 'redux';
import appState from './reducer_app_state';
import garageState from './reducer_garages_state';

const rootReducer = combineReducers({ appState, garageState });

export default rootReducer;