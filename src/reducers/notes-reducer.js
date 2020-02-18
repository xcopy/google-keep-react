import {
    GET_NOTES,
    ADD_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    DELETE_NOTE_FOREVER,
    ARCHIVE_NOTE,
    PIN_NOTE,
    COMPLETE_LIST_ITEM
} from '../actions/note-actions';

const notesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_NOTES:
        case UPDATE_NOTE:
        case DELETE_NOTE:
        case ARCHIVE_NOTE:
        case DELETE_NOTE_FOREVER:
        case PIN_NOTE:
        case COMPLETE_LIST_ITEM: {
            return action.notes;
        }
        case ADD_NOTE: {
            return [action.note, ...state];
        }
        default:
            return state;
    }
};

export default notesReducer;
