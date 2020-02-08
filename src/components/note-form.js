import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, Form} from 'react-bootstrap';
import faker from 'faker';
import _ from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

const initialState = {
    note: {
        title: '',
        content: '',
        isPinned: false
    },
    expanded: false
};

class NoteForm extends Component {
    constructor(props) {
        super(props);

        const {note, expanded} = props;

        this.state = note
            ? {...{note, expanded}}
            : _.cloneDeep(initialState);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.setFakeData = this.setFakeData.bind(this);
        this.pinNote = this.pinNote.bind(this);
    }

    handleChange(e) {
        e.persist();

        this.setState(prevState => {
            const {note} = {...prevState};

            note[e.target.name] = e.target.value;

            return {
                note,
                ...prevState
            };
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const {note} = this.state;
        const {addNote, updateNote, onSubmit} = this.props;

        if (note.id) {
            updateNote(note);
        } else {
            (note.title || note.content) && addNote(note);
        }

        this.setState(_.cloneDeep(initialState));

        onSubmit && onSubmit();
    }

    toggleForm(toggle = true) {
        this.setState(prevState => {
            return {
                ...prevState,
                expanded: toggle
            };
        });
    }

    setFakeData() {
        this.setState(prevState => {
            const {note} = {...prevState};

            note.title = faker.lorem.sentence();
            note.content = faker.lorem.paragraphs(faker.random.number({min: 1, max: 3}));

            return {
                ...prevState,
                note
            };
        });
    }

    pinNote() {
        this.setState(prevState => {
            const {note} = {...prevState};

            note.isPinned = !note.isPinned;

            return {
                ...prevState,
                note
            };
        });
    }

    render() {
        const {note, expanded} = this.state;

        return (
            <Modal.Body className={`p-${expanded ? 3 : 2}`}>
                <Form className={expanded || 'd-none'} onSubmit={this.handleSubmit}>
                    <Form.Group className="text-right">
                        {note.isDeleted ? (
                            <small className="text-muted">Note in Trash</small>
                        ) : (
                            <span className="text-secondary cursor-pointer" onClick={this.pinNote}>
                                <FontAwesomeIcon icon={note.isPinned ? faBookmarked : faBookmark}/>
                            </span>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={note.title}
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as="textarea"
                            name="content"
                            rows="4"
                            placeholder="Take a note..."
                            value={note.content}
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-0 d-flex justify-content-between">
                        <span className="px-0 py-2 cursor-pointer" onClick={this.setFakeData}>Fake it!</span>
                        <Button type="submit" variant="secondary">Close</Button>
                    </Form.Group>
                </Form>
                <div className={`text-muted cursor-pointer ${expanded && 'd-none'}`}
                    onClick={() => this.toggleForm()}>
                    Take a note&hellip;
                </div>
            </Modal.Body>
        );
    }
}

NoteForm.propTypes = {
    note: PropTypes.object,
    expanded: PropTypes.bool,
    addNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func,
    onSubmit: PropTypes.func
};

export default NoteForm;
