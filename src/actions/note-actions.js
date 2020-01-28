export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_FOREVER = 'DELETE_NOTE_FOREVER';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';

export const addNote = note => ({
    type: ADD_NOTE,
    note
});

export const deleteNote = (id, restore = false) => ({
    type: DELETE_NOTE,
    id,
    restore
});

export const archiveNote = (id, restore = false) => ({
    type: ARCHIVE_NOTE,
    id,
    restore
});

export const deleteNoteForever = id => ({
    type: DELETE_NOTE_FOREVER,
    id
});
