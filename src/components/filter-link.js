import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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

const FilterLink = ({icon, active, onClick, children}) => {
    return (
        <ListItem className={`p-3 text-center text-md-left ${active ? 'active rounded' : ''}`} onClick={onClick}>
            <span className="d-inline-block text-center">
                <FontAwesomeIcon icon={icon}/>
            </span>
            {children}
        </ListItem>
    );
};

FilterLink.propTypes = {
    icon: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLink;
