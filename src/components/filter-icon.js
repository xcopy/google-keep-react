import React from 'react';
import PropTypes from 'prop-types';
import {Filters} from '../actions/filter-actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';

const FilterIcon = ({filter, size = '1x'}) => {
    return (
        <FontAwesomeIcon icon={{
            [Filters.ACTIVE]: faLightbulb,
            [Filters.ARCHIVED]: faArchive,
            [Filters.DELETED]: faTrash
        }[filter]} size={size}/>
    );
};

FilterIcon.propTypes = {
    filter: PropTypes.string.isRequired,
    size: PropTypes.string
};

export default FilterIcon;
