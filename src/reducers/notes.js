import {
    ADD_NOTE,
    DELETE_NOTE,
    ARCHIVE_NOTE
} from '../actions/NoteActions';

const LOCAL_STORAGE_KEY = 'notes';

/**
 * @param state
 * @returns {*[]}
 */
const getActualNotes = (state = []) => {
    return state.filter(note => !note.deleted_at && !note.archived_at);
};

/**
 * @returns {any | *[]}
 */
const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

const notes = (state = initialState, action) => {
    let _state = initialState,
        _note,
        notes;

    switch (action.type) {
        case ADD_NOTE: {
            _note = action.note;
            _note.created_at = new Date().toISOString();

            _state.unshift(_note);

            notes = [_note, ...state];

            break;
        }
        case DELETE_NOTE:
        case ARCHIVE_NOTE: {
            const predicate = note => note.id === action.id;

            _note = _state.find(predicate);
            _note[action.key] = new Date().toISOString();

            const _index = _state.findIndex(predicate);

            _index !== -1 && _state.splice(_index, 1, _note);

            notes = state.filter(note => note.id !== action.id);

            break;
        }
        default:
            notes = getActualNotes(state);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_state));

    return notes;
};

export default notes;
