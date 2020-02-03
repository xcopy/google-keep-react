import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {setFilter} from '../actions/filter-actions';
import FilterIcon from './filter-icon';

const ListItem = styled.li`
    cursor: pointer;

    &.active {
        background-color: #feefc3;
        color: #000;
    }

    span {
        width: 40px;
    }
`;

const FilterLink = ({filter, active, onClick, children}) => {
    return (
        <ListItem
            className={`p-3 text-center text-md-left ${active ? 'active rounded' : ''}`}
            onClick={onClick}>
            <span className="d-inline-block text-center">
                <FilterIcon filter={filter}/>
            </span>
            {children}
        </ListItem>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {filter} = ownProps;

    return {
        filter,
        active: filter === state.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);
