import React, {Component} from 'react';
import Note from './Note';
import {Row, Col, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-regular-svg-icons';

class NoteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };
    }

    render() {
        const {notes} = this.state;
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
                        <Button variant="outline-secondary">Add new one</Button>
                    </div>
                )}
            </div>
        );
    }
}

export default NoteList;
