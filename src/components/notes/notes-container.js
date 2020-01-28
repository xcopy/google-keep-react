import NotesView from './notes-view';
import {connect} from 'react-redux';
import {
    getNotes,
    deleteNote,
    archiveNote,
    deleteNoteForever
} from '../../actions/note-actions';
import {Filters} from '../../actions/filter-actions';

/**
 * @param {[]} notes
 * @param {string} filter
 * @returns {[]}
 */
const filterNotes = ({notes, filter}) => {
    switch (filter) {
        case Filters.ACTIVE:
            return notes.filter(note => !note.isDeleted && !note.isArchived);
        case Filters.ARCHIVED:
            return notes.filter(note => note.isArchived);
        case Filters.DELETED:
            return notes.filter(note => note.isDeleted);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = state => {
    return {
        notes: filterNotes({...state}),
        filter: state.filter
    };
};

const mapDispatchToProps = {
    getNotes,
    deleteNote,
    archiveNote,
    deleteNoteForever
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesView);
