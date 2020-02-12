import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';
import Pin from './pin';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCaretSquareDown,
    faCaretSquareUp,
    faTimesCircle,
    faTrash,
    faTrashRestore
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const LinkSpan = styled.span`
    cursor: pointer;
    padding-right: 20px;
`;

class Note extends Component {
    render() {
        const {
            note,
            deleteNote, archiveNote, deleteNoteForever, pinNote,
            layout, onClick
        } = this.props;

        const {id, title, content, created_at, isPinned, isDeleted, isArchived} = note;

        const isActive = !isDeleted && !isArchived;

        return (
            <Card className="mb-3">
                <Card.Body>
                    <Pin note={note} onClick={() => pinNote(note, !isPinned)}/>

                    <div className="cursor-pointer" onClick={onClick}>
                        {title || content ? (
                            <>
                                {title && (
                                    <h5 className="mb-3">
                                        <Truncate lines={layout === Layouts.GRID ? 2 : 0}>
                                            {title}
                                        </Truncate>
                                    </h5>
                                )}

                                {content && (
                                    <div className="mb-3">
                                        <Truncate lines={layout === Layouts.GRID ? 7 : 0}>
                                            {content}
                                        </Truncate>
                                    </div>
                                )}
                            </>
                        ) : (
                            <h4 className="text-muted mb-3">Empty note</h4>
                        )}
                    </div>

                    <div className="mb-3 text-muted small">
                        {isDeleted ? 'Note in Trash' : (
                            <>
                                Created <Moment fromNow>{created_at}</Moment>
                            </>
                        )}
                    </div>

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
                </Card.Body>
            </Card>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired,

    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    pinNote: PropTypes.func.isRequired,

    layout: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Note;
