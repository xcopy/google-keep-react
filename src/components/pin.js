import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

const Pin = ({note, onClick}) => {
    const {isDeleted, isPinned} = note;

    return (
        <div className={`text-secondary cursor-pointer float-right pl-${isDeleted ? 0 : 2}`}>
            {isDeleted ? '' : (
                <span
                    title={isPinned ? 'Unpin note' : 'Pin note'}
                    onClick={onClick}>
                    <FontAwesomeIcon icon={isPinned ? faBookmarked : faBookmark}/>
                </span>
            )}
        </div>
    );
};

Pin.propTypes = {
    note: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Pin;
