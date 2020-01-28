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

const NoteFooter = ({id, deleteNote, archiveNote}) => {
    return (
        <Card.Footer className="text-right">
            <Button variant="link" size="sm" className="text-secondary" title="Archive"
                onClick={() => archiveNote(id)}>
                <FontAwesomeIcon icon={faCaretSquareDown}/>
            </Button>
            <Button variant="link" size="sm" className="text-secondary" title="Delete"
                onClick={() => deleteNote(id)}>
                <FontAwesomeIcon icon={faTrash}/>
            </Button>
        </Card.Footer>
    );
};

NoteFooter.propTypes = {
    id: PropTypes.string.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired
};

export default NoteFooter;
