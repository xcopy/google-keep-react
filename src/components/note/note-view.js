import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Card} from 'react-bootstrap';

import NoteHeader from '../note-header';
import NoteBody from '../note-body';
import NoteFooter from '../note-footer';

import './note.scss';

class NoteView extends Component {
    render() {
        const {
            id, title, content, created_at,
            isDeleted, isArchived, isPinned,
            deleteNote, archiveNote, deleteNoteForever, pinNote
        } = this.props;

        return (
            <Card className="mb-3">
                <NoteHeader {...{
                    id, created_at,
                    isDeleted, isArchived, isPinned,
                    pinNote}}/>
                <NoteBody {...{title, content}}/>
                <NoteFooter {...{
                    id,
                    isDeleted, isArchived,
                    deleteNote, archiveNote, deleteNoteForever}}/>
            </Card>
        );
    }
}

NoteView.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    isDeleted: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    pinNote: PropTypes.func.isRequired
};

export default NoteView;
