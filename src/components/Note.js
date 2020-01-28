import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Card} from 'react-bootstrap';

import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import NoteFooter from './NoteFooter';

import './Note.scss';

class Note extends Component {
    render() {
        const {
            id, title, content, created_at,
            deleteNote, archiveNote
        } = this.props;

        return (
            <Card className="mb-3">
                <NoteHeader {...{created_at}}/>
                <NoteBody {...{title, content}}/>
                <NoteFooter {...{id, deleteNote, archiveNote}}/>
            </Card>
        );
    }
}

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    deleted_at: PropTypes.any,
    archived_at: PropTypes.any,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired
};

export default Note;
