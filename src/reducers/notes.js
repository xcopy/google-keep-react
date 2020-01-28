import {
    ADD_NOTE,
    DELETE_NOTE,
    DELETE_NOTE_FOREVER,
    ARCHIVE_NOTE
} from '../actions/NoteActions';
import md5 from 'md5';

const moveNote = (state, action, keyToSetup, keyToReset) => {
    const predicate = note => note.id === action.id;

    let _state = [...state];

    let _note = _state.find(predicate);

    _note[keyToSetup] = action.restore ? null : new Date().toISOString();
    _note[keyToReset] = null;

    const _index = _state.findIndex(predicate);

    _index !== -1 && _state.splice(_index, 1, _note);

    return _state;
};

const notes = (state = [], action) => {
    let _state, _note;

    switch (action.type) {
        case ADD_NOTE: {
            _note = Object.assign({}, action.note, {
                id: md5(Math.random().toString()),
                created_at: new Date().toISOString()
            });

            _state = [_note, ...state];

            return _state;
        }
        case DELETE_NOTE: {
            return moveNote(state, action, 'deleted_at', 'archived_at');
        }
        case ARCHIVE_NOTE: {
            return moveNote(state, action, 'archived_at', 'deleted_at');
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
