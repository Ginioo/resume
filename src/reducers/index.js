import {combineReducers} from 'redux';
import CVReducer from './CVReducer';

export default combineReducers({
  cv: CVReducer
});