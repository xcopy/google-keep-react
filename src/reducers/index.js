import {combineReducers} from 'redux';
import notes from './notes';
import filter from './filter';

export default combineReducers({
    notes,
    filter
});
