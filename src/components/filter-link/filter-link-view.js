import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const FilterLinkView = ({active, children, onClick}) => {
    return (
        <Button
            variant="outline-secondary"
            active={active}
            onClick={onClick}>
            {children}
        </Button>
    );
};

FilterLinkView.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLinkView;
