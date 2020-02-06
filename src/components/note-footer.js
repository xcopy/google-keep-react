import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCaretSquareDown,
    faCaretSquareUp,
    faTrash,
    faTrashRestore,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

const NoteFooter = ({id, isDeleted, isArchived, deleteNote, archiveNote, deleteNoteForever}) => {
    const isActive = !isDeleted && !isArchived;

    return (
        <div className="text-right">
            {isDeleted || (
                <span className="text-secondary cursor-pointer"
                    title={isActive ? 'Archive' : 'Unarchive'}
                    onClick={() => archiveNote(id, isArchived)}>
                    <FontAwesomeIcon icon={isActive ? faCaretSquareDown : faCaretSquareUp}/>
                </span>
            )}
            {isDeleted && (
                <span className="text-secondary cursor-pointer"
                    title="Delete forever"
                    onClick={() => deleteNoteForever(id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </span>
            )}
            <span className="text-secondary cursor-pointer pl-3"
                title={isDeleted ? 'Restore' : 'Delete'}
                onClick={() => deleteNote(id, isDeleted)}>
                <FontAwesomeIcon icon={isDeleted ? faTrashRestore : faTrash}/>
            </span>
        </div>
    );
};

NoteFooter.propTypes = {
    id: PropTypes.string.isRequired,
    isDeleted: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired
};

export default NoteFooter;
