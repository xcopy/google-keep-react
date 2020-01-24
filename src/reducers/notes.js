const initialState = JSON.parse(localStorage.getItem('notes')) || [];

const notes = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [];
        case 'REMOVE_NOTE':
            return []; // todo
        case 'ARCHIVE_NOTE':
            return []; // todo
        default:
            return state;
    }
};

export default notes;
