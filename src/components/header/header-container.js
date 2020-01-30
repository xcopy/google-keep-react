import {connect} from 'react-redux';
import {setLayout} from '../../actions/layout-actions';
import HeaderView from './header-view';

const mapStateToProps = state => ({
    layout: state.layout
});

const mapDispatchToProps = {
    setLayout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView);
