import {connect} from 'react-redux'
import {setFilter} from '../../actions/FilterActions'
import FilterLinkView from './filter-link-view'

const mapStateToProps = (store, ownProps) => ({
    active: ownProps.filter === store.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLinkView);
