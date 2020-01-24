import Notes from '../components/Notes';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    // shorthand for
    // return {notes: state.notes}
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        addNote: function (note) {
            // dispatch(addNote(note));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes);
