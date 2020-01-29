import {connect} from 'react-redux'
import {setFilter} from '../../actions/filter-actions'
import FilterLinkView from './filter-link-view'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setFilter: () => dispatch(setFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkView);
