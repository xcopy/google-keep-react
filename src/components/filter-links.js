import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'react-bootstrap';

const FilterLinks = ({links, filter, onClick}) => {
    return (
        <div className="text-center py-3">
            <ButtonGroup>
                {Object.keys(links).map(key => (
                    <Button
                        key={key}
                        variant="outline-secondary"
                        active={key === filter}
                        onClick={() => {onClick(key)}}
                        style={{width: 100}}>
                        {links[key]}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
};

FilterLinks.propTypes = {
    links: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLinks;
