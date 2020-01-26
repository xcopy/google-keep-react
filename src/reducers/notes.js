import {ADD_NOTE, REMOVE_NOTE} from '../actions/NoteActions';

const initialState = JSON.parse(localStorage.getItem('notes')) || [];

const notes = (state = initialState, action) => {
    let notes;

    switch (action.type) {
        case ADD_NOTE:
            action.note.created_at = new Date();
            notes = [
                action.note,
                ...state
            ];
            break;
        case REMOVE_NOTE:
            notes = []; // todo
            break;
        default:
            notes = state;
    }

    localStorage.setItem('notes', JSON.stringify(notes));

    return notes;
};

export default notes;
