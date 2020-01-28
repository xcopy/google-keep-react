import {
    ADD_NOTE,
    DELETE_NOTE,
    DELETE_NOTE_FOREVER,
    ARCHIVE_NOTE
} from '../actions/NoteActions';
import md5 from 'md5';

const notes = (state = [], action) => {
    let _state, _note;

    switch (action.type) {
        case ADD_NOTE: {
            _note = action.note;
            _note.id = md5(Math.random().toString());
            _note.created_at = new Date().toISOString();

            _state = [_note, ...state];

            return _state;
        }
        case DELETE_NOTE:
        case ARCHIVE_NOTE: {
            const predicate = note => note.id === action.id;

            _state = [...state];

            _note = _state.find(predicate);
            _note[action.key] = action.restore ? null : new Date().toISOString();

            const _index = _state.findIndex(predicate);

            _index !== -1 && _state.splice(_index, 1, _note);

            return _state;
        }
        case DELETE_NOTE_FOREVER: {
            const predicate = note => note.id === action.id;

            _state = [...state];

            const _index = _state.findIndex(predicate);

            _index !== -1 && _state.splice(_index, 1);

            return _state;
        }
        default:
            return state;
    }
};

export default notes;
