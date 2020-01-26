import Notes from '../components/Notes';
import {connect} from 'react-redux';
import {deleteNote, archiveNote} from '../actions/NoteActions';

const mapStateToProps = store => {
    return {
        notes: store.notes
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
