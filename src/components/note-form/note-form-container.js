import NoteFormView from './note-form-view';
import {addNote} from '../../actions/NoteActions';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addNote: note => dispatch(addNote(note))
});

export default connect(
    null,
    mapDispatchToProps
)(NoteFormView);
