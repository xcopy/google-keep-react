import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {faCheckSquare, faSquare} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ListItemCheck extends Component {
    render() {
        const {isCompleted, onClick} = this.props;

        return (
            <FontAwesomeIcon
                icon={isCompleted ? faCheckSquare : faSquare}
                className="text-muted cursor-pointer"
                onClick={onClick}/>
        );
    }
}

ListItemCheck.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ListItemCheck;
