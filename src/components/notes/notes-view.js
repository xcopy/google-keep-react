import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilterLinks from '../filter-links';
import NoteView from '../note/note-view';
import {Layouts} from '../../actions/layout-actions';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';
import './notes.scss';

const filters = {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
    DELETED: 'DELETED'
};

const links = {
    [filters.ACTIVE]: 'Notes',
    [filters.ARCHIVED]: 'Archive',
    [filters.DELETED]: 'Trash'
};

const icons = {
    [filters.ACTIVE]: faLightbulb,
    [filters.ARCHIVED]: faArchive,
    [filters.DELETED]: faTrash
};

/**
 * @param {[]} notes
 * @param {string} filter
 * @returns {[]}
 */
const filterNotes = (notes, filter) => {
    switch (filter) {
        case filters.ACTIVE:
            return notes.filter(note => !note.isDeleted && !note.isArchived);
        case filters.ARCHIVED:
            return notes.filter(note => note.isArchived);
        case filters.DELETED:
            return notes.filter(note => note.isDeleted);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

class NotesView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: filters.ACTIVE,
            pinnedNotes: [],
            otherNotes: []
        };

        this.setFilter = this.setFilter.bind(this);
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

    setFilter(filter) {
        this.setState({
            filter
        });
    }

    render() {
        const {
            layout,
            deleteNote, archiveNote, deleteNoteForever, pinNote
        } = this.props;

        const row = (notes) => {
            const isGrid = layout === Layouts.GRID;
            const xl = {
                span: isGrid ? 3 : 8,
                offset: isGrid ? 0 : 2
            }, lg = {
                span: isGrid ? 4 : xl.span,
                offset: xl.offset
            }, md = {
                span: isGrid ? 6 : xl.span,
                offset: xl.offset
            }, sm = {
                span: isGrid ? 6 : 12,
                offset: 0
            };

            return (
                <Row>
                    {notes.map(note =>
                        <Col xl={xl} lg={lg} md={md} sm={sm} key={note.id}>
                            <NoteView
                                {...note}
                                {...{deleteNote, archiveNote, deleteNoteForever, pinNote}}
                                layout={layout}/>
                        </Col>
                    )}
                </Row>
            );
        };

        const rowTitle = (title) => {
            return <div className="small text-uppercase font-weight-bold text-secondary my-1">{title}</div>;
        };

        const {filter, pinnedNotes, otherNotes} = this.state;

        const notes = filterNotes(this.props.notes, filter);

        return (
            <>
                <FilterLinks links={links} filter={filter} onClick={this.setFilter}/>

                {notes.length ? (
                    <Container>
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
                    </Container>
                ) : (
                    <div className="text-center text-muted mt-5">
                        <FontAwesomeIcon icon={icons[filter]} size="6x"/>
                        <h4 className="mt-3 mb-0">
                            {(() => {
                                switch (filter) {
                                    case filters.ACTIVE:
                                        return 'Your notes appear here';
                                    case filters.ARCHIVED:
                                        return 'Your archived notes appear here';
                                    case filters.DELETED:
                                        return 'No notes in Trash';
                                    default:
                                        return null;
                                }
                            })()}
                        </h4>
                    </div>
                )}
            </>
        );
    }
}

NotesView.propTypes = {
    notes: PropTypes.array,
    layout: PropTypes.string.isRequired,
    getNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    deleteNoteForever: PropTypes.func.isRequired,
    pinNote: PropTypes.func.isRequired
};

export default NotesView;
