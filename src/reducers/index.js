import {combineReducers} from 'redux';
import notesReducer from './notes-reducer';
import filterReducer from './filter-reducer';
import layoutReducer from './layout-reducer';

export default combineReducers({
    notes: notesReducer,
    filter: filterReducer,
    layout: layoutReducer
});
