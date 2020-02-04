import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import styled from 'styled-components';
import faker from 'faker';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faBookmark} from '@fortawesome/free-regular-svg-icons';

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
        content: ''
    },
    expanded: false
};

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleFaker = this.handleFaker.bind(this);
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

        this.toggleForm(false);

        this.setState(initialState);
    }

    toggleForm(toggle = true) {
        this.setState(prevState => {
            return {
                ...prevState,
                expanded: toggle
            };
        });
    }

    handleFaker() {
        this.setState(prevState => {
            return {
                ...prevState,
                note: {
                    title: faker.lorem.sentence(),
                    content: faker.lorem.paragraph()
                }
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
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <Textarea
                            ref={el => el && el.focus()}
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
                        <Button type="button" variant="link" onClick={this.handleFaker}>Fake</Button>
                        <Button type="submit" variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Form>
        );
    }
}

export default NoteForm;
