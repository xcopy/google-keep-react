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
            deleteNote, archiveNote, deleteNoteForever,
            filter
        } = this.props;

        return (
            <Card className="mb-3">
                <NoteHeader {...{created_at, filter}}/>
                <NoteBody {...{title, content}}/>
                <NoteFooter {...{id, deleteNote, archiveNote, deleteNoteForever, filter}}/>
            </Card>
        );
    }
}

NoteView.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    deleted_at: PropTypes.any,
    archived_at: PropTypes.any,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default NoteView;
