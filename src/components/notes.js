import React, {Component} from 'react';
import {connect} from 'react-redux';
import Note from './note';
import FilterLink from './filter-link';
import {Filters} from '../actions/filter-actions';
import {Layouts} from '../actions/layout-actions';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {
    getNotes,
    archiveNote,
    deleteNote,
    deleteNoteForever,
    pinNote} from '../actions/note-actions';
import FilterIcon from './filter-icon';
import NoteForm from './note-form';

/**
 * @param {[]} notes
 * @param {string} filter
 * @returns {[]}
 */
const filterNotes = (notes, filter) => {
    switch (filter) {
        case Filters.ACTIVE:
            return notes.filter(note => !note.isDeleted && !note.isArchived);
        case Filters.ARCHIVED:
            return notes.filter(note => note.isArchived);
        case Filters.DELETED:
            return notes.filter(note => note.isDeleted);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

class Notes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pinnedNotes: [],
            otherNotes: []
        };

        this.emptyTrash = this.emptyTrash.bind(this);
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

    emptyTrash() {
        const {notes, deleteNoteForever} = this.props;
        deleteNoteForever(notes.map(({id}) => id));
    }

    render() {
        const {
            notes, filter, layout,
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
                            <Note
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

        const {pinnedNotes, otherNotes} = this.state;

        return (
            <Container fluid>
                <Row>
                    <Col xl={2}>
                        <ul className="my-2 my-xl-0 list-unstyled text-muted d-flex flex-sm-row flex-xl-column justify-content-center">
                            <FilterLink filter={Filters.ACTIVE}>Notes</FilterLink>
                            <FilterLink filter={Filters.ARCHIVED}>Archive</FilterLink>
                            <FilterLink filter={Filters.DELETED}>Trash</FilterLink>
                        </ul>
                    </Col>
                    <Col>
                        {filter === Filters.ACTIVE && <NoteForm/>}

                        {filter === Filters.DELETED && (
                            <div className="m-5 text-center">
                                <em className="p-2">Notes in Trash are deleted after 7 days.</em>
                                {notes.length ? (
                                    <Button variant="outline-info" size="sm" onClick={this.emptyTrash}>
                                        Empty Trash
                                    </Button>
                                ) : ''}
                            </div>
                        )}

                        {notes.length ? (
                            pinnedNotes.length ? (
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
                            )
                        ) : (
                            <div className="text-center text-muted m-5">
                                <FilterIcon filter={filter} size="6x"/>
                                <h4 className="mt-3 mb-0">{{
                                    [Filters.ACTIVE]: 'Your notes appear here',
                                    [Filters.ARCHIVED]: 'Your archived notes appear here',
                                    [Filters.DELETED]: 'No notes in Trash'
                                }[filter]}</h4>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const {filter, notes, layout} = state;

    return {
        notes: filterNotes(notes, filter),
        filter,
        layout
    };
};

const mapDispatchToProps = {
    getNotes,
    deleteNote,
    archiveNote,
    deleteNoteForever,
    pinNote
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes);
