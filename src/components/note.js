import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Card, Popover, OverlayTrigger} from 'react-bootstrap';
import Truncate from 'react-truncate';
import {Layouts} from '../actions/layout-actions';
import Pin from './pin';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCaretSquareDown,
    faCaretSquareUp,
    faCheck,
    faPalette,
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
    changeTheme(theme) {
        const {note, updateNote} = this.props;

        note.theme = theme;

        updateNote(note);
    }

    render() {
        const {
            note,
            deleteNote, archiveNote, deleteNoteForever, pinNote,
            layout, onClick
        } = this.props;

        const {
            id, title, content, createdAt,
            isPinned, isDeleted, isArchived,
            theme
        } = note;

        const isActive = !isDeleted && !isArchived;

        const themes = [
            ['default', 'red', 'orange', 'yellow'],
            ['green', 'teal', 'blue','dark-blue'],
            ['purple', 'pink', 'brown', 'gray']
        ];

        const popover = (
            <Popover id="popover-themes">
                <Popover.Content>
                    {themes.map((row, i) =>
                        <Row key={i} noGutters>
                            {row.map((t, k) =>
                                <Col key={k}>
                                    <div className={`theme ${t}`} onClick={() => this.changeTheme(t)}>
                                        {theme && theme === t ? <FontAwesomeIcon icon={faCheck}/> : ''}
                                    </div>
                                </Col>
                            )}
                        </Row>
                    )}
                </Popover.Content>
            </Popover>
        );

        return (
            <Card className={`mb-3 note ${theme}`}>
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
                                Created <Moment fromNow>{createdAt}</Moment>
                            </>
                        )}
                    </div>

                    <div className="text-secondary d-inline-block">
                        {isDeleted || (
                            <>
                                <OverlayTrigger
                                    trigger="click"
                                    placement="top"
                                    rootClose={true}
                                    overlay={popover}>
                                    <LinkSpan
                                        title="Change color">
                                        <FontAwesomeIcon icon={faPalette}/>
                                    </LinkSpan>
                                </OverlayTrigger>

                                <LinkSpan
                                    title={isActive ? 'Archive' : 'Unarchive'}
                                    onClick={() => archiveNote(id, isArchived)}>
                                    <FontAwesomeIcon icon={isActive ? faCaretSquareDown : faCaretSquareUp}/>
                                </LinkSpan>
                            </>
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

    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    pinNote: PropTypes.func.isRequired,

    layout: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Note;
