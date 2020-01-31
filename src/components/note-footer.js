import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'react-bootstrap';
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
        <Card.Footer className="text-right">
            {isDeleted || (
                <Button variant="link" className="text-secondary py-0"
                    title={isActive ? 'Archive' : 'Unarchive'}
                    onClick={() => archiveNote(id, isArchived)}>
                    <FontAwesomeIcon icon={isActive ? faCaretSquareDown : faCaretSquareUp}/>
                </Button>
            )}
            {isDeleted && (
                <Button variant="link" className="text-secondary py-0"
                    title="Delete forever"
                    onClick={() => deleteNoteForever(id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            )}
            <Button variant="link" className="text-secondary py-0 pr-0"
                title={isDeleted ? 'Restore' : 'Delete'}
                onClick={() => deleteNote(id, isDeleted)}>
                <FontAwesomeIcon icon={isDeleted ? faTrashRestore : faTrash}/>
            </Button>
        </Card.Footer>
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
