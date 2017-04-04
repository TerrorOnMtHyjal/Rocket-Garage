import { combineReducers } from 'redux';
import appState from './appState';
import garageState from './garageState';

const rootReducer = combineReducers({ appState, garageState });

export default rootReducer;