import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import 'moment-timezone';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

const NoteHeader = ({id, created_at, isDeleted, isArchived, isPinned, pinNote}) => {
    return (
        <div className="mb-3 d-flex justify-content-between">
            <Moment fromNow className="small text-muted">{created_at}</Moment>
            {isDeleted || (
                <span className="text-secondary cursor-pointer"
                    title={isPinned ? 'Unpin note' : 'Pin note'}
                    onClick={() => pinNote(id, !isPinned)}>
                    <FontAwesomeIcon icon={isPinned ? faBookmarked : faBookmark}/>
                </span>
            )}
        </div>
    );
};

NoteHeader.propTypes = {
    id: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    isDeleted: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
    pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
