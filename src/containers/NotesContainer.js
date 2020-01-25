import Notes from '../components/Notes';
import {connect} from 'react-redux';

const mapStateToProps = store => {
    return {
        notes: store.notes
    };
};

export default connect(mapStateToProps)(Notes);
