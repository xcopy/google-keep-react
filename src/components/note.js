import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import NoteFooter from './note-footer';

class Note extends Component {
    /* todo
    componentDidMount() {
        this.container.setAttribute('style', `height: ${this.container.offsetWidth}px`);
    }
    */

    render() {
        const {
            id, title, content, created_at,
            isDeleted, isArchived, isPinned,
            deleteNote, archiveNote, deleteNoteForever, pinNote,
            layout, onClick
        } = this.props;

        return (
            <Card className="mb-3"/*ref={el => (this.container = el)}*/>
                <Card.Body>
                    <NoteHeader {...{
                        id, created_at,
                        isDeleted, isArchived, isPinned,
                        pinNote}}/>
                    <div onClick={onClick}>
                        <NoteBody {...{title, content, layout}}/>
                    </div>
                    <NoteFooter {...{
                        id,
                        isDeleted, isArchived,
                        deleteNote, archiveNote, deleteNoteForever}}/>
                </Card.Body>
            </Card>
        );
    }
}

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string.isRequired,

    isDeleted: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,

    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    pinNote: PropTypes.func.isRequired,

    layout: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Note;
