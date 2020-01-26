import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import {Row, Col} from 'react-bootstrap';
import './Notes.scss';

class Notes extends Component {
    render() {
        const {notes, deleteNote, archiveNote} = this.props;

        return (
            <Row>
                {notes && notes.map(note =>
                    <Col xl="3" lg="4" md="6" sm="6" key={note.id}>
                        <Note {...note} {...{deleteNote, archiveNote}}/>
                    </Col>
                )}
            </Row>
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array
};

export default Notes;
