export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';

export const addNote = note => ({
    type: ADD_NOTE,
    note
});

export const deleteNote = id => ({
    type: DELETE_NOTE,
    id,
    key: 'deleted_at'
});

export const archiveNote = id => ({
    type: ARCHIVE_NOTE,
    id,
    key: 'archived_at'
});