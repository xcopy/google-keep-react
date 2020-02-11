import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import NoteFooter from './note-footer';

class Note extends Component {
    render() {
        const {
            note,
            deleteNote, archiveNote, deleteNoteForever, pinNote,
            layout, onClick
        } = this.props;

        return (
            <Card className="mb-3">
                <Card.Body>
                    <NoteHeader {...{note, layout, pinNote}}/>
                    <div className="cursor-pointer" onClick={onClick}>
                        <NoteBody {...{note, layout}}/>
                    </div>
                    <NoteFooter {...{note, deleteNote, archiveNote, deleteNoteForever}}/>
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
