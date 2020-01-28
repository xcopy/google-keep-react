import Notes from '../components/Notes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteNote, archiveNote, deleteNoteForever} from '../actions/NoteActions';
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

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteNote,
    archiveNote,
    deleteNoteForever
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes);
