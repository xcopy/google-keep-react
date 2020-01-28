import React, {useRef, useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import faker from 'faker';

const NoteFormView = ({addNote}) => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const titleInput = useRef(null);
    const contentInput = useRef(null);

    const handleClose = () => {
        setShow(false);
        setValidated(false);
    };

    const handleShow = () => {
        setShow(true);
        setValidated(false);
    };

    const handleSubmit = e => {
        e.persist();
        e.preventDefault();

        const form = e.currentTarget;

        if (!form.checkValidity()) {
            e.stopPropagation();
        } else {
            addNote({
                title: titleInput.current.value,
                content: contentInput.current.value
            });

            setShow(false);
        }

        setValidated(true);
    };

    const handleFaker = e => {
        e.preventDefault();

        titleInput.current.value = faker.lorem.sentence();
        contentInput.current.value = faker.lorem.paragraph();
    };

    return (
        <>
            <Modal show={show} centered backdrop="static">
                <Modal.Header>
                    <Modal.Title>Take a note</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="note-title">
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Title"
                                ref={titleInput}
                                required/>
                        </Form.Group>
                        <Form.Group controlId="note-content">
                            <Form.Control
                                as="textarea"
                                name="content"
                                rows="3"
                                placeholder="Content"
                                ref={contentInput}
                                required/>
                        </Form.Group>
                        <Button variant="link" className="p-0" onClick={handleFaker}>Fake it!</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button variant="primary" type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Button variant="outline-primary" size="lg" onClick={handleShow}>Add note</Button>
        </>
    );
};

export default NoteFormView;
