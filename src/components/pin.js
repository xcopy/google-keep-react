import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Container = styled.div`
    float: right;
    padding: 0 0 10px 10px;
    background-color: #fff;
    line-height: 0;
`;

const Pin = ({note, onClick}) => {
    const {isDeleted, isPinned} = note;

    return (
        <Container className={`text-secondary cursor-pointer`}>
            {isDeleted ? '' : (
                <span
                    title={isPinned ? 'Unpin note' : 'Pin note'}
                    onClick={onClick}>
                    <FontAwesomeIcon icon={isPinned ? faBookmarked : faBookmark}/>
                </span>
            )}
        </Container>
    );
};

Pin.propTypes = {
    note: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pin;
