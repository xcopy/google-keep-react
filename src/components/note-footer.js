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

import {Filters} from '../actions/filter-actions';

const NoteFooter = ({id, deleteNote, archiveNote, deleteNoteForever, filter}) => {
    const active = filter === Filters.ACTIVE,
        archived = filter === Filters.ARCHIVED,
        deleted = filter === Filters.DELETED;

    return (
        <Card.Footer className="text-right p-2">
            {deleted || (
                <Button variant="link" className="text-secondary"
                    title={active ? 'Archive' : 'Unarchive'}
                    onClick={() => archiveNote(id, archived)}>
                    <FontAwesomeIcon icon={active ? faCaretSquareDown : faCaretSquareUp}/>
                </Button>
            )}
            {deleted && (
                <Button variant="link" className="text-secondary"
                    title="Delete forever"
                    onClick={() => deleteNoteForever(id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            )}
            <Button variant="link" className="text-secondary"
                title={deleted ? 'Restore' : 'Delete'}
                onClick={() => deleteNote(id, deleted)}>
                <FontAwesomeIcon icon={deleted ? faTrashRestore : faTrash}/>
            </Button>
        </Card.Footer>
    );
};

NoteFooter.propTypes = {
    id: PropTypes.string.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default NoteFooter;
