import {combineReducers} from 'redux';
import notesReducer from './notes-reducer';
import layoutReducer from './layout-reducer';

export default combineReducers({
    notes: notesReducer,
    layout: layoutReducer
});
