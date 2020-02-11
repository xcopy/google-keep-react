import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';
import {Layouts} from '../actions/layout-actions';

const NoteHeader = ({note, layout, pinNote}) => {
    const {id, title, isDeleted, isPinned} = note;

    return (
        <div className="d-flex align-items-start justify-content-between">
            <div className="mb-3 h5">
                <Truncate lines={layout === Layouts.GRID ? 2 : 0}>{title}</Truncate>
            </div>

            {isDeleted ? '' : (
                <span className="text-secondary cursor-pointer float-right pl-2"
                    title={isPinned ? 'Unpin note' : 'Pin note'}
                    onClick={() => pinNote(id, !isPinned)}>
                    <FontAwesomeIcon icon={isPinned ? faBookmarked : faBookmark}/>
                </span>
            )}
        </div>
    );
};

NoteHeader.propTypes = {
    note: PropTypes.object.isRequired,
    layout: PropTypes.string.isRequired,
    pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
