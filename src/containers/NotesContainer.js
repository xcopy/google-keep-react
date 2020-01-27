import Notes from '../components/Notes';
import {connect} from 'react-redux';
import {deleteNote, archiveNote} from '../actions/NoteActions';
import {Filters} from '../actions/FilterActions';

/**
 * @param {[]} notes
 * @param {string} filter
 * @returns {[]}
 */
const getNotes = ({notes, filter}) => {
    switch (filter) {
        case Filters.ACTIVE:
            return notes.filter(note => !note.deleted_at && !note.archived_at);
        case Filters.ARCHIVED:
            return notes.filter(note => !!note.archived_at);
        case Filters.DELETED:
            return notes.filter(note => !!note.deleted_at);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = store => {
    return {
        notes: getNotes({...store}),
        filter: store.filter
    };
};

const mapDispatchToProps = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id)),
    archiveNote: id => dispatch(archiveNote(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes);
