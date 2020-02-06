import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/note-actions';
import {Button, Card, Form} from 'react-bootstrap';
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

        this.state = _.cloneDeep(initialState);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.setFakeData = this.setFakeData.bind(this);
        this.pinNote = this.pinNote.bind(this);
    }

    handleChange(e) {
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
        const {addNote} = this.props;

        (note.title || note.content) && addNote(note);

        this.setState(_.cloneDeep(initialState));

        // this.toggleForm(false);
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
            <Card className="w-50 mx-auto my-5">
                <Card.Body className={`p-${expanded ? 3 : 2}`}>
                    <Form className={expanded || 'd-none'} onSubmit={this.handleSubmit}>
                        <Form.Group className="text-right">
                            <span className="text-secondary cursor-pointer" onClick={this.pinNote}>
                                <FontAwesomeIcon icon={note.isPinned ? faBookmarked : faBookmark}/>
                            </span>
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
                </Card.Body>
            </Card>
        );
    }
}

const mapDispatchToProps = {
    addNote
};

export default connect(
    null,
    mapDispatchToProps
)(NoteForm);
