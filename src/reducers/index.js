import { combineReducers } from 'redux';
import commandBoxReducer from './CommandBox';

const rootReducer = combineReducers({
  commandBoxState: commandBoxReducer
});

export default rootReducer;
