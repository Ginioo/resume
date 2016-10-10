import {combineReducers} from 'redux';
import profilePictureReducer from './ProfilePicture';

const rootReducer = combineReducers({
    profilePictureState: profilePictureReducer
});

export default rootReducer;
