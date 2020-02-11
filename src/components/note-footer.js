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
import styled from 'styled-components';

const LinkSpan = styled.span`
    cursor: pointer;
    padding-right: 20px;
`;

const NoteFooter = ({note, deleteNote, archiveNote, deleteNoteForever}) => {
    const {id, isDeleted, isArchived} = note;
    const isActive = !isDeleted && !isArchived;

    return (
        <div className="text-secondary d-inline-block">
            {isDeleted || (
                <LinkSpan
                    title={isActive ? 'Archive' : 'Unarchive'}
                    onClick={() => archiveNote(id, isArchived)}>
                    <FontAwesomeIcon icon={isActive ? faCaretSquareDown : faCaretSquareUp}/>
                </LinkSpan>
            )}

            {isDeleted && (
                <LinkSpan
                    title="Delete forever"
                    onClick={() => deleteNoteForever(id)}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </LinkSpan>
            )}

            <LinkSpan
                title={isDeleted ? 'Restore' : 'Delete'}
                onClick={() => deleteNote(id, isDeleted)}>
                <FontAwesomeIcon icon={isDeleted ? faTrashRestore : faTrash}/>
            </LinkSpan>
        </div>
    );
};

NoteFooter.propTypes = {
    note: PropTypes.object.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired
};

export default NoteFooter;
