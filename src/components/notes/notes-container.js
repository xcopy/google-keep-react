import NotesView from './notes-view';
import {connect} from 'react-redux';
import {
    getNotes,
    deleteNote,
    archiveNote,
    deleteNoteForever,
    pinNote
} from '../../actions/note-actions';

const mapStateToProps = state => {
    return {
        notes: state.notes,
        layout: state.layout
    };
};

const mapDispatchToProps = {
    getNotes,
    deleteNote,
    archiveNote,
    deleteNoteForever,
    pinNote
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesView);
