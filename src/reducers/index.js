import {combineReducers} from 'redux';
import commandBoxReducer from './CommandBox';
import profilePictureVisibilityReducer from './ProfilePictureVisibility';

const rootReducer = combineReducers({
    commandBoxState: commandBoxReducer,
    profilePictureVisibility: profilePictureVisibilityReducer
});

export default rootReducer;
