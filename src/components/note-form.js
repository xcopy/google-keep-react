import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Button, Modal, Form} from 'react-bootstrap';
import faker from 'faker';
import _ from 'lodash';
import styled from 'styled-components';
import Pin from './pin';

const ModalHeader = styled.div`
    max-height: 200px;
    overflow-y: auto;
`;

const ModalBody = styled(ModalHeader)`
    max-height: 350px;
`;

const Textarea = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
`;

const initialState = {
    note: {
        title: '',
        content: '',
        isPinned: false
    },
    expanded: false
};

const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
});

const inputEventListener = (e) => {
    const element = e.target;

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
};

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = _.cloneDeep(initialState);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const {note, expanded} = this.props;

        this.inputs = [
            ...ReactDOM.findDOMNode(this).getElementsByTagName('textarea')
        ];

        this.inputs.forEach(input => {
            input.addEventListener('input', inputEventListener);
        });

        note && this.setState({
            note,
            expanded
        }, () => {
            this.inputs.forEach(input => {
                input.dispatchEvent(inputEvent);
            });
        });
    }

    componentWillUnmount() {
        this.inputs.forEach(input => {
            input.removeEventListener('input', inputEventListener);
        });
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
        e && e.preventDefault();

        const {note} = this.state;
        const {addNote, updateNote, onSubmit} = this.props;

        if (note.id) {
            updateNote(note);
        } else {
            (note.title || note.content) && addNote(note);
        }

        this.setState(_.cloneDeep(initialState));

        this.inputs.forEach(input => {
            input.style.removeProperty('height');
        });

        onSubmit && onSubmit();
    }

    expandForm() {
        this.setState(prevState => {
            return {
                ...prevState,
                expanded: true
            };
        });
    }

    setFakeData() {
        this.setState(prevState => {
            const {note} = {...prevState};
            const min = 1, max = 3;

            note.title = faker.lorem.sentences(faker.random.number({min, max}));
            note.content = faker.lorem.paragraphs(faker.random.number({min, max}));

            return {
                ...prevState,
                note
            };
        }, () => {
            this.inputs.forEach(input => {
                input.dispatchEvent(inputEvent);
            });
        });
    }

    render() {
        const {pinNote} = this.props;
        const {note, expanded} = this.state;
        const {title, content, isPinned} = note;

        return (
            <>
                <Form className={expanded ? '' : 'd-none'} onSubmit={this.handleSubmit}>
                    <ModalHeader className="modal-header border-bottom-0">
                        <Textarea
                            name="title"
                            rows="1"
                            placeholder="Title"
                            value={title}
                            onChange={this.handleChange}
                            className="h5"/>

                        <Pin note={note} onClick={() => pinNote(note, !isPinned)}/>
                    </ModalHeader>
                    <ModalBody className="modal-body py-0">
                        <Textarea
                            name="content"
                            rows="1"
                            placeholder="Take a note..."
                            value={content}
                            onChange={this.handleChange}/>
                    </ModalBody>
                    <Modal.Footer className="border-top-0">
                        <Button type="button" variant="link" onClick={this.setFakeData.bind(this)}>Fake it!</Button>
                        <Button type="submit" variant="secondary">Close</Button>
                    </Modal.Footer>
                </Form>

                <div className={`text-muted cursor-pointer p-3 ${expanded ? 'd-none' : ''}`}
                    onClick={this.expandForm.bind(this)}>
                    Take a note&hellip;
                </div>
            </>
        );
    }
}

NoteForm.propTypes = {
    note: PropTypes.object,
    expanded: PropTypes.bool,
    addNote: PropTypes.func.isRequired,
    updateNote: PropTypes.func,
    pinNote: PropTypes.func,
    onSubmit: PropTypes.func
};

export default NoteForm;
