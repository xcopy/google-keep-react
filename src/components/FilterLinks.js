import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import FilterLink from '../containers/FilterLink';
import {Filters} from '../actions/FilterActions';

const FilterLinks = () => {
    return (
        <div className="text-center py-3">
            <ButtonGroup>
                <FilterLink filter={Filters.ACTIVE}>Notes</FilterLink>
                <FilterLink filter={Filters.ARCHIVED}>Archive</FilterLink>
                <FilterLink filter={Filters.DELETED}>Trash</FilterLink>
            </ButtonGroup>
        </div>
    );
};

export default FilterLinks;
