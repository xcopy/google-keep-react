import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faSquare} from '@fortawesome/free-regular-svg-icons';

const ListItemCheck = ({isCompleted, onClick}) => {
    return (
        <FontAwesomeIcon
            icon={isCompleted ? faCheckSquare : faSquare}
            onClick={onClick}
            className="text-muted"/>
    );
};

ListItemCheck.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default ListItemCheck;
