import {ADD_NOTE, REMOVE_NOTE} from '../actions/NoteActions';

const initialState = JSON.parse(localStorage.getItem('notes')) || [];

const notes = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [
                action.note,
                ...state
            ];
        case REMOVE_NOTE:
            return []; // todo
        default:
            return state;
    }
};

export default notes;
