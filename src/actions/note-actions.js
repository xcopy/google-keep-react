import md5 from 'md5';

const LOCAL_STORAGE_KEY = 'notes';

const _getNotes = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

const _setNotes = notes => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
};

const _deleteOrArchiveNote = (id, keyToSetup, keyToReset, restore) => {
    const predicate = note => note.id === id;

    let notes = _getNotes();

    let note = notes.find(predicate);
    note[keyToSetup] = !restore;
    note[keyToReset] = false;
    note.isPinned = false;

    const index = notes.findIndex(predicate);
    index !== -1 && notes.splice(index, 1, note);

    _setNotes(notes);
};

export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_FOREVER = 'DELETE_NOTE_FOREVER';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';

export const getNotes = () => {
    return dispatch => {
        dispatch({
            type: GET_NOTES,
            notes: _getNotes()
        });
    };
};

export const addNote = note => {
    note = Object.assign({}, note, {
        id: md5(Math.random().toString()),
        created_at: new Date().toISOString(),
        isDeleted: false,
        isArchived: false
    });

    const notes = _getNotes();

    notes.unshift(note);

    _setNotes(notes);

    return dispatch => {
        dispatch({
            type: ADD_NOTE,
            note
        });
    };
};

export const deleteNote = (id, restore = false) => {
    _deleteOrArchiveNote(id, 'isDeleted', 'isArchived', restore);

    return dispatch => {
        dispatch({
            type: DELETE_NOTE,
            notes: _getNotes()
        })
    };
};

export const archiveNote = (id, restore = false) => {
    _deleteOrArchiveNote(id, 'isArchived', 'isDeleted', restore);

    return dispatch => {
        dispatch({
            type: ARCHIVE_NOTE,
            notes: _getNotes()
        })
    };
};

export const deleteNoteForever = ids => {
    let notes = _getNotes();

    typeof ids === 'string' && (ids = [ids]);

    notes = notes.filter(note => !ids.includes(note.id));

    _setNotes(notes);

    return dispatch => {
        dispatch({
            type: DELETE_NOTE_FOREVER,
            notes: _getNotes()
        })
    };
};

export const pinNote = (id, toggle = true) => {
    const predicate = note => note.id === id;

    let notes = _getNotes();

    let note = notes.find(predicate);
    note.isPinned = toggle;
    note.isArchived = false;
    note.isDeleted = false;

    const index = notes.findIndex(predicate);
    index !== -1 && notes.splice(index, 1, note);

    _setNotes(notes);

    return dispatch => {
        dispatch({
            type: PIN_NOTE,
            notes
        });
    };
};
