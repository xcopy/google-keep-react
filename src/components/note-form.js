import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Button, Modal, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-regular-svg-icons';
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import faker from 'faker';
import _ from 'lodash';
import styled from 'styled-components';
import Pin from './pin';
import ListItemCheck from './list-item-check';

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
    resize: none;
    margin: 0;
    padding: 0;
    overflow-y: hidden;

    &:focus {
        outline: none;
    }
`;

const initialState = {
    note: {
        type: 'TEXT',
        title: '',
        content: '',
        isPinned: false,
        theme: 'default',
        list: []
    },
    expanded: false
};

const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
});

const inputEventListener = e => {
    const element = e.target;

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
};

const getListItem = () => ({
    id: faker.random.uuid(),
    text: '',
    isPersisted: false,
    isCompleted: false
});

class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = _.cloneDeep(initialState);

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeListItem = this.handleChangeListItem.bind(this);
        this.handleCheckListItem = this.handleCheckListItem.bind(this);
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

    handlePinNote() {
        this.setState(prevState => {
            const {note} = {...prevState};
            const {isPinned} = note;

            note.isPinned = !isPinned;

            return {
                note,
                ...prevState
            };
        });
    }

    handleChangeInput(e) {
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

    handleChangeListItem(e, id) {
        e.persist();

        this.setState(prevState => {
            const {note} = {...prevState};
            const {list} = note;
            const item = list.find(item => item.id === id);

            item.text = e.target.value.trim();
            item.isPersisted = true;

            return {
                note,
                ...prevState
            };
        });
    }

    handleCheckListItem(id) {
        this.setState(prevState => {
            const {note} = {...prevState};
            const {list} = note;
            const item = list.find(item => item.id === id);
            const {isCompleted} = item;

            item.isCompleted = !isCompleted;

            return {
                note,
                ...prevState
            };
        });
    }

    handleSubmit(e) {
        e && e.preventDefault();

        const {note} = this.state;
        const {id, title, content, list} = note;
        const {addNote, updateNote, onSubmit} = this.props;

        if (id) {
            updateNote(note);
        } else {
            (title || content || list.filter(item => item.text !== '').length > 0) && addNote(note);
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

    createList() {
        this.expandForm();

        this.setState(prevState => {
            const {note} = {...prevState};

            note.type = 'LIST';
            note.list.push(getListItem());

            return {
                note,
                ...prevState
            };
        });
    }

    setFakeData() {
        this.setState(prevState => {
            const {note} = {...prevState};
            const {type, list} = note;
            const min = 1, max = 3;

            note.title = faker.lorem.sentences(faker.random.number({min, max}));

            if (type === 'TEXT') {
                note.content = faker.lorem.paragraphs(faker.random.number({min, max}));
            } else {
                list.forEach(item => {
                    item.text = faker.lorem.sentences();
                    item.isPersisted = true;
                });
            }

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
        const {note, expanded} = this.state;
        const {type, title, content, theme, list} = note;

        return (
            <>
                <Form className={expanded ? '' : 'd-none'} onSubmit={this.handleSubmit}>
                    <ModalHeader className={`modal-header border-bottom-0 ${theme}`}>
                        <Textarea
                            name="title"
                            rows="1"
                            placeholder="Title"
                            value={title}
                            onChange={this.handleChangeInput}
                            className={`h5 ${theme}`}/>

                        <Pin note={note} onClick={this.handlePinNote.bind(this)}/>
                    </ModalHeader>

                    <ModalBody className={`modal-body py-0 ${type === 'LIST' ? 'px-0' : ''} ${theme}`}>
                        {type === 'LIST' ? (
                            <ul className="list-unstyled mb-0 border-top">
                                {list.map(({id, text, isPersisted, isCompleted}) =>
                                    <li key={id} className="d-flex justify-content-between py-1 border-bottom">
                                        <span className="ml-3 mr-2">
                                            {isPersisted ? (
                                                <ListItemCheck
                                                    isCompleted={isCompleted}
                                                    onClick={() => this.handleCheckListItem(id)}/>
                                            ) : (
                                                <FontAwesomeIcon icon={faPlus} className="text-muted"/>
                                            )}
                                        </span>

                                        <Textarea
                                            name="list[]"
                                            rows="1"
                                            placeholder={isPersisted ? '' : 'List item'}
                                            value={text}
                                            onChange={(e) => this.handleChangeListItem(e, id)}
                                            className={`${theme} ${isCompleted ? 'list-item-completed' : ''}`}/>

                                        {isPersisted ? (
                                            <span
                                                className="mr-3 ml-2 text-muted cursor-pointer"
                                                onClick={() => {}}>
                                                <FontAwesomeIcon icon={faTimes}/>
                                            </span>
                                        ) : ''}
                                    </li>
                                )}
                            </ul>
                        ) : (
                            <Textarea
                                name="content"
                                rows="1"
                                placeholder="Take a note..."
                                value={content}
                                onChange={this.handleChangeInput}
                                className={theme}/>
                        )}
                    </ModalBody>

                    <Modal.Footer className={`border-top-0 ${theme}`}>
                        <Button type="button" variant="link" onClick={this.setFakeData.bind(this)}>Fake it!</Button>
                        <Button type="submit" variant="secondary">Close</Button>
                    </Modal.Footer>
                </Form>

                <div className={`text-muted p-3 ${expanded ? 'd-none' : 'd-flex justify-content-between'}`}>
                    <span className="cursor-pointer"
                        onClick={this.expandForm.bind(this)}>
                        Take a note&hellip;
                    </span>

                    <span title="New list"
                        className="cursor-pointer"
                        onClick={this.createList.bind(this)}>
                        <FontAwesomeIcon icon={faCheckSquare}/>
                    </span>
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
    onSubmit: PropTypes.func
};

export default NoteForm;
