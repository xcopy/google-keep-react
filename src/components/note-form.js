import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/note-actions';
import {Button, Form, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import faker from 'faker';
import _ from 'lodash';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

const Textarea = styled.textarea`
    width: 100%;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    resize: none;
    overflow-y: auto;
    max-height: 350px;
    line-height: 1.5;
    font-weight: 400;
`;

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
        const textarea = e.target;

        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        this.setState(prevState => {
            const {note} = {...prevState};

            note[textarea.name] = textarea.value;

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
            note.content = faker.lorem.paragraph();

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
            <Form onSubmit={this.handleSubmit}>
                <Modal.Dialog>
                    <Modal.Header
                        className={`border-bottom-0 p-2 ${expanded || 'd-none'}`}>
                        <Textarea
                            className="h5"
                            name="title"
                            rows="1"
                            placeholder="Title"
                            value={note.title}
                            onChange={this.handleChange}/>
                        <Button variant="link" className="text-secondary p-1"
                            onClick={this.pinNote}>
                            <FontAwesomeIcon icon={note.isPinned ? faBookmarked : faBookmark}/>
                        </Button>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <Textarea
                            className={expanded || 'd-none'}
                            name="content"
                            rows="1"
                            placeholder="Take a note..."
                            value={note.content}
                            onChange={this.handleChange}/>
                        <div className={`text-muted cursor-pointer ${expanded && 'd-none'}`}
                            onClick={() => this.toggleForm()}>
                            Take a note&hellip;
                        </div>
                    </Modal.Body>
                    <Modal.Footer
                        className={`border-top-0 p-2 ${expanded || 'd-none'}`}>
                        <Button type="button" variant="link" onClick={this.setFakeData}>Fake</Button>
                        <Button type="submit" variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Form>
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
