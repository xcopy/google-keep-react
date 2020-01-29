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
    constructor(props) {
        super(props);

        this.state = {
            pinnedNotes: [],
            otherNotes: []
        };
    }

    componentDidMount() {
        const {getNotes} = this.props;
        getNotes();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {notes} = this.props;

        if (notes !== prevProps.notes) {
            this.setState({
                pinnedNotes: [...notes.filter(note => note.isPinned)],
                otherNotes: [...notes.filter(note => !note.isPinned)]
            });
        }
    }

    render() {
        const {
            notes, filter,
            deleteNote, archiveNote, deleteNoteForever, pinNote
        } = this.props;

        const row = (notes) => {
            return (
                <Row>
                    {notes.map(note =>
                        <Col xl="3" lg="4" md="6" sm="6" key={note.id}>
                            <NoteView
                                {...note}
                                {...{deleteNote, archiveNote, deleteNoteForever, pinNote}}/>
                        </Col>
                    )}
                </Row>
            );
        };

        const rowTitle = (title) => {
            return <div className="small text-uppercase font-weight-bold text-secondary my-1">{title}</div>;
        };

        const {pinnedNotes, otherNotes} = this.state;

        return (
            notes.length ? (
                <>
                    {pinnedNotes.length ? (
                        <>
                            {rowTitle('Pinned')}
                            {row(pinnedNotes)}

                            {otherNotes.length && (
                                <>
                                    {rowTitle('Others')}
                                    {row(otherNotes)}
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {row(notes)}
                        </>
                    )}
                </>
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
    pinNote: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};

export default NotesView;
