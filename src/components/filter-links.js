import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import FilterLink from './filter-link/filter-link-container';
import {Filters} from '../actions/filter-actions';

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
