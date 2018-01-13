import { combineReducers } from 'redux';
import settings from './settings';
import socketio from './socketio';

const rootReducer = combineReducers({
  // short hand property names
  settings,
  socketio,
});

export default rootReducer;
