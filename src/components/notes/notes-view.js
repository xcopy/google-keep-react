import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NoteView from '../note/note-view';
import {Filters} from '../../actions/filter-actions';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';
import './notes.scss';

class NotesView extends Component {
    render() {
        const {
            notes, filter,
            deleteNote, archiveNote, deleteNoteForever
        } = this.props;

        return (
            notes.length ? (
                <Row>
                    {notes.map(note =>
                        <Col xl="3" lg="4" md="6" sm="6" key={note.id}>
                            <NoteView
                                {...note}
                                {...{deleteNote, archiveNote, deleteNoteForever}}
                                filter={filter}/>
                        </Col>
                    )}
                </Row>
            ) : (
                <div className="text-center text-muted mt-5">
                    <FontAwesomeIcon icon={{
                        [Filters.ACTIVE]: faLightbulb,
                        [Filters.ARCHIVED]: faArchive,
                        [Filters.DELETED]: faTrash
                    }[filter]} size="6x"/>
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

NotesView.propTypes = {
    notes: PropTypes.array,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default NotesView;
