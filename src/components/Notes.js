import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import {Filters} from '../actions/FilterActions';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';
import './Notes.scss';

class Notes extends Component {
    render() {
        const {notes, filter, deleteNote, archiveNote} = this.props;
        let icons = {};

        icons[Filters.ACTIVE] = faLightbulb;
        icons[Filters.ARCHIVED] = faArchive;
        icons[Filters.DELETED] = faTrash;

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
                    <FontAwesomeIcon icon={icons[filter]} size="6x"/>
                    <h4 className="mt-3 mb-0">
                        {(() => {
                            switch (filter) {
                                case Filters.ACTIVE:
                                    return 'Your notes appear here';
                                case Filters.ARCHIVED:
                                    return 'Your archived notes appear here';
                                case Filters.DELETED:
                                    return 'No notes in Trash';
                                default:
                                    return null;
                            }
                        })()}
                    </h4>
                </div>
            )
        );
    }
}

Notes.propTypes = {
    notes: PropTypes.array
};

export default Notes;
