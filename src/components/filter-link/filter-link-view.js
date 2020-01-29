import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const FilterLinkView = ({active, children, setFilter}) => {
    return (
        <Button
            variant="outline-secondary"
            active={active}
            onClick={setFilter}>
            {children}
        </Button>
    );
};

FilterLinkView.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default FilterLinkView;
