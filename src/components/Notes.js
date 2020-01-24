import React, {Component} from 'react';
import Note from './Note';
import {Row, Col, Button, Modal, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';
import faker from 'faker';

const initialState = {
    modalShown: false,
    formValidated: false,
    note: {
        title: '',
        content: ''
    }
};

class Notes extends Component {
    constructor(props) {
        super(props);

        const notes = JSON.parse(localStorage.getItem('notes'));

        this.state = {
            notes: notes || [],
            ...initialState
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFaker = this.handleFaker.bind(this);
    }

    showModal() {
        this.setState({
            modalShown: true
        });
    }

    hideModal() {
        this.setState({
            modalShown: false,
            formValidated: false
        });
    }

    handleChange(e) {
        e.persist();

        this.setState(state => {
            let note = Object.assign({}, state.note);

            note[e.target.name] = e.target.value;

            return {note};
        });
    }

    handleSubmit(e) {
        const form = e.currentTarget;

        e.preventDefault();

        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            this.setState(state => {
                let notes = [state.note, ...state.notes];

                localStorage.setItem('notes', JSON.stringify(notes));

                return {
                    notes: notes,
                    ...initialState
                };
            });
        }

        this.setState({
            formValidated: true
        });
    }

    handleFaker(e) {
        e.preventDefault();

        this.setState({
            note: {
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraph()
            }
        });
    }

    render() {
        const {notes, modalShown, formValidated, note} = this.state;
        const template = notes.map((note, i) =>
            <Col lg={3} key={i.toString()}>
                <Note note={note}/>
            </Col>
        );

        return (
            <div className="my-5">
                {notes.length ? (
                    <Row>
                        {template}
                    </Row>
                ) : (
                    <div className="text-black-50 text-center">
                        <FontAwesomeIcon icon={faLightbulb} size="6x"/>
                        <h3 className="m-3">Notes you add appear here</h3>
                        <Button variant="outline-secondary" onClick={this.showModal}>Add new one</Button>
                    </div>
                )}

                <Modal show={modalShown} centered onHide={this.hideModal}>
                    <Modal.Header>
                        <Modal.Title>Take a note</Modal.Title>
                    </Modal.Header>
                    <Form noValidate validated={formValidated} onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="note-title">
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={note.title}
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="note-content">
                                <Form.Control
                                    as="textarea"
                                    name="content"
                                    rows="3"
                                    placeholder="Content"
                                    value={note.content}
                                    onChange={this.handleChange}
                                    required/>
                            </Form.Group>
                            <Button variant="link" className="p-0" onClick={this.handleFaker}>Fake it!</Button>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.hideModal}>Cancel</Button>
                            <Button variant="primary" type="submit">Save</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Notes;
