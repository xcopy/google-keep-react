import {connect} from 'react-redux'
import {setFilter} from '../actions/FilterActions'
import Link from '../components/Link'

const mapStateToProps = (store, ownProps) => ({
    active: ownProps.filter === store.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)
