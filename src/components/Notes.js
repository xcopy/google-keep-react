import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import './Notes.scss';

class Notes extends Component {
    render() {
        const {notes, deleteNote, archiveNote} = this.props;

        return (
            notes.length ? (
                <Row>
                    {notes.map(note =>
                        <Col xl="3" lg="4" md="6" sm="6" key={note.id}>
                            <Note {...note} {...{deleteNote, archiveNote}}/>
                        </Col>
                    )}
                </Row>
            ) : (
                <div className="text-center text-muted mt-5">
                    <FontAwesomeIcon icon={faLightbulb} size="6x"/>
                    <h4 className="mt-3 mb-0">Your notes appear here</h4>
                </div>
            )
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array
};

export default Notes;
